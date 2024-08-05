import "./Home.css";

function Home(userDetails){
    const user = userDetails.user;
    const logout = () => {
        window.open(
            `${process.env.REACT_APP_API_URL}/auth/logout`,
            "_self"
        )
    }
    return (
        <div className="main-container">
            <h1 className="heading">Home</h1>
            <div className="form-container">
                <div className="left">
                   <img className="img" src="./images/profile.png" alt="profile"/>
                </div>
                <div className="right">
                <h2 className="from-heading">Profile</h2>
                <img className="profile-img" src={user.picture} alt="profile"/>
                <input type="text" defaultValue={user.name} className="input" placeholder="username"/>
                 <input type="text" defaultValue={user.email} className="input" placeholder="Email"/>
                 <button className="btn" onClick={logout}> Log Out </button>
                </div>
            </div>

        </div>
    )
}

export default Home;