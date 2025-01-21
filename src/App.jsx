import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import UploadSection from "./components/UploadSection/UploadSection";
import ResultSection from "./components/ResultSection/ResultSection";
import Footer from "./components/Footer/Footer";

const cropDiseases = {
  "Late Blight": {
    treatment: "Use fungicides like Mancozeb and practice crop rotation.",
  },
  "Powdery Mildew": {
    treatment: "Apply sulfur-based fungicides and ensure proper air circulation.",
  },
  "Leaf Spot": {
    treatment: "Use copper-based sprays and remove infected leaves.",
  },
};

const getRandomDisease = () => {
  const diseases = Object.keys(cropDiseases); // Get all disease names
  const randomIndex = Math.floor(Math.random() * diseases.length); // Generate random index
  const randomDisease = diseases[randomIndex]; // Get disease name
  return {
    disease: randomDisease,
    treatment: cropDiseases[randomDisease].treatment, // Get treatment
  };
};

const App = () => {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));

    const randomResult = getRandomDisease(); // Get a random disease
    setResult(randomResult);
  };

  return (
    <div className="app">
      <Header />
      <main className="container">
        <Hero />
        <UploadSection onImageUpload={handleImageUpload} image={image} />
        <ResultSection result={result} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
