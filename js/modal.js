/** Popup Modal */

const modal = document.querySelector("#modal");
const modalOverlay = document.querySelector("#modal-overlay");
const closeButton = document.querySelector("#close-button");

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

function handleClose(event) {
  if (
    event.target.matches("#close-button") ||
    !event.target.closest("#modal")
  ) {
    closePopup();
    document.removeEventListener("click", handleClose, false);
}
}

window.addEventListener("scroll", () => {
  document.documentElement.style.setProperty(
    "--scroll-y",
    `${window.scrollY}px`
  );
});

(function () {
  if (
    !document.cookie
      .split("; ")
      .find((row) => row.startsWith("bsp-coming-soon"))
  ) {
    document.cookie = "bsp-coming-soon=true; Secure";
    /* Close when close button clicked or clicked outside modal. */
    document.addEventListener("click", handleClose, false);
    /* Display the popup modal after a delay. */
    setTimeout(function () {
      displayPopup();
    }, 3000);
  }
})();
