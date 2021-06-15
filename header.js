let elemento = document.getElementById('cabecera'); // 
let header2 = document.getElementById('header2');
let header1 = document.getElementById('header1');
window.onscroll = function (){
    // Obtenemos la posicion del scroll en pantall
    let scroll = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(scroll);
    // Realizamos alguna accion cuando el scroll este entre la posicion 300 y 400
    if(scroll > 250){ 
        header2.style.display = 'block'; 
        header2.style.position = 'fixed';
        header2.style.top = '0';

    }else{
        elemento.style.backgroundColor = 'white'; 
        header2.style.display = 'none';

    }
}

