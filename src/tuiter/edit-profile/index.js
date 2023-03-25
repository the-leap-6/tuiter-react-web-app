import "./index.css"
import {useDispatch, useSelector} from "react-redux";
import {toggleShowProfile, updateProfile} from "../profile/profile-reducer";
import { useForm } from "react-hook-form"

const EditProfile = () =>{

    const profileInformation = useSelector(state => state.profile)
    const dispatch = useDispatch()
    const {register, handleSubmit} =useForm({defaultValues:profileInformation});
    const toggleProfile = ()=>{
        dispatch(toggleShowProfile(profileInformation))
    }
    const onSubmit=(e)=>{
        dispatch(updateProfile(e))
        dispatch(toggleShowProfile(profileInformation))

    }

    const FormItems = ({id, label}) =>{
        return(
            <div className="m-2 p-2" style={{border: "1px solid "}}>
                <label className="ps-3 row label" htmlFor={label}>{label}</label>
                <input  className="ps-2 input" id={id} component="input" type="text"
                        {...register(id)} />
            </div>
        )
    }
    return(
        <div>
            <div className="row align-items-center">
                <i className="col-1 bi bi-x-lg" onClick={toggleProfile}></i>
                <h4 className="col-9 float-left m-0">Edit Profile</h4>
                <button class="col-2 btn btn-dark rounded-pill float-end" onClick={handleSubmit(onSubmit)}> Save </button>
            </div>
            <div className="mt-3 wd-profileImageBanner">
               
                <img className="profileImage" src={profileInformation.profilePicture}/>
            </div>
            <form className="mt-5 pt-4">
                <FormItems id={"firstName"} label={"First Name"} />
                <FormItems id={"middleName"} label={"Middle Name"}/>
                <FormItems id={"lastName"} label={"Last Name"}/>
                <FormItems id={"bio"} label={"Bio"} />
                <FormItems id={"website"} label={"Website"} />
                <FormItems id={"location"} abel={"Location"} />
            </form>
        </div>
    )

}

export default EditProfile