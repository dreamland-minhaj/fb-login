import "./Login.scss";

const Login = () => {
    return(
        <>
        <section className="login-area">
            <div className="container">
                <div className="brand">
                    <img src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="" />
                    <h1>Facebook helps you connect and share with the people in your life.</h1>
                </div>
                <div className="login-box">
                    <div className="login-form">
                        <input type="text" name="" id="" placeholder="Enter email or phone" />
                        <input type="password" name="" id="" placeholder="Password"/>
                        <button>Log in</button>
                    </div>
                    <p>Forgotten Password</p>
                    <hr />
                    <button>Create new account</button>
                </div>
            </div>
        </section>
        </>
    );
}

export default Login;