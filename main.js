var closeBtn = document.querySelector(".close-btn");
var sidebar = document.querySelector(".sidebar");
var logo = document.querySelector(".logo");
var reduce = document.querySelector(".reduce-btn");
var menuitem = document.getElementsByClassName("menu-item");
var menutext = document.getElementsByClassName("menu-text");
var dashboardtext = document.querySelector(".dashboard-text");
var headericon = document.querySelector(".logo-icon");

// menuitem.addEventListener("click", (e) => {
//   console.log(e);
//   dashboardtext.innerHTML = e.target.innerHTML;
// });

for (var i = 0; i < menuitem.length; i++) {
  menuitem[i].addEventListener("click", (e) => {
    console.log(e);
    dashboardtext.innerHTML = e.target.innerHTML;
  });
}

closeBtn.addEventListener("click", (e) => {
  console.log("clicked");
  sidebar.classList.add("close");
});

reduce.addEventListener("click", (e) => {
  if (sidebar.classList.contains("close")) {
    for (var i = 0; i < menutext.length; i++) {
      menutext[i].classList.remove("close-menu");
    }
    headericon.classList.remove("close-menu");
    sidebar.classList.remove("close");
    headericon.style.display = "block";
  } else {
    console.log("clicked");
    sidebar.classList.add("close");
    reduce.classList.add("trans");
    for (var i = 0; i < menutext.length; i++) {
      menutext[i].classList.add("close-menu");
    }
    headericon.style.display = "none";
    console.log(headericon.classList);
    console.log(menutext);
  }
});

logo.addEventListener("click", (e) => {
  console.log(e);
  sidebar.classList.remove("close");
});

// window.onscroll = function () {
//   scrollFunction();
// };

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.querySelector(".nav-bar").style.position = "fixed";
  } else {
    document.querySelector(".nav-bar").style.display = "relative";
  }
}
