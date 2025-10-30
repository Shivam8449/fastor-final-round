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
    <div className="p-6 text-center bg-gradient-to-br from-indigo-950 to-black min-h-screen text-white">
      <h1 className="text-3xl font-extrabold mb-6 text-amber-400 tracking-wide drop-shadow-md">
        Nearby Restaurants 🍽️
      </h1>

      {!restaurants.length && (
        <p className="text-gray-400 mt-10">Fetching nearby restaurants...</p>
      )}

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">
        {restaurants.map((r) => (
          <RestaurantCard key={r.id} restaurant={r} />
        ))}
      </div>
    </div>
  );
}
