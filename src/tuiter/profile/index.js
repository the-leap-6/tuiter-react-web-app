import {useDispatch, useSelector} from "react-redux";
import "./index.css"
import {useNavigate} from "react-router";

const ProfileComponent = () =>{
    const profileInformation = useSelector(state => state.profile)
    const navigate = useNavigate()


    const routeChange = () =>{
        navigate("/tuiter/home");
    }
    return(
        <div>
                <div className="row align-items-center pb-3">
                    <i className="col-1 ms-2 bi bi-arrow-left" onClick={routeChange}></i>
                    <h4 className="col-9 float-left">{profileInformation.firstName} {profileInformation.middleName} {profileInformation.lastName}</h4>
                </div>
            <div className="wd-profileImageBanner">
                <img class="profileImage" src={profileInformation.profilePicture}/>
                <button className="editProfile btn btn-outline-primary rounded-pill" onClick={()=> navigate("/tuiter/edit-profile")}>Edit Profile</button>

            </div>
            <div class="profileName"> {profileInformation.firstName} {profileInformation.middleName} {profileInformation.lastName}</div>
            <div class="profileHandler"> {profileInformation.handle}</div>
            <div className="profilBio">{profileInformation.bio}<a href={profileInformation.website}>(My Website)</a></div>
            <div className="row otherDetails">
                <div className="col-4"><i className="bi bi-geo-alt "> Location : </i> {profileInformation.location}</div>
                <div className="col-4"><i className="bi bi-balloon "> Birth : </i> {profileInformation.dateOfBirth}</div>
                <div className="col-4"><i className="bi bi-calendar3 "> Joined : </i> {profileInformation.dateJoined}</div>
            </div>
            <div className="row otherDetails pt-2">
                <div className="col-3"><b>{profileInformation.followersCount}</b> Followers</div>
                <div className="col-3"><b>{profileInformation.followingCount}</b> Following</div>
            </div>
        </div>

    )

}

export default ProfileComponent