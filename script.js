const pills = document.querySelectorAll(".pill");
const cards = document.querySelectorAll(".card");

pills.forEach(pill => {
  pill.addEventListener("click", () => {
    pills.forEach(p => p.classList.remove("active"));
    pill.classList.add("active");

    const type = pill.dataset.type;

    cards.forEach(card => {
      card.style.display =
        card.dataset.type === type ? "block" : "none";
    });
  });
});
