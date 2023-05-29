const theme = localStorage.getItem("data-theme");
const checkbox = document.querySelector(".switch-input");

const changeThemeToDark = () => {
  document.documentElement.setAttribute("data-theme", "dark");
  localStorage.setItem("data-theme", "dark");
  console.log("Switched to dark theme");
};

const changeThemeToLight = () => {
  document.documentElement.setAttribute("data-theme", "light");
  localStorage.setItem("data-theme", "light");
  console.log("Switched to light theme");
};

const handleCheckboxChange = () => {
  const theme = localStorage.getItem("data-theme");
  if (theme === "dark") {
    changeThemeToLight();
  } else {
    changeThemeToDark();
  }
};

if (theme === "dark") {
  changeThemeToDark();
}

checkbox.addEventListener("change", handleCheckboxChange);
