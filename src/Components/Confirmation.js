import { Link } from "react-router-dom"

const Confirmation = () => {

    return(
        <div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <h1>Your order confirmed </h1>
            <br/>
            <Link to={`/vegetables`}>
            <button>continue shopping</button>
            </Link>
        </div>
        
    )

}
export default Confirmation