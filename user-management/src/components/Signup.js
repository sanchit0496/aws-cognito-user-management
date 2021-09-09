import React, {useState} from 'react'
import UserPool from '../UserPool'
import { useHistory } from 'react-router'
import Login from './Login'
import { CognitoUserPool, CognitoUserAttribute, CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";

const setCognitoUserAttribute = (attributeKey, attributeValue) => {
    let data = {
      Name: attributeKey,
      Value: attributeValue
    };
  
    return new CognitoUserAttribute(data);
  };

const Signup = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("") //first
    const [phoneNumber, setPhoneNumber] = useState("")
    const [password, setPassword] = useState("") //second
    const [birthdate, setBirthdate] = useState("")
    const [address1, setAddress1] = useState("")
    const [address2, setAddress2] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [country, setCountry] = useState("")
    const [zipCode, setZipcode] = useState("")

    const attributeList = []
    attributeList.push(setCognitoUserAttribute('name', name));
    attributeList.push(setCognitoUserAttribute('phone_number', phoneNumber));
    attributeList.push(setCognitoUserAttribute('birthdate', birthdate));
    attributeList.push(setCognitoUserAttribute('custom:address1', address1));
    attributeList.push(setCognitoUserAttribute('custom:address2', address2));
    attributeList.push(setCognitoUserAttribute('custom:city', city));
    attributeList.push(setCognitoUserAttribute('custom:state', state));
    attributeList.push(setCognitoUserAttribute('custom:country', country));
    attributeList.push(setCognitoUserAttribute('custom:zipCode', zipCode));


    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
        UserPool.signUp(email, password, attributeList, null, (err,data) => {
            if(err){
                console.log(attributeList)
                console.error(err)
            }else{
                console.log(data)
            }
        })
    }

    // Name, email, Phone Number, Password,  Birthdate, Address Line 1, 
    // Address Line 2, City, State, Country, Zip code

    return(
        <div>
            <h2>Sign Up</h2>
            <form onSubmit = {onSubmit}>

                <label htmlFor = "name"> Name </label>
                <input value = {name} onChange = {(e) => setName(e.target.value)}></input>

                <label htmlFor = "email"> Email </label>
                <input value = {email} onChange = {(e) => setEmail(e.target.value)}></input>

                <label htmlFor = "phoneNumber"> Phone Number </label>
                <input value = {phoneNumber} onChange = {(e) => setPhoneNumber(e.target.value)}></input>

                <label htmlFor = "password"> Password </label>
                <input value = {password} onChange = {(e) => setPassword(e.target.value)}></input>

                <label htmlFor = "birthdate"> Birthdate </label>
                <input type="date" value = {birthdate} onChange = {(e) => setBirthdate(e.target.value)}></input>

                <label htmlFor = "address1"> Address Line 1 </label>
                <input value = {address1} onChange = {(e) => setAddress1(e.target.value)}></input>

                <label htmlFor = "address2"> Address Line 2 </label>
                <input value = {address2} onChange = {(e) => setAddress2(e.target.value)}></input>

                <label htmlFor = "city"> City </label>
                <input value = {city} onChange = {(e) => setCity(e.target.value)}></input>

                <label htmlFor = "state"> State </label>
                <input value = {state} onChange = {(e) => setState(e.target.value)}></input>

                <label htmlFor = "country"> Country </label>
                <input value = {country} onChange = {(e) => setCountry(e.target.value)}></input>

                <label htmlFor = "zipCode"> Zip Code </label>
                <input value = {zipCode} onChange = {(e) => setZipcode(e.target.value)}></input>


                <button type="submit">Sign Up</button>
            </form>
        </div>
    )

}

export default  Signup