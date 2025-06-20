// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// FAQ Accordion
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".accordion-button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const content = button.nextElementSibling;
      const isOpen = content.style.display === "block";

      // Close all
      document.querySelectorAll(".accordion-content").forEach((c) => c.style.display = "none");
      document.querySelectorAll(".accordion-button").forEach((b) => b.classList.remove("active"));

      // Toggle current
      if (!isOpen) {
        content.style.display = "block";
        button.classList.add("active");
      }
    });
  });
});

