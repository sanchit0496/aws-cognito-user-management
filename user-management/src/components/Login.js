import React, {useState} from 'react'
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js'
import UserPool from '../UserPool'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onSubmit = (e) => {
        e.preventDefault();
       
        const user = new CognitoUser({
            Username: email,
            Pool:UserPool
        });

        const authDetails = new AuthenticationDetails({
            Username: email,
            Password: password
        })

        user.authenticateUser(authDetails, {
            onSuccess: (data) => {
                console.log("Success: ", data)
            },
            onFailure: (err) => {
                console.log("Failure: ", err)
            },
            newPasswordRequired: (data) => {
                console.log("New Password Required: ", data)
            }
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

            </form>
        </div>
    )

}

export default  Login