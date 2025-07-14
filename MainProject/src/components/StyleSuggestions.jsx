import { Star } from 'lucide-react';
import StyleCard from './StyleCard';

const StyleSuggestions = ({
  styles,
  detectedType,
  likedStyles,
  setLikedStyles,
  onSelectStyle,
  getDifficultyColor,
  getDisplayName
}) => {
  const toggleLike = (id) => {
    setLikedStyles(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-semibold mb-6 flex items-center">
        <Star className="w-6 h-6 mr-2 text-pink-500" />
        Style Suggestions for Your {getDisplayName(detectedType)}
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {styles.map((style) => (
          <StyleCard
            key={style.id}
            style={style}
            isLiked={likedStyles[style.id]}
            onLike={toggleLike}
            onSelect={onSelectStyle}
            getDifficultyColor={getDifficultyColor}
          />
        ))}
      </div>
    </div>
  );
};

export default StyleSuggestions;
