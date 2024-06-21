function cambiar(elemento){
    elemento.innerText = "Pedido realizado";
}
function eliminar(elemento3){
    elemento3.remove()}

///////////////////////

let boton3 = document.getElementById("boton3");
let contado3 = document.getElementById("contado3")


var share = 0;
boton3.addEventListener("shares",function(){
    share++;
    contado3.textContent = share + "Share";
});


////////////////////
const likeButtons = document.querySelectorAll('.likeButton');
const likeCountDisplays = document.querySelectorAll('.likeCount');

likeButtons.forEach((button, index) => {
  let likeCount = 0;

  button.addEventListener('click', function() {
    likeCount++;
    likeCountDisplays[index].textContent = likeCount;
  });
});

