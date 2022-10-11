import React, { useState } from 'react'
import './User.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import BadgeIcon from '@mui/icons-material/Badge';
import InfoIcon from '@mui/icons-material/Info';
import { Box, Button, Card, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormGroup, TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { deleteUser, saveChangedUser } from '../../../redux/usersSlice';


function User({user}) {
  // console.log(user);
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState(user.email)
  const [title, setTitle] = useState(user.name.title)
  const [first, setFirst] = useState(user.name.first)
  const [last, setLast] = useState(user.name.last)
  const [country, setCountry] = useState(user.location.country)
  const [city, setCity] = useState(user.location.city)
  const [street, setStreet] = useState(user.location.street.name)

  const [valid, setValid] = useState(true)

  const dispatch = useDispatch()

  const handleDeleteUser = () => {
    dispatch(deleteUser(user))
  }

  const handleEditUser = () => {
    console.log(user);
    setOpen(true);
  }

  const handleSaveChanges = (event) => {
   
    event.preventDefault();
    let editedUser = {
      email: email,
      id: {value: user.id.value},
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
      picture: {medium: user.picture.medium}
    }
    if (valid) {
      dispatch(saveChangedUser(editedUser))
      setOpen(false);
    } else {
      alert("The fields are not valid please check them and folow instructions")
    }
     
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='User'>
      <div className="User__wrapper">
      
      <div className="User__UserInfo">
        
        <div className="User__UserInfo-Name">
          <BadgeIcon/>
          <span>{`${user.name.title} ${user.name.last} ${user.name.first}`}</span>
        </div>

        <div className="User__UserInfo-Email">
          <EmailIcon/>
          <span>{`${user.email}`}</span>
        </div>
        
        <div className="User__UserInfo-Location">
          <PlaceIcon/>
          <span>{`${user.location.country}, ${user.location.city} ${user.location.street.name} `}</span>
        </div>

        <div className="User__UserInfo-ID">
          <InfoIcon/>
          <span>{user.id.value}</span>
        </div>
        
      </div>

        <div className="User__UserImage">
          <img src={user.picture.medium} alt="" />
        </div>

      </div>
      <div className='divider'></div>
      <div className="User__Footer">
        
          <Button onClick={handleEditUser}>
            <EditIcon fontSize='large'/>
          </Button>

          <Button onClick={handleDeleteUser}>
            <DeleteIcon fontSize='large'/>
          </Button>
      
      </div>
      
      <div className="User__editPopup">
        
      </div>


      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{`Edit User`}</DialogTitle>
        
        <DialogContent>
          <Box component="form" >
            <Card>
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
                    defaultValue={user.email}
                    onChange={(e) => {if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)){
                      setEmail(e.target.value)
                      setValid(true)
                    } else {
                      setEmail(e.target.value)
                      setValid(false)
                    }}}
                  />
                  
              </CardContent>
            </Card>
            <Card>
              <CardContent >
                <Typography gutterBottom variant="h5" component="div">
                  Name
                </Typography>
                
                  <TextField
                    error={/^(?!\s*$).+/.test(title) ? false : true}
                    helperText={/^(?!\s*$).+/.test(title) ? '' : 'Field is Requird'}
                    margin="dense"
                    id="name"
                    label="Title"
                    fullWidth
                    required
                    defaultValue={user.name.title}
                    onChange={(e)=> 
                    {if (/^(?!\s*$).+/.test(e.target.value)) {
                      setTitle(e.target.value)
                      setValid(true)
                    } else {
                      setValid(false)
                    }}}
                  />
                  <TextField
                    error={/^.{3,}$/.test(last) ? false: true}
                    helperText={/^.{3,}$/.test(last) ? '':'Min 3 characters is Requird'}
                    margin="dense"
                    id="name"
                    label="Last Name"
                    fullWidth
                    required
                    defaultValue={user.name.last}
                    onChange={(e) => {
                      if (/^.{3,}$/.test(e.target.value)) {
                        setLast(e.target.value)
                        setValid(true)
                      } else {
                        setLast(e.target.value)
                        setValid(false)
                        
                      }
                    }}
                  />
                  <TextField
                    error={/^.{3,}$/.test(first) ? false: true}
                    helperText={/^.{3,}$/.test(first) ? '': 'Min 3 characters is Requird'}
                    margin="dense"
                    id="name"
                    label="First Name"
                    fullWidth
                    required
                    defaultValue={user.name.first}
                    onChange={(e) => {
                      if (/^.{3,}$/.test(e.target.value)) {
                        setFirst(e.target.value)
                        setValid(true)
                      } else {
                        setValid(false)
                        
                      }
                    }}
                  />
                
                
              </CardContent>
            </Card>

            <Card>
              <CardContent >
                <Typography gutterBottom variant="h5" component="div">
                  Location
                </Typography>
                
                  <TextField
                    error={/^(?!\s*$).+/.test(country) ? false: true}
                    helperText={/^(?!\s*$).+/.test(country) ? '' : 'Field is Requird'}
                    margin="dense"
                    id="name"
                    label="Country"
                    fullWidth
                    required
                    defaultValue={user.location.country}
                    onChange={(e) => {
                      if (/^(?!\s*$).+/.test(e.target.value)) {
                        setCountry(e.target.value)
                        setValid(true)
                      } else {
                        
                        setValid(false)
                      }
                    }}
                    />
                  <TextField
                    error={/^(?!\s*$).+/.test(city) ? false: true}
                    helperText={/^(?!\s*$).+/.test(city) ? '' : 'Field is Requird'}
                    margin="dense"
                    id="name"
                    label="City"
                    fullWidth
                    required
                    defaultValue={user.location.city}
                    onChange={(e) => {
                      if (/^(?!\s*$).+/.test(e.target.value)) {
                        setCity(e.target.value)
                        setValid(true)
                      } else {
                        
                        setValid(false)
                      }
                    }}
                    />
                  <TextField
                    error={/^(?!\s*$).+/.test(street) ? false: true}
                    helperText={/^(?!\s*$).+/.test(street) ? '' : 'Field is Requird'}
                    margin="dense"
                    id="name"
                    label="Street"
                    fullWidth
                    required
                    defaultValue={user.location.street.name}
                    onChange={(e) => {
                      if (/^(?!\s*$).+/.test(e.target.value)) {
                        setStreet(e.target.value)
                        setValid(true)
                      } else {
                        
                        setValid(false)
                      }
                    }}
                  />
                
                
              </CardContent>
            </Card>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button type='submit'onClick={handleSaveChanges}>Save</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>

    </div>
  )
}

export default User