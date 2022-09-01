import "mdb-ui-kit/js/mdb.min.js";
import "mdb-ui-kit/css/mdb.min.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState(null);  

  useEffect(() => {
    if (localStorage.getItem("darkmode") == "dark") {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkmode", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((curr) => (curr === null ? "dark" : null));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Navbar />
        <Main />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
