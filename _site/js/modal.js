/** Popup Modal */

let modal = document.querySelector("#modal");
let modalOverlay = document.querySelector("#modal-overlay");
let closeButton = document.querySelector("#close-button");

// To do: allow to close when clicked outside modal.
function closePopup() {
  modal.classList.toggle("closed");
  modalOverlay.classList.toggle("closed");
  document.body.style.position = "";

  const body = document.body;
  const scrollY = body.style.top;
  body.style.position = "";
  body.style.top = "";
  window.scrollTo(0, parseInt(scrollY || "0") * -1);
}

function displayPopup() {
  modal.classList.toggle("closed");
  modalOverlay.classList.toggle("closed");

  const scrollY = document.documentElement.style.getPropertyValue("--scroll-y");
  const body = document.body;
  body.style.position = "fixed";
  body.style.top = `-${scrollY}`;
}

closeButton.addEventListener("click", () => {
  closePopup();
});

window.addEventListener("scroll", () => {
  document.documentElement.style.setProperty(
    "--scroll-y",
    `${window.scrollY}px`
  );
});

setTimeout(function () {
  displayPopup();
}, 3000);
