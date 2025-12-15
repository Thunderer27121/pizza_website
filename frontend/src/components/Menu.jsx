import { useNavigate } from "react-router-dom";
import {
  FaLeaf,
  FaDrumstickBite,
  FaPepperHot,
  FaCheese,
  FaUsers,
  FaGlassWhiskey,
} from "react-icons/fa";

const categories = [
  { name: "Veg", icon: <FaLeaf size={30} />, color: "from-green-300 to-emerald-500" },
  { name: "NonVeg", icon: <FaDrumstickBite size={30} />, color: "from-red-400 to-rose-500" },
  { name: "Spicy", icon: <FaPepperHot size={30} />, color: "from-orange-400 to-yellow-500" },
  { name: "CheeseBurst", icon: <FaCheese size={30} />, color: "from-yellow-300 to-amber-400" },
  { name: "Family", icon: <FaUsers size={30} />, color: "from-indigo-400 to-purple-500" },
  { name: "Beverages", icon: <FaGlassWhiskey size={30} />, color: "from-sky-400 to-cyan-500" },
];

const MenuPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0e0e0e] to-[#1e1e1e] text-white px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-yellow-400 mb-14 drop-shadow-lg">
        🍕 Explore Our Menu
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {categories.map((cat) => (
          <div
            key={cat.name}
            onClick={() => navigate(`/products/${cat.name.toLowerCase()}`)}
            className={`
              bg-gradient-to-br ${cat.color} 
              rounded-2xl p-6 text-white 
              shadow-lg transition-all duration-300
              hover:scale-105 hover:shadow-yellow-200/30 
              flex flex-col items-center justify-center
              backdrop-blur-lg border border-white/10
              cursor-pointer group relative overflow-hidden
            `}
          >
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-10 transition duration-300 z-0 rounded-2xl" />
            
            <div className="z-10 p-4 bg-white/20 rounded-full mb-4">
              {cat.icon}
            </div>
            <h2 className="z-10 text-xl md:text-2xl font-semibold capitalize tracking-wide">
              {cat.name}
            </h2>
            <p className="z-10 text-sm opacity-70 mt-1">Tap to explore</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
