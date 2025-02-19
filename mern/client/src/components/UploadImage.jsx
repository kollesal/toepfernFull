import { useState } from "react";

export default function UploadImage() {
  const [file, setFile] = useState(null);
  const [potteryData, setPotteryData] = useState({
    name: "",
    type: "",
    clay: "",
    glaze: "",
  });

  // Handle file change (image selection)
  const handleFileChange = (e) => setFile(e.target.files[0]);

  // Handle input field changes
  const handleInputChange = (e) => setPotteryData({ ...potteryData, [e.target.name]: e.target.value });

  // Handle form submission for creating pottery
  const handleUpload = async () => {
    if (!file) return alert("Please upload an image.");

    const formData = new FormData();
    formData.append("image", file);
    Object.keys(potteryData).forEach((key) => formData.append(key, potteryData[key]));

    // Make a POST request to the backend to create the pottery item
    const response = await fetch("https://your-backend-url.com/pottery/upload", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      alert("Pottery uploaded successfully!");
      setPotteryData({ name: "", type: "", clay: "", glaze: "" }); // Reset form fields
      setFile(null); // Reset file input
    } else {
      alert("Upload failed.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Create New Pottery Item</h2>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={potteryData.name}
          placeholder="Pottery Name"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Type</label>
        <input
          type="text"
          name="type"
          value={potteryData.type}
          placeholder="Type (e.g., Bowl)"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Clay</label>
        <input
          type="text"
          name="clay"
          value={potteryData.clay}
          placeholder="Clay (e.g., Sibelco)"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Glaze</label>
        <input
          type="text"
          name="glaze"
          value={potteryData.glaze}
          placeholder="Glaze (e.g., PC-20)"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Upload Image</label>
        <input type="file" accept="image/*" onChange={handleFileChange} />
      </div>
      <button onClick={handleUpload}>Create Pottery Item</button>
    </div>
  );
}
