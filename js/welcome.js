window.addEventListener("load", () => {
  const toast = document.getElementById("welcome-toast");

  if (!toast) return;

  if (!localStorage.getItem("visited")) {
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 3500);

    localStorage.setItem("visited", "true");
  }
});
