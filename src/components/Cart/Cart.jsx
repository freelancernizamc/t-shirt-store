import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveCart }) => {
    let message;
    if (cart.length === 0) {
        message = <p>Please add some Products</p>
    }
    else {
        message = <div className='message1'>
            <h3>Reach Man!!</h3>
            <p><small>Thanks for giving money</small></p>
        </div>
    }
    return (
        <div className='cart-text'>
            <h2 className={cart.length === 1 ? 'blue' : 'red'}>Orders Summary: {cart.length}</h2>
            <p className={`bold bordered ${cart.length === 3 ? 'yellow' : 'orange'}`}>Happy Shopping</p>
            {
                cart.length > 2
                    ? <span className='purple'>Buy More</span>
                    : <span>Oh no Poor man</span>
            }
            <h3>{message}</h3>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >{tshirt.name} <button
                    onClick={() => handleRemoveCart(tshirt._id)}
                >Del</button></p>)
            }
            {
                cart.length === 2 && <p>Double Bonanza!!!</p>
            }
            {
                cart.length === 3 || <h3>Tinta tu hoilo na!!</h3>
            }
        </div>
    );
};

export default Cart;

/**
* CONDITIONAL RENDERING
* 1. Use if else to set a variable that will contain an element, components
* 2. ternary operator: condition ? 'for true' : 'false'
* 3. Logical &&: (If the condition is true then the next thing will be displayed)
 4. Logical || (if the condition is false then the next thing will be displayed)

* */

/*
CONDITIONAL CSS class
1. Use ternary
2. ternary inside template string
*/