import { useContext } from 'react';

import { ThemeContext } from "../../context/ThemeContext.jsx";
import TodoList from "../../components/TodoList/TodoList.jsx";

import './Main.css';

export default function Main() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`${theme}-main main`}>
            <div className="mainHeader">
                Todo List
            </div>

            <TodoList theme={theme} />
        </div>
    )
}