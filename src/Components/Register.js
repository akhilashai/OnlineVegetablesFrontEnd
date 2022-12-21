import { useState } from "react"
import { useNavigate } from "react-router-dom";
import ApiService from "./ApiService";
import './Register.css';

const Register=()=>{
    let[registerUser,setRegisterUser]=useState({});
    let api=new ApiService();
    const userNameChangeHandler=(event)=>{
        console.log(event.target.value)
        registerUser.username=event.target.value;
    }
    const passwordChangeHandler=(event)=>{
        console.log(event.target.value)
        registerUser.password=event.target.value;
    }
    const roleChangeHandler=(event)=>{
        console.log(event.target.value)
        registerUser.role=event.target.value;
    }
    




    const navigate=useNavigate();


    const submitHandler=(event)=>{
        event.preventDefault();
        
        console.log(registerUser);
        api.register(registerUser).then(
           (response)=>{
            console.log(response.status)
            console.log(response.data);
            sessionStorage.setItem("Registered","true")
            sessionStorage.setItem("token",response.data.token);
            navigate("/login");
           
           }).catch((err)=>console.log("Register failed"));
        
    }
    return <div className="img4"> <br/> <br/><br/> <br/> <br/><br/>
    <div className="register">
    <div className="container center_div">
        <br/>
        <h4><b> REGISTER </b></h4>
        <div id="form" className="newEmpFormGroup">
            <form onSubmit={submitHandler}>
              <div>
                <input placeholder="Username" type="text"maxLength="25" className="form-control" onChange={userNameChangeHandler}/>
               <br/> </div>
               <input placeholder="Password" type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" className="form-control" onChange={passwordChangeHandler}/>
       <br/>
        <input placeholder="Role" type="text" maxLength="5" className="form-control" onChange={roleChangeHandler}/><br/>
        <div>
            <button type="submit" className="btn btn-primary">Register</button> &nbsp;
        </div>
        <br/>
        </form>
        </div>
    </div>
    </div>
    </div>
   
}
export default Register;
