let totalSlide = 3
let currentSlide= 0;

function goPrev() {
    currentSlide--;
    if(currentSlide < 0) {
        currentSlide = totalSlide - 1;
    }
    bota();
}
function goNext() {
    currentSlide++;
    if(currentSlide > (totalSlide-1)) {
        currentSlide = 0;
    }
    bota();
}

function bota() {
    console.log(document.getElementById('Img'),'img')
    let medidaTela = 1359
    console.log('aa')
    console.log(totalSlide)
    let newMargin = currentSlide * medidaTela;
    console.log(newMargin)
    document.getElementById('img').style.marginLeft = `-${newMargin}px`;
}
