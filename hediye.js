// URL'den gelen tertemiz hediye verisini alıyoruz
const urlParams = new URLSearchParams(window.location.search);
const giftDataEncoded = urlParams.get('gift');

if (giftDataEncoded) {
    // Eğer linkte hediye verisi varsa, eski localStorage kalıntılarını TEMİZLİYORUZ!
    // Böylece cihazda daha önceden kalan eski fotoğraflar asla kafayı karıştırmaz.
    localStorage.removeItem('currentGiftData'); // (Projendeki localStorage anahtar adı neyse)
}

const boxImages = {
    Default: 'Hediye Kutuları/Default.png',
    Halloween: 'Hediye Kutuları/Halloween Temalı Kutu.png',
    Havali: 'Hediye Kutuları/Havalı Kutu.png',
    Resmi: 'Hediye Kutuları/Resmi Kutu.png',
    Yilbasi: 'Hediye Kutuları/Yılbaşı Temalı Kutu.png',
    default: 'Hediye Kutuları/Default.png'
};

const cakeImages = {
    'Antep Fıstıklı Pasta': 'Pastalar/Antep Fıstıklı Pasta.png',
    'Çikolatalı Pasta': 'Pastalar/Çikolatalı Pasta.png',
    'Çilekli Pasta': 'Pastalar/Çilekli Pasta.png',
    'Kakaolu Pasta': 'Pastalar/Kakaolu Pasta.png',
    'Karamelli Pasta': 'Pastalar/Karamelli Pasta.png',
    'Muzlu Pasta': 'Pastalar/Muzlu Pasta.png',
    'Orman Meyveli Pasta': 'Pastalar/Orman Meyveli Pasta.png',
    'Vanilyalı Pasta': 'Pastalar/Vanilyalı Pasta.png'
};

let giftData = null;
let currentStep = 0;
let effectInterval = null;
let revealQueue = [];
let revealIndex = 0;
let confettiFired = false;
let youtubeLinkToCopy = '';

function readStoredGift() {
    try {
        const raw = localStorage.getItem('giftboxLastGift');
        return raw ? JSON.parse(raw) : null;
    } catch (e) {
        return null;
    }
}

function parseGiftFromUrl() {
    const encodedGift = new URLSearchParams(window.location.search).get('gift');
    if (!encodedGift) return null;

    try {
        const binaryString = atob(decodeURIComponent(encodedGift));
        const jsonString = decodeURIComponent(binaryString.split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonString);
    } catch (e) {
        console.error('Veri çözme hatası:', e);
        return null;
    }
}

function mergeGiftData(fromUrl, fromStore) {
    const base = fromUrl || fromStore;
    if (!base) return null;
    if (!fromStore) return base;

    const merged = { ...fromStore, ...fromUrl };
    if ((!fromUrl || !fromUrl.items || fromUrl.items.length === 0) && fromStore.items && fromStore.items.length) {
        merged.items = fromStore.items;
    }
    if (!merged.cake && fromStore.cake) {
        merged.cake = fromStore.cake;
        merged.cakeImg = fromStore.cakeImg;
        merged.cakeNote = fromStore.cakeNote;
    }
    if (!merged.box && fromStore.box) {
        merged.box = fromStore.box;
        merged.boxImg = fromStore.boxImg;
    }
    if (!merged.photo && fromStore.photo) {
        merged.photo = fromStore.photo;
    }
    if (!merged.youtube && fromStore.youtube) {
        merged.youtube = fromStore.youtube;
    }
    return merged;
}

function assetSrc(path) {
    if (!path) return '';
    return encodeURI(path);
}

window.addEventListener('DOMContentLoaded', () => {
    const fromUrl = parseGiftFromUrl();
    const fromStore = readStoredGift();
    giftData = mergeGiftData(fromUrl, fromStore);

    const boxImgElem = document.getElementById('selectedBoxImg');
    const boxSrc = giftData
        ? (giftData.boxImg || boxImages[giftData.box] || boxImages.Default)
        : boxImages.Default;
    boxImgElem.src = assetSrc(boxSrc);

    if (giftData && giftData.sender) {
        document.getElementById('welcomeMessage').innerHTML =
            `Sana <b>${giftData.sender}</b> kişisi bir hediye kutusu hazırladı. Hediye kutusunun içindekileri görmek için kutunun üstüne basman yeterli.`;
    }
});

function startGiftExperience() {
    document.getElementById('welcomeOverlay').style.display = 'none';
}

function hasYoutube() {
    return !!(giftData && giftData.youtube && String(giftData.youtube).trim());
}

function hasCake() {
    return !!(giftData && giftData.cake);
}

function giftItems() {
    return (giftData && Array.isArray(giftData.items)) ? giftData.items.filter(Boolean) : [];
}

function hasLetter() {
    return !!(giftData && ((giftData.letter && String(giftData.letter).trim()) || giftData.photo));
}

function buildRevealQueue() {
    revealQueue = [];
    if (hasYoutube()) revealQueue.push({ type: 'song' });
    if (hasCake()) revealQueue.push({ type: 'cake' });
    giftItems().forEach((item) => revealQueue.push({ type: 'item', item: item }));
    if (hasLetter()) revealQueue.push({ type: 'letter' });
    revealQueue.push({ type: 'finale' });
}

function hideAllCards() {
    ['songCard', 'cakeCard', 'itemsCard', 'letterCard', 'finaleCard'].forEach((id) => {
        document.getElementById(id).style.display = 'none';
    });
}

