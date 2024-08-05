import {Link} from "react-router-dom";
import "./Signup.css";

function Signup() {
    const googleAuth = () => {
        window.open(
            `${process.env.REACT_APP_API_URL}/auth/google/callback`,
            "_self"
        )
    }
    return (
        <div className="main-container">
            <h1 className="heading">Sign Up Form</h1>
            <div className="form-container">
                <div className="left">
                   <img className="img" src="./images/signup.png" alt="signup"/>
                </div>
                <div className="right">
                <h2 className="from-heading">Create Account</h2>
                <input type="text" className="input" placeholder="Username"/>
                 <input type="text" className="input" placeholder="Email"/>
                 <input type="password" className="input" placeholder="Password"/>
                 <button className="btn">Signup </button>
                 <p className="text">Or</p>
                 <button className="google-btn" onClick={googleAuth}>
                    <img src="./images/google.png" alt="google icon"/>
                    <span>Sign up with Google</span>
                 </button>
                 <p className="text">
                    Already Have Account? <Link to="/login">Log in</Link>
                 </p>
                </div>
            </div>

        </div>
    )
}

export default Signup;