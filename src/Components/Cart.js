import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ApiService from "./ApiService";
import './Cart.css';

const Cart = (props) => {
    
    let imgPath=`images/${props.cart.vegName}.jpg`;
    let apiService= new ApiService();
    let [price,setPrice]=useState(0);
    let[cartItem,setCartItem]=useState([]);
    let[quantity,setQuantity]=useState(1);
    
    const quantityHandler=(event)=>{
        console.log(event.target.value)
        quantity=event.target.value;
   setQuantity((prev => {
           // setPrice(()=>price*quantity)
            return quantity}))
            apiService.updateCartItem(props.cart.vegId,quantity).then(
                response => {
                    console.log(response.data)
                    console.log("Updated Quantity");
                }
            )
    }
    useEffect(() => {
        console.log("calling api");
        setPrice(()=>props.cart.price)
        console.log(props.cart.vegId);
        apiService.getQuantity(props.cart.vegId).then(
            response => {
                console.log(response.data +"quantity")
                setQuantity(() => {
                 //   setPrice(()=>price*parseInt(response.data))
                    return response.data});
              //  setPrice(()=>price*quantity)
            }
        )
    },[])
    
    const delCart=() =>{
        let delConfirm=window.confirm("Do you want to delete");
        if(delConfirm==true){
            alert("Deleting"+props.cart.vegId )
            apiService.deleteCartItems(props.cart.vegId).then(
                (res)=> {
                    console.log("Deleted");
                    window.location.reload();
                   }     
            )            
        }
    }
    return(
        <div className="cart">
      <div class=" col-md-4 card">
        <div class="card-header"><b>
                   {props.cart.vegName}</b>
&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
            <i class="bi bi-trash3-fill" onClick={delCart}></i>
        </div>
        <div class="card-body">
       {    /* <img src={imgPath} width="400px"></img>*/}
       <p class="card-text"><b> Measurements : </b>{props.cart.measurements}</p>
            <p className="card-text"><b> Price : </b>{props.cart.vegPrice * quantity}</p> 
         
         <select onChange={quantityHandler} class="form-select hover" value={quantity} aria-label="Default select example" >
                <option >Quantity</option>
                <option value="1">1</option>
                <option value="2">2</option>              
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>  
                <option value="-2">-2</option>  
                </select><br></br>
       {/* <h5>Quantity</h5>
            <input type="number" value={quantity} /> 
    <CartCount/>*/}
        </div>
    </div>
    </div>
    )
}
export default Cart