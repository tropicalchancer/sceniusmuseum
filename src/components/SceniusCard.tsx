import { Scenius } from '@/types/scenius';
import Image from 'next/image';

interface SceniusCardProps {
  scenius: Scenius;
  onClick: () => void;
}

export default function SceniusCard({ scenius, onClick }: SceniusCardProps) {
  return (
    <div
      className="art-deco-card rounded-none overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-48 w-full bg-gray-100">
        <div className="absolute inset-0 border-8 border-[var(--art-deco-gold)] z-10 pointer-events-none" />
        <Image
          src={scenius.imageUrl || '/images/placeholder.jpg'}
          alt={scenius.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
          loading="lazy"
          quality={75}
          className="object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-90"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/images/placeholder.jpg';
          }}
        />
      </div>
      <div className="p-6 border-t-2 border-[var(--art-deco-gold)]">
        <h3 className="text-xl font-bold mb-2 text-[var(--art-deco-black)] uppercase tracking-wider">
          {scenius.name}
        </h3>
        <div className="flex items-center gap-2 text-sm text-[var(--art-deco-navy)] mb-3">
          <span className="font-medium">{scenius.geographicLocation}</span>
          <span className="text-[var(--art-deco-gold)]">•</span>
          <span className="font-medium">{scenius.century}th Century</span>
        </div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-bold text-[var(--art-deco-emerald)] uppercase tracking-wider">
            {scenius.category}
          </span>
          <div className="flex items-center gap-1">
            <span className="text-sm font-medium">Impact:</span>
            <span className="text-lg font-bold text-[var(--art-deco-gold)]">
              {scenius.impactScore}
            </span>
          </div>
        </div>
        <div className="mt-2 pt-3 border-t border-gray-200">
          <p className="text-sm text-[var(--art-deco-navy)] line-clamp-2">
            {scenius.description}
          </p>
        </div>
      </div>
    </div>
  );
} 