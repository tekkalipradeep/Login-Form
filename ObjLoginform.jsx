import React, { useState } from "react";

function ObjLoginform() {
    const[user,setUser] = useState({name:"",email:"",password:""})
    const[error,SetError] = useState({})

    const handlechange = (e) =>{
        setUser({...user,[e.target.name]:e.target.value})
        SetError({...error,[e.target.name]:""})

    }

    const validate = ()=>{
       let errorText = {}
       if(!user.name.trim()){
        errorText.name = "please enter valide name "
       }
       if(!user.email.trim()){
        errorText.email = "please enter email"
       }
       if(!user.password.trim()){
        errorText.password = "please enter valid password"
       }
       SetError(errorText)
        
    }
    let handleSubmit = (e) =>{
        e.preventDefault()
        console.log(user)
        validate()
    }
    

    return(
        <div>
            <form className="cardmain mt-5 p-4"onSubmit={handleSubmit}>
                <div className="form-group mt-3">
                    <label htmlFor="name">Name</label>
                    <input type="text"
                    className="form-control"
                    id="name"
                    name="name" value={user.name} onChange={handlechange}/>
                    {error.name && <p style={{color:"red"}}>{error.name}</p>}
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="email">email</label>
                    <input type="email"
                    className="form-control"
                    id="email"
                    name="email" value={user.email} onChange={handlechange}/>
                    {error.email && <p style={{color:"red"}}>{error.email}</p>}
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="passwoed">password</label>
                    <input type="password"
                    className="form-control"
                    id="password"
                    name="password" value={user.password} onChange={handlechange}/>
                    {error.password && <p style={{color:"red"}}>{error.password}</p>}
                </div>
                <input type="Submit"className="btn btn-primary mt-3"/> 
            </form>
        </div>
    )
}
export default ObjLoginform