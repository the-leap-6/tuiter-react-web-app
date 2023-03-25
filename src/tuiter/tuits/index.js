import React from "react";
import "./index.css"
import {useSelector} from "react-redux";
import TuitItem from "./display-tuits";

function TuitsList() {
    console.log("Tuits Component")
    const tuitsArray = useSelector(state => state.tuits)
    return (

        <ul className="list-group">
            {
                tuitsArray.map((tuit, index) =>
                    <TuitItem key={index}
                              tuit={tuit}/> )
            }
        </ul>

    );
}

export default TuitsList