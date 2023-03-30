import React, {useEffect} from "react";
import "./index.css"
import TuitItem from "./display-tuits";
import {useDispatch, useSelector}   from "react-redux";
import {findTuitsThunk}
    from "../../services/tuits-thunks";

const TuitsList = () => {
    console.log("Tuits Component")
    const {tuits, loading} = useSelector(
        state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])

    return (

        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }

            {
                tuits.map((tuit, index) =>
                    <TuitItem key={index}
                              tuit={tuit}/> )
            }
        </ul>

    );
}

export default TuitsList