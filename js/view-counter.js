document.addEventListener("DOMContentLoaded", () => {
  const counter = document.getElementById("view-counter");
  if (!counter) return;

  const namespace = "dhruvilpatel-portfolio-live-2026"; // 🔥 unique
  const key = "total-visits";

  fetch(`https://api.countapi.xyz/update/${namespace}/${key}?amount=1`)
    .then(res => res.json())
    .then(data => {
      console.log("Counter data:", data); // debug
      counter.textContent = `👁️ Visitors: ${data.value}`;
    })
    .catch(() => {
      counter.textContent = "👁️ Visitors: Error";
    });
});
