import React, {useState, useContext} from 'react'
import { AccountContext } from './Account'
import { useHistory } from "react-router-dom";
import Home from './Home';
import {Link} from 'react-router-dom'
import ForgotPassword from './ForgotPassword';


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory();

    const{authenticate} = useContext(AccountContext)

    const onSubmit = (e) => {
        e.preventDefault();
        authenticate(email, password)
        .then((data) => {
            history.push("/Home");
            console.log("Logged In ", data)
        }).catch((err) => {
            console.log("Error ", err)
        })
    }


    return(
        <div>
            <form onSubmit = {onSubmit}>
                Login
                <label htmlFor = "email"> Email </label>
                <input value = {email} onChange = {(e) => setEmail(e.target.value)}></input>

                <label htmlFor = "password"> Password </label>
                <input value = {password} onChange = {(e) => setPassword(e.target.value)}></input>

                <button type="submit">Log In</button>
                <p>Forgot Password? </p> <Link to="/forgotpassword">Forgot Password</Link>
                <p>Don't have an account? <Link to="/signup">Sign Up</Link> </p>

            </form>
        </div>
    )

}

export default  Login