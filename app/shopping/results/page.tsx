"use client";

import { useState } from "react";
import { SearchResults } from "@/components/features/search-results/search-results";
import { FilterPanel } from "@/components/features/search-results/filter-panel";
import { LocationFilter } from "@/components/features/search-results/location-filter";
import { Pagination } from "@/components/ui/pagnination";
import Footer from "@/components/layout/footer";

export default function SearchPage() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-4">
        {/* Location Filter */}
        <LocationFilter />

        <div className="flex flex-col md:flex-row gap-6 mt-4">
          {/* Filter Sidebar */}
          <aside className="w-full md:w-[280px] flex-shrink-0">
            <FilterPanel />
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            <h1 className="text-xl font-bold mb-4">
              Used Audi for sale in Seattle, WA
            </h1>
            <SearchResults />
            <div className="mt-8">
              <Pagination
                currentPage={currentPage}
                totalPages={10}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
