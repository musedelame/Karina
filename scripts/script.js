'use strict'

document.addEventListener("DOMContentLoaded",()  => {
    // * 1. Начало.
    // * 2. Нажатие на кнопку "Избранное".
    // * 3. Товар уже есть в "Избранном"?
    // *     3.1. Нет:
    // *           3.1.1. Добавить товар в "Избранное". Изменить цвет кнопки на красный. Увеличить счетчик.
    // *     3.2. Да:
    // *           3.2.1. Удалить товар из "Избранного". Изменить цвет кнопки на исходный. Уменьшить счетчик.
    // * 4. Конец.

    console.log('Скрипт отработал корректно')

    const like = document.querySelectorAll(".catalog__item");

    like.forEach((item) => {
        item.addEventListener('click', () => {
        console.log('Кликнули на item');
        if (item.classList.contains('catalog__item-red')) {
            item.classList.remove('catalog__item-red');
        } else {
            item.classList.add('catalog__item-red');
        }
    });
});

});
