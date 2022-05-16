const card_built1 = document.getElementById("card_built");

function noneInfo(){
    card_built1.textContent = " ";
};
function viewInfo(){
    noneInfo();
    card_built1.innerHTML = "<img src='./sources/img/Planta alta/IMG_20220331_142127.jpg' class = 'card-img-top' alt='img_mad'><div class='card-body' id='card_body'> <h5 class='card-title' id='title-built'>Salon de Maderas</h5> <p class='card-text' id='text-built'>Su labor consiste en cortar, moldear y fabricar piezas de madera para la construcción de viviendas. Existe una carpintería del armar, destinada a la construcción de armazones; de taller, dedicada a puertas, ventanas y similares; y de mobiliario, cuyo objeto es elaborar muebles de hogar con maderas comunes.</p></div>";
};
