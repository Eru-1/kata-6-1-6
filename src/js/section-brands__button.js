// КНОПКА 2 (в секции брендов)
let allContentButtonBrands = document.querySelector(".slider-1");
let openButtonBrands = document.querySelector(".show-more");
let textButtonBrands = document.querySelector(".show-more-text");
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
