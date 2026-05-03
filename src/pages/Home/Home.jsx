import { useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext.jsx";

import './Home.css';

export default function Home() {
    const { theme } = useContext(ThemeContext)

    return (
        <div className={`${theme} homeContainer`}>
            Home
        </div>
    )
}