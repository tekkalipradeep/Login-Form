import React, { useState } from "react";

function LoginForm() {

    const [Login, setLogin] = useState(false)
    const Submit = () => {
        setLogin(!Login)
    }

    return (
        <div>
            <div>
                <h1>{Login ? "Login" : "Register"}</h1>
            </div>
            <div>
                <form>
                    {Login ? null : <input type="text" placeholder="enter user name" className="form-control" />}
                    <input type="email" placeholder="enter your mail" className="form-control" />
                    <input type="password" placeholder="enter your password" className="form-control" />
                    <button className="btn btn-primary" >{Login ? "login" : "Register"}</button>
                    <p>{Login ? "Don't have an Account" : "Already have an Account"}
                        <button type="button" className="btn btn-success" onClick={Submit}>{Login ? "Register" : "Login"}</button>
                    </p>

                </form>
            </div>
        </div>
    )
}
export default LoginForm