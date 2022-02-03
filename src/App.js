import React,{useState} from "react";
import ThemeContext from "./context/ThemeContext";
import Header from "./component/Header";
import HeroSection from "./component/HeroSection";

function App() {
  const themeHooks = useState("light")
  return (
    <ThemeContext.Provider
    value={themeHooks}>
        <div>
          <Header />
          <HeroSection />
        </div>
    </ThemeContext.Provider>
  );
}

export default App;
