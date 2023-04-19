const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__button-edit');
const popupSafeButtonElement = popupElement.querySelector('.popup__safe');
const togglePopupVisibility = function () {
    popupElement.classList.toggle('popup_opened');
};
popupOpenButtonElement.addEventListener('click', togglePopupVisibility);
popupCloseButtonElement.addEventListener('click', togglePopupVisibility);
const galleryLikeElements = document.querySelectorAll('.gallery__like');
galleryLikeElements.forEach(function (item, index) {
    item.addEventListener('click', () => item.classList.toggle('gallery__like_active'))
});
let formElement = document.querySelector('.popup__container');
let nameInput = formElement.querySelector('.popup__data-name');
let jobInput = formElement.querySelector('.popup__data-profession');
let profileName = document.querySelector('h1');
let profileJob = document.querySelector('p');
function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
};
formElement.addEventListener('submit', handleFormSubmit);
popupSafeButtonElement.addEventListener('click', handleFormSubmit);
popupSafeButtonElement.addEventListener('click', togglePopupVisibility);
