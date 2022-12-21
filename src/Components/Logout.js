import { Button, Modal } from 'bootstrap';
import './Logout.css';

const Logout=()=>{
    sessionStorage.removeItem("token");
    sessionStorage.setItem("loggedIn","false");

    return <div className="img9">
        <br/><br/><br/><br/>
        <div className="logout">
        <h4><b> Logout Successful !!  </b></h4>


        </div>
    </div>
}

export default Logout;
