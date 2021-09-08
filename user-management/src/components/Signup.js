import React, {useState} from 'react'
import UserPool from '../UserPool'
import { useHistory } from 'react-router'
import Login from './Login'

const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
        UserPool.signUp(email, password, [], null, (err,data) => {
            if(err){
                console.error(err)
            }else{
                console.log(data)
            }
        })
    }

    return(
        <div>
            <h2>Sign Up</h2>
            <form onSubmit = {onSubmit}>
                
                <label htmlFor = "email"> Email </label>
                <input value = {email} onChange = {(e) => setEmail(e.target.value)}></input>

                <label htmlFor = "password"> Password </label>
                <input value = {password} onChange = {(e) => setPassword(e.target.value)}></input>

                <button type="submit">Sign Up</button>
            </form>
        </div>
    )

}

export default  Signup