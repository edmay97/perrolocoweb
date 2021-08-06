let parallax = document.getElementById("imagenScroll1");
let aparecerr = document.querySelectorAll(".aparecer");
let barra = document.querySelectorAll(".barra");
let titulo = document.querySelectorAll(".titulo");

function scrollParallax(){
    var scrollTop = 
    document.documentElement.scrollTop;
    var scrolll = (scrollTop* 0.3);
    //document.getElementById("imagenScroll1").style.transform = 'translateY('+scrolll+'px)';
    if(scrollTop>520){
        document.getElementById('contenedorMenu').style = "background:rgba(255, 184, 23,0.85);";
    }else{
        document.getElementById('contenedorMenu').style = "background:none;";
    }
    //reaparecer(scrollTop);
    //animBarra(scrollTop);
    //animTitulo(scrollTop);
}
window.addEventListener('scroll',scrollParallax);


function reaparecer(scrolll){
    for(var i=0;i<aparecerr.length;i++){
        var altura = aparecerr[i].getBoundingClientRect().top;
        console.log("altura de " + i + "/" +scrolll + "/" +altura);
        if(altura < scrolll+150){
            aparecerr[i].style = "opacity:1;transform:translateY(0)";
        }else{
            aparecerr[i].style = "opacity:0;transform:translateY(200px)";
        }
    }   
}

function animBarra(scrolll){
    for(var i=0;i<barra.length;i++){
        var altura = barra[i].getBoundingClientRect().top;
        //console.log("altura de " + i + "/" +scrolll + "/" +altura);
        if(altura < scrolll+150){
            barra[i].style = "opacity:1;transform:translateX(0)";
        }else{
            barra[i].style = "opacity:0;transform:translateX(500px)";
        }
    }   
}
function animTitulo(scrolll){
    for(var i=0;i<titulo.length;i++){
        var altura = titulo[i].getBoundingClientRect().top;
        //console.log("altura de " + i + "/" +scrolll + "/" +altura);
        if(altura < scrolll+150){
            titulo[i].style = "opacity:1;transform:translateX(0)";
        }else{
            titulo[i].style = "opacity:0;transform:translateX(-500px)";
        }
    }   
}
