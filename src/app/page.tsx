'use client';

import { useState, useMemo } from 'react';
import SceniusCard from '@/components/SceniusCard';
import SceniusModal from '@/components/SceniusModal';
import SceniusFilters from '@/components/SceniusFilters';
import { Scenius, SceniusFilter, SortOption } from '@/types/scenius';
import { sceniuses } from '@/data/sceniuses';

export default function Home() {
  const [selectedScenius, setSelectedScenius] = useState<Scenius | null>(null);
  const [filters, setFilters] = useState<SceniusFilter>({});
  const [sortBy, setSortBy] = useState<SortOption>('impactScore');

  // Get unique values for filters
  const categories = useMemo(
    () => [...new Set(sceniuses.map((s) => s.category))],
    []
  );
  const centuries = useMemo(
    () => [...new Set(sceniuses.map((s) => s.century))].sort((a, b) => a - b),
    []
  );
  const locations = useMemo(
    () => [...new Set(sceniuses.map((s) => s.geographicLocation))],
    []
  );

  // Filter and sort sceniuses
  const filteredSceniuses = useMemo(() => {
    let result = [...sceniuses];

    // Apply filters
    if (filters.category) {
      result = result.filter((s) => s.category === filters.category);
    }
    if (filters.century) {
      result = result.filter((s) => s.century === filters.century);
    }
    if (filters.location) {
      result = result.filter((s) => s.geographicLocation === filters.location);
    }

    // Apply sorting
    result.sort((a, b) => {
      switch (sortBy) {
        case 'impactScore':
          return b.impactScore - a.impactScore;
        case 'century':
          return a.century - b.century;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return result;
  }, [filters, sortBy]);

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
        <SceniusFilters
          filters={filters}
          sortBy={sortBy}
          onFilterChange={setFilters}
          onSortChange={setSortBy}
          categories={categories}
          centuries={centuries}
          locations={locations}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSceniuses.map((scenius) => (
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
