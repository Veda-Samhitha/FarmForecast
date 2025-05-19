import React, { useState, useEffect } from "react";
import axios from "axios";
import "./prediction.css";

function Prediction() {
  const [places, setPlaces] = useState([]);
  const [yards, setYards] = useState([]);
  const [crops, setCrops] = useState([]);
  const [varieties, setVarieties] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState("");
  const [selectedYard, setSelectedYard] = useState("");
  const [selectedCrop, setSelectedCrop] = useState("");
  const [selectedVariety, setSelectedVariety] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [prediction, setPrediction] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/options")
      .then((response) => {
        setPlaces(response.data.places);
        setYards(response.data.yards);
        setCrops(response.data.crops);
        setVarieties(response.data.varieties);
      })
      .catch((error) => console.error("Error fetching options:", error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      AmcName: selectedPlace,
      YardName: selectedYard,
      CommName: selectedCrop,
      VarityName: selectedVariety,
      Year: parseInt(year),
      Month: parseInt(month),
      Day: parseInt(day),
    };

    axios
      .post("http://127.0.0.1:5000/predict", data)
      .then((response) => {
        setPrediction(response.data);
      })
      .catch((error) => console.error("Error fetching prediction:", error));
  };

  return (
    <div className="prediction-container">
      <h1>Crop Price Prediction</h1>
      <form onSubmit={handleSubmit}>
        <select value={selectedPlace} onChange={(e) => setSelectedPlace(e.target.value)}>
          <option value="">Select Place</option>
          {places.map((place) => (
            <option key={place} value={place}>{place}</option>
          ))}
        </select>

        <select value={selectedYard} onChange={(e) => setSelectedYard(e.target.value)}>
          <option value="">Select Yard</option>
          {yards.map((yard) => (
            <option key={yard} value={yard}>{yard}</option>
          ))}
        </select>

        <select value={selectedCrop} onChange={(e) => setSelectedCrop(e.target.value)}>
          <option value="">Select Crop</option>
          {crops.map((crop) => (
            <option key={crop} value={crop}>{crop}</option>
          ))}
        </select>

        <select value={selectedVariety} onChange={(e) => setSelectedVariety(e.target.value)}>
          <option value="">Select Variety</option>
          {varieties.map((variety) => (
            <option key={variety} value={variety}>{variety}</option>
          ))}
        </select>

        <input type="number" value={year} onChange={(e) => setYear(e.target.value)} placeholder="Year" required />
        <input type="number" value={month} onChange={(e) => setMonth(e.target.value)} placeholder="Month" required />
        <input type="number" value={day} onChange={(e) => setDay(e.target.value)} placeholder="Day" required />

        <button type="submit">Predict</button>
      </form>

      {prediction && (
        <div>
          <h2>Prediction Results</h2>
          {prediction.error ? (
            <p>{prediction.error}</p>
          ) : (
            <div>
              <p>Min Price: {prediction.MinPrice}</p>
              <p>Max Price: {prediction.MaxPrice}</p>
              <p>Avg Price: {prediction.AvgPrice}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Prediction;
