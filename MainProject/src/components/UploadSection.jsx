import { Upload } from 'lucide-react';

const UploadSection = ({ onUpload, fileInputRef }) => (
  <div className="max-w-md mx-auto mb-8">
    <div
      className="border-2 border-dashed border-pink-300 rounded-xl p-8 text-center bg-white/50 backdrop-blur-sm hover:border-pink-400 transition-colors cursor-pointer"
      onClick={() => fileInputRef.current?.click()}
    >
      <Upload className="w-12 h-12 text-pink-400 mx-auto mb-4" />
      <h3 className="text-lg font-semibold text-gray-700 mb-2">Upload Your Outfit</h3>
      <p className="text-gray-500 mb-4">
        Upload a photo of your shirt, tank top, shrug, or maxi skirt
      </p>
      <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full hover:from-pink-600 hover:to-purple-600 transition-all">
        Choose Photo
      </button>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={onUpload}
        className="hidden"
      />
    </div>
  </div>
);

export default UploadSection;
