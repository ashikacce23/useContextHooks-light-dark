
import React,{useContext} from 'react';
import ThemeContext from "../context/ThemeContext";
import Brightness3Icon from '@mui/icons-material/Brightness3';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const ThemeToggler = () => {
    //now, we have to store the default color in useContext Hook
   const [themeMode, setThemeMode] = useContext(ThemeContext);
    return (
        <div
        onClick={()=>{
            setThemeMode(themeMode==="light" ? "dark":"light")
        }}>
          <p>
                {themeMode==="light" ? (<Brightness3Icon />):(<WbSunnyIcon />)}
          </p>
        </div>
    );
};

export default ThemeToggler;

// import React,{useContext} from 'react';
// import ThemeContext from './../context/ThemeContext';

// const ThemeToggler = () => {
//     const [themeMode, setThemeMode] = useContext(ThemeContext);
//     return (
//         <div
//         onClick={()=>{
//             setThemeMode(themeMode === "light" ? "dark":"light")
//         }}>
//             <p
//              style={{
//                 backgroundColor:"#26ae60",
//                 padding:"10px 100px",
//                 fontSize:"20px",
//                 color:"#fff",
//                 display:"inline-block",
//                 cursor:"pointer"
//             }}
//             >{themeMode==="light" ? "Turn Off" : "Turn On"}</p>
//         </div>
//     );
// };

// export default ThemeToggler;