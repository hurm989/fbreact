import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { Typography } from '@mui/material';
import SMButton from '../config/components/button'
import { useState } from 'react';
import SingUp from '../config/firebaseMethod'
import { useNavigate } from 'react-router-dom';
import SMInput from '../config/components/input'
import { signUpUser } from '../config/firebaseMethod';
import { sendData } from '../config/firebaseMethod';


function SignUpScreen() {
    const [userObj, setUserObj] = useState({})
    const navigate = useNavigate()
    function signUpp() {
        if(!userObj.email){
            alert("Enter Email")
        }
        else if(!userObj.password || userObj.password.length<6){
            alert("Enter Password and password must be of 6 charact")
        }
        signUpUser(userObj).then((res) => {
            console.log(res)
            alert("User Created")
            sendData(userObj,res.user.uid,'users',).then(()=>{
                console.log("Saved Succesfully")
            })
            navigate("/login")
        }).catch((err) => {
            console.log(err.message)
        })
    }

    return <>
        <Grid item xs={12} sm={12} lg={4} md={4} xl={4} sx={{ height: 400, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Typography>Sign Up</Typography>

            <Box sx={{ width: 500, border: 3, borderColor: "transparent" }}>
                <SMInput onChange={(e) => setUserObj({ ...userObj, email: e.target.value })} label="Enter Your Email" />
            </Box>
            <Box sx={{ width: 500, border: 3, borderColor: "transparent" }}>
                <SMInput onChange={(e) => setUserObj({ ...userObj, password: e.target.value })} type="password" label="Enter Your Password" />
            </Box>
            <Box sx={{ width: 500, border: 3, borderColor: "transparent" }}>
                <SMButton onClick={signUpp} ButnName="Sign Up"></SMButton>
            </Box>
        </Grid>
    </>
}
export { SignUpScreen }
