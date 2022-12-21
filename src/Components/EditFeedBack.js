import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import ApiService from "./ApiService";
import './FeedBackList.css';

const EditFeedBack=(props)=>{
   
    const {id}=useParams();
    const {vid}=useParams();
    const {cid}=useParams();
    let[feedBacks,setFeedBacks]=useState([]);
    const navigate= useNavigate();
   // const [show,setShow]=useState(false);
    //const handleClose=()=> setShow(false);
    let apiService=new ApiService();
    
    useEffect( ()=>{
        console.log("feed id is "+id)
        apiService.getFeedBacks(id).then(
            (response)=>{
                console.log(response.data)
                setFeedBacks(prev=>response.data)
            })
           
    },[]);
      
    const custNameChangeHandler=(event)=>{
        console.log(event.target.value);
        feedBacks.custName=event.target.value;
       setFeedBacks( (prevState)=>{return{...prevState,feedBacks}})
    }
    const vegNameChangeHandler=(event)=>{
        console.log(event.target.value);
        feedBacks.vegName=event.target.value;
       setFeedBacks( (prevState)=>{return{...prevState,feedBacks}})
    }
    
    
    const CommentsChangeHandler=(event)=>{
        console.log(event.target.value);
        feedBacks.comments=event.target.value;
        setFeedBacks( (prevState)=>{return{...prevState,feedBacks}})
    }
    const RatingsChangeHandler=(event)=>{
        console.log(event.target.value);
        feedBacks.ratings=event.target.value;
        setFeedBacks((prevState)=>{ return{...prevState,feedBacks}})
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        console.log(feedBacks)
        apiService.updateAllFeedBacks(feedBacks,id).then(
            (response)=>{
               console.log("updated.....");
                alert("updated successfully....");
                navigate("/feedBacks");
                //setShow(()=>true);
            }
        );
    }
    const goBack=()=>{
        navigate("/feedBacks");
    }
    return ( <div className="img15">
    <div className="container">
       <br/> <br/> <br/> <br/>
        <div className="editfeedback">
            <div className="container center_div">
            <br/>
         <h4><b>EDIT FEEDBACK</b></h4>
        
        <form onSubmit={submitHandler}>
<input placeholder="Enter the Vegetable Id"type="text" className="form-control" value={vid} readOnly onChange={vegNameChangeHandler}/>  
<br/>
<input placeholder="Enter the Cutomer Id"type="text" className="form-control"  value={cid} readOnly onChange={custNameChangeHandler}/> 

<br/>
<input placeholder="Comments" type="text" className="form-control" value={feedBacks.comments} 
 onChange={CommentsChangeHandler} />
 
 <br/>
 <select type="text" class="form-select hover" value={feedBacks.ratings} onChange={RatingsChangeHandler} >
     
     <option value="0">Choose Rating</option>
     <option value="1">1</option>
     <option value="2">2</option>
     <option value="3">3</option>
     <option value="4">4</option>
     <option value="5">5</option>
     </select>

<br/>

  <button  type="submit" className="btn btn-primary">Edit</button>  &nbsp;
  <button  type="button" className="btn btn-primary" onClick={goBack}>Cancel</button> &nbsp;
<br/>
</form>
<br/>
</div>
</div>
</div>
    </div>)
}
export default EditFeedBack;
