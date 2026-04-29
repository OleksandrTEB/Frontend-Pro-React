import { useState } from "react";
import MainView from "./ClassComponents/MainView/MainView.jsx";
import MainViewFn from "./FunctionComponents/MainView/MainView.jsx";
import './SelectorComponents.css';

function SelectorComponents() {
    const [currentTypeComponent, setCurrentTypeComponent] = useState('class');

    return (
        <div>
            <div
                className="toggle"
                onClick={() => {
                    setCurrentTypeComponent(currentTypeComponent === 'class' ? 'function' : 'class');
                }}
            >Current type: {currentTypeComponent === 'class' ? 'class' : 'function'}</div>

            <div className="components">
                {currentTypeComponent === 'class' && <MainView/>}
                {currentTypeComponent === 'function' && <MainViewFn/>}
            </div>
        </div>
    )
}

export default SelectorComponents