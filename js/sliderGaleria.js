const slider = document.querySelector("#slider");
let sliderSeccion = document.querySelectorAll(".sliderSeccion");
let sliderSeccionAnterior = sliderSeccion[sliderSeccion.length-1];
const cmbDerecha = document.querySelector("#cmbDerecha");
const cmbIzquierda = document.querySelector("#cmbIzquierda");

slider.insertAdjacentElement('afterbegin',sliderSeccionAnterior);

function siguiente(){
    let sliderSeccionSiguiente = document.querySelectorAll(".sliderSeccion")[0];
    slider.style.marginLeft = "-100%";
    slider.style.transition = "all 0.7s";
    setTimeout(function(){
        slider.style.transition = "none";  
        slider.insertAdjacentElement('beforeend',sliderSeccionSiguiente); 
        slider.style.marginLeft = "-40%";  
    },700);
}
cmbDerecha.addEventListener('click',function(){
    siguiente();
});
function anterior(){
    let sliderSeccion = document.querySelectorAll(".sliderSeccion");
    let sliderSeccionAnterior = sliderSeccion[sliderSeccion.length-1];
    slider.style.marginLeft = "20%";
    slider.style.transition = "all 0.7s";
    setTimeout(function(){
        slider.style.transition = "none";  
        slider.insertAdjacentElement('afterbegin',sliderSeccionAnterior); 
        slider.style.marginLeft = "-40%";  
    },700);
}
cmbIzquierda.addEventListener('click',function(){
    anterior();
});
setInterval(function(){
    siguiente();
},3500);