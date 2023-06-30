import { ref } from "vue";

const themeKey = "theme-setting";
const currTheme = localStorage.getItem(themeKey) || "default";
const selectedTheme = ref(currTheme);

const setTheme = (newTheme) => {
  selectedTheme.value = newTheme;
  localStorage.setItem(themeKey, newTheme);
};

export default () => {
  return {
    selectedTheme,
    setTheme,
  };
};
