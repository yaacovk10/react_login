import React, { useState } from 'react'
import axios from 'axios'


const Login = (props) => {
    const [userName, setuserName] = useState("")
    const [pwd, setpwd] = useState("")
    const [logged, setlogged] = useState(false)
    const MY_SERVER = 'http://127.0.0.1:8000/login'

    const doLogin = () => {
        // console.log(userName, pwd);
        axios.post(MY_SERVER, {
            username: userName,
            password: pwd
        })
            .then((response) => {
                console.log(response.data.access);
                sessionStorage.setItem('token', response.data.access)
                const token = response.data.access
                const object = JSON.parse(atob(token.split('.')[1]))
                console.log(object.email)
                props.email(object.email)
                setlogged(true)
                props.log(true)
            });
    }
    const doLogout= ()=>{
        sessionStorage.setItem('token', '')
        setlogged(false)
        props.log(false)
    }
    return (
        <div style={{ backgroundColor: 'lightblue', padding: '20px' }} >
            Login page <br />
            {logged && <button onClick={()=> doLogout()}>Logout</button>}
            {!logged && <div>
                User name :  <input onChange={(evt) => setuserName(evt.target.value)} />
                password :  <input type="password" onChange={(evt) => setpwd(evt.target.value)} />
                <button onClick={() => doLogin()}>Login</button></div>}
        </div>
    )
}

export default Login