function handleBoxClick() {
    if (currentStep === 0) {
        currentStep = 1;
        document.getElementById('contentContainer').style.display = 'flex';
        if (giftData && giftData.effect) {
            startFallingEffect(giftData.effect);
        }
        buildRevealQueue();
    }
    revealNext();
}

function revealNext() {
    if (revealIndex >= revealQueue.length) return;

    hideAllCards();
    const step = revealQueue[revealIndex];
    revealIndex++;

    if (step.type === 'song') showSongCard();
    else if (step.type === 'cake') showCakeCard();
    else if (step.type === 'item') showGiftItem(step.item);
    else if (step.type === 'letter') showLetterCard();
    else if (step.type === 'finale') showFinale();

    const hint = document.getElementById('clickHint');
    if (revealIndex >= revealQueue.length) {
        hint.innerText = '';
    } else {
        hint.innerText = 'Tekrar tıklayarak devam et';
    }
}

function showSongCard() {
    document.getElementById('songSenderName').innerText = (giftData && giftData.sender) || 'Arkadaşın';
    youtubeLinkToCopy = giftData.youtube.trim();
    document.getElementById('youtubeLinkArea').innerHTML = `
        <a class="yt-plain-link" href="${youtubeLinkToCopy}" target="_blank" rel="noopener noreferrer">${youtubeLinkToCopy}</a>
        <button type="button" class="copy-link-btn" onclick="copyYoutubeLink(event)">Linki kopyala</button>
        <div class="copy-status" id="copyStatus"></div>
    `;
    document.getElementById('songCard').style.display = 'block';
}

function copyYoutubeLink(event) {
    if (event) event.stopPropagation();
    const status = document.getElementById('copyStatus');
    const done = () => {
        if (status) status.innerText = 'Kopyalandı!';
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(youtubeLinkToCopy).then(done).catch(() => {
            fallbackCopy(youtubeLinkToCopy);
            done();
        });
    } else {
        fallbackCopy(youtubeLinkToCopy);
        done();
    }
}

function fallbackCopy(text) {
    const temp = document.createElement('input');
    temp.value = text;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand('copy');
    temp.remove();
}

function showCakeCard() {
    const cakeSrc = (giftData && (giftData.cakeImg || cakeImages[giftData.cake])) || '';
    const cakeArea = document.getElementById('cakeVisualArea');
    cakeArea.innerHTML = cakeSrc
        ? `<img src="${assetSrc(cakeSrc)}" alt="${giftData.cake}">`
        : '';
    document.getElementById('cakeTitle').innerText = giftData.cake || 'Sana Özel Bir Pasta!';

    const noteEl = document.getElementById('cakeNoteDisplay');
    if (giftData.cakeNote && giftData.cakeNote.trim() !== '') {
        noteEl.innerText = giftData.cakeNote.trim();
        noteEl.style.display = 'block';
    } else {
        noteEl.style.display = 'none';
    }
    document.getElementById('cakeCard').style.display = 'block';
}

function showGiftItem(item) {
    const itemsListArea = document.getElementById('itemsListArea');
    const imgSrc = item && item.img ? item.img : '';
    const name = item && item.name ? item.name : 'Hediye';
    itemsListArea.innerHTML = `
        <div class="gift-item-card">
            ${imgSrc ? `<img src="${assetSrc(imgSrc)}" alt="${name}">` : ''}
            <div class="gift-item-name">${name}</div>
        </div>
    `;
    document.getElementById('itemsCard').style.display = 'block';
}

function showLetterCard() {
    if (giftData.photo) {
        document.getElementById('giftPhoto').src = giftData.photo;
        document.getElementById('photoDisplayArea').style.display = 'block';
    } else {
        document.getElementById('photoDisplayArea').style.display = 'none';
    }
    document.getElementById('letterTextDisplay').innerText = giftData.letter || '';
    document.getElementById('letterCard').style.display = 'block';
}

function showFinale() {
    document.getElementById('finaleCard').style.display = 'block';
    if (!confettiFired && typeof confetti === 'function') {
        confettiFired = true;
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }
}

function startFallingEffect(effectType) {
    const emojis = {
        'confetti': ['🎉', '✨', '🎊', '🎈'],
        'hearts': ['❤️', '💖', '💕', '💗'],
        'flowers': ['🌸', '🌺', '🌷', '🌼'],
        'snow': ['❄️', '🌨️', '✨'],
        'leaves': ['🍂', '🍁', '🍃'],
        'claps': ['👏', '🙌', '✨'],
        'smiles': ['😊', '😄', '🥰', '✨'],
        'kisses': ['💋', '😘', '💌']
    };

    const selectedEmojis = emojis[effectType] || emojis['confetti'];
    const container = document.getElementById('fallingEffectsContainer');

    effectInterval = setInterval(() => {
        const item = document.createElement('div');
        item.innerText = selectedEmojis[Math.floor(Math.random() * selectedEmojis.length)];
        item.style.position = 'fixed';
        item.style.top = '-30px';
        item.style.left = Math.random() * 100 + 'vw';
        item.style.fontSize = (Math.random() * 20 + 20) + 'px';
        item.style.opacity = Math.random() * 0.7 + 0.3;
        item.style.transition = 'transform 4s linear, opacity 4s linear';
        item.style.pointerEvents = 'none';
        item.style.zIndex = '999';
        item.style.fontFamily = "'Bitcount Grid Single', monospace";
        container.appendChild(item);
        setTimeout(() => {
            item.style.transform = `translateY(${window.innerHeight + 50}px) rotate(${Math.random() * 360}deg)`;
        }, 50);
        setTimeout(() => item.remove(), 4100);
    }, 300);
}
