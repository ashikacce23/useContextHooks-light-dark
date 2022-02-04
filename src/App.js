
import React,{useState} from 'react';
import ThemeContext from "./context/ThemeContext";
import ThemeToggler from "./component/ThemeToggler";
import HeroSection from "./component/HeroSection"

const App = () => {
  //defauld value store korte hobe
  const themeHooks = useState("light")
  return (
    <ThemeContext.Provider value={themeHooks}>
      <>
       <ThemeToggler />
       <hr />
       <HeroSection />
      </>
    </ThemeContext.Provider>
  );
};

export default App;















// import React,{useState} from "react";
// //import createContext
// import ThemeContext from "./context/ThemeContext";
// import Header from "./component/Header";
// import HeroSection from "./component/HeroSection";
// import ThemeToggler from './component/ThemeToggler';

// function App() {
//   const themeHooks = useState("light")
//   return (
//     // we have to wrap <App /> or all component by Provider.
//     <ThemeContext.Provider
//     value={themeHooks}>
//         <div>
//           <Header />
//           <HeroSection />
//         </div>
//     </ThemeContext.Provider>
//   );
// }

// export default App;
