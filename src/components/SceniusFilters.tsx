import { SceniusFilter, SortOption } from '@/types/scenius';

interface SceniusFiltersProps {
  filters: SceniusFilter;
  sortBy: SortOption;
  onFilterChange: (filters: SceniusFilter) => void;
  onSortChange: (sortBy: SortOption) => void;
  categories: string[];
  centuries: number[];
  locations: string[];
}

export default function SceniusFilters({
  filters,
  sortBy,
  onFilterChange,
  onSortChange,
  categories,
  centuries,
  locations,
}: SceniusFiltersProps) {
  return (
    <div className="bg-white p-8 mb-12 border-2 border-[var(--art-deco-gold)]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <label className="block text-sm font-bold text-[var(--art-deco-black)] uppercase tracking-wider mb-2">
            Category
          </label>
          <select
            className="art-deco-select w-full"
            value={filters.category || ''}
            onChange={(e) =>
              onFilterChange({ ...filters, category: e.target.value || undefined })
            }
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-bold text-[var(--art-deco-black)] uppercase tracking-wider mb-2">
            Century
          </label>
          <select
            className="art-deco-select w-full"
            value={filters.century || ''}
            onChange={(e) =>
              onFilterChange({
                ...filters,
                century: e.target.value ? Number(e.target.value) : undefined,
              })
            }
          >
            <option value="">All Centuries</option>
            {centuries.map((century) => (
              <option key={century} value={century}>
                {century}th Century
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-bold text-[var(--art-deco-black)] uppercase tracking-wider mb-2">
            Location
          </label>
          <select
            className="art-deco-select w-full"
            value={filters.location || ''}
            onChange={(e) =>
              onFilterChange({ ...filters, location: e.target.value || undefined })
            }
          >
            <option value="">All Locations</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-bold text-[var(--art-deco-black)] uppercase tracking-wider mb-2">
            Sort By
          </label>
          <select
            className="art-deco-select w-full"
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value as SortOption)}
          >
            <option value="impactScore">Impact Score</option>
            <option value="century">Century</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>
    </div>
  );
} 