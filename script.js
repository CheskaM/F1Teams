document.addEventListener("DOMContentLoaded", () => {
  const teamBoxes = document.querySelectorAll(".team-box");

  teamBoxes.forEach((box) => {
    box.addEventListener("click", () => {
      const isActive = box.classList.contains("active");

      const h2 = box.querySelector("h2");
      const h3 = box.querySelector("h3");
      const driversList = box.querySelector(".drivers-list");

      if (isActive) {
        // Hide text, show background again
        box.classList.remove("active");
        box.classList.remove("no-bg");

        if (h2) h2.style.display = "none";
        if (h3) h3.style.display = "none";
        if (driversList) driversList.style.display = "none";
      } else {
        // Show text, hide logo
        box.classList.add("active");
        box.classList.add("no-bg");

        if (h2) h2.style.display = "block";
        if (h3) h3.style.display = "block";
        if (driversList) driversList.style.display = "block";
      }
    });
  });

  // ✅ Bolding second word in each driver name
  document.querySelectorAll('.drivers-list li').forEach(li => {
    const words = li.textContent.trim().split(' ');
    if (words.length >= 2) {
      words[1] = `<strong>${words[1]}</strong>`;
      li.innerHTML = words.join(' ');
    }
  });
});
