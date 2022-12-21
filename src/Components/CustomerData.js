import ApiService from './ApiService';
import './CustomerList.css';

const CustomerData=(props)=>{
    let apiService=new ApiService();
    const delcust=()=>{
        let delConfirm=window.confirm("Do you want to remove:"+props.customers.custId);
        if(delConfirm==true){
            alert("Deleting"+props.customers.custId).then(
                (res)=>{
                    console.log("Deleted");
                    window.location.reload();
                }
            );
        }
    }
    return<div>
        <div class=" col-md-4  customerdata">
            <div class="card-header"><b>
                {props.customers.custName}</b>
                <a class="bi bi-x-circle" onClick={delcust}></a>
            </div>
            <div class="card-body">
               
                <p  class="card-text"><b>Email Address : </b>{props.customers.custEmailId}</p>
                <p className="card-text"><b>Mobile Number : </b>{props.customers.mobileNo}</p>
                <p class="card-text"><b>Address : </b>{props.customers.custAddress}</p> 
            </div>
        </div>
    </div>
}
export default CustomerData;