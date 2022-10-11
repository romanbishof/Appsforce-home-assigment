import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { getUsersAsync } from '../../redux/usersSlice';
import {useNavigate} from 'react-router-dom'
import './Users.css'
import User from './user/User';
import { Button } from '@mui/material';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

function Users() {

    
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const {Users} = useSelector((state) => state.users)
//   useEffect(() => {
//     dispatch(getUsersAsync())
//   }, [])
  
  return (
    <div className='Users'>
        <Button size='large' onClick={() => navigate('/add_user')}>
                <PersonAddAlt1Icon fontSize='large'/>
            </Button>
        <div className="Users__wrapper">
            
        {Users?.map((user,index) => {
            return (
                <div className="user" key={index}>
                    <User user= {user}/>
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default Users