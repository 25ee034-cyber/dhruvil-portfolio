/* =========================
   COPY EMAIL
   ========================= */
function copyEmail() {
  const email = document.getElementById("email-text").innerText;
  navigator.clipboard.writeText(email);
  showToast("Email copied ✔");
}

/* =========================
   SEND MESSAGE → WHATSAPP
   ========================= */
function sendMessage(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    showToast("Please fill all fields ❌");
    return;
  }

  // WhatsApp message (URL encoded)
  const whatsappMessage =
    `Hello Dhruvil 👋%0A` +
    `Name: ${name}%0A` +
    `Email: ${email}%0A` +
    `Message: ${message}`;

  // 🔴 YOUR WHATSAPP NUMBER (India format)
  const phoneNumber = "919586920797"; // 91 + number (no space)

  // Open WhatsApp (mobile app or web)
  window.open(
    `https://wa.me/${phoneNumber}?text=${whatsappMessage}`,
    "_blank"
  );

  showToast("Opening WhatsApp ✔");
  event.target.reset();
}

/* =========================
   TOAST MESSAGE
   ========================= */
function showToast(text) {
  const toast = document.getElementById("toast");
  toast.innerText = text;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}
