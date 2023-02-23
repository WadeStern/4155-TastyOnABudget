import React from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import RestAPI from '../RestAPI';

const Login = () => {
    
    const [userName, setUserName] = React.useState("");
    const [pass, setPass] = React.useState("");
    const handleClick = (e) => {
        console.log(userName, pass);
        RestAPI.getToken(userName,pass).then((res)=>{
            
            sessionStorage.setItem("token",res.data['access_token'])
            console.log(sessionStorage.getItem("token"))
        })
        setPass("");
        setUserName("");
    }
    const handleUsrNameChange = (e) => {
        setUserName(e.target.value);
    }
    const handlePassChange = (e) => {
        setPass(e.target.value);
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}}>

            <TextField
                id="user-name"
                label="User Name"
                variant="outlined"
                margin="normal"
                value={userName}
                onChange={handleUsrNameChange}

            />

            <TextField
                id="password"
                label="Password"
                variant="outlined"
                margin="normal"
                type="password"
                value={pass}
                onChange={handlePassChange}

            />

            <Button variant="contained" onClick={handleClick} style={{padding:"0px,0px,5px,0px"}}>Login</Button>
        </div>
    )
}

export default Login
