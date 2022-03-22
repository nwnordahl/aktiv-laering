const footerText = document.querySelector("#footer-text");

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

footerText.textContent = `Copyright \u00A9 Aktiv Læring ${currentYear}`;
