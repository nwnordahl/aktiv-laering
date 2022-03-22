// Select footer paragraph element
const footerParagraph = document.querySelector("#footer-paragraph");

// Find current year
const currentDate = new Date();
const currentYear = currentDate.getFullYear();

// Insert text in footer paragraph element
// '\u00A9' is the unicode for the copyright symbol
footerParagraph.textContent = `Copyright \u00A9 Aktiv Læring ${currentYear}`;
