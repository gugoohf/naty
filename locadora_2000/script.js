function validarForm() {
   
   // verifica código
   let validaCod = document.forms["cadastrar"]["codigo"].value

   if (validaCod == ""){
   	window.alert("O código deve ser preenchido");
    return false;
   }

   // verifica data
   let validaData = document.forms["cadastrar"]["data"].value;

   if (validaData == ""){
   	window.alert("A data deve ser preenchida");
   	return false;
   }

   // verifica título 
   let validaTit = document.forms["cadastrar"]["título"].value;

   if (validaTit == ""){
   	window.alert("O título deve ser preenchido").value;
   	return false;
   }

   // verifica diretor
   let validaDir = document.forms["cadastrar"]["diretor"].value;

   if (validaDir == ""){
   	window.alert("O diretor deve ser preenchido").value;
   	return false;
   }

   // valida gênero
   let validaGen = document.forms["cadastrar"]["radio"].value;

   if (validaGen == ""){
   	window.alert("O gênero deve ser selecionado").value;
   	return false;
   }

    // valida atriz/ator principal
   let validaAtor= document.forms["cadastrar"]["ator"].value;

   if (validaAtor == ""){
   	window.alert("O campo de atriz/ator deve ser selecionado").value;
   	return false;
   }

    // valida IMDb
   let validaIMDb = document.forms["cadastrar"]["radio"].value;

   if (validaIMDb == ""){
   	window.alert("A nota IMDb deve ser preenchida");
   	return false;
   }
}