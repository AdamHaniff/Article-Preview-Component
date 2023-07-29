import "core-js/stable";
import "regenerator-runtime/runtime";

const viewportWidth = window.innerWidth;
const shareBtnContainer = document.querySelector(
  ".author-container__share-btn"
);
const authorContainer = document.querySelector(".author-container");
const shareContainer = document.querySelector(".share-container");
const hideBtnContainer = document.querySelector(".share-container__hide-btn");
const shareContainerDesktop = document.querySelector(
  ".share-container-desktop"
);
const hideBtnContainerDesktop = document.querySelector(
  ".share-container-desktop__hide-btn"
);
let shareBtn;

if (viewportWidth <= 1439) {
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
} else {
  shareBtnContainer.addEventListener("click", function (e) {
    shareBtn = e.target.closest(".author-container__share-btn");
    if (!shareBtn) return;
    shareBtn.classList.toggle("hidden");
    shareContainerDesktop.classList.toggle("hidden");
    hideBtnContainerDesktop.classList.toggle("hidden");
  });

  hideBtnContainerDesktop.addEventListener("click", function (e) {
    const hideBtn = e.target.closest(".share-container-desktop__hide-btn");
    if (!hideBtn) return;
    hideBtnContainerDesktop.classList.toggle("hidden");
    shareBtn.classList.toggle("hidden");
    shareContainerDesktop.classList.toggle("hidden");
  });
}
