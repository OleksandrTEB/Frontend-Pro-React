import { useContext } from "react";
import { Link } from 'react-router-dom';

import { ThemeContext } from "../../context/ThemeContext.jsx";

import './Header.css';

export default function Header() {
    const { theme, toggleTheme } = useContext(ThemeContext);


    return (
        <div className={`header ${theme} ${theme}-border`}>
            <div className="navigations">
                <Link to="/">Home</Link>
                <Link to="/main">Main</Link>
                <Link to="/contacts">Contacts</Link>
                <Link to="/about">About</Link>
            </div>

            <div className="themeContainer">
                <div>Current theme: {theme}</div>

                <button
                onClick={toggleTheme}>
                    Toggle theme
                </button>
            </div>
        </div>
    )
}