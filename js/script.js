const mobileMenuButton = document.querySelector('.menu-open-btn');
const closeMenuButton = document.querySelector('.menu-close-btn');
const mobileMenu = document.querySelector('.mob-menu')

const heroBtn = document.querySelector('.hero-button')
const modalWindow = document.querySelector('.backdrop')
const closeModalWindow = document.querySelector('.modal-btn')

const submitModalForm = document.querySelector('.modal-send-btn')

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.add('is-open');
});

closeMenuButton.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
});

heroBtn.addEventListener('click', () => {
    modalWindow.classList.add('is-open');
});

closeModalWindow.addEventListener('click', () => {
    modalWindow.classList.remove('is-open');
});

const modalForm = document.querySelector(".modal-form");
modalForm.addEventListener("submit", onSubmitForm);
function onSubmitForm(event) {
    event.preventDefault();
    const name = event.target.elements.username.value;
    const phone = event.target.elements.tel.value;
    const email = event.target.elements.mail.value;
    if(email === "" || name === "" || phone === "") {
        return alert("All form fields must be filled in"); 
    }
    const trimmedValue = {
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim(),
    };
    console.log(trimmedValue);
    modalWindow.classList.remove('is-open');
    modalForm.reset();
}

const headerNavigationMenu = document.querySelector('.header-menu-list');
const currentLink = document.querySelector('.current');
const headerMenuLink = document.querySelector('.header-menu-link');

    headerNavigationMenu.addEventListener('click', clickOnHeader);
    function clickOnHeader(event) {
        event.target.classList.add('current');
        headerMenuLink.classList.remove('current');
        
    }
