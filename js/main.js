function handleMobNavClose(event) {
  if (event.type === "scroll") {
    document.body.classList.remove("nav-open");
  } 
  if (event.type === "click") {
    if (!event.target.closest("nav")) {
      document.body.classList.remove("nav-open");
      console.log(window.scrollY);
      // Make sure there's no header bg if at the top.
      if (window.scrollY === 0) {
        document.querySelector("header").classList.remove("header-background");
      }
    }
  }
}

// Close the mobile nav if there's a click outside or a scroll.
document.addEventListener("click", handleMobNavClose, false);
document.addEventListener("scroll", handleMobNavClose, false);

(function () {
  var header = document.getElementById("mainHeader");

  function changeHeader() {
    var scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    header.classList.toggle(
      "header-background",
      scrollTop >= 50 || document.body.classList.contains("nav-open")
    );
  }

  var didScroll = false;

  $(window).scroll(function () {
    didScroll = true;
  });

  setInterval(function () {
    if (didScroll) {
      didScroll = false;
      changeHeader();
    }
  }, 100);

  changeHeader();

  document
    .getElementById("open-nav")
    .addEventListener("click", function (event) {
      event.preventDefault();
      document.body.classList.toggle("nav-open");
      changeHeader();
    });

  $("a[href*=\\#]").on("click", function (event) {
    if (this.pathname === window.location.pathname) {
      event.preventDefault();

      // Fix for undefined error.
      if (!$(this.hash).offset()) return;

      $("html, body").animate(
        {
          scrollTop: $(this.hash).offset().top,
        },
        500
      );
    }
  });
})();
