const imagenes = ["image/carruselimg1.jpg","image/carruselimg2.jpg","image/carruselimg3.jpg"];

let indice = 0;

function next(){
    if(indice === imagenes.length - 1){
    indice = 0;  
}else{
    indice++;
}
document.getElementById("imagen").src=imagenes[indice];
}

function back(){
    if(indice === 0){
        indice = imagenes.length -1;  
}else{
    indice --;   
}
document.getElementById("imagen").src=imagenes[indice];
}