// Assemble the email address at runtime so naive scrapers reading the HTML miss it.
for (const link of document.querySelectorAll(".js-email")) {
  link.href = `mailto:${link.dataset.u}@${link.dataset.d}`;
}

document.getElementById("year").textContent = new Date().getFullYear();

// Highlight the sidebar entry for the section currently in view.
const tocLinks = new Map(
  [...document.querySelectorAll(".toc a")].map((a) => [a.hash.slice(1), a])
);
const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      for (const a of tocLinks.values()) a.classList.remove("is-active");
      tocLinks.get(entry.target.id)?.classList.add("is-active");
    }
  },
  { rootMargin: "-40% 0px -55% 0px" }
);
for (const id of tocLinks.keys()) observer.observe(document.getElementById(id));
