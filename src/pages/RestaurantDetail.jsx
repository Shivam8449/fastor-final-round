import { useParams } from "react-router-dom";
import { useRef, useState } from "react";
import data from "../data/restaurants.json";
import fastorLogo from "../assets/fastor-logo.png";

export default function RestaurantDetail() {
  const { id } = useParams();
  const restaurant = data.find((r) => r.id.toString() === id);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const imgRef = useRef(null);

  const handleDrag = (e) => {
    const rect = imgRef.current.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left - 30,
      y: e.clientY - rect.top - 30,
    });
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: restaurant.name,
          text: "Check out this restaurant!",
          url: window.location.href,
        });
      } catch (err) {
        console.error(err);
      }
    } else {
      alert("Web Share not supported!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10 bg-gradient-to-br from-gray-950 via-indigo-950 to-black text-white">
      {/* Title */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-500 drop-shadow-lg mb-10 text-center animate-fadeIn">
        {restaurant.name}
      </h1>

      {/* Image container */}
      <div
        className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.03] transition-transform duration-500 border border-indigo-700/40 bg-gradient-to-br from-indigo-900/40 to-black/60 backdrop-blur-md"
      >
        {/* Restaurant Image */}
        <img
          ref={imgRef}
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover rounded-2xl opacity-95 hover:opacity-100 transition duration-300"
          onClick={handleDrag}
        />

        {/* Draggable Logo */}
        <img
          src={fastorLogo}
          alt="Fastor Logo"
          className="absolute w-16 h-16 cursor-move drop-shadow-xl transition-transform duration-150 hover:scale-110"
          style={{ left: pos.x, top: pos.y }}
          draggable="false"
          onMouseDown={(e) => e.preventDefault()}
          onMouseMove={(e) => e.buttons === 1 && handleDrag(e)}
        />

        {/* Glow border effect */}
        <div className="absolute inset-0 rounded-2xl border border-indigo-400/30 shadow-[0_0_25px_4px_rgba(99,102,241,0.2)] pointer-events-none"></div>
      </div>

      {/* Share Button */}
      <button
        onClick={handleShare}
        className="mt-10 px-8 py-3 rounded-xl font-semibold text-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-pink-600 shadow-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.6)] transition-all duration-300"
      >
        Share Restaurant 💫
      </button>

      {/* Footer */}
      <p className="mt-8 text-sm text-gray-400 text-center max-w-md">
        Tip: Click and drag the Fastor logo anywhere on the image before sharing.
      </p>
    </div>
  );
}
