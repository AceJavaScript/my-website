// Dark Mode Toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Command Simulator
function simulateCommand() {
  let command = document.getElementById("commandBox").value;
  let responseBox = document.getElementById("response");

  if (command === "/help") {
    responseBox.innerText =
      "Here's the list of commands: /info, /fun, /moderation...";
  } else if (command === "/info") {
    responseBox.innerText =
      "This bot is designed to help users with various tasks!";
  } else {
    responseBox.innerText = "Unknown command.";
  }
}

// FAQ Toggle
function toggleFAQ() {
  let faq = document.getElementById("faq");
  faq.style.display = faq.style.display === "none" ? "block" : "none";
}
