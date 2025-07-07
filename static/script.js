document.addEventListener("DOMContentLoaded", function () {
    // Бургер меню
    const burgerMenu = document.querySelector(".burger-menu");
    const nav = document.querySelector(".nav");
    
    burgerMenu.addEventListener("click", () => {
        burgerMenu.classList.toggle("active");
        nav.classList.toggle("active");
        document.body.classList.toggle("no-scroll");
    });

    // Закрытие меню при клике на ссылку
    nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            burgerMenu.classList.remove("active");
            nav.classList.remove("active");
            document.body.classList.remove("no-scroll");
        });
    });

    // Слайдер
    const buttons = document.querySelectorAll(".btn-switch");
    const mapLeft = document.querySelector(".map-left");
    const mapRight = document.querySelector(".map-right");
  
    // Устанавливаем начальное состояние
    buttons[0].classList.remove("disabled"); // Активируем первую кнопку
    buttons[1].classList.add("disabled"); // Деактивируем вторую кнопку
    mapRight.classList.add("dark"); // Затемняем правую часть
    mapLeft.classList.remove("dark"); // Осветляем левую часть
  
    buttons.forEach((button, index) => {
      button.addEventListener("click", () => {
        // Убираем класс "disabled" у всех кнопок и добавляем неактивным
        buttons.forEach((btn) => btn.classList.add("disabled"));
        button.classList.remove("disabled");
  
        // Логика переключения темной области
        if (index === 0) {
          // Если нажата первая кнопка → затемняем ПРАВУЮ сторону
          mapRight.classList.add("dark");
          mapLeft.classList.remove("dark");
        } else {
          // Если нажата вторая кнопка → затемняем ЛЕВУЮ сторону
          mapLeft.classList.add("dark");
          mapRight.classList.remove("dark");
        }
      });
    });
  });
  