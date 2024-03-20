const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");
const copiar= document.querySelector(".btn-copiar")


function btnEncriptar(){
  const textoEncriptado = encriptar(textArea.value);
  mensagem.value = textoEncriptado;
  textArea.value = "";
}

function btnCopiar(){
  navigator.clipboard.writeText(mensagem.value);
  alert("Seu texto foi copiado com sucesso , cole no local desejado !")
  mensagem.value = "";
};



  // const textoSelecionado = encriptar(mensagem.value);
  // copiar = textoSelecionado;
  // copiar.getSelectedText();
  // copiar = ""  

function encriptar(stringEncriptada){

  let matrizCodigo = [["e" , "enter"],["i" , "imes"],["a" , "ai"],["o" , "ober"],["u" , "ufat"],];
  stringEncriptada = stringEncriptada.toLowerCase();
  for(let i = 0; i < matrizCodigo.length; i++){
      if(stringEncriptada.includes(matrizCodigo[i][0])){
      stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }
  return stringEncriptada
}

function btnDesencriptar(){
  const textoDesencriptado = desencriptar(textArea.value); //mudei aqui mensagem
  mensagem.value = textoDesencriptado;
  textArea.value = "";

}

function desencriptar(stringDesencriptada){

  let matrizCodigo = [["e" , "enter"],["i" , "imes"],["a" , "ai"],["o" , "ober"],["u" , "ufat"],];
  stringDesencriptada = stringDesencriptada.toLowerCase();
  for(let i = 0; i < matrizCodigo.length; i++){
      if(stringDesencriptada.includes(matrizCodigo[i][1])){
      stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
  }
  return stringDesencriptada
}
