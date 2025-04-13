import { Scenius } from '@/types/scenius';
import Image from 'next/image';

interface SceniusCardProps {
  scenius: Scenius;
  onClick: () => void;
}

export default function SceniusCard({ scenius, onClick }: SceniusCardProps) {
  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
      onClick={onClick}
    >
      <div className="relative h-48 w-full">
        <Image
          src={scenius.imageUrl || '/images/placeholder.jpg'}
          alt={scenius.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{scenius.name}</h3>
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
          <span>{scenius.geographicLocation}</span>
          <span>•</span>
          <span>{scenius.century}th Century</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">{scenius.category}</span>
          <div className="flex items-center gap-1">
            <span className="text-sm font-medium">Impact:</span>
            <span className="text-sm font-bold text-blue-600">{scenius.impactScore}</span>
          </div>
        </div>
        <div className="mt-2">
          <p className="text-sm text-gray-600 line-clamp-2">{scenius.description}</p>
        </div>
      </div>
    </div>
  );
} 