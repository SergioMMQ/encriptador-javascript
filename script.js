const textArea = document.querySelector(".text-area")
const mensaje = document.querySelector(".mensaje")
const text = document.querySelector(".texto")
const textodos = document.querySelector(".textodos")
const copyButton = document.querySelector(".copiar");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
    text.style.color = "white"
    textodos.style.color = "white"
}


function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    text.style.color = "white"
    textodos.style.color = "white"
    mensaje.style.backgroundImage = "none"
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}

copyButton.addEventListener("click", () => {
    const mensajeValue = mensaje.value;

    const copyText = mensajeValue;

    navigator.clipboard.writeText(copyText)
        .then(() => {
            console.log('Texto copiado al portapapeles');
        })
        .catch((error) => {
            console.error('Error al copiar el texto: ', error);
        });

});