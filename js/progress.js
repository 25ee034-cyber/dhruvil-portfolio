// ======================================
// SEMESTER PROGRESS (SINGLE + ALL 1–8)
// Base: 1 July 2025
// ======================================

// CONFIG
const baseDate = new Date(2025, 6, 1); // 1 July 2025
const semesterDurationMonths = 6;
const totalSemesters = 8;

const now = new Date();

// Utility: calculate semester number
const monthsDiff =
  (now.getFullYear() - baseDate.getFullYear()) * 12 +
  (now.getMonth() - baseDate.getMonth());

let currentSemester = Math.floor(monthsDiff / semesterDurationMonths) + 1;
if (currentSemester < 1) currentSemester = 1;
if (currentSemester > totalSemesters) currentSemester = totalSemesters;

// ===============================
// SINGLE SEMESTER PROGRESS (BAR)
// ===============================
const currentSemesterEl = document.getElementById("current-semester");
const progressPercentEl = document.getElementById("progress-percent");
const progressFillEl = document.getElementById("progress-fill");

if (currentSemesterEl && progressPercentEl && progressFillEl) {
  const semStart = new Date(
    baseDate.getFullYear(),
    baseDate.getMonth() + (currentSemester - 1) * semesterDurationMonths,
    1
  );

  const semEnd = new Date(
    semStart.getFullYear(),
    semStart.getMonth() + semesterDurationMonths,
    0
  );

  let progress =
    ((now - semStart) / (semEnd - semStart)) * 100;

  progress = Math.min(Math.max(Math.floor(progress), 0), 100);

  currentSemesterEl.textContent = `Semester ${currentSemester}`;
  progressPercentEl.textContent = `${progress}% Completed`;
  progressFillEl.style.width = progress + "%";
}

// =================================
// ALL SEMESTERS PROGRESS (1–8 CARDS)
// =================================
const allSemesterContainer = document.getElementById("all-semesters");

if (allSemesterContainer) {
  for (let i = 0; i < totalSemesters; i++) {
    const semStart = new Date(
      baseDate.getFullYear(),
      baseDate.getMonth() + i * semesterDurationMonths,
      1
    );

    const semEnd = new Date(
      semStart.getFullYear(),
      semStart.getMonth() + semesterDurationMonths,
      0
    );

    let progress = 0;

    if (now > semEnd) {
      progress = 100;
    } else if (now >= semStart && now <= semEnd) {
      progress = Math.floor(
        ((now - semStart) / (semEnd - semStart)) * 100
      );
    }

    const yearText =
      i < 2 ? "First Year" :
      i < 4 ? "Second Year" :
      i < 6 ? "Third Year" :
      "Final Year";

    const card = document.createElement("div");
    card.className = "sem-card";

    if (i + 1 === currentSemester) {
      card.style.border = "2px solid #2563eb";
    }

    card.innerHTML = `
      <h3>Semester ${i + 1}</h3>
      <span>${yearText}</span>

      <div class="sem-progress-bar">
        <div class="sem-progress-fill" style="width:${progress}%"></div>
      </div>

      <span>${progress}% completed</span>
    `;

    allSemesterContainer.appendChild(card);
  }
}
