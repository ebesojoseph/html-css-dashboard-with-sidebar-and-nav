var closeBtn = document.querySelector(".close-btn");
var sidebar = document.querySelector(".sidebar");

closeBtn.addEventListener("click", (e) => {
  console.log("clicked");
  sidebar.classList.add("close");
});
