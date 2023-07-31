import "core-js/stable";
import "regenerator-runtime/runtime";

// VARIABLES
const authorContainer = document.querySelector(".author-container");
const shareContainer = document.querySelector(".share-container");
const shareContainerDesktop = document.querySelector(
  ".share-container-desktop"
);
const shareBtnContainer = document.querySelector(
  ".author-container__share-btn"
);
const shareBtnContainerDesktop = document.querySelector(
  ".author-container-desktop__share-btn"
);
const hideBtnContainer = document.querySelector(".share-container__hide-btn");
const hideBtnContainerDesktop = document.querySelector(
  ".share-container-desktop__hide-btn"
);
let shareBtnDesktop = null;

// HELPER FUNCTION
function toggleHiddenClassOn(...elements) {
  elements.forEach((el) => {
    el.classList.toggle("hidden");
  });
}

// EVENT LISTENER CALLBACK FUNCTIONS
function handleShareBtnClick(e) {
  const shareBtn = e.target.closest(".author-container__share-btn");
  if (!shareBtn) return;
  toggleHiddenClassOn(authorContainer, shareContainer);
  authorContainer.classList.add("reveal");
}

function handleHideBtnClick(e) {
  const hideBtn = e.target.closest(".share-container__hide-btn");
  if (!hideBtn) return;
  toggleHiddenClassOn(authorContainer, shareContainer);
}

function handleShareBtnClickDesktop(e) {
  shareBtnDesktop = e.target.closest(".author-container-desktop__share-btn");
  if (!shareBtnDesktop) return;
  toggleHiddenClassOn(
    shareBtnDesktop,
    shareContainerDesktop,
    hideBtnContainerDesktop
  );
}

function handleHideBtnClickDesktop(e) {
  const hideBtnDesktop = e.target.closest(".share-container-desktop__hide-btn");
  if (!hideBtnDesktop) return;
  toggleHiddenClassOn(
    hideBtnContainerDesktop,
    shareBtnDesktop,
    shareContainerDesktop
  );
}

// EVENT LISTENERS
shareBtnContainer.addEventListener("click", handleShareBtnClick);
shareBtnContainerDesktop.addEventListener("click", handleShareBtnClickDesktop);
hideBtnContainer.addEventListener("click", handleHideBtnClick);
hideBtnContainerDesktop.addEventListener("click", handleHideBtnClickDesktop);
