function apenasNumeros() { //Apenas numeros (chama o elemento "ns" pelo id criando a var serie, cria um condicional se tamanho em caracteres da string igual a 3 colocar ".")

    var serie = document.getElementById("ns")    
    
       if(serie.value.length == 3){
           serie.value += "."
       }    

 }

 function isNumberKey(evt) // cria uma var que acessa o charcode, permitindo apenas caracteres numéricos mesmo tendo configurad o input como type text ambas funções isNumberKey e apenas números chamadas via return no onkeypress do input "ns"

 {
    var charCode = (evt.which) ? evt.which : KeyboardEvent.keyCode
    if (charCode != 46 && charCode > 31 
      && (charCode < 48 || charCode > 57))
       return false;

    return true;
 }







 var produtos = JSON.parse(localStorage.getItem("produtos")); //chama itens inseridos no array do cadastro no local storage convertendo para objeto

 if(produtos == null){
       produtos = [];
 }



 function salvar(){ //o método push adiciona um ou mais elementos ao final de um array (nesse caso 4) e retorna o novo comprimento desse array
         produtos.push({
         'ns': document.getElementById('ns').value,
         'pname' : document.getElementById('pname').value,
         'equip' : document.getElementById('equip').value,
         'carac' : document.getElementById('carac').value
     });

     const json_produtos = JSON.stringify(produtos); //converte o valor de produtos em uma JSON string

     localStorage.setItem("produtos", json_produtos); //adiciona os itens ao local storage
     }

 