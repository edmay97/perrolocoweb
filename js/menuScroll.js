function irInicio(){
    $("html, body").animate({
        scrollTop: $("#inicio").offset().top -120
    }, 600); 
}
function irAcercaDe(){
    $("html, body").animate({
        scrollTop: $("#nosotros").offset().top -110
    }, 600); 
}
function irPlatos(){
    $("html, body").animate({
        scrollTop: $("#nuestroMenu").offset().top -110
    }, 600); 
}
function irContacto(){
    $("html, body").animate({
        scrollTop: $("#contactoFormulario").offset().top -110
    }, 600);
}
function irReserva(){
    $("html, body").animate({
        scrollTop: $("#contenedorReservar").offset().top -110
    }, 600);
}
