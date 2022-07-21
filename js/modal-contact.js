const btnContact = document.querySelector('.contact-phone');
const exitContact = document.querySelector('.modal-header-icon-exit');
const modal = document.querySelector('.js-modal');
const modalContainer = document.querySelector('js-modal-container');

function showContact(){
    modal.classList.add('open');
}

function hideContact(){
    modal.classList.remove('open');
}

btnContact.addEventListener('click',showContact);

exitContact.addEventListener('click',hideContact)

        // modal.addEventListener('click',hideContact)

        // ẩn chế độ nổi bọt (từ container, nêu không tắt 
        // => click vào khung modal vẫn sẽ chạy funtion hideBuyTickets)
modalContainer.addEventListener('click', function(event){
    event.stopPropagation()
})