import { Heart, ChevronRight } from 'lucide-react';

const StyleCard = ({ style, isLiked, onLike, onSelect, getDifficultyColor }) => (
  <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
    <img
      src={style.image}
      alt={style.name}
      className="w-full h-120 object-cover"
    />
    <div className="p-4">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-semibold text-lg">{style.name}</h4>
        <Heart
          className={`w-5 h-5 cursor-pointer transition-colors ${isLiked ? 'text-red-500 fill-red-500' : 'text-gray-400'}`}
          fill={isLiked ? 'red' : 'none'}
          onClick={() => onLike(style.id)}
        />
      </div>
      <div className="flex items-center justify-between mb-3">
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(style.difficulty)}`}>
          {style.difficulty}
        </span>
        <span className="text-sm text-gray-500">{style.occasion}</span>
      </div>
      <button
        className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all flex items-center justify-center"
        onClick={() => onSelect(style)}
      >
        View Tutorial
        <ChevronRight className="w-4 h-4 ml-1" />
      </button>
    </div>
  </div>
);

export default StyleCard;
