function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  sidebar.classList.toggle("active");

  if (overlay.classList.contains("active")) {
    overlay.classList.remove("active");
    setTimeout(() => (overlay.style.display = "none"), 300);
  } else {
    overlay.style.display = "block";
    setTimeout(() => overlay.classList.add("active"), 10);
  }
}

document.querySelectorAll(".sidebar a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      toggleSidebar();
    }
  });
});

// Cards animation on load + scroll
const cards = document.querySelectorAll(".card");

function showCardsOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  cards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add("show");
    }
  });
}

window.addEventListener("DOMContentLoaded", showCardsOnScroll);
window.addEventListener("scroll", showCardsOnScroll);
