import { useEffect, useState } from "react";
import axios from "axios";
import ApiService from "./ApiService";
import './Vegetable.css';
import FeedBack from "./FeedBack";
const Vegetable=()=>{

    let[vegetable,setVegetable]=useState({});
    let[status,setStatus]=useState('');
    let[vegNameError,setVegNameError]=useState('');
    let[vegPriceError,setVegPriceError]=useState('');
    let[vegQuantityError,setVegQuantityError]=useState('');
    let[vegetables,setVegetables]=useState([]);
    let apiService=new ApiService();

    useEffect(()=>{
        console.log("use effect........")
        axios.get(`http://localhost:7777/vegetables`).then(
            response=>{
                setVegetables(prevState=>response.data)
                console.log(response.data)
                console.log("...........")
                console.log(vegetables)

            }
        ).catch(error=>console.log(error));
    },[]);
       
    
    
    function vegNameHandler(event){
       vegetable.vegName=event.target.value;
    }

    function vegPriceHandler(event){
        vegetable.vegPrice=event.target.value;
    }
     
    function vegQuantityHandler(event){
        vegetable.quantity=event.target.value;
    }

    function vegMeasurementHandler(event){
        vegetable.measurements=event.target.value;
    }

    function validate(){
        let isError=false;
        if(!(isNaN(vegetable.vegName))){
            setVegNameError(prev=><font color="red">Please enter alphabets</font>)
            isError=true;
        }
        if(isNaN(vegetable.vegPrice)){
            setVegPriceError(prev=><font color="red">Please enter digits</font>)
            isError=true;
        }
        if((isNaN(vegetable.quantity))){
            setVegQuantityError(prev=><font color="red">Please enter digits</font>)
            isError=true;
        }
        

        return isError
    }

    function submitHandler(event){
        event.preventDefault();
        let isError=validate();
        if(isError==false){
            console.log("form submited")
            console.log(vegetable);
            apiService.addVegetable(vegetable).then(
                response=>{
                    console.log("Success"+response.data);
                    setStatus(prevStatus=>"Vegetable Added")
                }
            ).catch(error=>setStatus(prevStatus=>"Vegetable already exists"))
        }
    }
        
    

return <div className="img3"> <br/> <br/><br/> <br/>
<div className="vegetable">
<div className ="container center_div">
<br/>
<h4><b> ADD VEGETABLES </b></h4>
<form onSubmit={submitHandler} >

 <div className="col-md-12">
<label htmlFor="validationVegetableName" class="form-label"> </label>
<div className="input-group has-validation">
  
  <input type="text" maxlength="25" placeholder="Vegetable Name" class="form-control" id="validationVegetableName"  onChange={vegNameHandler} required/>
  <div className="invalid-feedback">
    Please choose a vegetable name.
  </div>
  
  <div>
    <br/>
    {vegNameError}
  </div>
  </div>
</div>
 
 <div className="col-md-12">
 <label htmlFor="validationCustom03" class="form-label"></label>
 <input type="price" maxLength="6" placeholder="Price" class="form-control" id="validationCustom03" onChange={vegPriceHandler} required/>
  <div className="invalid-feedback">
  Please provide a vegetable price
 </div>
 <div>

    {vegPriceError}
  </div>
 </div>
 
 <div className="col-md-12">
 <label htmlFor="validationCustom03" class="form-label"></label>
 <input type="text" maxLength="10" placeholder="Quantity" class="form-control" id="validationCustom03" onChange={vegQuantityHandler} required/><br/>
 <div className="invalid-feedback">
  Please provide a valid Quantity

  </div>
 <div>
    {vegQuantityError}
  </div>
 </div>
 <div className="col-md-12">
   
   <select class="form-control" id="validationCustom03"  onChange={vegMeasurementHandler}>
    <option>Choose Measurement</option>
    <option>1 kg</option>
    <option>2 kg</option>
    <option>3 kg</option>
    <option>4 kg</option>
    <option>5 kg</option>
    <option>6 kg</option>
    <option>7 kg</option>
    <option>8 kg</option>
    <option>9 kg</option>
    <option>10 kg</option>
 </select>
 <div className="invalid-feedback">
  Please provide a valid Quantity
  </div>
  </div>
 <br/>
 <div className="col-md-12">
 <button className="btn btn-primary" type="submit">Add Vegetable</button><br/>
 </div>
 <div>
 {status}
 </div>
 <br/>
</form>



</div>
</div>

</div>
}
export default Vegetable;
