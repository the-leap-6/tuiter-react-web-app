import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "/images/nasa.png",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}


const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits,
    reducers:{
        updateLikes(state, action){

            console.log(action)
            const newState = state.find((todo) =>
                todo._id === action.payload._id)
            newState.liked = !newState.liked
            if (newState.liked){
                newState.likes+=1
            }
            else{
                newState.likes-=1
            }
            console.log(newState)

        },
        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        },
        deleteTuit(state, action) {
            const index = state
                .findIndex(tuit =>
                    tuit._id === action.payload);
            state.splice(index, 1);
        },

    }

});
export const {updateLikes, createTuit, deleteTuit} = tuitsSlice.actions
export default tuitsSlice.reducer;