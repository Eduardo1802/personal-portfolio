//funciòn que carga las animaciones de las habilidades
function cargarAnimaciones(){
    $(function(){
        $('.chart1').easyPieChart({
            size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:2000,
        });
        $('.chart2').easyPieChart({
            size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:2000,
        });
        $('.chart3').easyPieChart({
            size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:2000,
        });
        $('.chart4').easyPieChart({
            size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:2000,
        });
        $('.chart5').easyPieChart({
            size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:2000,
        });
        $('.chart6').easyPieChart({
            size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:2000,
        });

    })
}
//Función para filtrar las categorías de los trabajos
function verCategoria(cat){
    const items = document.getElementsByClassName("item");
    for(let i=0; i < items.length;i++){
        items[i].style.display = "none";
    }

    const itemCat = document.getElementsByClassName(cat);
    for(let i = 0; i<itemCat.length;i++){
        itemCat[i].style.display = "block";
    }

    const links = document.querySelectorAll(".proyectos nav a");
    links[0].className = "";
    links[1].className = "";
    links[2].className = "";

    const itemSeleccionado = document.getElementById(cat);
    itemSeleccionado.className = "borde";
}


//función que muestra el menu responsive{
function responsiveMenu(){
    let x = document.getElementById("nav");
    if(x.className===""){
        x.className = "responsive";

        //creamos el elemento que cierra el menu
        let span = document.createElement("span");
        span.innerHTML = "X";
        document.getElementById("nav").appendChild(span);

        //quitamos el boton eliminar cuando se hace click sobre este
        span.onclick = function(){
            x.className = "";
            span.remove();
        }
    }else{
        x.className="";
    }
}

//Este codigo es para agregar una función a cada links del menu
//responsive
//cuando se presione en cualquier de los links del menu debe desaparecer el menu
const links = document.querySelectorAll("#nav a");
for(i=0; i < links.length;i++){
    links[i].onclick = function(){
        var x = document.getElementById("nav");
        x.className = "";

        //removemos el boton eliminar
        btnEliminar = document.querySelector("#nav span");
        btnEliminar.remove();
    }
}


// Carrusel
document.addEventListener("DOMContentLoaded", function () {
    const carouselItems = document.querySelectorAll(".carousel-item");
    let currentIndex = 0;

    function showSlide(index) {
        carouselItems[currentIndex].classList.remove("active");
        currentIndex = index;
        carouselItems[currentIndex].classList.add("active");
    }

    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    prevBtn.addEventListener("click", function () {
        const newIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        showSlide(newIndex);
    });

    nextBtn.addEventListener("click", function () {
        const newIndex = (currentIndex + 1) % carouselItems.length;
        showSlide(newIndex);
    });

    function autoAdvance() {
        const newIndex = (currentIndex + 1) % carouselItems.length;
        showSlide(newIndex);
    }

    const interval = setInterval(autoAdvance, 6000);

    carouselItems.forEach((item) => {
        item.addEventListener("click", () => {
            clearInterval(interval);
        });
    });
});


// Descargar CV
var botonDescargar = document.getElementById("descargarBtn");

botonDescargar.addEventListener("click", function() {
    var urlArchivo = "./pdf/CV Eduardo Azuara Redondo.pdf";
    var enlaceDescarga = document.createElement("a");
    enlaceDescarga.href = urlArchivo;
    enlaceDescarga.download = "CV Eduardo Azuara Redondo.pdf";
    enlaceDescarga.click();
});

// Formulario de la sección de contacto
function validarFormulario() {
    var sendername = document.getElementById("sendername").value;
    var to = document.getElementById("to").value;
    var subject = document.getElementById("subject").value;
    var reply_to = document.getElementById("reply_to").value;
    var message = document.getElementById("message").value;

    if (sendername === "" || to === "" || subject === "" || reply_to === "" || message === "") {
        alert("Por favor, complete todos los campos.");
        return false;
    }
    
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailRegex.test(reply_to)) {
        alert("Por favor, ingrese una dirección de correo electrónico válida.");
        return false;
    }

    var params = {
        sendername: sendername,
        to: to,
        subject: subject,
        reply_to: reply_to,
        message: message,
    };

    emailjs.send("service_p48rtwz", "template_3g9d5n6", params , "YjClD8Hw7PJ0I06WZ") 
        .then(function(response) {
            console.log("Correo enviado con éxito:", response);

            document.getElementById("sendername").value = "";
            document.getElementById("reply_to").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("message").value = "";

            alert("Correo enviado con éxito. El formulario ha sido limpiado.");

        }, function(error) {
            console.error("Error al enviar el correo:", error);
            alert("Hubo un error al enviar el correo. Por favor, inténtalo de nuevo más tarde.");
        });

    return false;
}



