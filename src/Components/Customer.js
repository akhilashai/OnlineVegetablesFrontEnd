import axios from "axios";
import { useEffect, useState } from "react";
import ApiService from "./ApiService";
import './Customer.css';

const Customer=()=>{
    let[customer,setCustomer]=useState({});
    let[status,setStatus]=useState('');
    let[custNameError,setCustNameError]=useState('');
    let[custMobileNoError,setCustMobileNoError]=useState('');
    let[custEmailIdError,setCustEmailIdError]=useState('');
    let[custAddressError,setCustAddressError]=useState('');
    let[customers,setCustomers]=useState([]);
let apiService = new ApiService();
    useEffect(()=>{
        console.log("use effect.....")
        axios.get(`http://localhost:7777/customers`).then(
            response=>{
                setCustomers(prevState=>response.data)
                console.log(response.data)
                console.log("...........")
                console.log(customers)

            }
        ).catch(error=>console.log(error));
    },[]);

    function custNameHandler(event){
        customer.custName=event.target.value;
    }
    function custMobileNoHandler(event){
        customer.mobileNo=event.target.value;
    }
    function custEmailIdHandler(event){
        customer.custEmailId=event.target.value;
    }
    function custPasswordHandler(event){
        customer.custPassword=event.target.value;
    }
    function custAddressHandler(event){
        customer.custAddress=event.target.value;
    }
    function validate(){
        let isError=false;
        if(!(isNaN(customer.custName))){
            setCustNameError(prev=><font color="red">Please enter alphabets</font>)
            isError=true;
        }
        if(isNaN(customer.mobileNo))
        {
            setCustMobileNoError(prev=><font color="red">please enter digits</font>)
            isError=true;
        }
        if(!(isNaN(customer.custAddress)))
        {
            setCustAddressError(prev=><font color="red">please enter Address</font>)
            isError=true;
        }
       
         return isError  
        }
        function submitHandler(event){
            event.preventDefault();
            let isError=validate();
            if(isError==false){
                console.log("form submited")
                console.log(customer);
                apiService.addCustomerPersonalDetails(customer).then(
                    response=>{
                        console.log("Success"+response.data);
                        setStatus(prevStatus=>"Customer Added")
                    }
                ).catch(error=>setStatus(prevStatus=>"Customer already exists"))
            }
        }
    
    return <div className="img5"> <br/> <br/><br/> <br/><br/>
    <div className="customer">
    <div  className ="container center_div">
    <br/>
<h4> <b>PERSONAL DETAILS </b></h4>
    
    <form onSubmit={submitHandler}>
  
     <div className="col-md-12">
    <label htmlFor="validationCustomUsername" class="form-label"></label>
    <div className="input-group has-validation"> 
      
      <input type="text" maxlength="25" placeholder="Customer Name" class="form-control" id="validationCustomUsername"  onChange={custNameHandler} required/>
      <div className="invalid-feedback">
        Please choose a username. 
      </div>
      
      <div>
        <br/>
        {custNameError}
      </div>
      </div>
    </div>
     
     <div className="col-md-12">
     <label htmlFor="validationCustom03" class="form-label"></label>
     <input  type="tel" name="phone" maxLength="10"  pattern="[0-9]{10}" placeholder="Mobile Number" class="form-control" id="validationCustom03" onChange={custMobileNoHandler} required/>
      <div className="invalid-feedback">
      Please provide a valid mobile Number
     </div>
     <div>
        {custMobileNoError}
      </div>
     </div>
     
     <div className="col-md-12">
     <label htmlFor="validationCustom03" class="form-label"></label>
     <input  type="email" placeholder="Email Address"  class="form-control" id="validationCustom03" onChange={custEmailIdHandler} required/>
     <div className="invalid-feedback">
      Please provide a valid EmailId
      </div>
     </div>
     
     <div className="col-md-12">
     <label htmlFor="validationCustom03" class="form-label"></label>
      <input  type="text"  maxLength="15" placeholder="Address" class="form-control" id="validationCustom03" onChange={custAddressHandler} required/>
     <div className="invalid-feedback">
      Please provide a valid Address 
     </div>
     <div>

        {custAddressError}
      </div>
     </div>
     <br/>
     <div className="col-md-12">
     <button className="btn btn-primary" type="submit">Add Customer</button>
     <br/>
     </div>
     <div>
     {status}
     </div>
     
 </form>
<br/>
    
    </div>
    </div>
    </div>
}
export default Customer;
