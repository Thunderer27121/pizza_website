import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart, decreaseQuantity, addToCart } from "./store/cartslice";
import { useNavigate } from 'react-router-dom';
import { createOrder, verifyPayment } from "./hook/paymentService";


const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalAmount = cartItems.reduce((total, item) => {
  return total + item.price * item.quantity;
}, 0);
    const handlePayment = async (amount) => {
  const response = await createOrder(amount);

console.log("BACKEND ORDER RESPONSE:", response);

const options = {
  key: import.meta.env.VITE_RAZORPAY_KEY_ID,
  order_id: response.order.id,      
  amount: response.order.amount,    

  currency: "INR",
  name: "HOT 'N' SLICE",
  description: "Order Payment",

  handler: async (rpResponse) => {
    console.log("RAZORPAY HANDLER RESPONSE =", rpResponse);

    await verifyPayment({
      razorpay_payment_id: rpResponse.razorpay_payment_id,
      razorpay_order_id: rpResponse.razorpay_order_id,
      razorpay_signature: rpResponse.razorpay_signature,
    });
  },
};

console.log("ORDER ID SENT TO CHECKOUT:", options.order_id);
console.log("AMOUNT SENT TO CHECKOUT:", options.amount);

const razorpay = new window.Razorpay(options);
razorpay.open();
dispatch(clearCart());
};

    return (
        <div className="max-w-4xl mx-auto p-6 flex-col flex justify-center items-center">
            <h2 className="text-3xl font-bold mb-6 text-center">🛒 Your Cart</h2>
            <button className="border-amber-50 outline-2 mb-3 rounded-xl p-2" onClick={() => { navigate(-1) }}>GO BACK</button>

            {cartItems.length === 0 ? (
                <p className="text-center text-gray-500 flex flex-col justify-center w-1/2  ">Your cart is empty
                    
                    <img src="https://www.pngplay.com/wp-content/uploads/7/Cart-Transparent-PNG.png" alt="" 
                    loading= "lazy"
                    decoding='async'
                    className='rounded-2xl mt-12 hover:bg-white transition h-[200px] w-[200px] m-auto' />
                </p>
            ) : (
                <div className="space-y-6">
                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center bg-white shadow-lg rounded-2xl p-4 hover:scale-[1.01] transition-all"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-24 h-24 object-cover rounded-xl mr-4 border"
                            />

                            <div className="flex-1 text-black">
                                <h3 className="text-xl  font-semibold">{item.name}</h3>
                                <p className="text-gray-600">₹{item.price} x {item.quantity}</p>
                                <p className="font-medium mt-1 text-red-600">
                                    Total: ₹{item.price * item.quantity}
                                </p>

                                <div className="flex items-center mt-2 gap-2">
                                    <button
                                        onClick={() => dispatch(decreaseQuantity(item.id))}
                                        className="w-8 h-8 text-xl bg-gray-200 rounded hover:bg-gray-300"
                                    >
                                        −
                                    </button>
                                    <span className="px-2 text-lg">{item.quantity}</span>
                                    <button
                                        onClick={() => dispatch(addToCart(item))}
                                        className="w-8 h-8 text-xl bg-gray-200 rounded hover:bg-gray-300"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <button
                                onClick={() => dispatch(removeFromCart(item.id))}
                                className="ml-4 text-red-500 hover:text-red-700 text-xl"
                            >
                                ❌
                            </button>
                           
                        </div>
                    ))}
                     <div className='flex items-center justify-evenly '>
                        <button
                                onClick={() => dispatch(clearCart())}
                                className="px-3 py-2 bg-linear-to-r from-red-500 via-red-600 to-red-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition duration-300"
                            >
                                🗑️ Clear Cart
                            </button>
                            <button onClick={()=>{handlePayment(totalAmount)}}
                            className="px-3 py-2 bg-linear-to-r from-red-500 via-red-600 to-red-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition duration-300">
                                Pay now {totalAmount}
                                </button>
                    
                     </div>

                </div>
            )}
        </div>
    );
};

export default Cart;
