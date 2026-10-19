// Assemble the email address at runtime so naive scrapers reading the HTML miss it.
const email = document.getElementById("email");
if (email) email.href = `mailto:${email.dataset.u}@${email.dataset.d}`;

document.getElementById("year").textContent = new Date().getFullYear();
