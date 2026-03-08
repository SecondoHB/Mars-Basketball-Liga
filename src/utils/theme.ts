export function applyTheme(theme: "dark" | "light") {
  document.body.classList.toggle("dark-mode", theme === "dark");
  document.body.classList.toggle("light-mode", theme === "light");
}
