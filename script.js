// Keep the footer year current without requiring a framework.
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();