import { navigate } from '@reach/router'
import axios from 'axios'
import { useState } from 'react'
import style from "../css/WelcomePageStyle.module.css";

const Register = ({ setUser }) => {
  const [inputFields, setInputFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  console.log(inputFields)

  const [inputErrors, setInputErrors] = useState([])
  console.log(inputErrors)
  const handleSubmit = (event) => {
    console.log("submitting form")
    event.preventDefault()
    
    axios
      .post("http://localhost:8000/api/register", inputFields)
      .then((res) => {
        console.log(res.data)
        
        setUser(res.data.user)
        
        navigate("/Dashboard")
      })
      .catch(err => {
        const errorResponse = err.response.data.errors;
        const errorArr =[];
        for(var key of Object.keys(errorResponse)){
            errorArr.push(errorResponse[key].message)
        }
        setInputErrors(errorArr)
    })
  }

  const handleChange = (e) => {
    console.log("changing state")
    setInputFields({
      ...inputFields,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className={style.form_register}>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="exampleInputFirstName" class="form-label">First Name</label>
          <input type="text" className={style.form_control} id="exampleInputFirstName" name="firstName" onChange={handleChange}/>
        </div>
        <div class="mb-3">
          <label for="exampleInputLastName" class="form-label">Last Name</label>
          <input type="text" className={style.form_control} id="exampleInputLastName" name="lastName" onChange={handleChange}/>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" className={style.form_control} id="exampleInputEmail1" aria-describedby="emailHelp" name="email" onChange={handleChange}/>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" className={style.form_control} id="exampleInputPassword1" name="password" onChange={handleChange}/>
        </div>
        <div class="mb-3">
          <label for="exampleInputConfirmPassword1" class="form-label">Confirm Password</label>
          <input type="password" className={style.form_control} id="exampleInputPassword1" name="confirmPassword" onChange={handleChange}/>
        </div>
        <button type="submit" class="btn btn-primary">Register</button>
        {inputErrors.map((err,idx) => <p key={idx} className={style.errorMessages}>{err}</p>)}
      </form>
    </main>
  )
}

export default Register
