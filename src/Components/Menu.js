import { BrowserRouter, Route, Routes } from "react-router-dom"
import Customer from "./Customer";
import Vegetable from "./Vegetable";
import Login from "./Login";
import Register from "./Register";
import VegetableList from "./VegetableList";
import CustomerList from "./CustomerList";
import CartList from "./CartList";
import Home from "./Home";
import Cart from "./Cart";
import EditVegetable from "./EditVegetable";
import { useEffect, useState } from "react";
import ApiService from "./ApiService";
import CartCount from "./CartCount";
import EditFeedBack from "./EditFeedBack";
import FeedBackList from "./FeedBackList";
import FeedBack from "./FeedBack";
import OrdersList from "./OrdersList";
import Orders from "./Orders";
import Logout from "./Logout";
import Confirmation from "./Confirmation";
import './Menu.css';


const Menu = () => {
  
    let isLoggedIn=sessionStorage.getItem("loggedIn");

   
   console.log("loged in ? "+isLoggedIn)
    return <div className="container-fluid">
    <nav className="navbar navbar-expand-sm navbar-dark navbar-primary fixed-top">
<div className="container-fluid">

<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarNav">
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="/"><h6><font color="black"><i class="bi bi-house-door-fill"></i></font></h6></a>
    </li>
    
     {sessionStorage.getItem("role")=="user"&&
     <>
    <li className="nav-item">
      <a className="nav-link" href="addCustomer"><h6><font color="black">Customer</font></h6></a>
    </li>

    <li class="nav-item">
    <a class="nav-link" href="cart" ><h6><font color="black">Cart</font></h6></a>
    
  </li>

  <li class="nav-item">
      <a class="nav-link" href="Orders"><h6><font color="black">Orders</font></h6></a>
      
    </li>

    </>
    
}
<li class="nav-item">
      <a class="nav-link" href="feedBacks"><h6><font color="black">FeedBackList</font></h6></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="vegetables"><h6><font color="black">VegetableList</font></h6></a>
    </li>
    

{sessionStorage.getItem("role")=="admin"&&
<>
    <li className="nav-item">
      <a className="nav-link" href="addVegetables"><h6><font color="black">Vegetable</font></h6></a>
    </li>
    
   
    <li class="nav-item">
      <a class="nav-link" href="customers"><h6><font color="black">CustomerList</font></h6></a>
    </li>
    </>

}

   
    
    
    
    
    &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;

    <li class="nav-item">
      <a class="nav-link" href="Register"><h6><font color="black">Register</font></h6></a>
    </li>
    {sessionStorage.getItem("loggedIn")=="true"&&
    
    <li class="nav-item">
      <a class="nav-link" href="Logout"><h6><font color="black"><i class="bi bi-box-arrow-right"></i></font></h6></a>
    </li>
}


{sessionStorage.getItem("loggedIn")=="false"&&
    
<li class="nav-item">
      <a class="nav-link" href="Login"><h6><font color="black">Login</font></h6></a>
    </li>
}


    </ul>
</div>
</div>
</nav>
<BrowserRouter>
<Routes>
<Route path="/" element={<Home/>}></Route>
<Route path="/register" element={<Register/>}></Route>
   <Route path="/login" element={<Login/>}></Route>
      <Route path="/addCustomer" element={<Customer/>}></Route>
        <Route path="/addVegetables" element={<Vegetable/>}></Route>
        <Route path="/updateVeg/:id" element={<EditVegetable/>}></Route>
        <Route path="/vegetables" element={<VegetableList/>}></Route>
        <Route path="/customers" element={<CustomerList/>}></Route>
        <Route path="/cart" element={<CartList/>}>
        </Route>
        <Route path="/orders" element={<OrdersList/>}></Route>
        <Route path="/placingOrders" element={<Orders/>}></Route>
        <Route path="/addFeedBack" element={<FeedBack/>}></Route>
        <Route path="/feedBacks" element={<FeedBackList/>}></Route>
        <Route path="/updateFeed/:id/:vid/:cid" element={<EditFeedBack/>}></Route>
        <Route path="/Logout" element={<Logout/>}></Route>
        <Route path="/confirmation" element={<Confirmation/>}></Route>
        
    
        

   </Routes>
</BrowserRouter>
</div>
}
export default Menu