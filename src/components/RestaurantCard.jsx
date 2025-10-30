import { useNavigate } from "react-router-dom";

export default function RestaurantCard({ restaurant }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/restaurant/${restaurant.id}`)}
      className="bg-gradient-to-br from-gray-800/40 to-indigo-900/40 border border-indigo-600/30 rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-transform transform hover:scale-[1.03] cursor-pointer backdrop-blur-lg"
    >
      <img
        src={restaurant.image}
        alt={restaurant.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-indigo-300">{restaurant.name}</h2>
        <p className="text-gray-400 text-sm mb-1">{restaurant.cuisine}</p>

        {restaurant.distance && (
          <p className="text-amber-400 font-semibold">
            📍 {restaurant.distance.toFixed(2)} km away
          </p>
        )}

        <div className="flex justify-between items-center mt-2">
          <span className="text-sm text-gray-400">⭐ {restaurant.rating}</span>
          <span className="text-sm text-gray-400">{restaurant.location}</span>
        </div>
      </div>
    </div>
  );
}
