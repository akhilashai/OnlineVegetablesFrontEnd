import { useState } from "react";
import { Link } from "react-router-dom";
import ApiService from "./ApiService";
import FeedBack from "./FeedBack";

const VegetableData=(props)=>{

    let imgPath=`images/${props.vegetables.vegName}.jpg`;
    let apiService = new ApiService();
    let [cart,setCart]=useState([]);
    let [quantityError,setQuantityError] = useState('');


    const delveg=()=>{
        let delConfirm=window.confirm("Do you want to remove :"+props.vegetables.vegId);
        if(delConfirm==true){

        alert("Deleting "+props.vegetables.vegId)
        //call rest api to remove the app
       apiService.deleteVegetables(props.vegetables.vegId).then(
                    (res)=> {
                console.log("Deleted");
                window.location.reload();
               }     
            );
        
    }
    }

    const adding =(data) => {
        let confirmation = window.confirm("Do you want to add it to cart")
        setCart((prevState)=> {return{...cart,data}});

        console.log(data);
    
        apiService.addCartItem(data).then(
            (response)=>{
                console.log(response.data +"data");
                setCart(()=>response.data)
            
            console.log("data added")
            
            },[])
       

    }
    

    return<div>
    <form >
        <div class=" col-md-4 card"  >
            <div class="card-header"><b>
                {props.vegetables.vegName}</b>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

                <i class="bi bi-trash3-fill" onClick={delveg}></i>
            </div>
            <div class="card-body">
                <img src={imgPath} width="300px"></img>
                <h5 className="card-title"> Price:{props.vegetables.vegPrice}</h5>
                <p class="card-text">Quantity:{props.vegetables.quantity}</p>
                <p class="card-text">Measurements:{props.vegetables.measurements}</p>
               {/* <input type="number" onChange={quantityHandler} placeholder="Quantity" class="form-control"></input>
<span> {quantityError} </span> <br></br>*/}
                
                <button type="submit" onClick={()=>(adding(props.vegetables))} className="btn btn-primary" >AddToCart</button>
                < Link to={`/updateVeg/${props.vegetables.vegId}`}>
                <li class="bi bi-pencil-fill"></li>
                

   
   </Link>
   <Link to={`/addFeedBack`}>
    <button className="btn btn-primary">Add FeedBack</button>
    </Link>
    
   
            </div>
        </div>
        </form>
    </div>
}
export default VegetableData;
