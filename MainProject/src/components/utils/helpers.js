import {
  shirtStyles,
  cropTopStyles,
  shortsStyles,
  pantsStyles,
  blazerStyles,
  tankStyles,
  shrugStyles,
  maxiSkirtStyles,
  miniDressStyles,
  jumpsuitStyles,
  jeansStyles,
  teeStyles
} from './styleData';

export const getStylesForType = (type) => {
  switch (type) {
    case 'shirt': return shirtStyles;
    case 'croptop': return cropTopStyles;
    case 'shorts': return shortsStyles;
    case 'pants': return pantsStyles;
    case 'blazer': return blazerStyles;
    case 'tank': return tankStyles;
    case 'shrug': return shrugStyles;
    case 'maxiskirt': return maxiSkirtStyles;
    case 'mini': return miniDressStyles;
    case 'jumpsuit': return jumpsuitStyles;
    case 'jeans': return jeansStyles;
    case 'tee': return teeStyles;
    default: return [];
  }
};

export const getDisplayName = (type) => {
  switch (type) {
    case 'shirt': return 'Shirt';
    case 'croptop': return 'Crop Top';
    case 'shorts': return 'Shorts';
    case 'pants': return 'Pants';
    case 'blazer': return 'Blazer';
    case 'tank': return 'Tank Top';
    case 'shrug': return 'Shrug';
    case 'maxiskirt': return 'Maxi Skirt';
    case 'mini': return 'Mini Dress';
    case 'jumpsuit': return 'Jumpsuit';
    case 'jeans': return 'Jeans';
    case 'tee': return 'T-Shirt';
    default: return 'Outfit';
  }
};

export const getDifficultyColor = (difficulty) => {
  switch (difficulty) {
    case 'Easy': return 'bg-green-100 text-green-800';
    case 'Medium': return 'bg-yellow-100 text-yellow-800';
    case 'Hard': return 'bg-red-100 text-red-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};