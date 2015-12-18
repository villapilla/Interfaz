function $(id) {
  return document.getElementById(id);
}
function takePhoto() {
    var canvas = $("dibujo"),
        imagen = $("imagen"),
        context = canvas.getContext("2d");
    context.drawImage($("video"), 0, 0, canvas.width, canvas.height);
    imagen.width = canvas.width / 6;
    imagen.height = canvas.height / 6;
    imagen.src = canvas.toDataURL();
}
function init() {
    var canvas = $("dibujo");
    var p = navigator.mediaDevices.getUserMedia({ audio: false, video: true });

    p.then(function(mediaStream) {
         var video = document.querySelector('video');
         video.src = window.URL.createObjectURL(mediaStream);
         video.onloadedmetadata = function(e) {
            canvas.width = video.clientWidth;
            canvas.height = video.clientHeight;
            canvas.addEventListener("click", takePhoto, false);
         };
    });
}
window.onload = init;