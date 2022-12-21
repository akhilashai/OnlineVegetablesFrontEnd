import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import ApiService from "./ApiService";
import './VegetableList.css';

const EditVegetable=(props)=>{
    const {id}=useParams();
    let[vegetables,setVegetables]=useState({});
    const navigate= useNavigate();
   // const [show,setShow]=useState(false);
    //const handleClose=()=> setShow(false);
    let apiService=new ApiService();
    
    useEffect( ()=>{
        console.log("veg id is "+id)
        apiService.getVegetables(id).then(
            (response)=>{
                console.log(response.data)
                setVegetables(prev=>response.data)
            })
           
    },[]);
      
    const idChangeHandler=(event)=>{
        console.log(event.target.value);
        vegetables.vegId=event.target.value;
       setVegetables( (prevState)=>{return{...prevState,vegetables}})
    }
    
    const priceChangeHandler=(event)=>{
        console.log(event.target.value);
        vegetables.vegPrice=event.target.value;
        setVegetables( (prevState)=>{return{...prevState,vegetables}})
    }
    const quantityChangeHandler=(event)=>{
        console.log(event.target.value);
        vegetables.quantity=event.target.value;
        setVegetables((prevState)=>{ return{...prevState,vegetables}})
    }

    const submitHandler=(event)=>{
        event.preventDefault();
        console.log(vegetables)
        apiService.updateAllVegetables(vegetables,id).then(
            (response)=>{
                console.log("updated.....");
                alert("updated successfully....");
                navigate("/vegetables");
                //setShow(()=>true);
            }
        );
    }
    const goBack=()=>{
        navigate("/vegetables");
    }
    return <div className="img8">
        <br/> <br/><br/> <br/><br/>
    <div className="editvegetable">
    <div  className ="container center_div">
    <br/>
         <h4><b> EDIT VEGETABLE </b></h4>
        <form>
        <input type="text" maxlength="25" placeholder="Enter the Name" className="form-control" value={vegetables.vegName} readOnly/>

<br/>
<input type="price" maxLength="6" placeholder="Enter the Price" className="form-control"  value={vegetables.vegPrice} 
onChange={priceChangeHandler} />

<br/>
<input type="text" maxLength="10"  placeholder="Enter the Quantity" className="form-control" value={vegetables.quantity} 
 onChange={quantityChangeHandler} />
<br/>

  <button  type="submit" className="btn btn-primary">Edit</button> 
  &nbsp;&nbsp;&nbsp;
  <button  type="button" className="btn btn-primary" onClick={goBack}>Cancel</button> &nbsp;
 
        

</form>
<br/>
    </div>
    </div>
    </div>
}
export default EditVegetable;
