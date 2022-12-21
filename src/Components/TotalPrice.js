import { useEffect, useState } from "react"
import ApiService from "./ApiService";


const TotalPrice = () =>{
    let[prices,setPrices]=useState();
    let apiService = new ApiService();

    useEffect(() => {
        console.log("price changing");
        apiService.allPrice().then(
             response => {
                 console.log(response.data+"data")
                 setPrices(() => response.data);
                 console.log(prices+"total price");
                 
             }
             
         )
    },[])
    return(
        <div className="totalprice">
            <h4> <b> TOTAL PRICE :  </b>{prices}</h4>
        </div>
    )

}
export default TotalPrice