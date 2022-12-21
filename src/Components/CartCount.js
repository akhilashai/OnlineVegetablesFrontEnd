import { useEffect, useState } from "react";
import ApiService from "./ApiService";
import './CartList.css'

const CartCount = () => {

    let [count,setCount]=useState([]);
  let apiService= new ApiService();

  useEffect(() => {
    apiService.cartLength().then(
     response => {
     console.log(response.data)
     setCount(()=> response.data);
     console.log(count+"count")
     }
    )
    
 })

 return <div>
    <h1>{count}</h1>
 </div>



}
export default CartCount