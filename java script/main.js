let bar = document.getElementById("bar");
let links = document.getElementById("links");
let close = document.getElementById("close");
function openMenu() {
  links.style.right = "0";
}
function closeMenu() {
  links.style.right = "-300px";
}
// single image product
let mainImage = document.getElementById("show");
let smallImage = document.getElementsByClassName("s-image");

for (let i = 0; i < smallImage.length; i++) {
  smallImage[i].onclick = function () {
    mainImage.src = smallImage[i].src;
  };
}
 
