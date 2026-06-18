const container = document.getElementById("projects-container");

// Localhost hoy to message bataavo
if (
  window.location.hostname === "127.0.0.1" ||
  window.location.hostname === "localhost"
) {
  container.innerHTML = `
    <p>
      ⚠️ GitHub Projects only work after deployment.<br>
      Deploy to GitHub Pages to see repositories.
    </p>
  `;
} else {
  const username = window.location.hostname.split(".")[0];

  fetch(`https://api.github.com/users/${username}/repos`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch repositories");
      }
      return response.json();
    })
    .then((repos) => {
      container.innerHTML = "";

      const filteredRepos = repos.filter((repo) => !repo.fork);

      if (filteredRepos.length === 0) {
        container.innerHTML = "<p>No projects found.</p>";
        return;
      }

      filteredRepos.forEach((repo) => {
        const card = document.createElement("div");
        card.className = "project-card";

        card.innerHTML = `
          <h3>${repo.name}</h3>
          <p>${repo.description || "No description provided."}</p>

          <div class="project-links">
            <a href="${repo.html_url}" target="_blank">
              GitHub
            </a>

            ${
              repo.homepage
                ? `<a href="${repo.homepage}" target="_blank">
                    Live Demo
                  </a>`
                : ""
            }
          </div>
        `;

        container.appendChild(card);
      });
    })
    .catch((error) => {
      console.error(error);
      container.innerHTML =
        "<p>⚠️ Failed to load projects.</p>";
    });
}