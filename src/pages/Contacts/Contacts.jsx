import { useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext.jsx";

import "./Conatcts.css";

export default function Contacts() {
    const { theme } = useContext(ThemeContext)

    return (
        <div className={`${theme} contacts`}>
            Contacts
        </div>
    )
}