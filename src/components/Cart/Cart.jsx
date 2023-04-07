import React from 'react';

const Cart = ({ cart, handleRemoveCart }) => {
    return (
        <div>
            <h2>Orders Summary: {cart.length}</h2>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >{tshirt.name} <button
                    onClick={() => handleRemoveCart(tshirt._id)}
                >Del</button></p>)
            }
        </div>
    );
};

export default Cart;