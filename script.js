// Achievement category filtering
const tabs = document.querySelectorAll(".tab");
const cards = document.querySelectorAll(".achievement-card");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    const category = tab.dataset.category;

    cards.forEach(card => {
      card.style.display =
        card.dataset.category === category ? "block" : "none";
    });
  });
});
