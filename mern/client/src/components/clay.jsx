import { useEffect, useState } from "react";

export default function Clay() {
  const [pottery, setPottery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch pottery data from backend
    fetch("https://toepfernfull-be.onrender.com/pottery") // Update with your actual API endpoint
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch pottery data");
        }
        return response.json();
      })
      .then((data) => {
        setPottery(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-gray-600">Loading pottery...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        My Pottery Collection
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {pottery.map((item) => (
          <div key={item._id.$oid} className="bg-white shadow-lg rounded-xl p-4">
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-gray-600">Type: {item.type}</p>
            <p className="text-gray-600">Clay: {item.clay}</p>
            <p className="text-gray-600">Glaze: {item.glaze}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
