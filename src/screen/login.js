import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import SMButton from '../config/components/button'
import { useState } from 'react';
import SingUp from '../config/firebaseMethod'
import { useNavigate } from 'react-router-dom';
import SMInput from '../config/components/input'
import { logInUser } from '../config/firebaseMethod';

function LoginScreen() {
    const [userObj, setUserObj] = useState({})
    const navigate = useNavigate()
    function logIn() {
        if (!userObj.email) {
            alert("Enter Email")
        }
        else if (!userObj.password || userObj.password.length < 6) {
            alert("Enter Password and password must be of 6 charact")
        }
        logInUser(userObj).then((e) => {
            alert("Log In Succesfully")
            navigate(`/${e.user.uid}`)
        }).catch((err) => {
            console.log(err.message)
        })
        // logInUser(userObj).then((res) => {
        //     console.log(res)
        //     console.log("Log In Sucessfuly")
        //     // navigate("/login")
        //  }).catch((err) => {
        // console.log(err.message)
        //  })
        // console.log(userObj)
    }

    return <>
        <Grid item xs={12} sm={12} lg={4} md={4} xl={4} sx={{ height: 400, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Typography>Log In</Typography>

            <Box sx={{ width: 500, border: 3, borderColor: "transparent" }}>
                <SMInput onChange={(e) => setUserObj({ ...userObj, email: e.target.value })} label="Enter Your Email" />
            </Box>
            <Box sx={{ width: 500, border: 3, borderColor: "transparent" }}>
                <SMInput onChange={(e) => setUserObj({ ...userObj, password: e.target.value })} type="password" label="Enter Your Password" />
            </Box>
            <Box sx={{ width: 500, border: 3, borderColor: "transparent" }}>
                <SMButton onClick={logIn} ButnName="Log In"></SMButton>
            </Box>
        </Grid>
    </>
}
export default LoginScreen 