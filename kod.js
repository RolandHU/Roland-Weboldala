var szel = window.innerWidth;
var borito = document.getElementById("borito");

window.addEventListener("resize", tortenes);

function tortenes() {
    szel = window.innerWidth;
    console.log(window.innerWidth)
    if (szel > 1920) {
        borito.style.height = "500px";
    } else if (szel <= 1920 && szel > 695) {
        borito.style.height = "400px";
    } else if (szel <= 695 && szel > 520) {
        borito.style.height = "300px";
    } else if (szel <= 520 && szel > 360) {
        borito.style.height = "200px";
    } else if (szel <= 360) {
        borito.style.height = "100px";
    }
}