function changeHeart() {
    var image = document.getElementById('heart_img');
    if (image.src.match("images/unsaved.png")) {
        image.src = "images/saved.png";
    } else {
        image.src = "images/unsaved.png";
    }
}