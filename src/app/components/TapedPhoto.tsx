'use client';

interface PinnedPhotoProps {
  src: string;
  alt: string;
  side: 'left' | 'right';
  rotation?: number; // Optional rotation in degrees
  caption?: string;
}

export default function PinnedPhoto({ src, alt, side, rotation = 0, caption }: PinnedPhotoProps) {
  const sideClasses = side === 'left' ? 'left-0 -translate-x-48' : 'right-0 translate-x-48';
  
  return (
    <div className={`absolute top-4 ${sideClasses} hidden lg:block`}>
      <div 
        className="relative group"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {/* Pin */}
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 transition-transform duration-300 group-hover:scale-110">
          <div className="w-3 h-3 bg-red-500 rounded-full shadow-md border border-red-600">
            {/* Pin needle */}
            <div className="absolute top-1/2 left-1/2 w-0.5 h-1 bg-gray-400 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>
        
        {/* Photo */}
        <div className="bg-white p-2 shadow-lg transform transition-transform duration-200 group-hover:scale-105">
          <img 
            src={src} 
            alt={alt}
            className="w-24 h-24 object-cover"
          />
          {caption && (
            <p className="text-xs text-gray-600 text-center mt-1 font-handwriting">
              {caption}
            </p>
          )}
        </div>
      </div>
    </div>
  );
} 