import React, { useState, useRef } from 'react';
import Header from './components/Header';
import UploadSection from './components/UploadSection';
import AnalysisPanel from './components/AnalysisPanel';
import StyleSuggestions from './components/StyleSuggestions';
import TutorialModal from './components/TutorialModal';
import { getDisplayName, getStylesForType, getDifficultyColor } from './components/utils/helpers';

const App = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [detectedType, setDetectedType] = useState(null);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [likedStyles, setLikedStyles] = useState({});
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target.result);
        analyzeImage(file); // Pass the file directly
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = async (file) => {
    setIsAnalyzing(true);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const res = await fetch('https://fashion-outfit-1.onrender.com/predict', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      setDetectedType(data.sub_category); // Use the API's detected type
    } catch (err) {
      console.error('API Error:', err);
      alert('Failed to analyze image.');
    }

    setIsAnalyzing(false);
  };


  const handleReset = () => {
    setUploadedImage(null);
    setDetectedType(null);
    setSelectedStyle(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <Header />

        {!uploadedImage && (
          <UploadSection onUpload={handleImageUpload} fileInputRef={fileInputRef} />
        )}

        {uploadedImage && (
          <>
            <AnalysisPanel
              uploadedImage={uploadedImage}
              isAnalyzing={isAnalyzing}
              detectedType={detectedType}
              onReset={handleReset}
              getDisplayName={getDisplayName}
              getStylesForType={() => getStylesForType(detectedType)}
            />

            {detectedType && (
              <StyleSuggestions
                styles={getStylesForType(detectedType)}
                detectedType={detectedType}
                likedStyles={likedStyles}
                setLikedStyles={setLikedStyles}
                onSelectStyle={setSelectedStyle}
                getDifficultyColor={getDifficultyColor}
                getDisplayName={getDisplayName}
              />
            )}

            {selectedStyle && (
              <TutorialModal
                style={selectedStyle}
                onClose={() => setSelectedStyle(null)}
                getDifficultyColor={getDifficultyColor}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default App;
