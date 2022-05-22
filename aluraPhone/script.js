let teclasTelefone = document.body.querySelectorAll('input[type = "button"]');
let telefone = [];

function digitarTel(digito){
 document.body.querySelector('input[type="tel"]').value += digito;
  telefone.push(digito);
}

for(const i in teclasTelefone){
  teclasTelefone[i].onclick = function(){
    digitarTel(teclasTelefone[i].value);
    console.log(telefone)
  };
}
