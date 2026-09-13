function runCode() {
  const html = document.getElementById("html-code").value;
  const css = document.getElementById("css-code").value;
  const js = document.getElementById("js-code").value;

  const output = document.getElementById("output-frame");

  const result = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>${css}</style>
    </head>
    <body>
      ${html}
      <script>${js}<\/script>
    </body>
    </html>
  `;

  output.srcdoc = result;
}
// ===============================
// RUN CODE
// ===============================
function runCode() {
  const html = document.getElementById("html-code").value;
  const css = document.getElementById("css-code").value;
  const js = document.getElementById("js-code").value;

  const output = document.getElementById("output-frame");
  const status = document.getElementById("preview-status");

  const result = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        ${css}
      </style>
    </head>

    <body>
      ${html}

      <script>
        ${js}
      <\/script>
    </body>
    </html>
  `;

  output.srcdoc = result;

  // Status change
  status.textContent = "Running";
  
  setTimeout(() => {
    status.textContent = "Ready";
  }, 800);
}


// ===============================
// DEMO BUTTON
// ===============================
function loadStarterCode() {

  document.getElementById("html-code").value = `<div class="card">
  <h1>Hello, Dhruvil! 👋</h1>
  <p>Welcome to my Code Playground.</p>
  <button onclick="changeText()">Click Me</button>
  <p id="message"></p>
</div>`;


  document.getElementById("css-code").value = `body {
  font-family: Arial, sans-serif;
  background: #f4f7fb;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.card {
  background: white;
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

h1 {
  color: #2563eb;
}

button {
  background: #2563eb;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  cursor: pointer;
}

button:hover {
  background: #1d4ed8;
}

#message {
  color: #16a34a;
  font-weight: bold;
}`;


  document.getElementById("js-code").value = `function changeText() {
  document.getElementById("message").textContent =
    "JavaScript is working! 🚀";
}`;


  // Automatically run demo
  runCode();
}


// ===============================
// CLEAR BUTTON
// ===============================
function clearPlayground() {

  // Clear editors
  document.getElementById("html-code").value = "";
  document.getElementById("css-code").value = "";
  document.getElementById("js-code").value = "";

  // Clear preview
  document.getElementById("output-frame").srcdoc = "";

  // Reset status
  document.getElementById("preview-status").textContent = "Ready";
}