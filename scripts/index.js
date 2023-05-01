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
initialCards.forEach((cardName) => {
    const li = document.createElement('li');
    li.classList.add('gallery__card');
    const buttonDelete = document.createElement('button');
    buttonDelete.type = 'button';
    buttonDelete.classList.add('gallery__delete');
    const img = document.createElement('img');
    img.classList.add('gallery__image');
    img.setAttribute('src',cardName.link);
    img.alt = 'Изображение местности';
    const div = document.createElement('div');
    div.classList.add('gallery__text');
    const heading = document.createElement('h2');
    heading.classList.add('gallery__heading');
    heading.textContent = cardName.name;
    const buttonLike = document.createElement('button');
    buttonLike.type= 'button';
    buttonLike.classList.add('gallery__like');
    div.append(heading,buttonLike);
    li.append(buttonDelete,img,div);
    GalleryCards.append(li);
})
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
