export default function Clay() {
  // Sample pottery data (replace with API data later)
  const potteryItems = [
    {
      id: 1,
      name: "Rustic Clay Vase",
      image: "https://source.unsplash.com/400x400/?clay,vase",
      description: "Handmade vase with a smooth finish.",
    },
    {
      id: 2,
      name: "Minimalist Mug",
      image: "https://source.unsplash.com/400x400/?ceramic,mug",
      description: "Perfect for coffee lovers.",
    },
    {
      id: 3,
      name: "Decorative Bowl",
      image: "https://source.unsplash.com/400x400/?clay,bowl",
      description: "Elegant centerpiece for any table.",
    },
    {
      id: 4,
      name: "Artistic Plate",
      image: "https://source.unsplash.com/400x400/?ceramic,plate",
      description: "Hand-painted ceramic plate.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        My Pottery Collection
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {potteryItems.map((item) => (
          <div key={item.id} className="bg-white shadow-lg rounded-xl p-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="text-lg font-semibold mt-4">{item.name}</h2>
            <p className="text-gray-600 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
