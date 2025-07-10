'use client';

interface PinnedPhotoProps {
  src: string;
  alt: string;
  side: 'left' | 'right';
  rotation?: number; // Optional rotation in degrees
  caption?: string;
}

export default function PinnedPhoto({ src, alt, side, rotation = 0, caption }: PinnedPhotoProps) {
  const sideClasses = side === 'left' ? 'left-0 -translate-x-64' : 'right-0 translate-x-64';
  const hoverTranslation = side === 'left' ? 'translateX(32px)' : 'translateX(-32px)';
  
  return (
    <div className={`absolute top-4 ${sideClasses} hidden lg:block z-50`}>
      <div className="relative group">
        {/* Photo Container - Handles all transforms */}
        <div 
          className="bg-white p-2 shadow-lg transition-all duration-300 ease-out group-hover:shadow-2xl relative group-hover:z-[100]"
          style={{ transform: `rotate(${rotation}deg)` }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = `rotate(0deg) scale(1.8) ${hoverTranslation}`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = `rotate(${rotation}deg) scale(1) translateX(0)`;
          }}
        >
          <img 
            src={src} 
            alt={alt}
            className="w-40 h-40 object-cover"
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