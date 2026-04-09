import React from 'react';

export const ProductSkeleton = ({ viewMode }) => {
  if (viewMode === 'list') {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 flex items-center gap-6 animate-pulse">
        <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-lg" />
        <div className="flex-grow space-y-3">
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-20" />
          <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4" />
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-24" />
        </div>
        <div className="space-y-2">
          <div className="h-10 w-24 bg-gray-200 dark:bg-gray-700 rounded-lg" />
          <div className="h-10 w-24 bg-gray-200 dark:bg-gray-700 rounded-lg" />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col animate-pulse">
      <div className="aspect-square bg-gray-200 dark:bg-gray-700" />
      <div className="p-5 space-y-4">
        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-20" />
        <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-full" />
        <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-2/3" />
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3" />
        <div className="flex justify-between items-center pt-2">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-20" />
          <div className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export const CategorySkeleton = () => (
  <div className="flex flex-wrap gap-3 animate-pulse">
    {[1, 2, 3, 4, 5, 6].map((i) => (
      <div key={i} className="h-10 w-28 bg-gray-200 dark:bg-gray-700 rounded-full" />
    ))}
  </div>
);
