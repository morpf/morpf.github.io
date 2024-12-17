function openPopup() {
    var popup = document.querySelector('.popup');
    var overlay = document.querySelector('.overlay');
    popup.style.display = 'flex';
    overlay.style.display = 'block';

}

function closePopup() {
    popup.style.display = 'none';
    var popup = document.querySelector('.popup');
    var overlay = document.querySelector('.overlay');
    overlay.style.display = 'none'
}