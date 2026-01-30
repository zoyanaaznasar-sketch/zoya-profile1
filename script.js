const pills = document.querySelectorAll(".pill");
const cards = document.querySelectorAll(".achievement-card");

pills.forEach(pill => {
  pill.addEventListener("click", () => {
    pills.forEach(p => p.classList.remove("active"));
    pill.classList.add("active");

    const cat = pill.dataset.cat;

    cards.forEach(card => {
      card.style.display =
        card.dataset.cat === cat ? "block" : "none";
    });
  });
});
