import axios from 'axios';
import { Link } from 'react-router-dom';
import ApiService from './ApiService';
import './FeedBackList.css';
const  FeedBackData=(props)=>{
    let apiService=new ApiService();
   
    const delfeed=()=>{
        let delConfirm=window.confirm("Do you want to remove :"+props.feedBacks.feedId);
        if(delConfirm==true){

        alert("Deleting "+props.feedBacks.feedId)
        //call rest api to remove the app
       apiService.deleteFeedBacks(props.feedBacks.feedId).then(
                    (res)=> {
                console.log("Deleted");
                window.location.reload();
               }     
            );
        
    }
    }
    return<div>

        <div class=" col-md-4 feedbackdata">

            <div class="card-header"><b>
            {props.feedBacks.feedId}</b>

            &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                <a class="bi bi-trash3-fill" onClick={delfeed}></a>
            </div>
            <div class="card-body">

                
                <p className="card-text"><b>Customer Id : </b>{props.feedBacks.customer.custId}</p>
                <p class="card-text"><b>Vegetable Id : </b>{props.feedBacks.vegetable.vegId}</p>
                <p class="card-text"><b>Comments : </b>{props.feedBacks.comments}</p>
                <p class="card-text"><b>Rating : </b>{props.feedBacks.ratings}</p>
               
              
                <Link to={`/updateFeed/${props.feedBacks.feedId}/${props.feedBacks.vegetable.vegId}/${props.feedBacks.customer.custId}`}>
                <li class="bi bi-pencil-square"></li>
   
   </Link>
                
            </div>
        </div>
    </div>
}
export default FeedBackData;
