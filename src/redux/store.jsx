import usersReducer from './usersSlice'
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
    reducer: {
        users: usersReducer,
    }
})