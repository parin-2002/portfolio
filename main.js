console.log("hello");
let menuicon = document.querySelector("#menu-icon");
menuicon.addEventListener("click", function () {
  let sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("display-sidebar");
});
