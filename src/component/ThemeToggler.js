import React,{useContext} from 'react';
import ThemeContext from './../context/ThemeContext';


const ThemeToggler = () => {

    const [themeMode, setThemeMode] = useContext(ThemeContext);

    return (
        <div
        onClick={()=>{
            setThemeMode(themeMode === "light" ? "dark":"light")
        }}>
            <p
             style={{
                backgroundColor:"#26ae60",
                padding:"10px 100px",
                fontSize:"20px",
                color:"#fff",
                display:"inline-block",
                cursor:"pointer"
            }}
            >{themeMode==="light" ? "Turn Off" : "Turn On"}</p>
        </div>
    );
};

export default ThemeToggler;