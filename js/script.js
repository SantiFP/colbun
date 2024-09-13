/* este codigo es para el funcionamiento del acordion */
/* const accordionItems = document.querySelectorAll('.acordionSection');

    accordionItems.forEach(item => {
        const acordion = item.querySelector('.acordionItem');

        acordion.addEventListener('click', () => {
            item.classList.toggle('abierto');
        });
}); */

const buttons = document.querySelectorAll(".filterButton");
const cells = document.querySelectorAll(".openModal");
const modalContent = document.querySelector(".modal");
const modal = document.querySelector(".modal-overlay");
const closeModalButton = document.querySelector('.modalClose');

const closeModal = () => {
  modal.style.display = "none";
}

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

closeModalButton.addEventListener("click", closeModal);

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    modal.style.display = "flex";
  });
});


buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    buttons.forEach((btn) => (btn.style.backgroundColor = ""));

    event.target.style.backgroundColor = "#e3dede";
  });
});
