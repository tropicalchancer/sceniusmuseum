import { Scenius } from '@/types/scenius';
import Image from 'next/image';
import { useState } from 'react';

interface SceniusModalProps {
  scenius: Scenius;
  onClose: () => void;
}

export default function SceniusModal({ scenius, onClose }: SceniusModalProps) {
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto border-2 border-[var(--art-deco-gold)]">
        <div className="relative h-96 w-full bg-gray-100">
          <div className="absolute inset-0 border-8 border-[var(--art-deco-gold)] z-10 pointer-events-none" />
          {isImageLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="w-8 h-8 border-4 border-[var(--art-deco-gold)] border-t-transparent rounded-full animate-spin" />
            </div>
          )}
          <Image
            src={scenius.imageUrl || '/images/placeholder.jpg'}
            alt={scenius.name}
            fill
            sizes="(max-width: 1536px) 100vw, 1536px"
            priority={true}
            quality={90}
            className={`object-cover transition-opacity duration-300 ${
              isImageLoading ? 'opacity-0' : 'opacity-100'
            }`}
            onLoadingComplete={() => setIsImageLoading(false)}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/images/placeholder.jpg';
              setIsImageLoading(false);
            }}
          />
        </div>

        <div className="p-8">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-3 text-[var(--art-deco-black)] uppercase tracking-wider">
                {scenius.name}
              </h2>
              <div className="flex items-center gap-3 text-[var(--art-deco-navy)]">
                <span className="font-medium">{scenius.geographicLocation}</span>
                <span className="text-[var(--art-deco-gold)]">•</span>
                <span className="font-medium">{scenius.century}th Century</span>
                <span className="text-[var(--art-deco-gold)]">•</span>
                <span className="font-medium text-[var(--art-deco-emerald)]">{scenius.category}</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="art-deco-button px-4 py-2"
            >
              Close
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-[var(--art-deco-black)] uppercase tracking-wider">
                Description
              </h3>
              <p className="text-[var(--art-deco-navy)] mb-6">{scenius.description}</p>

              <h3 className="text-xl font-bold mb-4 text-[var(--art-deco-black)] uppercase tracking-wider">
                Core Activity
              </h3>
              <p className="text-[var(--art-deco-navy)] mb-6">{scenius.coreActivity}</p>

              <h3 className="text-xl font-bold mb-4 text-[var(--art-deco-black)] uppercase tracking-wider">
                Values
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {scenius.values.map((value, index) => (
                  <span
                    key={index}
                    className="bg-[var(--art-deco-cream)] text-[var(--art-deco-black)] border border-[var(--art-deco-gold)] px-4 py-1 text-sm font-medium"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-[var(--art-deco-black)] uppercase tracking-wider">
                Key Figures
              </h3>
              <ul className="list-none text-[var(--art-deco-navy)] mb-6">
                {scenius.keyFigures.map((figure, index) => (
                  <li key={index} className="mb-2 flex items-center">
                    <span className="text-[var(--art-deco-gold)] mr-2">✦</span>
                    {figure}
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold mb-4 text-[var(--art-deco-black)] uppercase tracking-wider">
                Notable Products
              </h3>
              <ul className="list-none text-[var(--art-deco-navy)] mb-6">
                {scenius.notableProducts.map((product, index) => (
                  <li key={index} className="mb-2 flex items-center">
                    <span className="text-[var(--art-deco-gold)] mr-2">✦</span>
                    {product}
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold mb-4 text-[var(--art-deco-black)] uppercase tracking-wider">
                Legacy
              </h3>
              <p className="text-[var(--art-deco-navy)]">{scenius.legacy}</p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t-2 border-[var(--art-deco-gold)]">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-sm uppercase tracking-wider text-[var(--art-deco-black)]">
                  Impact Score
                </span>
                <span className="ml-3 text-2xl font-bold text-[var(--art-deco-gold)]">
                  {scenius.impactScore}
                </span>
              </div>
              <div>
                <span className="text-sm uppercase tracking-wider text-[var(--art-deco-black)]">
                  Institutional Hub
                </span>
                <span className="ml-3 font-medium text-[var(--art-deco-navy)]">
                  {scenius.institutionalHub}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 