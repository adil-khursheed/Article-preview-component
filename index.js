const modal = document.querySelector(".share-modal");
const shareBtn = document.querySelector(".btn");

shareBtn.addEventListener("click", () => {
    modal.classList.toggle("active");
})