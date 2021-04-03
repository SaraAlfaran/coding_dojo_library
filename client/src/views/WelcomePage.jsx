import Login from '../Components/Login';
import Register from '../Components/Register';
import style from "../css/WelcomePageStyle.module.css";
import { useState } from 'react'


const WelcomePage = () => {
    const [user, setUser] = useState(null)

    return (
    <div className={style.background}>
      <h1>Welcome to Coding Dojo Library</h1>
      <div className={style.content}>
        <Register path="/register" setUser={setUser} />
        <Login path="/login" setUser={setUser}  />
      </div>
    </div>
    )
  }
  export default WelcomePage;