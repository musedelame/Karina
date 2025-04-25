'use strict'

document.addEventListener("DOMContentLoaded", () => {
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




    const CatalogContainer = document.querySelector(".wear");
    if (CatalogContainer) {
        const dataTitleWear = [
            "Жакеты",
            "Юбки",
            "Костюмы"
        ];
        const titleWear =
            CatalogContainer.querySelectorAll(".catalog__name");
        titleWear.forEach((item, index) => {
            item.textContent = dataTitleWear[index];
        });
    }

    const welcоmeButtonModal = document.querySelector(".welcome__button");
    const modalApplication = document.querySelector(".applications");
    if (welcоmeButtonModal && modalApplication) {
        welcоmeButtonModal.addEventListener("click", () => {
            modalApplication.removeAttribute("hidden");
        });
    }
    window.addEventListener("click", (event) => {
        if (event.target === modalApplication) {
            modalApplication.setAttribute("hidden", true);
        }
    });
    const closeModalButton = document.querySelector(".application__close");
    closeModalButton.addEventListener("click", () => {
        modalApplication.setAttribute("hidden", true);
    });


    // Задание 5
    //Объявляем переменную cardsShoes и сохраняем в нее элемент с классом price
    const cardsShoes = document.querySelector('.shoes');

    // Если такой элемент существует
    if (cardsShoes) {
        //Объявляем переменную shoesList и сохраняем в нее элемент с классом shoes__list, чтобы мы могли добавить новые элементы
        // const shoesList = cardsShoes.querySelector('.shoes__list');

        //Создаем объект cardsShoesData, которая содержит данные для трех карточки.



        const cardsShoesData = {
            card1: {
                src: "/images/туфли.jpg",
                name: "Туфли",
                href: "#"
            },
            card2: {
                src: "/images/балетки.jpg",
                name: "Балетки",
                href: "#"
            },
            card3: {
                src: "/images/босоножки.jpg",
                name: "Босоножки",
                href: "#"
            },
        };

        const createCard = (src, name, href) => {
            // Создаем переменную  card, которая будет содержать HTML-код карточки и вставляем туда 4 переменные
            const card = `
                    <div class="catalog__card">
                        <img class="catalog__image">${src}</img>
                        <h3 class="catalog__name>${name}</h3>
                        <a class="catalog__link">${href}</a>
                    </div>
                `;
            //  Возвращаем значение переменной card
            return card;
        }
        // Создаем цикл for и проходим по всем элементам объекта cardsShoesData.
        for (const cardKey in cardsShoesData) {
            //Получаем данные одной карточки из объекта cardsShoesData 
            const card = cardsShoesData[cardKey];
            //создаем переменную cardElement и вызываем функцию createLink, куда передаем тариф, цену, описание и кнопку (то, из чего будет состоять ваша карточка).
            const cardElement = createCard(card.src, card.name, card.href);
            // с помощью метода insertAdjacentHTML добавляем созданный HTML-код в конец списка shoesList.
            cardsShoes.insertAdjacentHTML('beforeend', cardElement);
        }
    }


});


