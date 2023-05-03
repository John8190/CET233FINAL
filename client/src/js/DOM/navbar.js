const burger = document.querySelector(".open");
const sidebar = document.querySelector(".fixed-navbar");
const description = document.querySelectorAll(".description");

burger.addEventListener("click", () => {
  if (sidebar.classList.contains("active")) {
    burger.textContent = "menu";
  } else {
    burger.textContent = "close";
  }

  burger.classList.toggle("close");
  sidebar.classList.toggle("active");
  setTimeout(
    () => description.forEach((i) => i.classList.toggle("active")),
    50
  );
});
