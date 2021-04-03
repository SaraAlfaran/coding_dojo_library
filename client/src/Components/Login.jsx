import { navigate } from "@reach/router"
import axios from "axios"
import { useState } from 'react'
import style from "../css/WelcomePageStyle.module.css";

const Login = ({ setUser }) => {
    const [inputErrors, setInputErrors] = useState([])
  const [inputFields, setInputFields] = useState({
    email: "",
    password: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post("http://localhost:8000/api/login", inputFields)
      .then((res) => {
        console.log(res.data.user)
        setUser(res.data.user)
        navigate('/Dashboard')
      })
      .catch(err => {
        const errorResponse = err.response.data.errors;
        console.log(err.response)
        const errorArr =[];
        for(var key of Object.keys(errorResponse)){
            console.log(key)
            errorArr.push(errorResponse[key])
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
    <main className={style.form_signin}>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" className={style.form_control} id="exampleInputEmail1" aria-describedby="emailHelp" name="email" onChange={handleChange}/>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" className={style.form_control} id="exampleInputPassword1" name="password" onChange={handleChange}/>
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
        {inputErrors.map((err,idx) => <p key={idx} className={style.errorMessages}>{err}</p>)}
      </form>
    </main>
  )
}

export default Login