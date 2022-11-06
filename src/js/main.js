const LeraBtn = document.querySelector('.button_true');
const modal = document.querySelector('.helloPopUP');
const body = document.querySelector('.body');

LeraBtn.onclick = () => {
    modal.classList.add('none');
    body.classList.remove('blur');
}