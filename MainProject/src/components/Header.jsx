import { Sparkles } from 'lucide-react';

const Header = () => (
  <div className="text-center mb-8">
    <div className="flex items-center justify-center mb-4">
      <Sparkles className="w-8 h-8 text-pink-500 mr-2" />
      <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
        StyleGenius
      </h1>
    </div>
    <p className="text-gray-600 text-lg">
      Transform your wardrobe with AI-powered styling suggestions
    </p>
  </div>
);

export default Header;
