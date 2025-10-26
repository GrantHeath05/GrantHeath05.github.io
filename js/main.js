// dynamically loading header to element header
window.addEventListener("DOMContentLoaded", () => {
  fetch("/components/header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;
    })
    .catch(err => console.error("Failed to load header:", err));
});
