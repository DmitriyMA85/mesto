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
    li.querySelector('.gallery__heading').textContent = cardName.name;
    li.querySelector('.gallery__image').setAttribute('src', cardName.link);
    li.querySelector('.gallery__delete').addEventListener('click', () => {
        li.remove();
    });
    li.querySelector('.gallery__like').addEventListener('click',()=>li.querySelector('.gallery__like').classList.toggle('gallery__like_active'));//Выставление "лайков"
    return li;
}; // Создание 6 карточек из массива
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
}; // Функция по созданию новой карточки
FormAddCardElement.addEventListener('submit', submitFormHandler);// Присвоение данной функции кнопке "Создать"
FormAddCardElement.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        renderGallery(cardName);
        togglePopupNewCardVisibility();
    }
});// Создание новой карточки при нажатии кнопки Enter
const popupList = document.querySelectorAll('.popup');
const popupEditElement = document.querySelector('.popup_type_edit');
const popupNewCardElement = document.querySelector('.popup_type_new-card');
const popupImageElement = document.querySelector('.popup_type_image');
const popupCloseButtonList = document.querySelectorAll('.popup__button-close');
const popupOpenButtonEditElement = document.querySelector('.profile__button-edit');
const popupOpenButtonAddElement = document.querySelector('.profile__button-add');

const popupOpenButtonImageList = document.querySelectorAll('.gallery__image');
const togglePopupEditVisibility = function () {
    popupEditElement.classList.toggle('popup_opened');
};// Функция по переключению окна по редактированию профиля
const togglePopupNewCardVisibility = function () {
    popupNewCardElement.classList.toggle('popup_opened');
};// Функция по переключению окна по созданию новой карточки
const addPopupImageVisibility = function () {
    popupImageElement.classList.toggle('popup_opened');
};// Функция по переключению окна с увеличением картинки 
let popupLink = popupImageElement.querySelector('.popup__image');
let popupCaption = popupImageElement.querySelector('.popup__caption');
popupOpenButtonImageList.forEach(function (cardName) {
    cardName.addEventListener('click', (event) => {
        let placeImage = event.target.closest('.gallery__card').querySelector('.gallery__image');
        let placeHeading = event.target.closest('.gallery__card').querySelector('.gallery__heading');
        popupCaption.textContent = placeHeading.textContent;
        popupLink.setAttribute('src', placeImage.src);
        addPopupImageVisibility();
    });
});// Функция, которая выполняет увеличению именно той картинки на которую нажимаешь и добавления такой надписи
popupCloseButtonList.forEach(function (popupCloseButtonElement) {
    popupCloseButtonElement.addEventListener('click', () => {
        popupList.forEach(function (popup) {
            popup.classList.remove('popup_opened');
        });
    });
});// Функция которая задает, что все крестики закрывают окна popup
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
};// Функция которая задает, что в окне редактирования профиля будут значения из текущего значения профиля
popupOpenButtonEditElement.addEventListener('click', addInputData);
function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    togglePopupEditVisibility();
};// Функция редактирования профиля 
formElement.addEventListener('submit', handleFormSubmit);
formElement.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        togglePopupEditVisibility();
        profileName.textContent = nameInput.value;
        profileJob.textContent = jobInput.value;
    }
});//Срабатывание и закрытие формы редактирования профиля при нажатии кнопки Enter
