import VegetableData from "./VegetableData";
import { useEffect, useState } from "react";
import ApiService from "./ApiService";
import './VegetableList.css';
import { Link } from "react-router-dom";
import FeedBack from "./FeedBack";
import { propTypes } from "react-bootstrap/esm/Image";
const VegetableList=(props)=>{
    let apiService=new ApiService();
    let[vegetableList,setVegetableList]=useState([]);
    
    useEffect(()=>{
        apiService.readAllVegetables().then(
            (response)=>{
                console.log(response.data);
                setVegetableList( ()=>response.data);
            }
        )
    },[])
    
    return<div className="img7"> <br/><br/><br/>
    <div class="vegetablelist">
        <h4><b>VEGETABLE LIST</b></h4>
        {
            vegetableList.map((vegetable)=><VegetableData vegetables={vegetable}/>)
        }

</div>

        
    </div>

}
export default VegetableList;
