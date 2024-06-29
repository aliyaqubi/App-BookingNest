import React, { useState } from 'react';
import { Modal, Input, Button, Box } from "@mui/material";
//import {makeStyles} from "@mui/styles";
//import './LogInOut.css';

// const LogInOut = ({ signIn }) => {

//     const [openSignIn, setOpenSignIn] = useState(false);
//     //const [openSignUp, setOpenSignUp] = useState(false);
//     //const [modalStyle, setModalStyle] = useState(getModalStyle);
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     return (
//       <Modal open={openSignIn} onClose={() => setOpenSignIn(false)}>
//         <Box
//           sx={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             width: 400,
//             bgcolor: 'background.paper',
//             boxShadow: 24,
//             p: 4,
//           }}
//         >
//           <h2>Login</h2>
//           <form className= "signin">
//             <center>
//                 <h3 style={{ margin: 0 }}>BookingNest ...</h3>
//             </center>
//             <input
//                 placeholder= 'username'
//                 type= 'text'
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)} 
//             />
//             <input
//                 placeholder= 'password'
//                 type= 'password'
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)} 
//             />
//             <Button
//                 type= 'submit'
//                 onClick={signIn}>Log in</Button>
//           </form>
//         </Box>
//       </Modal>
//     );
// };

// export default LogInOut;


// //> Modal Style
// function getModalStyle() {
//     const top = 50;
//     const left= 50;
  
//     return {
//       top: '${top}%',
//       left: '${left}%',
//       transform: 'translate(-${top}%, -${left}%)',
//     };
//   }

// //> classes
// const useStyles = makeStyles((theme) =>({
//     paper: {
//         backgroundColor: theme.palette.background.paper,
//         position:'absolute',
//         width: 400,
//         border: '2px solid #000',
//         boxShadow: theme.shadows[5],
//         padding: theme.spacing(2, 4, 3)
//     }
// }))

// function LogInOut () {

//     const classes = useStyles();
//     const [openSignIn, setOpenSignIn] = useState(false);
//     //const [openSignUp, setOpenSignUp] = useState(false);
//     const [modalStyle, setModalStyle] = useState(getModalStyle);
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
    
//     const signIn = (event) => {

//     }


//     return (
//         <div>
//             <Modal
//                 open= {openSignIn}
//                 onClose= {() => setOpenSignIn(false)}>

//                 <div style={modalStyle} className= {classes.paper}>
//                     <form className= "signin">
//                         <center>
//                             <h3 style={{ margin: 0 }}>BookingNest ...</h3>
//                         </center>
//                         <input
//                            placeholder= 'username'
//                            type= 'text'
//                            value={username}
//                            onChange={(e) => setUsername(e.target.value)} 
//                         />
//                         <input
//                            placeholder= 'password'
//                            type= 'password'
//                            value={password}
//                            onChange={(e) => setPassword(e.target.value)} 
//                         />
//                         <Button
//                             type= 'submit'
//                             onClick={signIn}>Log in</Button>
//                     </form>

//                 </div>

//             </Modal>
//         </div>
//     )
// };

// export default LogInOut;








//> What is before:
// return (
//     <div>
//         <Modal
//             open= {openSignIn}
//             onClose= {() => setOpenSignIn(false)}>

//             <div style={modalStyle} className= {classes.paper}>
//                 <form className= "signin">
//                     <center>
//                         <h3 style={{ margin: 0 }}>BookingNest ...</h3>
//                     </center>
//                     <input
//                        placeholder= 'username'
//                        type= 'text'
//                        value={username}
//                        onChange={(e) => setUsername(e.target.value)} 
//                     />
//                     <input
//                        placeholder= 'password'
//                        type= 'password'
//                        value={password}
//                        onChange={(e) => setPassword(e.target.value)} 
//                     />
//                     <button
//                         type= 'submit'
//                         onClick={signIn}>Login</button>
//                 </form>

//             </div>

//         </Modal>
//     </div>
// )
// };

// export default LogInOut;









