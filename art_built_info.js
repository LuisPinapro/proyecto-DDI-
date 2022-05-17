const card_built2 = document.getElementById("card_built2");
const card_built = document.getElementById("card_built");

function noneInfo2(){
    card_built2.textContent = " ";
};
function noneInfo1(){
    card_built.textContent = " ";
};
function viewInfoMad(){
    noneInfo2();
    card_built2.innerHTML = "<img src='./sources/img/Planta baja/tallermadera.jpg' class = 'card-img-top' alt='img_mad'><div class='card-body' id='card_body'> <h5 class='card-title' id='title-built'>Taller de Madera</h5> <p class='card-text' id='text-built'>Su labor consiste en cortar, moldear y fabricar piezas de madera para la construcción de viviendas. Existe una carpintería del armar, destinada a la construcción de armazones; de taller, dedicada a puertas, ventanas y similares; y de mobiliario, cuyo objeto es elaborar muebles de hogar con maderas comunes.</p><a href='' class='btn btn-primary'>Mas información</a></div>";
};
function viewInfoPol(){
    noneInfo2()
    card_built2.innerHTML = "<img src='./sources/img/Planta baja/polimeros.jpg' class = 'card-img-top' alt='img_pol'><div class='card-body' id='card_body'> <h5 class='card-title' id='title-built'>Taller de Polimeros</h5> <p class='card-text' id='text-built'>El prototipado rápido es un proceso mediante el cual creamos objetos con características similares a otros (forma, resistencia mecánica, color) para poder testear nuestro producto antes de sacarlo al mercado de forma fácil y barata. Su uso suele ser industrial y antes de hacer varias tiradas de productos.</p><a href='' class='btn btn-primary'>Mas información</a></div>";
};
function viewInfoMet(){
    noneInfo2();
    card_built2.innerHTML = "<img src='./sources/img/Planta baja/metales.jpg' class = 'card-img-top' alt='img_met'><div class='card-body' id='card_body'> <h5 class='card-title' id='title-built'>Taller de Metales</h5> <p class='card-text' id='text-built'>En este tipo de talleres se llevan a cabo los trabajos más exigentes con herramientas de arranque de viruta de alta calidad. En ellos se pueden realizar mecanizados metálicos y no metálicos con los materiales más usados, como son el aluminio de alta calidad, níquel, nylon, latón, bronce, aceros, titanio, etc.</p><a href='' class='btn btn-primary'>Mas información</a></div>";
};
function viewInfoCer(){
    noneInfo2();
    card_built2.innerHTML = "<img src='./sources/img/Planta baja/ceramica.jpg' class = 'card-img-top' alt='img_cer'><div class='card-body' id='card_body'> <h5 class='card-title' id='title-built'>Taller de Ceramica</h5> <p class='card-text' id='text-built'>En estos talleres los elementos principales son los soportes y tableros para colocar los azulejos y las laminadoras, para aquellos que hacen sus propias planchas de barro.</p><a href='' class='btn btn-primary'>Mas información</a></div>";
};
function viewInfoTex(){
    noneInfo2();
    card_built2.innerHTML = "<img src='./sources/img/Planta baja/textiles.jpg' class = 'card-img-top' alt='img_tex'><div class='card-body' id='card_body'> <h5 class='card-title' id='title-built'>Taller de Textiles</h5> <p class='card-text' id='text-built'>En nuestro laboratorio de aplicaciones técnicas podemos simular y reproducir procesos textil-químicos a escala piloto. Al hacerlo, incluimos todos los procesos de la química textil, como el pretratamiento, tintura, acabado, lubricación del hilo, estampado, recubrimiento, acabado y lavado de prendas.</p><a href='' class='btn btn-primary'>Mas información</a></div>";

}

function viewInfoDib(){
    noneInfo1();
    card_built.innerHTML = "<img src='./sources/img/Planta alta/Dibujo.jpg' class = 'card-img-top' alt='img_dib'><div class='card-body' id='card_body'> <h5 class='card-title' id='title-built'>Taller de Dibujo</h5> <p class='card-text' id='text-built'>El Taller de Introducción a la Pintura y Dibujo te proporciona los elementos artísticos para explorar y desarrollar sus habilidades, creatividad, talento y sensibilidad hacia las manifestaciones de la expresión humana a través de la percepción de formas y colores, incrementando tu formación por medio del razonamiento para identificar las tendencias plásticas contemporáneas.</p><a href='' class='btn btn-primary'>Mas información</a></div>";
};
function viewInfoTeo(){
    noneInfo1()
    card_built.innerHTML = "<img src='./sources/img/Planta alta/Teoria.jpg' class = 'card-img-top' alt='img_teo'><div class='card-body' id='card_body'> <h5 class='card-title' id='title-built'>Taller de Teoria</h5> <p class='card-text' id='text-built'>Taller para el estudio de reglas, técnicas, principios y conocimientos acerca del diseño de artesanías, prescindiendo de sus posibles aplicaciones prácticas.</p><a href='' class='btn btn-primary'>Mas información</a></div>";
};
function viewInfoCom(){
    noneInfo1();
    card_built.innerHTML = "<img src='./sources/img/Planta alta/Computo.jpg' class = 'card-img-top' alt='img_com'><div class='card-body' id='card_body'> <h5 class='card-title' id='title-built'>Taller de Computo</h5> <p class='card-text' id='text-built'>Promover y apoyar los programas de capacitación y el desarrollo de la cultura informática y de la comunicación para la comunidad del Centro Universitario.</p><a href='' class='btn btn-primary'>Mas información</a></div>";
};
function viewInfoVit(){
    noneInfo1();
    card_built.innerHTML = "<img src='./sources/img/Planta alta/Vitrales.jpg' class = 'card-img-top' alt='img_vit'><div class='card-body' id='card_body'> <h5 class='card-title' id='title-built'>Taller de Vitrales</h5> <p class='card-text' id='text-built'>Laboratorio para el diseño y elaboración de impresiones serigráficas en artículos varios, especialmente en papel, por medio de técnicas artesanales. Para realizar la impresión se apoya sobre el soporte a estampar y se pasa la tinta a través del calado con esponja, pincel o pulverizadores.</p><a href='' class='btn btn-primary'>Mas información</a></div>";
};
function viewInfoMul(){
    noneInfo1();
    card_built.innerHTML = "<img src='./sources/img/Planta alta/Multiple.jpg' class = 'card-img-top' alt='img_mul'><div class='card-body' id='card_body'> <h5 class='card-title' id='title-built'>Taller de uso Multiple</h5> <p class='card-text' id='text-built'>Esta sala ofrece múltiples posibilidades, ya que puede ser empleado como salón de clases, aula de capacitación, salón de juntas, sala de proyección de material, etc.</p><a href='' class='btn btn-primary'>Mas información</a></div>";

}