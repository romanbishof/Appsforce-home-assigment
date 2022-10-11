import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';


export const getUsersAsync = createAsyncThunk('users/getUsersAsync',
async () => {
    let res = await axios.get('https://randomuser.me/api/?results=10')
    let users = res.data
    return users
})

const initialState = {
    Users: [],
}

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        deleteUser: (state, action) => {
            state.Users = state.Users.filter(user => user.id.value !== action.payload.id.value)
        },
        saveChangedUser: (state, action) => {
            console.log(action.payload);
            let newState = state.Users.map(user => {
                if(user.id.value === action.payload.id.value){
                    return action.payload
                }

                return {...user}
            })
            state.Users = newState
        },
        addNewUser: (state, action) => {
            console.log(action.payload);
            
            // state.Users.push(action.payload)
            state.Users = [...state.Users, action.payload]
        }

    },
    extraReducers: {
        [getUsersAsync.fulfilled]: (state, action) => {
            state.Users= action.payload.results
            state.Users.forEach(user => user.id.value === null? Math.random() : user.id.value)
        }
    },
})

export const {deleteUser, saveChangedUser, addNewUser} = usersSlice.actions

export default usersSlice.reducer