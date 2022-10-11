import { Card, TextField, CardContent, Typography, Button } from '@mui/material';
import React, { useState } from 'react'
import './AddUser.css'
import SaveIcon from '@mui/icons-material/Save';
import UndoIcon from '@mui/icons-material/Undo';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addNewUser } from '../../redux/usersSlice';
function AddUser() {

    const [email, setEmail] = useState('')
    const [title, setTitle] = useState('')
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [street, setStreet] = useState('')
    const [picture, setPicture] = useState("https://randomuser.me/api/portraits/med/men/88.jpg")

    const [valid, setValid] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const submitNewUser = (event) => {
        event.preventDefault();

        let userTemplate = {
            email: email,
            id: {value: Math.random()},
            location:{
                street:{name: street},
                city: city,
                country: country
            },
            name: {
                title: title,
                first: first,
                last: last
            },
            picture: {medium: picture}
        }
        if(valid){
            dispatch(addNewUser(userTemplate))
            navigate('/')
        }

    }
    
  return (
    <div className='AddUser'>
        <form onSubmit={submitNewUser}>
        <Card sx={{display: 'flex', justifyContent:'center'}}>
              <CardContent >
                <Typography gutterBottom variant="h5" component="div">
                  Email
                </Typography>
                
                  <TextField
                    error={/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) ? false: true}
                    helperText={/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) ? false: "Invalid Email"}
                    type='email'
                    margin="dense"
                    id="name"
                    label="Email"
                    fullWidth
                    required
                    onChange={(e) => {if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)){
                      setEmail(e.target.value)
                      setValid(true)
                    } else {
                      setValid(false)
                    }}}
                  />
                  <Typography gutterBottom variant="h5" component="div">
                    Location
                    </Typography>
                  <TextField
                    error={/^(?!\s*$).+/.test(country) ? false: true}
                    helperText={/^(?!\s*$).+/.test(country) ? '' : 'Field is Requird'}                  
                    type='text'
                    margin="dense"
                    id="name"
                    label="Country"
                    fullWidth
                    required
                    onChange={(e) => {
                        if(/^(?!\s*$).+/.test(e.target.value)){
                            setCountry(e.target.value)
                            setValid(true)
                        }else {
                            setValid(false)
                        }
                    }}
                  />
                  <TextField
                    error={/^(?!\s*$).+/.test(city) ? false: true}
                    helperText={/^(?!\s*$).+/.test(city) ? '' : 'Field is Requird'}                  
                    type='text'
                    margin="dense"
                    id="name"
                    label="City"
                    fullWidth
                    required
                    onChange={(e) => {
                        if(/^(?!\s*$).+/.test(e.target.value)){
                            setCity(e.target.value)
                            setValid(true)
                        }else {
                            setValid(false)
                        }
                    }}
                  />
                  <TextField
                    error={/^(?!\s*$).+/.test(street) ? false: true}
                    helperText={/^(?!\s*$).+/.test(street) ? '' : 'Field is Requird'}                  
                    type='text'
                    margin="dense"
                    id="name"
                    label="Street"
                    fullWidth
                    required
                    onChange={(e) => {
                        if(/^(?!\s*$).+/.test(e.target.value)){
                            setStreet(e.target.value)
                            setValid(true)

                        }else {
                            setValid(false)
                        }
                    }}
                  />
                  <Typography gutterBottom variant="h5" component="div">
                        Full Name
                    </Typography>
                  <TextField
                    error={/^(?!\s*$).+/.test(title) ? false : true}
                    helperText={/^(?!\s*$).+/.test(title) ? '' : 'Field is Requird'}                    
                    type='text'
                    margin="dense"
                    id="name"
                    label="Title"
                    fullWidth
                    required
                    onChange={(e) => {
                        if(/^(?!\s*$).+/.test(e.target.value)){
                            setTitle(e.target.value)
                            setValid(true)

                        }else {
                            setValid(false)
                        }
                    }}
                  />
                  <TextField
                    error={/^.{3,}$/.test(last) ? false: true}
                    helperText={/^.{3,}$/.test(last) ? '':'Min 3 characters is Requird'}                  
                    type='text'
                    margin="dense"
                    id="name"
                    label="Last Name"
                    fullWidth
                    required
                    onChange={(e) => {
                        if(/^.{3,}$/.test(e.target.value)){
                            setLast(e.target.value)
                            setValid(true)

                        }else {
                            setValid(false)
                        }
                    }}
                  />
                  <TextField
                    error={/^.{3,}$/.test(first) ? false: true}
                    helperText={/^.{3,}$/.test(first) ? '': 'Min 3 characters is Requird'}                  
                    type='text'
                    margin="dense"
                    id="name"
                    label="First Name"
                    fullWidth
                    required
                    onChange={(e) => {
                        if(/^.{3,}$/.test(e.target.value)){
                            setFirst(e.target.value)
                            setValid(true)

                        }else {
                            setValid(false)
                        }
                    }}
                  />
                  
              </CardContent>
              <CardContent sx={{display: 'flex', flexDirection: 'column', }}>
                <Typography gutterBottom variant="h5" component="div">
                    Image - Image is genarated automaticly :)
                </Typography>
                {/* <input type="file" name="" id="" /> */}
                <img className='addUser__img' src={picture} alt="" />
                <div className="addUser__wrapper">
                    <Button size='large' type='submit'>
                        <SaveIcon sx={{width:100, height:100}} fontSize='large'/>
                    </Button>
                    <Button size='large' onClick={() => navigate('/')}>
                        <UndoIcon sx={{width:100, height:100}} fontSize='large'/>
                    </Button>
                </div>
              </CardContent>
            </Card>
        </form>
    </div>
  )
}

export default AddUser