import{useState} from "react";
const OrderData=(props)=>{

  let[ordersData,setOrdersData]=useState('');
return <div>
     <div>

     </div>
   <div class="card-body">

         <div class ="card-text"><b> Order Date : </b>{props.order.orderDate}
         <div class="card-text"><b>  Payment Method : </b>{props.order.paymentMethod}
         <div class="card-text"><b> Total : </b>{props.order.totalCost}
         </div>
         </div>
         </div>
</div>
</div>
}
export default OrderData;