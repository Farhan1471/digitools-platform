import React from "react";

const Cart = ({cart}) => {

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    return(
        <div className="card bg-white shadow-lg w-[75%] mx-auto">
            <h2 className="font-semibold p-6">Your Cart</h2>
            {
                cart.map(item => (
                    <div key={item.id} className="flex justify-between items-center bg-[#F9FAFC] shadow-sm flex gap-4 items-center justify-center mx-auto mb-4 p-3 w-[90%]">
                        <div className="flex gap-3 items-center w-[90%]">
                                <div className="bg-white rounded-full p-3">
                                    <img src={item.icon} alt="User" height={20} width={20} />
                                </div>
                            <div>
                                <p>{item.name}</p>
                                <p className="text-[#627382] text-xs">${item.price}</p>
                            </div>
                        </div>

                        <div>
                            <button className="text-[#FF3980] font-semibold">Remove</button>
                        </div>

                        
                    </div>
                ))
            }
            <div className="flex justify-between items-center w-[90%] mx-auto mb-4">
                <p>Total: </p>
                <p>${totalPrice}</p>
            </div>

            <button className="w-[90%] mx-auto rounded-full text-white py-3 mb-10  bg-gradient-to-r from-[#4f39f6] to-[#9514fa]">Proceed to Checkout</button>
        </div>
    )
}

export default Cart;