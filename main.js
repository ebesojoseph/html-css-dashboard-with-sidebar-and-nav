var closeBtn = document.querySelector(".close-btn");
var sidebar = document.querySelector(".sidebar");
var logo = document.querySelector(".logo");

closeBtn.addEventListener("click", (e) => {
  console.log("clicked");
  sidebar.classList.add("close");
});

logo.addEventListener("click", (e) => {
  console.log(e);
  sidebar.classList.remove("close");
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.querySelector(".nav-bar").style.position = "fixed";
  } else {
    document.querySelector(".nav-bar").style.display = "relative";
  }
}
