// КНОПКА 1 (в секции мейн)
let showMoreButton = document.querySelector(".showMore");

showMoreButton.addEventListener("click", function () {
  let element = document.getElementById('text');
  if (element.style.maxHeight === '134.5px') {
      element.style.maxHeight = 'none';
      document.getElementById('showMore').innerText='Скрыть'
      document.getElementById('showMore').classList.toggle('close');
  } else {
      element.style.maxHeight = '134.5px';
      document.getElementById('showMore').innerText='Показать все'
      document.getElementById('showMore').classList.remove('close');
  }
})


