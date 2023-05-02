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
const GalleryCards = document.querySelector('.gallery__cards');
const template = document.querySelector('.template');
const createGallery = (cardName) => {
    const li = template.content.querySelector('.gallery__card').cloneNode(true);
    li.querySelector('.gallery__heading').textContent=cardName.name;
    li.querySelector('.gallery__image').setAttribute('src', cardName.link);
    return li;
};
const liList = initialCards.map((cardName) => {
    const cardElement = createGallery(cardName);
    return cardElement;
});
const renderGallery = (cardName) => {
    GalleryCards.prepend(createGallery(cardName));
};
GalleryCards.append(...liList);
let FormAddCardElement = document.querySelector("form[name='form-new-place']");
let placeInput = FormAddCardElement.querySelector('.popup__input_data_place');
let linkInput = FormAddCardElement.querySelector('.popup__input_data_link');
const submitFormHandler = (event) => {
    event.preventDefault();
    const cardName = {
       name: placeInput.value,
       link: linkInput.value
    };
    renderGallery(cardName);
    togglePopupNewCardVisibility();
};
FormAddCardElement.addEventListener('submit', submitFormHandler);
const galleryButtonDeleteList = document.querySelectorAll('.gallery__delete');
galleryButtonDeleteList.forEach(function(galleryButtonDeleteElement){
    galleryButtonDeleteElement.addEventListener('click', (event)=>{
        let deletecard = event.target.closest('.gallery__card');
        deletecard.remove();
    });
});
const popupList = document.querySelectorAll('.popup');
const popupEditElement = document.querySelector('.popup_type_edit');
const popupNewCardElement = document.querySelector('.popup_type_new-card');
const popupImageElement = document.querySelector('.popup_type_image');
const popupCloseButtonList = document.querySelectorAll('.popup__button-close');
const popupOpenButtonEditElement = document.querySelector('.profile__button-edit');
const popupOpenButtonAddElement = document.querySelector('.profile__button-add');
const galleryLikeLists = document.querySelectorAll('.gallery__like');
const popupOpenButtonImageList = document.querySelectorAll('.gallery__image');
const togglePopupEditVisibility = function () {
    popupEditElement.classList.toggle('popup_opened');
};
const togglePopupNewCardVisibility = function () {
    popupNewCardElement.classList.toggle('popup_opened');
};
const addPopupImageVisibility = function () {
    popupImageElement.classList.toggle('popup_opened');
};
let popupCaption = popupImageElement.querySelector('.popup__caption');
popupOpenButtonImageList.forEach(function (popupOpenButtonImageElement) {
    popupOpenButtonImageElement.addEventListener('click', (event) => {
        let placeHeading = event.target.closest('.gallery__card');
        popupCaption.textContent = placeHeading.textContent;
        addPopupImageVisibility();
    });
});
popupCloseButtonList.forEach(function (popupCloseButtonElement) {
    popupCloseButtonElement.addEventListener('click', () => {
        popupList.forEach(function (popup) {
            popup.classList.remove('popup_opened');
        });
    });
});
popupOpenButtonAddElement.addEventListener('click', togglePopupNewCardVisibility);
let formElement = document.querySelector("form[name='form-profile']");
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
