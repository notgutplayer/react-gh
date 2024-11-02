export const toggleTheme = (id: string) => {
  return document.getElementById(id)?.setAttribute("", "");
};
