// Кнопка в шапке
document.getElementById("openForm").addEventListener("click", () => {
    alert("Форма находится внизу страницы 👇");
});

// Обработка формы
document.querySelector(".form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Сообщение отправлено! (пока не по-настоящему 😄)");
});
