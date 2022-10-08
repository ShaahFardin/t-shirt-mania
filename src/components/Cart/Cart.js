import React from "react";
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
  
    let message ;
    if(cart.length === 0){
        message = <p>Please but at least two item</p>
    }
    else if(cart.length === 1){
      message = <div>
        <p>Amar jonno ekta naw</p>
        <p>Nijer jonno ekta naw</p>
      </div>
    }
   else{
    message = <p>Thanks for buying</p>
   }
  return (
    <div>
      <h3 className={cart.length === 2 ? `orange` : `blue`}>Order Summary</h3>
      <p>Selected item : {cart.length}</p>
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}{" "}
          <button onClick={() => handleRemoveFromCart(tshirt)}>#</button>
        </p>
      ))}
      {
        message
      }
      {cart.length === 5 ? <p style={{color: 'red'}}>Beshi kore kino</p> : <p>Aro beshi kore kinooooo</p>}
      {cart.length === 3 && <h3>3 ta item kina hoise</h3>}
    </div>
  );
};

export default Cart;
