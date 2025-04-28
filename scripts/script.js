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
                src: "images/туфли.jpg",
                name: "Туфли",
                href: "#"
            },
            card2: {
                src: "images/балетки.jpg",
                name: "Балетки",
                href: "#"
            },
            card3: {
                src: "images/босоножки.jpg",
                name: "Босоножки",
                href: "#"
            },
        };

        const createCard = (src, name, href) => {
            // Создаем переменную  card, которая будет содержать HTML-код карточки и вставляем туда 4 переменные
            const card = `
                    <div class="catalog__card">
                        <img class="catalog__image" src="${src}">
                        <h3 class="catalog__name">${name}</h3>
                        <a class="catalog__link" href=""${href}>СМОТРЕТЬ</a>
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

    //Задание 6
    //Объявляем переменную cardsImages и сохраняем в нее элементы секции catalog
    const cardsImages = document.querySelector(".new");
    //  проверяем существует ли элемент cardsImages, если он существует то переходим далее
    if (cardsImages) {
        //Объявляем переменную cardListImages и сохраняем в нее список с классом images__list, куда будут добавляться изображения
        const cardListImages = cardsImages.querySelector(".catalog__list");
        // Пример URL для получения данных с сервера (откуда загружаются данные)
        const apiUrl = "images.json";
        // Функция для создания карточки
        // объявляем функцию, принимает 3 параметра catalog__imageUrl, catalog__imageAlt, catalog__imageWidth

        const createCard = (imageUrl, imageAlt, imageWidth, name, color, span) => {
            // создается переменная image, которая содержит HTML-код для карточки изображения. Внутри <li> (элемента списка) создаются два элемента <img>:
            // 1) Первое изображение (imageUrl[0]) отображается по умолчанию.
            //2) Второе изображение (imageUrl[1]) скрыто изначально с помощью стиля style="display: none;". Это изображение будет показано при клике.
            const image = `
            <div class="catalog__card">
                <img class="catalog__picture" src="${imageUrl[0]}" alt="${imageAlt}" width="${imageWidth}">
                    <img class="catalog__picture" src="${imageUrl[1]}" alt="${imageAlt}" width="${imageWidth}" style="display: none;">
                <h3 class="catalog__name">${name}</h3>
                <p class="catalog__color">Цвет: ${color}</p>
                <span>${span}</span>
                <button class="catalog__item" type="button">♡</button>
                <a class="catalog__links" href="#">Перейти к товару</a>
            </div>
            `;
            //возвращает строку image, которая содержит HTML-код для карточки изображения
            return image;
        };
        // Запрос к серверу с помощью метода fetch
        fetch(apiUrl)
            // После того как запрос выполнен, возвращается объект Response, где вызывается метод json(), который преобразует ответ в формат JSON
            .then((response) => response.json())
            //получение данных 
            .then((images) => {
                console.log(images); // Вывод данных в консоль
                console.log(typeof images); // Вывод в консоль Типа полученных данных

                images.forEach((item) => {
                    // создается переменная cardElement, где для каждого элемента массива вызывается функция createCard и передаются параметры
                    const cardElement = createCard(
                        item.imageUrl,
                        item.imageAlt,
                        item.imageWidth,
                        item.name,
                        item.color,
                        item.span
                    );
                    // Добавление карточки на страницу в список cardListImages  с помощью метода insertAdjacentHTML beforeend указывает, что карточка должна быть добавлена в конец списка
                    cardListImages.insertAdjacentHTML("beforeend", cardElement);
                });
                //СЮДА ВСТАВЬТЕ КОД ИЗ П 6. «Добавление обработчика событий для переключения изображений при клике на них»
                //Объявляем переменную pictures и сохраняем в нее все изображения с классом images__picture 
                const pictures = document.querySelectorAll(".catalog__picture");
                if (pictures) {
                    // Пройдемся по каждому элементу массива pictures, с помощью цикла forEach. 
                    pictures.forEach((picture) => {
                        //добавляем обработчик события клика по изображению:
                        picture.addEventListener("click", () => {
                            // получаем родительский элемент текущего изображения
                            const parentItem = picture.parentElement;

                            // Получаем все изображения в родительском элементе, для того чтобы работать только с изображениями, которые находятся в одной карточке
                            const parentPictures =
                                parentItem.querySelectorAll(".catalog__picture");

                            // проходимся по всем изображениям, найденным в карточке
                            parentPictures.forEach((parentPictures) => {
                                //проверка условия если на текущее изображение не кликали, то оставляем это изображение видимым, иначе скрываем
                                if (parentPictures !== picture) {
                                    parentPictures.style.display = "block"; // Показываем другое изображение
                                } else {
                                    parentPictures.style.display = "none"; // Скрываем текущее изображение
                                }
                            });
                        });
                    });

                }
            })
    }
    //Объявляем переменную preloader и сохраняем в нее блок с классом .preloader
    const preloader = document.querySelector(".preloader");
    //Объявляем переменную content и сохраняем в нее блок с классом .content
    const content = document.querySelector(".content");

    //проверяем существуют ли эти блоки
    if (preloader && content) {
        // функция, которая позволяет выполнять код через определенный промежуток времени.
        setTimeout(() => {
            // Скрываем предзагрузчик
            preloader.style.opacity = "0";
            preloader.style.visibility = "hidden";

            // и показываем контент
            content.style.display = "block";

            // Удаляем элемент предзагрузчика со страницы
            preloader.remove();
        }, 3000); // Задержка 3 секунды
    }

});
