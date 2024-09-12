/* este codigo es para el funcionamiento del acordion */
/* const accordionItems = document.querySelectorAll('.acordionSection');

    accordionItems.forEach(item => {
        const acordion = item.querySelector('.acordionItem');

        acordion.addEventListener('click', () => {
            item.classList.toggle('abierto');
        });
}); */

const buttons = document.querySelectorAll(".filterButton");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    buttons.forEach((btn) => (btn.style.backgroundColor = ""));

    event.target.style.backgroundColor = "#e3dede"; // Color nuevo
  });
});
