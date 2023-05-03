const galleryCards = document.querySelector('.gallery__cards');
const template = document.querySelector('.template');
const createGallery = (cardName) => {
    const li = template.content.querySelector('.gallery__card').cloneNode(true);
    li.querySelector('.gallery__heading').textContent = cardName.name;
    li.querySelector('.gallery__image').setAttribute('src', cardName.link);
    li.querySelector('.gallery__image').addEventListener('click', (event) => {
        const placeImage = event.target.closest('.gallery__card').querySelector('.gallery__image');
        const placeHeading = event.target.closest('.gallery__card').querySelector('.gallery__heading');
        popupCaption.textContent = placeHeading.textContent;
        popupLink.setAttribute('alt', placeHeading.textContent);
        popupLink.setAttribute('src', placeImage.src);
        popupOpen(popupImageElement);
    });
    li.querySelector('.gallery__delete').addEventListener('click', () => {
        li.remove();
    });
    li.querySelector('.gallery__like').addEventListener('click', () => li.querySelector('.gallery__like').classList.toggle('gallery__like_active'));//Выставление "лайков"
    return li;
}; // Создание 6 карточек из массива
const liList = initialCards.map((cardName) => {
    const cardElement = createGallery(cardName);
    return cardElement;
});
const renderGallery = (cardName) => {
    galleryCards.prepend(createGallery(cardName));
};
galleryCards.append(...liList);
const formAddCardElement = document.querySelector("form[name='form-new-place']");
let placeInput = formAddCardElement.querySelector('.popup__input_data_place');
let linkInput = formAddCardElement.querySelector('.popup__input_data_link');
const submitFormHandler = (event) => {
    event.preventDefault();
    const cardName = {
        name: placeInput.value,
        link: linkInput.value
    };
    placeInput.value = '';
    linkInput.value = '';
    renderGallery(cardName);
    popupClose(popupNewCardElement);
}; // Функция по созданию новой карточки
formAddCardElement.addEventListener('submit', submitFormHandler);// Присвоение данной функции кнопке "Создать"
formAddCardElement.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        renderGallery(cardName);
        popupClose(popupNewCardElement);
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
const popupOpen = function (popupOpenElement) {
    popupOpenElement.classList.add('popup_opened');
};
const popupClose = function (popupCloseElement) {
    popupCloseElement.classList.remove('popup_opened');
};
const popupLink = popupImageElement.querySelector('.popup__image');
const popupCaption = popupImageElement.querySelector('.popup__caption');
popupCloseButtonList.forEach(function (popupCloseButtonElement) {
    popupCloseButtonElement.addEventListener('click', (event) => {
        const popup = event.target.closest('.popup');
        popupClose(popup);
    });
});// Функция которая задает, что все крестики закрывают окна popup
popupOpenButtonAddElement.addEventListener('click', () => popupOpen(popupNewCardElement));
let formElement = document.querySelector("form[name='form-profile']");
let nameInput = formElement.querySelector('.popup__input_data_name');
let jobInput = formElement.querySelector('.popup__input_data_job');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
const addInputData = function () {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    popupOpen(popupEditElement);
};// Функция которая задает, что в окне редактирования профиля будут значения из текущего значения профиля
popupOpenButtonEditElement.addEventListener('click', addInputData);
function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popupClose(popupEditElement);
};// Функция редактирования профиля 
formElement.addEventListener('submit', handleFormSubmit);
formElement.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        profileName.textContent = nameInput.value;
        profileJob.textContent = jobInput.value;
        popupClose(popupEditElement);
    }
});//Срабатывание и закрытие формы редактирования профиля при нажатии кнопки Enter
