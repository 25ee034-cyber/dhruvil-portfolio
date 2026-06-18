const yearEl = document.getElementById("year");
const updatedEl = document.getElementById("lastUpdated");

const today = new Date();

yearEl.textContent = today.getFullYear();

updatedEl.textContent = today.toLocaleDateString("en-IN", {
  day: "numeric",
  month: "short",
  year: "numeric"
});
