
import React,{useContext} from 'react';
import ThemeContext from './../context/ThemeContext';
import ThemeColor from "../Color"

const HeroSection = () => {
    const defaultTheme = useContext(ThemeContext)[0];
    const currentTheme = ThemeColor[defaultTheme]
    //const currentTheme = ThemeColor(defaultTheme) - give error. not a function

    return (
        <div style={{
            padding:"1rem",
            color:`${currentTheme.color}`,
            backgroundColor:`${currentTheme.backgroundColor}`
        }}>
            <h1>This is practice for useContext Hooks</h1>
            <p>Try to Change the Theme color by clicking above button.</p>
            <hr />
            <h3>I am Ashik & Practicing React useContext Hooks.</h3>
        </div>
    );
};

export default HeroSection;
























// import React,{useContext} from 'react';
// import ThemeColor from "../Color"
// import ThemeContext from '../context/ThemeContext';
// //ThemeToggler i added 2nd time
// import ThemeToggler from './ThemeToggler';
// import CreateContextFotTheme from './../context/ThemeContext';
// import ThemeColor from './../Color';

// const HeroSection = () => {
//  const theme = useContext(ThemeContext)[0];
//  const currentTheme = ThemeColor[theme]

//     return (
//         <div
//         style={{
//             padding:"1rem",
//             backgroundColor:`${currentTheme.backgroundColor}`,
//             color:`${currentTheme.textColor}`
//         }}>
//             <h1>Context API Theme Toggler</h1>
//             <p>This is a nice paragraph</p>
//             {/* 2nd time i added directly ThemeToggler */}
//             <ThemeToggler />
            
//             {/* <button 
//             style={{
//                 backgroundColor:"#26ae60",
//                 padding:"10px 100px",
//                 fontSize:"20px",
//                 color:"#fff",
//                 border:`${currentTheme.border}`
//             }}>Click Me</button> */}
//         </div>
//     );
// };

// export default HeroSection;