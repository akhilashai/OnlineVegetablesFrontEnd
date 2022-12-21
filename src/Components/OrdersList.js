import { useState,useEffect } from "react";
import ApiService from "./ApiService";
import{useParams} from "react-router-dom";
import OrderData from "./OrderData";
import TotalPrice from "./TotalPrice";
import './OrdersList.css';


const OrderList=()=>{
     const{vegId}=useParams();
      let[orders,setOrders]=useState([]);
         let apiService=new ApiService();
         useEffect(()=>{
                 console.log("veg Id:"+vegId)
         apiService.readAllOrders().then(
         (response)=>{
         console.log(response.data);
         setOrders(()=>response.data)
         }
         );
     },[])
         return <div className="img10"><br/><br/><br/>
        <div className="orderlist">
          <h4><b>ORDERS</b></h4>
         {
         orders.map((orderList)=><OrderData order={orderList}/> )  
         }
         
         </div>
         </div>
         
}
export default OrderList;