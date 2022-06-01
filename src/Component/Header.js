import React from 'react'

import './header.css'

export default function Header(){
    return(
        <>
        <div className="parent">
            <div className="image">
            </div>
       <div class="container">
           <div class="hello">Hello</div>
           <div class="address">Select Your Address</div>
       </div>
       <div className="search-parent">
           <input type="text" placeholder="search your product here"/>
       </div>
       <div className="ind">
           {/* <img src="flag.png" alt="flag" /> */}
       </div>
       <div className="sign">
           <div className="signin">Hello, Sign in</div>
           <div className="list">Account & Lists</div>
       </div>

       <div className="ret">
           <div className="return">Returns</div>
           <div className="orders">& Orders</div>
       </div>
       <div className="cart">
           {/* <img src="cart.png" alt="cart" /> */}
       </div>
       <div className="c_text">
           <div className="car">Cart</div>
       </div>
   </div> 
        </>
    );
}