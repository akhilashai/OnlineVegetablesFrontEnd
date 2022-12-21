import Customer from "./Customer";
import { useEffect, useState } from "react";
import ApiService from "./ApiService";
import CustomerData from "./CustomerData";
import './CustomerList.css';
const CustomerList=()=>{
    let apiService=new ApiService();
    let[customerList,setCustomerList]=useState([]);
    useEffect(()=>{
        apiService.readAllCustomers().then(
            (response)=>{
                console.log(response.data);
                setCustomerList( ()=>response.data);
            }
        )
    },[])
    return<div className="img6"><br/><br/><br/>
    <div class="customerlist">
        <h4><b>CUSTOMER LIST</b></h4>
        {
            customerList.map((customer)=><CustomerData customers={customer}/>)
        }

        </div>
    </div>

}
export default CustomerList;
