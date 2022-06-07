import { Box, Typography } from "@mui/material"
import { useEffect } from "react";
import { useParams } from "react-router-dom"
import SMButton from "../config/components/button";
import { getData, logOutUser } from "../config/firebaseMethod";
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const params = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        if (params.id) {
            getData()
        }
    })
    function logOut() {
        logOutUser().then((e) => {
            navigate('/')
        }).catch((f) => {
            console.log(f)
        })
    }
    return <>
        <Box>
            <SMButton onClick={logOut} ButnName="Sign Out"></SMButton>
        </Box>
    </>
}
export default Dashboard