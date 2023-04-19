# Проект: Место
Проектная работа по результатам обучения 4 сплита
Данная работа выложена на GitHub Pages и её можно посмотреть по ссылке https://dmitriyma85.github.io/mesto/
------
### Страница сайта где представлена информация по интересным местам России (страница выполнена на русском языке)
1. *Профиль путешествинника (имя и проффессия)*
2. *Фотография Карачаевска*
3. *Фотография горы Эльбрус*
4. *Фотография Домбай*

Для оформления данного проекта мною была выполнена адаптивная верстка для двух размеров экрана 320px и 1280px, применив способ верстки Mobile First, и использованы следующие техники:
1. Подключение шрифтов
```css
@font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    src: url("../fonts/Inter-Regular.woff2") format("woff2"),
        url("../fonts/Inter-Regular.woff") format("woff"),
        url("../fonts/Inter-Regular.ttf") format("truetype");
}
```
2. Изменения свойства элемента при наведении на него курсора мыши 
```css 
.profile__button-edit:hover {
    opacity: .6;
}
```
3. Применение кода в JS для открытия/закрытия поля ввода и измененя значения данных полей
```js
const togglePopupVisibility = function () {
    popupElement.classList.toggle('popup_opened');
};
```
4. Использования технологии Grid
```css
.gallery__cards {
    width: 68.75vw;
    min-width: 282px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 282px);
    margin-top: 36px;
    padding-left: 0;
    justify-content: center;
    row-gap: 20px;
    column-gap: 17px;
    overflow: hidden;
}
```
5. Оформление структуры файлов по БЭМ
6. Создание и форматирование документов в Git, вкдючая работку с веткамию, применив проффесиональную работу с ветками в общем виде


Планы по доработки:
1. Создание новых страниц и взаимодействий между друг другом.
2. Добавление кода в JS для передачи информации на сервер.