import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = (  {
                         tuitStatData = {
                             "_id":123,
                             "replies": 123,
                             "retuits": 123,
                             "liked": true,
                             "likes": 123
                         }
                     })=>{
    console.log(tuitStatData)
    const dispatch = useDispatch();
    const updateLikes = () => {
        if(tuitStatData.liked){
            dispatch(updateTuitThunk({ ...tuitStatData, likes: tuitStatData.likes - 1, liked: false}));
        }
        else{
            dispatch(updateTuitThunk({ ...tuitStatData, likes: tuitStatData.likes + 1, liked: true}));
        }
    }

    return (

        <nav>
            <span href="" className="wd-nav-items wd-icons p-2">
                <i className="bi bi-chat"></i>
                <span className="ps-1">{tuitStatData.replies}</span>
            </span>
            <span href="" className="wd-nav-items wd-icons p-2">
                <i className="bi bi-repeat"></i>
                <span className="ps-1">{tuitStatData.retuits}</span>
            </span>
            <span href="" className="wd-nav-items wd-icons p-2" onClick = {updateLikes}>
                <i className={tuitStatData.liked?"bi bi-heart-fill wd-red-icon":"bi bi-heart"} ></i>
                <span className="ps-1">{tuitStatData.likes}</span>
            </span>
            <span href="" className="wd-nav-items wd-icons p-2">
                <i className="bi bi-upload"></i>
                <span className="ps-1"></span>
            </span>
        </nav>
    )
}

export default TuitStats