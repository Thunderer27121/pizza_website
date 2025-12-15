import { useContext, useEffect, useState  } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { pizzaContext } from './context/Pizzaprovider';
import { useDispatch } from 'react-redux';
import { addToCart } from './store/cartslice';

const Items = () => {
    const { item } = useParams();
    const dispatch = useDispatch();
    const { pizzas } = useContext(pizzaContext);
    const [onePizza, setOnePizza] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (pizzas.length > 0) {
            const found = pizzas.find(pizza =>
                pizza.name.toLowerCase() === item.toLowerCase()
            );
            setOnePizza(found || null);
        }
    }, [pizzas, item]);

    if (!onePizza) {
        return (
            <div className="min-h-screen flex items-center justify-center text-xl text-gray-500">
                Loading pizza details...
            </div>
        );
    }

    return (
        <div className="w-full min-h-[88%] bg-gradient-to-br from-yellow-100 via-red-50 to-white p-10 ">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
                <div className="w-full md:w-1/2">
                    <img
                        src={onePizza.image}
                        alt={onePizza.name}
                        className="w-full h-[400px] object-contain rounded-3xl shadow-lg "
                    />
                </div>

                <div className="w-full md:w-1/2 flex flex-col gap-6">
                    <h1 className="text-4xl font-bold text-gray-800">{onePizza.name}</h1>

                    <p className="text-lg text-gray-700 leading-relaxed border-l-4 border-yellow-500 pl-4 italic">
                        {onePizza.description}
                    </p>

                    <div className="flex items-center gap-4">
                        <span className="text-3xl font-semibold text-red-600">₹{onePizza.price}</span>
                        <span className="text-sm text-gray-500 line-through">
                            ₹{parseInt(onePizza.price) + 80}
                        </span>
                        <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">
                            20% OFF
                        </span>
                    </div>

                    <button onClick={()=>{dispatch(addToCart(onePizza))}} className="w-fit mt-4 bg-yellow-500 text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-yellow-600 transition-all duration-200">
                        Add to Cart 🛒
                    </button>
                    <button
                        onClick={() => navigate(-1)}
                        className="mb-6 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
                    >
                        ← Go Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Items;
