import { createContext, useContext, useReducer, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const initialState = {
  darkMode: false,
  language: "en",
};

function appReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_DARK_MODE":
      return { ...state, darkMode: !state.darkMode };

    case "SET_DARK_MODE":
      return { ...state, darkMode: action.payload };

    case "TOGGLE_LANGUAGE":
      return { ...state, language: state.language === "en" ? "tr" : "en" };

    case "SET_LANGUAGE":
      return { ...state, language: action.payload };

    default:
      return state;
  }
}

const AppContext = createContext(null);

export function AppProvider({ children }) {

  const [savedDarkMode, saveDarkMode] = useLocalStorage("darkMode", false);
  const [savedLanguage, saveLanguage] = useLocalStorage("language", "en");

  const [state, dispatch] = useReducer(appReducer, {
    darkMode: savedDarkMode,
    language: savedLanguage,
  });

  useEffect(() => {
    saveDarkMode(state.darkMode);
  }, [state.darkMode]);

  useEffect(() => {
    saveLanguage(state.language);
  }, [state.language]);

  const toggleDarkMode = () => dispatch({ type: "TOGGLE_DARK_MODE" });
  const toggleLanguage = () => dispatch({ type: "TOGGLE_LANGUAGE" });

  return (
    <AppContext.Provider value={{ state, toggleDarkMode, toggleLanguage }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  return context;
}

export default AppContext;