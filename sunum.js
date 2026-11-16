const boxImageMap = {
    Default: 'Hediye Kutuları/Default.png',
    Halloween: 'Hediye Kutuları/Halloween Temalı Kutu.png',
    Havali: 'Hediye Kutuları/Havalı Kutu.png',
    Resmi: 'Hediye Kutuları/Resmi Kutu.png',
    Yilbasi: 'Hediye Kutuları/Yılbaşı Temalı Kutu.png'
};

const cakeImageMap = {
    'Antep Fıstıklı Pasta': 'Pastalar/Antep Fıstıklı Pasta.png',
    'Çikolatalı Pasta': 'Pastalar/Çikolatalı Pasta.png',
    'Çilekli Pasta': 'Pastalar/Çilekli Pasta.png',
    'Kakaolu Pasta': 'Pastalar/Kakaolu Pasta.png',
    'Karamelli Pasta': 'Pastalar/Karamelli Pasta.png',
    'Muzlu Pasta': 'Pastalar/Muzlu Pasta.png',
    'Orman Meyveli Pasta': 'Pastalar/Orman Meyveli Pasta.png',
    'Vanilyalı Pasta': 'Pastalar/Vanilyalı Pasta.png'
};

function getSelectedCartItems() {
    try {
        const raw = localStorage.getItem('giftboxCart');
        const cart = raw ? JSON.parse(raw) : [];
        return cart.map(item => ({
            name: item.name,
            img: item.img,
            category: item.category || ''
        }));
    } catch (e) {
        return [];
    }
}

let selectedBoxType = null;
let selectedCakeType = null;
let cakeNote = "";
let letterText = "";
let uploadedPhoto = null;
let youtubeUrl = "";
let extractedVideoId = null;

function selectBox(boxName, element) {
    document.querySelectorAll('.box-option').forEach(opt => opt.classList.remove('selected'));
    element.classList.add('selected');
    selectedBoxType = boxName;
}

function selectCake(cakeName, element) {
    if (element.classList.contains('selected')) {
        element.classList.remove('selected');
        selectedCakeType = null;
        document.getElementById('cakeNoteQuestionArea').style.display = 'none';
        document.getElementById('cakeNoteInputArea').style.display = 'none';
        document.getElementById('cakeNoteText').value = '';
    } else {
        document.querySelectorAll('.cake-option').forEach(opt => opt.classList.remove('selected'));
        element.classList.add('selected');
        selectedCakeType = cakeName;
        document.getElementById('cakeNoteQuestionArea').style.display = 'block';
    }
}

function toggleCakeNoteInput(wantsNote, btnElement) {
    const parentContainer = btnElement.parentElement;
    parentContainer.querySelectorAll('.choice-btn').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');

    const inputArea = document.getElementById('cakeNoteInputArea');
    const questionArea = document.getElementById('cakeNoteQuestionArea');

    if (wantsNote) {
        inputArea.style.display = 'block';
    } else {
        inputArea.style.display = 'none';
        questionArea.style.display = 'none';
        document.getElementById('cakeNoteText').value = '';
        cakeNote = "";
    }
}

function updateCakeCharCount() {
    const textVal = document.getElementById('cakeNoteText').value;
    cakeNote = textVal;
    document.getElementById('cakeCharCount').innerText = textVal.length;
}

function updateLetterCharCount() {
    const textVal = document.getElementById('letterText').value;
    letterText = textVal;
    document.getElementById('letterCharCount').innerText = textVal.length;
}

function togglePhotoUploadInput(wantsPhoto, btnElement) {
    const parentContainer = btnElement.parentElement;
    parentContainer.querySelectorAll('.choice-btn').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');

    const photoArea = document.getElementById('photoUploadArea');
    if (wantsPhoto) {
        photoArea.style.display = 'block';
    } else {
        photoArea.style.display = 'none';
        document.getElementById('photoInput').value = '';
        document.getElementById('photoPreviewContainer').style.display = 'none';
        uploadedPhoto = null;
    }
}

const IMGBB_API_KEY = 'API'; // <-- API

function handlePhotoUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
        Swal.fire({
            icon: 'error',
            title: 'Hatalı Format!',
            text: 'Lütfen geçerli bir resim dosyası seç.',
            confirmButtonText: 'Tamam',
            confirmButtonColor: '#ff4da6'
        });
        event.target.value = '';
        return;
    }

    // Yükleniyor bilgisi gösterelim ki kullanıcı beklediğini bilsin
    const previewContainer = document.getElementById('photoPreviewContainer');
    const photoNameEl = document.getElementById('photoName');
    previewContainer.style.display = 'block';
    photoNameEl.innerText = 'Fotoğraf buluta yükleniyor, lütfen bekle... ⏳';

    // Önizlemeyi ekranda hemen gösterelim
    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById('photoPreview').src = e.target.result;
    };
    reader.readAsDataURL(file);

    // ImgBB API'ye fotoğrafı yüklüyoruz
    const formData = new FormData();
    formData.append('image', file);

    fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            uploadedPhoto = data.data.url;
            photoNameEl.innerText = `${file.name} (Hazır! ✅)`;
        } else {
            throw new Error('Yükleme başarısız');
        }
    })
    .catch(err => {
        console.error('ImgBB yükleme hatası:', err);
        uploadedPhoto = null;
        previewContainer.style.display = 'none';
        event.target.value = '';
        Swal.fire({
            icon: 'error',
            title: 'Yükleme Başarısız',
            text: 'Fotoğraf yüklenirken bir sorun oluştu, internet bağlantını kontrol edip tekrar dene.',
            confirmButtonColor: '#ff4da6'
        });
    });
}

function toggleMusicInput(wantsMusic, btnElement) {
    const parentContainer = btnElement.parentElement;
    parentContainer.querySelectorAll('.choice-btn').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');

    const musicArea = document.getElementById('musicInputArea');
    if (wantsMusic) {
        musicArea.style.display = 'block';
    } else {
        musicArea.style.display = 'none';
        document.getElementById('youtubeLink').value = '';
        const statusText = document.getElementById('musicStatusText');
        if (statusText) statusText.innerText = '';
        youtubeUrl = "";
        extractedVideoId = null;
    }
}

function extractYoutubeId(url) {
    let regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    let match = url.match(regExp);
    
    if (match && match[2].length === 11) {
        return match[2];
    }
    
    try {
        const urlObj = new URL(url);
        if (urlObj.hostname.includes('youtu.be')) {
            return urlObj.pathname.slice(1, 12);
        } else if (urlObj.searchParams.has('v')) {
            return urlObj.searchParams.get('v').substring(0, 11);
        }
    } catch (e) {
        // Geçersiz URL
    }
    
    return null;
}

function handleYoutubeLink(url) {
    youtubeUrl = url;
    extractedVideoId = extractYoutubeId(url);
    const statusText = document.getElementById('musicStatusText');

    if (!statusText) return;

    if (extractedVideoId) {
        statusText.style.color = '#28a745';
        statusText.innerText = '✅ Geçerli YouTube linki eklendi!';
    } else if (url.trim() === "") {
        statusText.innerText = '';
    } else {
        statusText.style.color = '#dc3545';
        statusText.innerText = '❌ Lütfen geçerli bir YouTube linki girin!';
    }
}

function fnSwitchStep(targetStep) {
    document.querySelectorAll('.step-card').forEach(card => card.classList.remove('active'));
    const targetCard = document.getElementById(`step-${targetStep}`);
    if (targetCard) {
        targetCard.classList.add('active');
    }
}

function nextStep(stepNumber) {
    if (stepNumber === 2) {
        if (!selectedBoxType) {
            Swal.fire({
                icon: 'warning',
                title: 'Oops!',
                text: 'Devam etmek için bir hediye kutusu seçmelisin!',
                confirmButtonText: 'Tamam',
                confirmButtonColor: '#ff4da6'
            });
            return;
        }
        fnSwitchStep(2);
    } else if (stepNumber === 3) {
        fnSwitchStep(3);
    } else if (stepNumber === 4) {
        fnSwitchStep(4);
    } else if (stepNumber === 5) {
        // Eğer müzik alanı açık ve "Evet" seçilmişse, geçerli link zorunlu olsun
        const musicArea = document.getElementById('musicInputArea');
        if (musicArea && musicArea.style.display === 'block') {
            if (!youtubeUrl || !extractedVideoId) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Eksik veya Hatalı Link!',
                    text: 'Lütfen geçerli bir YouTube linki gir veya "Hayır" seçeneğini seç.',
                    confirmButtonText: 'Tamam',
                    confirmButtonColor: '#ff4da6'
                });
                return;
            }
        }
        
        // 5. adıma (Final & Özet) geçiş
        fnSwitchStep(5);
    }
}

function prevStep(stepNumber) {
    fnSwitchStep(stepNumber);
}

let selectedEffect = null;

function selectEffect(effectName, element) {
    if (element.classList.contains('selected')) {
        element.classList.remove('selected');
        selectedEffect = null;
    } else {
        document.querySelectorAll('.effect-option').forEach(opt => opt.classList.remove('selected'));
        element.classList.add('selected');
        selectedEffect = effectName;
    }
}

