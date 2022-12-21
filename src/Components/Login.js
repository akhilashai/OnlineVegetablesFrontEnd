import { useState } from "react"
import { useNavigate } from "react-router-dom";
import ApiService from "./ApiService";
import './Login.css';

const Login =()=>{
    let [loginUser,setLoginUser]=useState({});
    let api= new ApiService();
    const userNameChangeHandler=(event)=>{
        console.log(event.target.value)
        loginUser.username=event.target.value;
    }
    const passwordChangeHandler=(event)=>{
        console.log(event.target.value)
        loginUser.password=event.target.value;

    }
    const navigate= useNavigate(); 
    const submitHandler=(event)=>{
        event.preventDefault();
        console.log(loginUser);
        api.login(loginUser).then( (response)=>{
            console.log(response.status)
        console.log( response.data);
            sessionStorage.setItem("loggedIn","true")
            sessionStorage.setItem("token",response.data.token);
            sessionStorage.setItem("role",response.data.role);

            
             navigate("/vegetables");
        }).catch((err)=>console.log("Login Failed"));
    }
    
    return <div className="img1"> 
    <br/> <br/><br/> <br/> <br/>
    <div className="login">
    <div className="container center_div">
        <br/>
        
 <h4><b> LOGIN </b></h4>
       <div>
           <form className="rounded" onSubmit={submitHandler} >
            
         <div>
          <input  placeholder="Username" type="text" maxLength="25" className="form-control"  onChange={userNameChangeHandler} />
       <br/> </div>
       <div>
               <input placeholder="Password" type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" className="form-control" onChange={passwordChangeHandler} />
               </div>
        <br/>   
      <div>
    
          <button  type="submit" className="btn btn-primary">Login</button> &nbsp;
        </div>
        <br/>
        </form>
        </div>
        
        </div>
        </div>
        </div>
}

export default Login;
