import { createSlice } from "@reduxjs/toolkit";


const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        "showProfile": true,
        "firstName": "Nidhi",
        "middleName": "Umesh",
        "lastName": "Pillay",
        "handle":"@nupillay",
        "profilePicture": "../../images/profilePicture.png",
        "bannerPicture":"../../images/bannerPicture.png",
        "bio":"Full Stack Engineer | Northeastern University | Software Developer | NLP | Java | Python | Machine Learning | AI | ",
        "website":"https://www.linkedin.com/in/nidhi-pillay-68443b117/",
        "location":"Boston, MA",
        "dateOfBirth": "01/06/1997",
        "dateJoined": '09/08/2021',
        "followingCount": 340,
        "followersCount": 223,
        "totalTweets" : "1.42K"
    },
    reducers:{
        toggleShowProfile(state, action){
            state.showProfile = !state.showProfile;
        },
        updateProfile(state, action){
            console.log(action.payload)
          return action.payload
        },
    }

});

export const {toggleShowProfile, updateProfile} = profileSlice.actions
export default profileSlice.reducer;