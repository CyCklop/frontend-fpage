function obtenerNumAleatorio() {
    let min = Math.ceil(15);
    let max = Math.floor(35);

    let resultado = Math.floor(Math.random() * (max - min) + min);

    document.getElementById("mostrar-descuentos").innerHTML = ("!Articulos en descuento: ") + resultado + ("!");
}

obtenerNumAleatorio();