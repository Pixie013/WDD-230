document.addEventListener("DOMContentLoaded", function() {
	const darkModeToggle = document.getElementById("darkModeToggle");
	const hamburgerMenu = document.getElementById("hamburgerMenu");
	const mainMenu = document.getElementById("mainMenu");
  
	darkModeToggle.addEventListener("click", function() {
	  document.body.classList.toggle("dark-mode");
	});
  
	hamburgerMenu.addEventListener("click", function() {
	  mainMenu.classList.toggle("active");
	});
  });
  