const card_built2 = document.getElementById("card_built2");

function noneInfo(){
    card_built2.textContent = " ";
};
function viewInfoMad(){
    noneInfo();
    card_built2.innerHTML = "<img src='./sources/img/Planta baja/tallermadera.jpg' class = 'card-img-top' alt='img_mad'><div class='card-body' id='card_body'> <h5 class='card-title' id='title-built'>Taller de Madera</h5> <p class='card-text' id='text-built'>Su labor consiste en cortar, moldear y fabricar piezas de madera para la construcción de viviendas. Existe una carpintería del armar, destinada a la construcción de armazones; de taller, dedicada a puertas, ventanas y similares; y de mobiliario, cuyo objeto es elaborar muebles de hogar con maderas comunes.</p></div>";
};
function viewInfoPol(){
    noneInfo()
    card_built2.innerHTML = "<img src='./sources/img/Planta baja/polimeros.jpg' class = 'card-img-top' alt='img_pol'><div class='card-body' id='card_body'> <h5 class='card-title' id='title-built'>Taller de Polimeros</h5> <p class='card-text' id='text-built'>El prototipado rápido es un proceso mediante el cual creamos objetos con características similares a otros (forma, resistencia mecánica, color) para poder testear nuestro producto antes de sacarlo al mercado de forma fácil y barata. Su uso suele ser industrial y antes de hacer varias tiradas de productos.</p></div>";
};
function viewInfoMet(){
    noneInfo();
    card_built2.innerHTML = "<img src='./sources/img/Planta baja/metales.jpg' class = 'card-img-top' alt='img_met'><div class='card-body' id='card_body'> <h5 class='card-title' id='title-built'>Taller de Metales</h5> <p class='card-text' id='text-built'>En este tipo de talleres se llevan a cabo los trabajos más exigentes con herramientas de arranque de viruta de alta calidad. En ellos se pueden realizar mecanizados metálicos y no metálicos con los materiales más usados, como son el aluminio de alta calidad, níquel, nylon, latón, bronce, aceros, titanio, etc.</p></div>";
};
function viewInfoCer(){
    noneInfo();
    card_built2.innerHTML = "<img src='./sources/img/Planta baja/ceramica.jpg' class = 'card-img-top' alt='img_cer'><div class='card-body' id='card_body'> <h5 class='card-title' id='title-built'>Taller de Ceramica</h5> <p class='card-text' id='text-built'>En estos talleres los elementos principales son los soportes y tableros para colocar los azulejos y las laminadoras, para aquellos que hacen sus propias planchas de barro.</p></div>";
};
function viewInfoTex(){
    noneInfo();
    card_built2.innerHTML = "<img src='./sources/img/Planta baja/textiles.jpg' class = 'card-img-top' alt='img_tex'><div class='card-body' id='card_body'> <h5 class='card-title' id='title-built'>Taller de Textiles</h5> <p class='card-text' id='text-built'>En nuestro laboratorio de aplicaciones técnicas podemos simular y reproducir procesos textil-químicos a escala piloto. Al hacerlo, incluimos todos los procesos de la química textil, como el pretratamiento, tintura, acabado, lubricación del hilo, estampado, recubrimiento, acabado y lavado de prendas.</p></div>";

}