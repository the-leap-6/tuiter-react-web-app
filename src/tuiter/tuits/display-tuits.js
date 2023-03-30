import "./index.css"
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return(

        <div className="wd-tuit mb-3 pb-3">
            <img className="col-1 wd-profile-photo "  src={`/images/${tuit.image}`}/>
            <div className="col-11 ps-2">
                <div>
                <span className="wd-title">{tuit.username} <i className={tuit.verified?"bi bi-check-circle-fill text-primary pe-1":""}></i></span>
                    <span className="wd-text">{tuit.handle} ⋅ {tuit.time}</span>
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(tuit._id)}></i>
                </div>


                <div className="wd-main-content wd-text pb-3 pe-2">
                    {tuit.tuit}
                </div>
                <TuitStats tuitStatData={{_id: tuit._id, replies: tuit.replies, retuits: tuit.retuits, liked: tuit.liked, likes: tuit.likes }}/>

            </div>
        </div>
    )}

export default TuitItem



