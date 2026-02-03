import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { pizzaContext } from "./context/Pizzaprovider";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, decreaseQuantity } from "./store/cartslice";

const Products = () => {
  const { pizzas } = useContext(pizzaContext);
  const navigate = useNavigate();
  const { category } = useParams();
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    if (!category) return;
    const filtered = pizzas.filter((pizza) =>
      pizza.category.toLowerCase() === category.toLowerCase()
    );
    setItems(filtered);
  }, [category, pizzas]);

  // get quantity of an item
  const getQuantity = (id) => {
    const item = cart.find((item) => item.id === id);
    return item ? item.quantity : 0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d0d0d] to-[#1e1e1e] px-6 py-10 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold capitalize text-yellow-400">
            {category} Pizzas
          </h1>
          <button
            onClick={() => navigate(-1)}
            className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 transition rounded-full border border-white/20"
          >
            ← Go Back
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => {
            const quantity = getQuantity(item.id);
            return (
              <div
                key={item.id}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-yellow-200/20 group flex flex-col"
              >
                <img
                  src={item.image}
                  loading="eager"
                  decoding="async"
                  alt={item.name}
                  className="h-52 w-full object-contain mb-4 bg-white rounded-xl p-2 cursor-pointer transition duration-300 group-hover:scale-105"
                  onClick={() =>
                    navigate(`/products/${category}/${item.name}`)
                  }
                />
                <h2 className="text-xl font-semibold mb-1">{item.name}</h2>
                <p className="text-sm text-gray-300 mb-2">{item.description}</p>
                <p className="text-lg font-bold text-yellow-400 mb-3">
                  ₹{item.price}
                </p>

                {quantity > 0 ? (
                  <div className="flex items-center justify-between gap-4 bg-yellow-400 text-black rounded-full px-4 py-2 mt-auto">
                    <button
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                      className="text-xl font-bold px-2 hover:scale-110 transition"
                    >
                      −
                    </button>
                    <span className="font-semibold">{quantity}</span>
                    <button
                      onClick={() => dispatch(addToCart(item))}
                      className="text-xl font-bold px-2 hover:scale-110 transition"
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => dispatch(addToCart(item))}
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
    </div>
  );
};

export default Products;
