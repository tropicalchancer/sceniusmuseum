'use client';

import { useState } from 'react';
import SceniusCard from '@/components/SceniusCard';
import SceniusModal from '@/components/SceniusModal';
import { Scenius } from '@/types/scenius';
import { sceniuses } from '@/data/sceniuses';

export default function Home() {
  const [selectedScenius, setSelectedScenius] = useState<Scenius | null>(null);

  return (
    <main className="min-h-screen">
      <div className="header-container text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h1 className="art-deco-title text-4xl sm:text-5xl md:text-6xl mb-6">
            Scenius Museum
          </h1>
          <p className="art-deco-subtitle max-w-2xl mx-auto">
            Explore historical scenes of collective genius throughout history
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sceniuses.map((scenius) => (
            <SceniusCard
              key={scenius.id}
              scenius={scenius}
              onClick={() => setSelectedScenius(scenius)}
            />
          ))}
        </div>

        {selectedScenius && (
          <SceniusModal
            scenius={selectedScenius}
            onClose={() => setSelectedScenius(null)}
          />
        )}
      </div>
    </main>
  );
}
