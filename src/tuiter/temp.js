import React, { useRef, useState } from "react";
import "./index.css";

function InputField() {
    const inputRef = useRef(null);
    const [value, setValue] = useState("");
    const [option, setOption] = useState("");
    const [extra, setExtra] = useState("");

    const handleKeyDown = (e) => {
        console.log("VALUE : ",value);
        setOption(value.substring(0,5))
        setExtra(value.substring(5, value.length))
        console.log("OPTION: ", option)
        console.log("EXTRA : ", extra)
        setValue("");
        console.log("VALUE1 : ",value);
        if (e.key === "Enter") {
            // handle enter key press
            console.log(value);
        }
    };

    const handleInput = () => {
        // update the value state with the current content of the div
        setValue(inputRef.current.innerHTML.split("<span")[0]);

    };

    return (
        <div className="input-wrapper">
            <div
                className="input"
                ref={inputRef}
                contentEditable={true}
                suppressContentEditableWarning={true}
                onKeyDown={handleKeyDown}
                onInput={handleInput}
            >
                <span className="red" >{option}</span>
                <span className="blue" >{extra}</span>
            </div>
        </div>
    );
}

export default InputField;
