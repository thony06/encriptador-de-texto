const textArea=document.querySelector(".text-area");
const mensaje=document.querySelector(".mensaje");

function validarTxt(texto){
    const regex = /^[a-z\s]+$/;
    return regex.test(texto);
}
function btnEncript(){
    if(validarTxt(textArea.value)){
        const textoEncript=encriptar(textArea.value);
        mensaje.value=textoEncript;
        textArea.value="";
        mensaje.style.backgroundImage="none";
    }
    else{
        mensaje.value="Ingrese texto valido";
        textArea.value="";
        mensaje.style.backgroundImage="none";
    }
    
}
function btnDesencript(){
    const textoEncript=desencriptar(textArea.value);
    mensaje.value=textoEncript;
    textArea.value="";
    mensaje.style.backgroundImage="none";
}

function encriptar(strEncript){
    let matriz=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    strEncript=strEncript.toLowerCase();
    for(let i=0;i<matriz.length;i++){
        if(strEncript.includes(matriz[i][0])){
            strEncript=strEncript.replaceAll(matriz[i][0],matriz[i][1]);
        }
    }
    return strEncript;
}

function desencriptar(strEncript){
    let matriz=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    strEncript=strEncript.toLowerCase();
    for(let i=0;i<matriz.length;i++){
        if(strEncript.includes(matriz[i][0])){
            strEncript=strEncript.replaceAll(matriz[i][1],matriz[i][0]);
        }
    }
    return strEncript;
}

function btnCopia() {
    mensaje.select();
    document.execCommand("copy");

}

  
