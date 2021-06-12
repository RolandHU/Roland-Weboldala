var szel = window.innerWidth;
var borito = document.getElementById("borito");

if (szel <= 695 && szel > 520) {
    borito.style.height = "300px";
} else if (szel <= 520 && szel > 360) {
    borito.style.height = "200px";
} else if (szel <= 360) {
    borito.style.height = "100px";
}