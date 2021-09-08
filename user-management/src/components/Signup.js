import React, {useState} from 'react'
import UserPool from '../UserPool'

const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onSubmit = (e) => {
        e.preventDefault();
        UserPool.signUp(email, password, [], null, (err,data) => {
            if(err){
                console.error(err)
            }
            console.log(data)
        })
    }

    return(
        <div>
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