function toggleTheme() {
  var body = document.body;
  body.classList.toggle("dark_mode");

  var html = document.documentElement;
  var isDarkMode = body.classList.contains("dark_mode");
  html.setAttribute("data-theme", isDarkMode ? "dark" : "light");
}
