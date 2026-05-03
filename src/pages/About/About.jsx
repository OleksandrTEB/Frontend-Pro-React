import { useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext.jsx";

import "./About.css";

export default function About() {
    const { theme } = useContext(ThemeContext)

    return (
        <div className={`${theme} about`}>
            About
        </div>
    )
}