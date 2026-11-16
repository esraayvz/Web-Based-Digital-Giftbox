const text1 = "GiftBox uygulamasına hoşgeldin! Bu uygulama sayesinde sevdiğin kişilere dijital bir hediye kutusu hazırlayıp onları mutlu edebilirsin";
const text2 = "Hazırsan hemen kategorilere geçip kutunu doldurmaya başlayalım";

let index = 0;
const speed = 35;
let step = 1; 
let timer = null;

function startTyping(textToType) {
    index = 0;
    document.getElementById("text-target").innerHTML = "";
    document.getElementById("dots").style.display = "none";
    document.getElementById("nextBtn").style.display = "none";

    function type() {
        if (index < textToType.length) {
            document.getElementById("text-target").innerHTML += textToType.charAt(index);
            index++;
            timer = setTimeout(type, speed);
        } else {
            document.getElementById("dots").style.display = "inline";
            document.getElementById("nextBtn").style.display = "inline-block";
        }
    }

    type();
}

window.onload = function() {
    setTimeout(() => {
        startTyping(text1);
    }, 400);
};

function goToNextStep() {
    if (step === 1) {
        step = 2;
        clearTimeout(timer);
        startTyping(text2);
    } else if (step === 2) {
        window.location.href = "kategoriler.html";
    }
}