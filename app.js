const encriptar = document.getElementById("btEncriptar");
const desencriptar = document.getElementById("btDesencriptar");
const copiar = document.getElementById("btCopiar");
const textoEncriptar = document.getElementById("textareaIzq");
const textoMensaje = document.getElementById("mensaje");
const muñeco = document.getElementById("muñeco");
const Info = document.getElementById("textoInfo");
const Dere = document.getElementById("Dere");

const remplace = (newvalue) => {
    textoMensaje.innerHTML = newvalue;
    textoMensaje.classList.add("ajustar");
    Dere.classList.add("ajuste");
    textoEncriptar.value = "";
    textoEncriptar.style.height = "auto";
    textoEncriptar.placeholder = "Ingrese el texto aquí";
    muñeco.classList.add("ocultar");
    Info.classList.add("ocultar");
    copiar.classList.remove("bt_ocultar");
}

const reset = () => {
    textoEncriptar.value = "";
    textoEncriptar.style.height = "auto";
    textoMensaje.innerHTML = "";
    Dere.classList.remove("ajuste");
    textoMensaje.classList.remove("ajustar");
    muñeco.classList.remove("ocultar");
    textoMensaje.placeholder = "Ningún mensaje fue encontrado";
    Info.classList.remove("ocultar");
    copiar.classList.add("bt_ocultar");
    textoEncriptar.focus();
}

let remplazo = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"]
]

encriptar.addEventListener('click', () => {
    const texto = textoEncriptar.value.toLowerCase();

    if (texto != "") {
        function encript(newtext) {
            for (let i = 0; i < remplazo.length; i++) {
                if (newtext.includes(remplazo[i][0])) {
                    newtext = newtext.replaceAll(remplazo[i][0], remplazo[i][1]);
                };
            };
            return newtext;
        };
        remplace(encript(texto));
    } else {
        swal("¡Oopps!", "Ingrese texto para encriptar", "warning");
        reset();
    };
});

desencriptar.addEventListener('click', () => {
    const texto = textoEncriptar.value.toLowerCase();

    if (texto != "") {
        function desencripter(newtext) {
            for (let i = 0; i < remplazo.length; i++) {
                if (newtext.includes(remplazo[i][1])) {
                    newtext = newtext.replaceAll(remplazo[i][1], remplazo[i][0]);
                };
            };
            return newtext;
        };
        remplace(desencripter(texto));
    } else {
        swal("¡Oopps!", "Ingrese texto para desencriptar", "warning");
        reset();
    };
});

copiar.addEventListener('click', () => {
    let texto = textoMensaje;
    texto.select();
    document.execCommand('copy');
    swal("¡COPIADO!", "Texto copiado al portapapeles", "success");
    reset();
});

textoEncriptar.addEventListener("change", e => {
    textoEncriptar.style.height = "auto";
    let scHeight = e.target.scrollHeigth;
    textoEncriptar.style.height = `${scHeight}px`;
});
textoEncriptar.addEventListener("keyup", e => {
    textoEncriptar.style.height = "auto";
    let scHeight = e.target.scrollHeigth;
    textoEncriptar.style.height = `${scHeight}px`;
})