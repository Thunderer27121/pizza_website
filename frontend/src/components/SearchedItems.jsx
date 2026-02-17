import React, { useContext } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { pizzaContext } from './context/Pizzaprovider';
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decreaseQuantity } from "./store/cartslice";

const SearchedItems = () => {
    const {item} = useParams();
    const query = item?.toLowerCase();
    const navigate = useNavigate();
    const cart = useSelector((state)=>state.cart.cartItems);
    const {pizzas} = useContext(pizzaContext);
    const founditems = pizzas.filter((pizza)=>pizza.name.toLowerCase().includes(query) || pizza.category.toLowerCase().includes(query) || pizza.description.toLowerCase().includes(query));
    console.log(founditems);
  const getQuantity = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    return cartItem ? cartItem.quantity : 0;
  };
    const dispatch = useDispatch();
  if(founditems.length > 0){
  return (
    <div className="space-y-4">
      <button
        onClick={() => navigate(-1)}
        className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 transition rounded-full border border-white/20"
      >
        ← Go Back
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {founditems?.map((pizza) => {
          const quantity = getQuantity(pizza.id);

          return (
            <div
              key={pizza.id}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-yellow-200/20 group flex flex-col"
            >
              <img
              loading='lazy'
              decoding='auto'
                src={pizza.image}
                alt={pizza.name}
                className="h-52 w-full object-contain mb-4 bg-white rounded-xl p-2 cursor-pointer transition duration-300 group-hover:scale-105"
                onClick={() =>
                  navigate(`/products/${pizza.category}/${pizza.name}`)
                }
              />

              <h2 className="text-xl font-semibold mb-1">{pizza.name}</h2>
              <p className="text-sm text-gray-300 mb-2">{pizza.description}</p>
              <p className="text-lg font-bold text-yellow-400 mb-3">
                ₹{pizza.price}
              </p>

              {quantity > 0 ? (
                <div className="flex items-center justify-between gap-4 bg-yellow-400 text-black rounded-full px-4 py-2 mt-auto">
                  <button
                    onClick={() => dispatch(decreaseQuantity(pizza.id))}
                    className="text-xl font-bold px-2 hover:scale-110 transition"
                  >
                    −
                  </button>
                  <span className="font-semibold">{quantity}</span>
                  <button
                    onClick={() => dispatch(addToCart(pizza))}
                    className="text-xl font-bold px-2 hover:scale-110 transition"
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => dispatch(addToCart(pizza))}
                  className="mt-auto bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-300 transition duration-200"
                >
                  Add to Cart
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}else{
    return (
  <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
    <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400/20 to-pink-500/20 border border-yellow-400/40">
      <span className="text-4xl">🍕</span>
    </div>

    <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
      No pizzas found
    </h2>

    <p className="text-sm sm:text-base text-gray-300 max-w-md mb-6">
      We couldn’t find anything matching{" "}
      <span className="font-semibold text-yellow-300">
        “{query}”
      </span>.
      <br />
      Try searching with a different name, category, or flavor keyword.
    </p>

    <div className="flex flex-wrap gap-3 justify-center">
      <button
        onClick={() => navigate(-1)}
        className="px-4 py-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-sm sm:text-base transition"
      >
        ← Go Back
      </button>

      <button
        onClick={() => navigate("/menu")}
        className="px-4 py-2 rounded-full bg-yellow-400 text-black font-semibold text-sm sm:text-base hover:bg-yellow-300 transition shadow-md"
      >
        Browse All Pizzas
      </button>
    </div>

    <div className="mt-8 flex flex-wrap gap-2 justify-center text-xs sm:text-sm text-gray-400">
      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/5">
        Try: <span className="text-yellow-300">"chicken"</span>
      </span>
      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/5">
        Or: <span className="text-yellow-300">"veg"</span>
      </span>
      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/5">
        Or: <span className="text-yellow-300">"spicy"</span>
      </span>
    </div>
  </div>
)}

}

export default SearchedItems
