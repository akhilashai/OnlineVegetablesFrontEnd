import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import ApiService from "./ApiService";
import TotalPrice from "./TotalPrice";
import './Orders.css';

const Orders = () => {
    let [orders,setOrders]=useState({});
    let[status,setStatus]=useState('');
    let[paymentMethodHandler, setPaymentMethodHandler]=useState('');
    let apiService= new ApiService();

    useEffect(()=>{
        console.log("use effect........")
        apiService.readAllOrders().then(
            response=>{
                setOrders(prevState=>response.data)
                console.log(response.data)
                console.log("...........")
                console.log(orders) 

            }
        ).catch(error=>console.log(error));
    },[]);

    function paymentHandler(event){
        orders.paymentMethod= event.target.value;
        
        
    }


    function validate(){
        let isError=false; 
        if(orders.paymentMethod==""|| orders.paymentMethod==undefined)
        {
            setPaymentMethodHandler(prev=><font color="red">Please enter the field</font>)
            isError=true;
        }
        return isError
    }

    function submitHandler(event){
        event.preventDefault();
        let isError=validate();
        
        
        if(isError==false){
            console.log("placing orders")
            console.log(orders.paymentMethod);
            apiService.placing(orders).then(
                response=>{
                    console.log("Success"+response.data);
                    setStatus(prevStatus=>"placing orders")
                }
            ).catch(error=>setStatus(prevStatus=>"Vegetable already exists"))
        }
    }
        


    return(<div className="img11"> <br/> <br/><br/> <br/><br/> <br/>
        <div className="orders">
            <br/>
        <h4><b> ORDERS </b></h4>
            <form onSubmit={submitHandler}>
            <div className="col-md-12 ">
   <select class="form-control" id="validationCustom03"  onChange={paymentHandler}  >
    <option>Choose Payment</option>
    <option>UPI</option>
    <option>CashOnDelivery</option>
    <option>Credit Card/ Debit Card </option>
    <option>Net Banking</option>
    
    </select>
     </div><br/>
     <TotalPrice/>
     
        <br/>
     <button className="btn btn-primary" type="submit">Confirm Order</button>
     
     
    
</form>
<br/>
        </div>
        </div>
    )


}
export default Orders
