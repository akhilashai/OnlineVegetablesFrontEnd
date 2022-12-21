import FeedBackData from "./FeedBackData";
import { useEffect, useState } from "react";
import ApiService from "./ApiService";
import './FeedBackList.css';

const FeedBackList=()=>{
    let apiService=new ApiService();
    let[feedBackList,setFeedBackList]=useState([]);
    useEffect(()=>{
        apiService.readAllFeedBacks().then(
            (response)=>{
                console.log(response.data);
                setFeedBackList( ()=>response.data);
            }
        )
    },[])
    return <div className="img14">
    <div className="feedbacklist"><br/> <br/><br/> 
        <h4><b>FEEDBACK LIST</b></h4>
        {
            feedBackList.map((feedBack)=><FeedBackData feedBacks={feedBack}/>)
        }
        </div>
    </div>
}
export default FeedBackList;