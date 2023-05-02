document.addEventListener("click", (e) => {
  const target = e.target.closest("#vehicle-link");
  const targetAtt = target.getAttribute("href");

  location.assign(targetAtt);
  location.reload();
});
