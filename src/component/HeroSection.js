import React,{useContext} from 'react';
import ThemeColor from "../Color"
import ThemeContext from '../context/ThemeContext';
//ThemeToggler i added 2nd time
import ThemeToggler from './ThemeToggler';

const HeroSection = () => {
 const theme = useContext(ThemeContext)[0];
 const currentTheme = ThemeColor[theme]


    return (
        <div
        style={{
            padding:"1rem",
            backgroundColor:`${currentTheme.backgroundColor}`,
            color:`${currentTheme.textColor}`
        }}>
            <h1>Context API Theme Toggler</h1>
            <p>This is a nice paragraph</p>
            {/* 2nd time i added directly ThemeToggler */}
            <ThemeToggler />
            
            {/* <button 
            style={{
                backgroundColor:"#26ae60",
                padding:"10px 100px",
                fontSize:"20px",
                color:"#fff",
                border:`${currentTheme.border}`
            }}>Click Me</button> */}
        </div>
    );
};

export default HeroSection;