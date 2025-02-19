import { useEffect, useState } from "react";
import UploadImage from "./UploadImage"; // Import the UploadImage component that handles pottery creation

export default function Clay() {
  const [pottery, setPottery] = useState([]);
 
  // Fetch all pottery from the backend
  useEffect(() => {
    fetch("https://your-backend-url.com/pottery")
      .then((res) => res.json())
      .then((data) => setPottery(data))
      .catch((err) => console.error("Failed to fetch pottery:", err));
  }, []);

  return (
    <div>
      <h1>My Pottery Collection</h1>
      <button onClick={() => console.log("Button clicked!")}>Create New Pottery</button>

      {/* Conditionally render the form when the user clicks 'Create New Pottery' */}
      { <UploadImage />}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
        {pottery.map((item) => (
          <div key={item._id} style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>
            <img src={item.image} alt={item.name} width="200" />
            <h2>{item.name}</h2>
            <p>Type: {item.type}</p>
            <p>Clay: {item.clay}</p>
            <p>Glaze: {item.glaze}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
