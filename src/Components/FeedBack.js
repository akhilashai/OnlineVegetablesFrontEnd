import axios from "axios";
import { useEffect, useState } from "react";
import ApiService from "./ApiService";
//import './FeedBack.css';

const FeedBack=(props)=>{
    let[feedBack,setFeedBack]=useState({});
    let [status,setStatus]=useState('');
    let[feedIdError,setFeedIdError]=useState({});
    let [commentsError,setCommentsError]=useState('');
    let [ratingsError,setRatingsError]=useState('');
    let [vegIdError,setVegIdError]=useState('');
    let [custIdError,setCustIdError]=useState('');
    let[feedBacks,setFeedBacks]=useState('');
   
    let apiService=new ApiService();
   
    useEffect(()=>{
        console.log("use effect.....")
        axios.get(`http://localhost:7777/feedBacks`).then(
            response=>{
                setFeedBacks(prevState=>response.data)
                console.log(response.data)
                console.log("...........")
                console.log(feedBacks)

            }
        ).catch(error=>console.log(error));
    },[]);


    function custIdHandler(event){
        console.log(event.target.value);
        feedBack.custId=event.target.value;
    }

    function vegIdHandler(event){
      console.log(event.target.value);
      feedBack.vegId=event.target.value;
  }

  function ratingsHandler(event){
    console.log(event.target.value);
   feedBack.ratings=event.target.value;
  }

  function commentsHandler(event){
    console.log(event.target.value);
    feedBack.comments=event.target.value;
  }
  function validate(){
    let isError=false;
    if(feedBack.custId===""||feedBack.custId===undefined){
      setCustIdError(prev=><font color="red">Please enter custId</font>)
      isError=true;
  }
  if(feedBack.vegId===""||feedBack.vegId===undefined){
    setVegIdError(prev=><font color="red">Please enter VegId</font>)
    isError=true;
}
if(feedBack.comments===""||feedBack.comments===undefined){
  setCommentsError(prev=><font color="red">Please enter Comments</font>)
  isError=true;
}
if(feedBack.ratings===""||feedBack.ratings===undefined){
  setRatingsError(prev=><font color="red">Please enter Ratings</font>)
  isError=true;
}

    return isError
}
          function submitHandler(event){
            event.preventDefault();
            let isError=validate();
            if(isError==false){
                console.log("Form submited")
                console.log(feedBack);
                
                apiService.addFeedBack(feedBack).then(

                  response=>{

                      console.log("Success"+response.data);
                      setStatus(prevStatus=>"FeedBack Added")
                  }
              ).catch(error=>setStatus(prevStatus=>"FeedBack Does Not Added"))
            }
        }
    
    return<div className="img16"><br/><br/><br/><br/><br/>
    <div className="feedback">
      <br/>
    <h4><b> ADD FEEDBACK </b></h4>
  
    <form   onSubmit={submitHandler}>
  
    <div className="col-md-12">
<div className="input-group has-validation">
  
 <input placeholder="Enter the Customer Id" type="text" class="form-control"  id="validationCustomerName" onChange={custIdHandler} required/>
  <div className="invalid-feedback">
    Please choose a Customer Id.
  </div>
  
  <div>
    <br/>
    {custIdError}
  </div>
  </div>
</div>
 <br/>
     <div className="col-md-12">
     <input placeholder="Enter the Vegetable Id" type="text" class="form-control"  id="validationCustom03"   onChange={vegIdHandler} required/>
    
      <div className="invalid-feedback">
      Please provide VegId
     </div>
     <div>
        <br/>
        {vegIdError}
      </div>
     </div>
     <div className="col-md-12">
     <input placeholder="Comments" type="text" class="form-control" id="validationCustom03" onChange={commentsHandler} required/>
     <div className="invalid-feedback">
      Please provide Comments
      </div>
      <div>
        <br/>
        {commentsError}
      </div>
     </div>
     <div className="col-md-12">
     <select  class="form-select hover" onChange={ratingsHandler} required>
     
            <option value="1">Choose Rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            </select>
     <div className="invalid-feedback">
      Please provide Ratings
     </div>
     <div>
        <br/>
        {ratingsError}
      </div>
      <div>
          
            </div>
     </div>
     <div className="col-12">
     <button className="btn btn-primary" type="submit">Add Feedback </button>
     </div>
     <div>
     {status}
     </div>
     <br/>
 </form>    
 </div>
    </div>
}
export default FeedBack;