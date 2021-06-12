var szel = window.innerWidth;
var borito = document.getElementById("borito");
borito.style.height = (szel / 4) + "px";

window.addEventListener("resize", tortenes);

function tortenes() {
    szel = window.innerWidth;
    console.log(window.innerWidth)
    borito.style.height = (szel / 4) + "px";
}