import "core-js/stable";
import "regenerator-runtime/runtime";

const shareBtnContainer = document.querySelector(
  ".author-container__share-btn"
);
const authorContainer = document.querySelector(".author-container");
const shareContainer = document.querySelector(".share-container");
const hideBtnContainer = document.querySelector(".share-container__hide-btn");

shareBtnContainer.addEventListener("click", function (e) {
  const shareBtn = e.target.closest(".author-container__share-btn");
  if (!shareBtn) return;
  authorContainer.classList.toggle("hidden");
  shareContainer.classList.toggle("hidden");
});

hideBtnContainer.addEventListener("click", function (e) {
  const hideBtn = e.target.closest(".share-container__hide-btn");
  if (!hideBtn) return;
  authorContainer.classList.toggle("hidden");
  shareContainer.classList.toggle("hidden");
});
