
const modalContainer = document.getElementById('modal-container');
const body = document.getElementsByTagName('body')[0];

function openModal(id){
    modalContainer.classList.add(id);
    body.classList.add('modal-active');
    modalContainer.classList.remove('out');
}

modalContainer.addEventListener('click', function(){
    modalContainer.classList.add('out');
    body.classList.remove('modal-active');
    modalContainer.classList.remove();
});