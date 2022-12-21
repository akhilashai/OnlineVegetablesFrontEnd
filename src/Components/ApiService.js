import axios from "axios";

class ApiService {
    login(loginUser){
        return axios.post("http://localhost:7777/login",loginUser)
    }
    register(registerUser){
       
        return axios.post("http://localhost:7777/register",registerUser)
    }
    addCustomerPersonalDetails(customer){
        return axios.post(`http://localhost:7777/customers`,customer,this.getToken());
    }
    addVegetable(vegetable){
        return axios.post(`http://localhost:7777/vegetables`,vegetable,this.getToken());
    }
    readAllCustomers(){
        return axios.get(`http://localhost:7777/customers`,this.getToken());
    }
    readAllVegetables(){
        return axios.get(`http://localhost:7777/vegetables`,this.getToken());
    }
    deleteVegetables(vegId){
        return axios.delete(`http://localhost:7777/vegetables/${vegId}`,this.getToken());
       }
       deleteCustomers(custId){
        return axios.delete(`http://localhost:7777/customers/${custId}`,this.getToken());
       }
       updateAllVegetables(vegId){
        return axios.put(`http://localhost:7777/vegetables/${vegId}`,this.getToken());
       }
    addCartItem(data){
        return axios.post(`http://localhost:7777/cart`,data,this.getToken());
    }

    readCartItems(custId){
        return axios.get(`http://localhost:7777/cart`,this.getToken());
    }
    deleteCartItems(vegId){
        return axios.delete(`http://localhost:7777/cart/${vegId}`,``,this.getToken());
    }
    updateCartItem(vegId,quantity){
        return axios.put(`http://localhost:7777/cart/quantity/${vegId}/${quantity}`,'', this.getToken());
    }
    getQuantity(vegId){
        return axios.get(`http://localhost:7777/cart/quantity/${vegId}`,this.getToken());
    }
    allPrice(){
        return axios.get(`http://localhost:7777/orders/cart`,this.getToken());
    }
    cartLength(){
        return axios.get(`http://localhost:7777/cart/count`,this.getToken());
    }
    placing(orders){
        return axios.post(`http://localhost:7777/orders?paymentMethod=${orders.paymentMethod}`,'',this.getToken());
    }
    readAllOrders(){
        return axios.get(`http://localhost:7777/orders/get`,this.getToken());
    }
    readAllFeedBacks(){
        return axios.get(`http://localhost:7777/feedBacks`,this.getToken());
    }
    addFeedBack(feedBack){
        return axios.post(`http://localhost:7777/feedBacks`,feedBack,this.getToken());
    }
       deleteFeedBacks(){
        return axios.delete(`http://localhost:7777/feedBacks`,this.getToken());
       }
       updateAllFeedBacks(feedBacks,id){
        return axios.put(`http://localhost:7777/feedBacks/${id}`,feedBacks,this.getToken());
       }
       
       getFeedBacks(id){
        return axios.get(`http://localhost:7777/feedBacks/${id}`,this.getToken());
       }
       getVegetables(id){
        return axios.get(`http://localhost:7777/vegetables/${id}`,this.getToken());
       }

    getToken(){
        let token="Bearer "+sessionStorage.getItem("token");
        console.log(token);
        const config={
            headers:{
                "Authorization":token
            }
        }
    
        return config;
    }
}
export default ApiService