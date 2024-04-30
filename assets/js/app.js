document.addEventListener('DOMContentLoaded', function() {
    const menuBurger = document.querySelector('.menu-burger');
    const modalContainer = document.querySelector('.modal-container');
    const closeBtn = document.querySelector('.close-btn');

    function openModal() {
        modalContainer.classList.add('visible');
    }

    function closeModal() {
        modalContainer.classList.remove('visible');
    }

    menuBurger.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
});
