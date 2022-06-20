let data = new Date();

const horas = data.getHours();
const minutos = data.getMinutes();
const segundos = data.getSeconds();

const hora = [horas, minutos, segundos].join(':');

let momentoHtml = document.querySelector("#msg");
let corDeFundo = document.querySelector(".corDeFundo");
let imagem = document.getElementById("img");

let momento = "";

if (horas >= 0 && horas < 12) 
{
    momento = "Bom dia!";
    corDeFundo.style.background = "#f0e47c";
    imagem.src = "images/day.png";
}    
else if (horas >= 12 && horas < 18) 
{
    momento = "Boa tarde!";
    corDeFundo.style.background = "#eab676";
    imagem.src = "images/evening.png";
}
else{
    momento = "Boa noite!";
    corDeFundo.style.background = "#515154";
    imagem.src = "images/night.png";
}

momentoHtml.innerHTML = `${momento} Agora são: ${hora}`;