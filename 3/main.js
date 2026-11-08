import { changeText } from "./domUils.js";

// Змінюємо текст HTML-елементів
changeText(
    "message",
    "Текст успішно змінено за допомогою ES6-модуля!"
);

changeText(
    "status",
    "Модуль DOM успішно підключений та працює!"
);

// Обробник кнопки
const button = document.getElementById("changeButton");

button.addEventListener("click", function () {
    changeText(
        "message",
        "Ви натиснули кнопку! Текст змінено повторно."
    );

    changeText(
        "status",
        "Функція changeText() працює правильно!"
    );
});