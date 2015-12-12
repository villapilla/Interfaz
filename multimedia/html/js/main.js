var reproduccion;

function $(selector) {
	return document.getElementById(selector);
}
function avanzaBarra() {
    var width = $("barra").clientWidth,
        video = $("video");
    $("progreso").style.width = Math.floor((video.currentTime / video.duration) * width) + "px";
}
function barraReproduccion() {
    reproduccion = setInterval(avanzaBarra, 100);
}
function cambiarMomentoRep(ev) {
    var width = this.clientWidth,
        video = $("video"),
        posX = ev.pageX - this.offsetLeft - $("reproductor").offsetLeft;
    video.currentTime = (posX / width) * video.duration;
    $("progreso").style.width = posX + "px";
}
function restart() {
    $("play").style.backgroundPosition = "0 0";
    $("progreso").style.width ="0";
}
function play() {
    var video = $("video") ;
    if(video.paused) {
        video.play();
        $("play").style.backgroundPosition = "33% 0";
    } else {
        clearInterval(reproduccion);
        video.pause();
        $("play").style.backgroundPosition = "0 0";
    }
}
function volumenMas() {
    if($("video").volume === 1) {
        $("video").volume = 1;
    } else {
        $("video").volume += 0.1;
    }
}
function volumenMenos() {
    if($("video").volume) {
        $("video").volume -= 0.1;
    } else {
        $("video").volume = 0;
    }
}
function cargaEventos() {
    $("video").addEventListener("click", play, false);
    $("play").addEventListener("click", play, false);
    $("barra").addEventListener("click", cambiarMomentoRep, false);
    $("volumenMas").addEventListener("click", volumenMas, false);
    $("volumenMenos").addEventListener("click", volumenMenos, false);
    $("video").addEventListener("ended", restart, false);
    $("video").addEventListener("playing", barraReproduccion, false);
    $("progreso").style.width = 0;
}
window.onload = cargaEventos;
