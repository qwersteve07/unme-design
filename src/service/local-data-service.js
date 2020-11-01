const KEY_THEME = "KEY_THEME";

class LocalDataService {
  setTheme = (value) => {
    localStorage.setItem(KEY_THEME, value);
  };

  getTheme = () => {
    return localStorage.getItem(KEY_THEME);
  };
}

export default new LocalDataService();