function finishPresentation() {
    Swal.fire({
        title: 'Hediyeyi Kim Gönderiyor?',
        text: 'Lütfen adını ve soyadını gir (Arkadaşın bu ismi görecek):',
        input: 'text',
        inputPlaceholder: 'Ad Soyad',
        showCancelButton: true,
        confirmButtonText: 'Link Oluştur',
        cancelButtonText: 'İptal',
        confirmButtonColor: '#ff4da6',
        inputValidator: (value) => {
            if (!value || !value.trim()) {
                return 'Devam etmek için adını ve soyadını yazmalısın!';
            }
        }
    }).then((result) => {
        if (result.isConfirmed) {
            const senderName = result.value.trim();

            // Seçilen tüm verileri paketliyoruz
            const giftPayload = {
                sender: senderName,
                box: selectedBoxType,
                boxImg: boxImageMap[selectedBoxType] || boxImageMap.Default,
                cake: selectedCakeType,
                cakeImg: selectedCakeType ? (cakeImageMap[selectedCakeType] || null) : null,
                cakeNote: cakeNote,
                items: getSelectedCartItems(),
                letter: letterText,
                photo: uploadedPhoto,
                youtube: youtubeUrl,
                effect: selectedEffect
            };

            try {
                localStorage.setItem('giftboxLastGift', JSON.stringify(giftPayload));
                // Fotoğraf artık kısa bir URL olduğu için doğrudan link paketine dahil ediyoruz
                const urlPayload = { ...giftPayload, photo: uploadedPhoto };
                const jsonString = JSON.stringify(urlPayload);
                const encodedData = btoa(encodeURIComponent(jsonString).replace(/%([0-9A-F]{2})/g, function(match, p1) {
                    return String.fromCharCode('0x' + p1);
                }));

                // Linkimizi oluşturuyoruz
                // 1. Sitenin nerede çalıştığını tespit ediyoruz
                let baseUrl = window.location.origin;

                // 2. Eğer bilgisayarında (lokalde) çalıştırıyorsan, tarayıcıda adres "file://" veya "localhost" (127.0.0.1) olur.
                // Bilgisayarda test ederken linklerin çalışabilmesi için geçici olarak yerel (localhost) adresi baz alabiliriz:
                if (baseUrl.startsWith("file://") || baseUrl.includes("localhost") || baseUrl.includes("127.0.0.1")) {
                    
                    // Eğer bilgisayarında Live Server (örn: http://127.0.0.1:5500) kullanıyorsan:
                    baseUrl = window.location.origin + window.location.pathname.replace('sunum.html', '');
                    
                    // VEYA eğer direkt dosyaya çift tıklayıp (file:///D:/...) açıyorsan, 
                    // yerelde test edebilmen için tarayıcının o anki klasör yolunu baz alırız:
                    if (window.location.protocol === "file:") {
                        // Bilgisayar içi testlerde hediye.html aynı klasördeyse direkt relative (göreli) yol da kullanabiliriz:
                        // Ama en garanti test için şu anki dosya yolunu çeviririz:
                        let currentPath = window.location.href.substring(0, window.location.href.lastIndexOf('/') + 1);
                        baseUrl = currentPath;
                    }
                }

                // 3. Linkimizi oluşturuyoruz (.html uzantılı ve tertemiz)
                const shareableLink = `${baseUrl}/hediye.html?gift=${encodeURIComponent(encodedData)}`;


                // Link ekranı ve Kopyalama Butonu
                Swal.fire({
                    icon: 'success',
                    title: 'Hediye Kutun Hazır! 🎉',
                    html: `
                        <p style="font-size: 14px; color: #555; margin-bottom: 10px;">Aşağıdaki linki kopyalayıp arkadaşına gönderebilirsin:</p>
                        <input type="text" id="shareInput" value="${shareableLink}" readonly style="width: 100%; padding: 10px; border: 2px solid #ff4da6; border-radius: 8px; text-align: center; font-size: 12px; font-family: inherit;">
                    `,
                    confirmButtonText: 'Linki Kopyala',
                    confirmButtonColor: '#28a745',
                    preConfirm: () => {
                        const copyText = document.getElementById("shareInput");
                        if (copyText) {
                            copyText.select();
                            navigator.clipboard.writeText(copyText.value).then(() => {
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Kopyalandı!',
                                    text: 'Link panoya kopyalandı, arkadaşına atabilirsin! ✨',
                                    timer: 2000,
                                    showConfirmButton: false
                                });
                            }).catch(() => {
                                document.execCommand("copy");
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Kopyalandı!',
                                    text: 'Link panoya kopyalandı!',
                                    timer: 2000,
                                    showConfirmButton: false
                                });
                            });
                        }
                    }
                });

            } catch (err) {
                console.error("Link oluşturma hatası:", err);
                Swal.fire({
                    icon: 'error',
                    title: 'Bir Hata Oluştu!',
                    text: 'Link oluşturulurken sorun çıktı, lütfen resim boyutunu veya alanları kontrol et.',
                    confirmButtonColor: '#ff4da6'
                });
            }
        }
    });
}