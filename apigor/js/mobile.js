"use strict";

/*Mobile navigation*/

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector("header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

/* Set current year */
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

/*Cookie message*/

if (!localStorage.cookies_accepted) {
  const main = document.querySelector("main");
  const message = document.createElement("div");
  message.classList.add("cookie-message");
  message.innerHTML =
    '<span>W celu świadczenia usług na najwyższym poziomie stosujemy pliki cookies, które będą zamieszczane w Państwa urządzeniu (komputerze, laptopie, smartfonie). W&nbsp;każdym momencie mogą Państwo dokonać zmiany ustawień Państwa przeglądarki internetowej i&nbsp;wyłączyć opcję zapisu plików cookies. Ze szczegółowymi informacjami dotyczącymi cookies na tej stronie można się zapoznać tutaj: <a href="polityka-prywatnosci.html" target="_blank">Polityka prywatności</a>.</span><button class="btn-close-cookie">Rozumiem</button>';
  main.after(message);
  document
    .querySelector(".btn-close-cookie")
    .addEventListener("click", function () {
      localStorage.cookies_accepted = true;
      message.remove();
    });
}
