const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__button-close');
const popupOpenButtonElement = document.querySelector('.profile__button-edit');
const togglePopupVisibility = function () {
    popupElement.classList.toggle('popup_opened');
};
popupCloseButtonElement.addEventListener('click', togglePopupVisibility);
let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__input_data_name');
let jobInput = formElement.querySelector('.popup__input_data_job');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
const addInputData = function () {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    togglePopupVisibility();
}
popupOpenButtonElement.addEventListener('click', addInputData);
function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    togglePopupVisibility();
};
formElement.addEventListener('submit', handleFormSubmit);
formElement.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        togglePopupVisibility();
        profileName.textContent = nameInput.value;
        profileJob.textContent = jobInput.value;
    }
});
