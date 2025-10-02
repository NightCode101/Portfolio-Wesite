// For active button when clicking the navigation bar
document.querySelectorAll(".nav-btn a").forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

// For Message form
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  
  // Notification popup when sending message
  function showNotification(message) {
    const notif = document.createElement("div");
    notif.className = "notification";
    notif.textContent = message;
    document.body.appendChild(notif);
    
    setTimeout(() => notif.classList.add("show"), 50);
    
    setTimeout(() => {
      notif.classList.remove("show");
      setTimeout(() => notif.remove(), 400);
    }, 3000);
  }

  // For notification popup when the fiels are not filled
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      showNotification("Please fill in all fields.");
      return;
    }

    showNotification("Message Sent!");
    form.reset();
  });
});
