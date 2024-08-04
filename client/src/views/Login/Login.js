import {Link} from "react-router-dom";
import "./Login.css";

function Login() {
    const googleAuth = () => {
        window.open(
            `${process.env.REACT_APP_API_URL}/auth/google/callback`,
            "_self"
        )
    }
    return (
        <div className="main-container">
            <h1 className="heading">Log in Form</h1>
            <div className="form-container">
                <div className="left">
                   <img  className="img" src="./images/login.png" alt="login"/>
                </div>
                <div className="right">
                <h2 className="from-heading">Members Log in</h2>
                 <input type="text" className="input" placeholder="Email"/>
                 <input type="text" className="input" placeholder="Password"/>
                 <button className="btn">Log In</button>
                 <p className="text">Or</p>
                 <button className="google-btn" onClick={googleAuth}>
                    <img src="./images/google.png" alt="google icon"/>
                    <span>Sign in with Google</span>
                 </button>
                 <p className="text">
                    New Here ? <Link to="/signup">Sign Up</Link>
                 </p>
                </div>
            </div>

        </div>
    )
}

export default Login;