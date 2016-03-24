angular.module("Forca", []).controller("jogo", function($scope) {

//#Region "Atributos"
var palavraSortiada = [
  "Corinthians","Uruguai","Indepiendente ARG","Roberto Dinamite","Flamengo",
  "Atletico MG"
];
var pergPalavra=["Qual time paulista com maior títulos estaduais ?",
"Qual seleção da américa do sul já conquistou uma copa do mundo ?",
"Qual time que mais vezes conquistou a libertadores da américa ? ",
"Qual é o mair artilheiro da história do campeonato brasileiro ?",
"Qual time carioca já conquistou o campeonato mundial ?",
"Qual foi o 1° time a consquistar o campeonato brasileiro ?"];

var numeroSorteado  = Math.floor(Math.random()*palavraSortiada.length);
var palavra = palavraSortiada[numeroSorteado];
$scope.pergunta = pergPalavra[numeroSorteado];
$scope.cont = 0;
var contVencedor = 0;
var valida = false;
$scope.palavraSecreta = new Array(palavra.length);
$scope.teclaForca=["A","B","C","D","E","F",
                   "G","H","I","J","K","L",
                   "M","N","O","P","Q","R",
                   "S","T","Ç","U","V","W",
                   "X","Y","Z"];
var valor=[];
//#End Region "Atributos"


//#Region "Funções"

for (i = 0; i < palavra.length; i++) {
  $scope.palavraSecreta[i] = "_ ";
  if (palavra[i] == (" ")) {
      contVencedor++;
  }
}
$scope.digitar = function(letra,$index) {
  valor[$index] = letra;
  for (i = 0; i < palavra.length; i++) {
    if (angular.lowercase(palavra[i]) == angular.lowercase(letra)) {
      $scope.palavraSecreta[i] = letra;
       valida = true;
       contVencedor++;
    }
    if (contVencedor == palavra.length){
       $("#vencedor").modal("show");
       break;
    }
  }
  if (valida == false) {
    $scope.cont++;
  }
  if ($scope.cont == 6) {
    $("#perdedor").modal("show");
  }
  valida = false;
  TrocarImgForca();
}

function TrocarImgForca() {
  switch ($scope.cont) {
    case 1:document.getElementById("imgForca").src = 'img/cabeca.gif';
    break;
    case 2:document.getElementById("imgForca").src = 'img/corpo.gif';
    break;
    case 3:document.getElementById("imgForca").src = 'img/bracoD.gif';
    break;
    case 4:document.getElementById("imgForca").src = 'img/bracoE.gif';
    break;
    case 5:document.getElementById("imgForca").src = 'img/peD.gif';
    break;
    case 6:document.getElementById("imgForca").src = 'img/peE.gif';
    break;

  }
}

$scope.reloadPagina = function(){
  window.location.reload();
}
$scope.isDisabled = function(letra){
  for (var i = 0; i < 27; i++) {
    if (valor[i] == letra) {
      return true;
    }if (contVencedor == palavra.length) {
      return true;
    }if ($scope.cont == 6) {
      return true;
    }
  }
  return;
}
//End Region "Funções"
});
