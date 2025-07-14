const TutorialModal = ({ style, onClose, getDifficultyColor }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-semibold">{style.name} Tutorial</h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>

          <img
            src={style.image}
            alt={style.name}
            className="w-48 h-70 object-cover rounded-lg mb-6 mx-auto"
          />

          <div className="flex items-center mb-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(style.difficulty)} mr-3`}>
              {style.difficulty}
            </span>
            <span className="text-sm text-gray-600">Perfect for: {style.occasion}</span>
          </div>

          <h4 className="text-lg font-semibold mb-3">Step-by-Step Tutorial:</h4>
          <div className="space-y-3">
            {style.tutorial.map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5 flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-gray-700">{step}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex gap-3">
            <button className="flex-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all">
              Save Style
            </button>
            <button
              onClick={onClose}
              className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialModal;
