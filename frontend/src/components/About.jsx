import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Top section / Hero */}
      <section className="max-w-6xl mx-auto px-4 pt-24 pb-16 flex flex-col md:flex-row items-center gap-10">
        {/* Left: Text */}
        <div className="flex-1">
          <p className="text-sm uppercase tracking-[0.25em] text-yellow-400/80 mb-3">
            About Us
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Crafted with 🍕 love,
            <br />
            served with ❤️ warmth.
          </h1>
          <p className="text-sm sm:text-base text-gray-300 mb-6 max-w-xl">
            Welcome to <span className="text-yellow-300 font-semibold">PizzaVerse</span> — 
            your cozy corner for cheesy cravings, late-night laughs, and 
            family-style feasts. From classic Margherita and fiery Peri Chicken 
            to family combos and chilled beverages, every bite is made to feel 
            like a celebration.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
              <p className="text-2xl font-bold text-yellow-300">60+</p>
              <p className="text-xs text-gray-300">Pizzas & Beverages</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
              <p className="text-2xl font-bold text-yellow-300">6</p>
              <p className="text-xs text-gray-300">Unique Categories</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
              <p className="text-2xl font-bold text-yellow-300">100%</p>
              <p className="text-xs text-gray-300">Fresh & Made-to-order</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button onClick={()=>{
              navigate("/menu");
            }} className="px-6 py-2 rounded-full bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition shadow-md shadow-yellow-500/30 text-sm">
              Explore Menu
            </button>
            <button
            onClick={()=>{
              navigate("/products/family");
            }}
            className="px-6 py-2 rounded-full border border-white/25 bg-white/5 hover:bg-white/10 transition text-sm">
              View Family Combos
            </button>
          </div>
        </div>

        {/* Right: Card / Visual */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-6 bg-gradient-to-tr from-yellow-500/30 via-red-500/20 to-pink-500/30 blur-3xl opacity-70 pointer-events-none" />
            <div className="relative bg-white/5 border border-white/10 rounded-3xl p-5 shadow-xl backdrop-blur-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-2xl bg-yellow-400 flex items-center justify-center text-2xl">
                  🍕
                </div>
                <div>
                  <p className="text-sm font-semibold">Our Promise</p>
                  <p className="text-xs text-gray-300">Every slice, a story.</p>
                </div>
              </div>

              <ul className="space-y-3 text-sm text-gray-200">
                <li className="flex gap-2">
                  <span className="mt-1 text-yellow-300">●</span>
                  <span>
                    <span className="font-semibold">Hand-stretched dough</span> 
                    &mdash; for that perfect soft-yet-crispy base.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 text-yellow-300">●</span>
                  <span>
                    <span className="font-semibold">Premium cheese layers</span> 
                    that make every bite stretchy, gooey, and satisfying.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 text-yellow-300">●</span>
                  <span>
                    <span className="font-semibold">Flavours for everyone</span> 
                    &mdash; veg, non-veg, spicy, cheese burst, family combos, and more.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 text-yellow-300">●</span>
                  <span>
                    <span className="font-semibold">Perfect pairings</span> 
                    with shakes, sodas, and chilled beverages.
                  </span>
                </li>
              </ul>

              <div className="mt-5 text-xs text-gray-400 border-t border-white/10 pt-3">
                Open till late • Freshly baked on order • Packed with safety & care
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story + Values */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Our Story */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">
              Our Story
            </h2>
            <p className="text-sm sm:text-base text-gray-300 mb-3">
              PizzaVerse started with a simple idea:{" "}
              <span className="text-yellow-300 font-semibold">
                great pizza shouldn’t feel complicated.
              </span>{" "}
              Whether you're a classic Margherita lover, a spice chaser, a 
              cheese-obsessed soul, or planning a family movie night, we wanted 
              one place where everyone finds their perfect slice.
            </p>
            <p className="text-sm sm:text-base text-gray-300">
              From curated categories like <span className="font-semibold">Veg, Non-Veg, Spicy, Cheese Burst, Family Specials,</span> 
              and <span className="font-semibold">Beverages</span>, every item on our menu is thoughtfully designed, priced fairly, 
              and presented with care — just like you would expect from your 
              favourite local pizzeria.
            </p>
          </div>

          {/* Our Values */}
          <div className="space-y-5">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🥗</span>
                <h3 className="text-lg font-semibold">Freshness First</h3>
              </div>
              <p className="text-sm text-gray-300">
                Crisp veggies, quality toppings, and dough prepared with care — 
                we don’t believe in shortcuts when it comes to your food.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🔥</span>
                <h3 className="text-lg font-semibold">Something for Every Craving</h3>
              </div>
              <p className="text-sm text-gray-300">
                From safe classics for kids to spice-loaded fiery pizzas for 
                thrill seekers, our menu is built to match every mood and moment.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">👨‍👩‍👧‍👦</span>
                <h3 className="text-lg font-semibold">Family & Friends at the Center</h3>
              </div>
              <p className="text-sm text-gray-300">
                Our <span className="font-semibold">Family Combos</span> and 
                <span className="font-semibold"> Party Boxes</span> are crafted 
                to make hosting easier, sharing happier, and memories tastier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-white/10 bg-gradient-to-r from-yellow-500/10 via-transparent to-pink-500/10">
        <div className="max-w-4xl mx-auto px-4 py-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
            Ready to find your next favourite slice?
          </h2>
          <p className="text-sm sm:text-base text-gray-300 mb-6">
            Browse through our curated sections &mdash; 
            <span className="font-semibold text-yellow-300"> Veg, Non-Veg, Spicy, Cheese Burst, Family</span> 
            and <span className="font-semibold text-yellow-300"> Beverages</span> — 
            and let your cravings do the scrolling.
          </p>
          <button onClick={()=>{
            navigate("/menu");
          }} className="px-6 py-2 rounded-full bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition shadow-md shadow-yellow-500/40 text-sm sm:text-base">
            View Full Menu
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
