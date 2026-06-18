// ===============================
// SEMESTER AUTO UPDATE SCRIPT
// ===============================

// 🔧 SEMESTER START DATE
// First semester considered from 1 July 2025
// Format: new Date(YEAR, MONTH-1, DAY)
const semesterStartDate = new Date(2025, 6, 1); // July = 6

const semesterText = document.getElementById("semester-text");

if (!semesterText) {
  console.error("semester-text element not found!");
} else {
  const now = new Date();

  // Calculate month difference
  const monthsDiff =
    (now.getFullYear() - semesterStartDate.getFullYear()) * 12 +
    (now.getMonth() - semesterStartDate.getMonth());

  // Each semester = 6 months
  let semesterNumber = Math.floor(monthsDiff / 6) + 1;

  // Limit semesters between 1 and 8
  if (semesterNumber < 1) semesterNumber = 1;
  if (semesterNumber > 8) semesterNumber = 8;

  // Determine year text
  let yearText = "";
  if (semesterNumber <= 2) {
    yearText = "First Year";
  } else if (semesterNumber <= 4) {
    yearText = "Second Year";
  } else if (semesterNumber <= 6) {
    yearText = "Third Year";
  } else {
    yearText = "Final Year";
  }

  // Academic year calculation
  const academicYearStart = semesterStartDate.getFullYear() + Math.floor((semesterNumber - 1) / 2);
  const academicYearEnd = academicYearStart + 1;

  // Inject text
  semesterText.innerHTML = `
    I am currently pursuing <strong>${yearText}</strong> of the
    Bachelor of Technology (B.Tech) program in Electrical Engineering at
    Chandubhai S Patel Institute of Technology (CSPIT), a constituent institute of
    Charotar University of Science and Technology (CHARUSAT).
    I am enrolled in <strong>Semester ${semesterNumber}</strong>
    for the academic year <strong>${academicYearStart}–${academicYearEnd}</strong>,
    and I am continuously strengthening my academic and technical skills.
  `;
}
