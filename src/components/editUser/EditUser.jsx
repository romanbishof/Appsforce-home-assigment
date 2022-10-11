// import React, { useState } from 'react'
// import { Button, Card, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Typography } from '@mui/material';
// import { useSelector } from 'react-redux';


// function EditUser({user}) {

//     const [open, setOpen] = useState(false);
//     // const {Users} = useSelector((state) => state.users)

//     const handleClickOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };


//   return (

//     <div className='EditUser'>
//         <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>{`Edit User`}</DialogTitle>
        
//         <DialogContent>
//         <Card>
//           <CardContent >
//             <Typography gutterBottom variant="h5" component="div">
//               Email
//             </Typography>
            
//               <TextField
//                 margin="dense"
//                 id="name"
//                 label="Email"
//                 fullWidth
//                 defaultValue={user.email}
//               />
              
//           </CardContent>
//           </Card>
//           <Card>
//           <CardContent >
//             <Typography gutterBottom variant="h5" component="div">
//               Name
//             </Typography>
            
//               <TextField
//                 margin="dense"
//                 id="name"
//                 label="Title"
//                 fullWidth
//                 defaultValue={user.name.title}
//               />
//               <TextField
//                 margin="dense"
//                 id="name"
//                 label="Last Name"
//                 fullWidth
//                 defaultValue={user.name.last}
//               />
//               <TextField
//                 margin="dense"
//                 id="name"
//                 label="First Name"
//                 fullWidth
//                 defaultValue={user.name.first}
//               />
            
            
//           </CardContent>
//           </Card>

//           <Card>
//           <CardContent >
//             <Typography gutterBottom variant="h5" component="div">
//               Location
//             </Typography>
            
//               <TextField
//                 margin="dense"
//                 id="name"
//                 label="Country"
//                 fullWidth
//                 defaultValue={user.location.country}
//               />
//               <TextField
//                 margin="dense"
//                 id="name"
//                 label="City"
//                 fullWidth
//                 defaultValue={user.location.city}
//               />
//               <TextField
//                 margin="dense"
//                 id="name"
//                 label="Street"
//                 fullWidth
//                 defaultValue={user.location.street.name}
//               />
            
            
//           </CardContent>
//           </Card>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Save</Button>
//           <Button onClick={handleClose}>Cancel</Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   )
// }

// export default EditUser