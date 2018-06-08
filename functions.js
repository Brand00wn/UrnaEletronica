// ** Declaração de variáveis do sistema **
var branco=0; // Guarda o total de votos em branco //
var bolsonaro=0; // Guarda o total de votos do presidente 1 //
var lula=0; // Guarda o total de votos do presidente 2 //
var nulo=0; // Guarda o total de votos nulos //
var total=0; // Guarda o total de votos em geral //
// ** Fim da declaração de variáveis **

// ** Função central do sistema
function sis(event){
  audio = document.getElementById('audio'); // Guarda na seguinte variável o áudio setado na tag <audio> que se encontra dentro da tag <body> //
  var key = event.keyCode || window.event.keyCode; // Define o uso do evento keyCode, responsável pelo reconhecimento de teclas do teclado //
  // ** Verificação de teclas pressionadas e eventos atribuídos à elas **
  if (key == 13) { // Se a tecla ENTER for pressionada //
   if(document.getElementById('tela').value ==43){ // Verificação se o número digitado pelo usuário se refere ao candidato 1 //
     lula=lula+1; // Se sim ele soma mais um na variável do candidato 1 //
     total=total+1; // E na variável responsável pelo total de votos //
     document.getElementById('tela').value = ''; // Limpa a tela //
   }else{
     if(document.getElementById('tela').value ==10){ // Verificação se o número digitado pelo usuário se refere ao candidato 2 //
       bolsonaro=bolsonaro+1; // Se sim ele soma mais um na variável do candidato 2 //
       total=total+1; // E na variável responsável pelo total de votos //
       document.getElementById('tela').value = ''; // Limpa a tela //
     }else{
       if(document.getElementById('tela').value!='43' && '10'){ // Se o valor digitado for diferente do número de todos os candidatos //
         nulo=nulo+1; // Soma mais um na variável responsável pelos votos nulos //
         total=total+1; // E na variável responsável pelo total de votos //
         document.getElementById('tela').value = ''; // Limpa a tela //
       }
     }
   }

   audio.play(); // Reproduz o som da urna //
 }

 if(key == 116){ // Se a tecla F5 for pressionada //
   alert("A ATUALIZAÇÃO DE TELA FOI BLOQUEADA!!!"); // Um alert é acionado, desviando a função de refresh pela tecla citada acima. Obs.: Ctrl+F5 continua funcionando normalmente //
 }

 if(key == 27){ // Se a tecla ESC for pressionada //
   document.getElementById("screen").innerHTML = "<h1 style='margin-left: 20px;'>RESULTADOS<h1>  <br/>  <div class='bord'><div class'result'><ul style='list-style-type: none;'>  <li><H2 class='lab' style='color: green;'>Jair Bolsonaro(PSC): " +bolsonaro+ "</H2></li> <li><H2 class='lab' style='color: red;'>Luís Inácio Lula da Silva(PT): " +lula+ "</H2></li>  <li><H2 class='labb'>Votos em Branco: " +branco+ "</H2></li>  <li><H2 class='lab'>Votos Nulos: " +nulo+ "</H2></li>  </ul>"; // É mostrada a tela de resultados //
 }

 if(key == 17){ // Se a tecla CTRL for pressionada //
   branco=branco+1; // Contabiliza como um voto em branco //
   total=total+1; // Ainda assim entra para o total de votos //
   document.getElementById('tela').value = ''; // Limpa a tela //
   audio.play(); // Reproduz o som da urna //
   alert("Voto em branco!!"); // Alerta na tela que foi contabilizado um voto nulo //
 }

 if(key == 08){ // Se a tecla BACKSPACE for pressionada //
   document.getElementById('tela').value = ''; // Limpa a tela. OBS.: FUNÇÃO CORRIGE //
 }
// ** Fim da Verificação de teclas pressionadas e eventos atribuídos à elas ** //
} // ** Fim da função central do sistema ** ///
