import { Camera } from 'lucide-react';

const AnalysisPanel = ({
  uploadedImage,
  isAnalyzing,
  detectedType,
  onReset,
  getDisplayName,
  getStylesForType
}) => {
  return (
    <div className="grid md:grid-cols-2 gap-8 mb-8">
      {/* Uploaded Image */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Camera className="w-5 h-5 mr-2 text-pink-500" />
          Your Upload
        </h3>
        <img
          src={uploadedImage}
          alt="Uploaded outfit"
          className="w-48 h-auto object-contain rounded-lg mb-4 mx-auto"
        />
        <button
          onClick={onReset}
          className="text-pink-500 hover:text-pink-600 transition-colors"
        >
          Upload Different Image
        </button>
      </div>

      {/* AI Analysis */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-4">AI Analysis</h3>
        {isAnalyzing ? (
          <div className="flex items-center justify-center h-32">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-500"></div>
            <span className="ml-3 text-gray-600">Analyzing your outfit...</span>
          </div>
        ) : detectedType ? (
          <div>
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-green-600 font-medium">Detection Complete</span>
            </div>
            <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-4">
              <p className="text-lg">
                <span className="font-semibold">Detected:</span> {getDisplayName(detectedType)}
              </p>
              <p className="text-gray-600 mt-2">
                {getStylesForType().length} styling options available
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default AnalysisPanel;
