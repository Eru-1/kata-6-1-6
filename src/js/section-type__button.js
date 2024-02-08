// КНОПКА 3 (в секции типов)
let allContentButtonBrands = document.querySelector(".slider-2");
let openButtonBrands = document.querySelector(".show-more-type");
let textButtonBrands = document.querySelector(".show-more-typeText");
let checkBrands = false;

openButtonBrands.addEventListener("click", function (evt) {
  if (!checkBrands) {
    allContentButtonBrands.style.height = allContentButtonBrands.scrollHeight + "px";
    textButtonBrands.textContent = "Скрыть";
    openButtonBrands.classList.add("close-menu");
    checkBrands = true;
  } else {
    allContentButtonBrands.style.height = "164px";
    textButtonBrands.textContent = "Показать все";
    checkBrands = false;
    openButtonBrands.classList.remove("close-menu");
  }
});
