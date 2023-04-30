const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
const popupList = document.querySelectorAll('.popup');
const popupEditElement = document.querySelector('.popup_type_edit');
const popupNewCardElement = document.querySelector('.popup_type_new-card');
const popupImageElement = document.querySelector('.popup_type_image');
const popupCloseButtonList = document.querySelectorAll('.popup__button-close');
const popupOpenButtonEditElement = document.querySelector('.profile__button-edit');
const popupOpenButtonAddElement = document.querySelector('.profile__button-add');
const galleryLikeLists = document.querySelectorAll('.gallery__like');
const popupOpenButtonImageElement = document.querySelector('.gallery__image');
const togglePopupEditVisibility = function () {
    popupEditElement.classList.toggle('popup_opened');
};
const togglePopupNewCardVisibility = function () {
    popupNewCardElement.classList.toggle('popup_opened');
};
const togglePopupImageVisibility = function () {
    popupImageElement.classList.toggle('popup_opened');
};
popupOpenButtonImageElement.addEventListener('click', togglePopupImageVisibility);
popupCloseButtonList.forEach(function (popupCloseButtonElement) {
    popupCloseButtonElement.addEventListener('click', () => {
        popupList.forEach(function (popup) {
            popup.classList.remove('popup_opened');
        });
    });
});
popupOpenButtonAddElement.addEventListener('click', togglePopupNewCardVisibility);
let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__input_data_name');
let jobInput = formElement.querySelector('.popup__input_data_job');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
const addInputData = function () {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    togglePopupEditVisibility();
}
popupOpenButtonEditElement.addEventListener('click', addInputData);
function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    togglePopupEditVisibility();
};
formElement.addEventListener('submit', handleFormSubmit);
formElement.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        togglePopupEditVisibility();
        profileName.textContent = nameInput.value;
        profileJob.textContent = jobInput.value;
    }
});
galleryLikeLists.forEach(function (galleryLikeElement) {
    galleryLikeElement.addEventListener('click', () => galleryLikeElement.classList.toggle('gallery__like_active'));
});
