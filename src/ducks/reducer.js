import axios from 'axios'

const initialState = {
    username: {},
    profilePic: "",
    userid: 0
}

const UPDATE_USER = 'UPDATE_USER'

export function updateUser(username, profilePic, userid){
    return {
        type: UPDATE_USER,
        payload: username, profilePic, userid
    }
}

export default function reducer(state = initialState, action){
    switch(action.type){
    default:
        return initialState
    }
}
