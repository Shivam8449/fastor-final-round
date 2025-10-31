import { useEffect, useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import data from "../data/restaurants.json";

export default function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          console.error("Geolocation error:", error);
          setRestaurants(data); // fallback
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
      setRestaurants(data);
    }
  }, []);

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Earth's radius in km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  useEffect(() => {
    if (userLocation) {
      const withDistance = data.map((r) => ({
        ...r,
        distance: calculateDistance(
          userLocation.latitude,
          userLocation.longitude,
          r.latitude,
          r.longitude
        ),
      }));

      const sorted = withDistance.sort((a, b) => a.distance - b.distance);
      setRestaurants(sorted);
    }
  }, [userLocation]);

  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-gradient-to-br from-gray-950 via-indigo-950 to-black text-white flex flex-col items-center justify-start m-0 p-0">
      {/* Title */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-pink-500 to-purple-500 drop-shadow-[0_0_25px_rgba(245,158,11,0.6)] tracking-wide mt-12 mb-6 text-center">
        Nearby Restaurants 🍽️
      </h1>

      {/* Loading */}
      {!restaurants.length && (
        <p className="text-gray-400 text-lg mt-10 animate-pulse">
          Fetching nearby restaurants...
        </p>
      )}

      {/* Restaurant Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6 w-full max-w-7xl px-4 sm:px-6 pb-10">
        {restaurants.map((r) => (
          <div
            key={r.id}
            className="transform transition-all hover:scale-[1.02] duration-300"
          >
            <RestaurantCard restaurant={r} />
          </div>
        ))}
      </div>
    </div>
  );
}
