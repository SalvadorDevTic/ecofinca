const theme = (() => {
  if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
    return localStorage.getItem("theme");
  }
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
})();

if (theme === "light") {
  document.documentElement.classList.remove("dark");
  // var element = document.querySelector("#logo-header");
  // element.setAttribute("src", logoPrincipal);
} else {
  document.documentElement.classList.add("dark");
  // var element = document.querySelector("#logo-header");
  // element.setAttribute("src", "/src/images/EFPuraVida2FOscuro.png");
}

window.localStorage.setItem("theme", theme);

const handleToggleClick = () => {
  const element = document.documentElement;
  element.classList.toggle("dark");

  const isDark = element.classList.contains("dark");
  // if (isDark) {
  //   var elementLogo = document.querySelector("#logo-header");
  //   elementLogo.setAttribute("src", "/src/images/EFPuraVida2FOscuro.png");
  // } else {
  //   var elementLogo = document.querySelector("#logo-header");
  //   elementLogo.setAttribute("src", logoPrincipal);
  // }
  localStorage.setItem("theme", isDark ? "dark" : "light");
};

document
  .getElementById("themeToggle")
  .addEventListener("click", handleToggleClick);
