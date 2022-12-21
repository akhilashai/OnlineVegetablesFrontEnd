import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import ApiService from "./ApiService"
import Cart from "./Cart";
import TotalPrice from "./TotalPrice";
import './Cart.css';

const CartList = (props) => {
  const {custId} = useParams();
  let apiService=new ApiService();
  let[cartList,setCartList]=useState([])

  useEffect(()=>{ 
    apiService.readCartItems().then(
      (response)=>{
        console.log(response.data);
        setCartList(()=>response.data)
      }
    )
  },[])
  return<div className="img13">  <br/> <br/>
    <h4><b>CART ITEMS </b></h4>
    {
      cartList.map((cart)=><Cart cart={cart}/>)
    }  
          <TotalPrice/>
          <Link to={`/placingOrders`}>
          <button className="btn btn-primary" type="submit">Place Order</button>
          </Link>
  </div>
}
export default CartList
