"use strict"
const boxs = document.querySelector('.form');
document.addEventListener("click", box);
function box(event) {
   if (event.target.closest('.form__button')) {
      boxs.classList.toggle('_active');
   }
   if (!event.target.closest('.form')) {
      boxs.classList.remove('_active');
   }
}
document.addEventListener("keyup", push);
function push(event) {
   if (event.code === "Escape") boxs.classList.remove("_active");
}
const boxForm = document.querySelector('.box-form');
const boxLength = boxForm.getAttribute('maxlength');
const boxSymbol = document.querySelector('.form__symbol span');
boxSymbol.innerHTML = boxLength;
boxForm.addEventListener('keyup', symbol);
boxForm.addEventListener('keydown', function (event) {
   if (event.repeat) symbol();
});
function symbol(e) {
   const symbolResult = boxLength - boxForm.value.length;
   boxSymbol.innerHTML = symbolResult;
}