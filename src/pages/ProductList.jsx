import React, { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts, fetchCategories, fetchProductsByCategory } from '../api/productsApi';
import ProductCard from '../components/ProductCard';
import { useSettings } from '../context/SettingsContext';
import { Filter, RefreshCcw, Search, ArrowUpDown, SlidersHorizontal } from 'lucide-react';
import { ProductSkeleton, CategorySkeleton } from '../components/Skeleton';
import { motion, AnimatePresence } from 'framer-motion';

function ProductList() {
  const { state } = useSettings();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default'); // 'default', 'price-low', 'price-high', 'rating'

  const { data: categories, isLoading: categoriesLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  const { data: products, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['products', selectedCategory],
    queryFn: () => (selectedCategory === 'all' ? fetchProducts() : fetchProductsByCategory(selectedCategory)),
  });

  const filteredAndSortedProducts = useMemo(() => {
    if (!products) return [];

    let result = products.filter(p => 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating.rate - a.rating.rate);
        break;
      default:
        break;
    }

    return result;
  }, [products, searchQuery, sortBy]);

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-red-50 dark:bg-red-900/20 p-8 rounded-3xl max-w-md border border-red-100 dark:border-red-900/30"
        >
          <div className="bg-red-100 dark:bg-red-900/40 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <RefreshCcw className="w-8 h-8 text-red-600 dark:text-red-400" />
          </div>
          <h2 className="text-2xl font-black text-red-600 dark:text-red-400 mb-2">Failed to load products</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">{error.message || 'We encountered an error while fetching the store data.'}</p>
          <button
            onClick={() => refetch()}
            className="w-full inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-2xl font-bold transition-all duration-200 shadow-xl shadow-red-500/20 active:scale-95"
          >
            <RefreshCcw className="w-5 h-5" />
            Try Again
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4">
      <div className="space-y-10 pb-20">
      {/* Search & Sort Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm">
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-900 border-none rounded-2xl focus:ring-2 focus:ring-primary-500 transition-all dark:text-white"
          />
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 dark:bg-gray-900 rounded-2xl text-gray-500 dark:text-gray-400">
            <ArrowUpDown className="w-4 h-4" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent border-none focus:ring-0 text-sm font-bold cursor-pointer"
            >
              <option value="default">Default Sort</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Best Rating</option>
            </select>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-gray-900 dark:text-white font-black text-xl">
          <SlidersHorizontal className="w-5 h-5 text-primary-600" />
          <h2>Categories</h2>
        </div>
        
        {categoriesLoading ? (
          <CategorySkeleton />
        ) : (
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2.5 rounded-full text-sm font-bold capitalize transition-all duration-300 border ${
                selectedCategory === 'all'
                  ? 'bg-primary-600 border-primary-600 text-white shadow-xl shadow-primary-500/30 scale-105'
                  : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-primary-400 hover:text-primary-600'
              }`}
            >
              All Products
            </button>
            {categories?.slice(0, 8).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold capitalize transition-all duration-300 border ${
                  selectedCategory === cat
                    ? 'bg-primary-600 border-primary-600 text-white shadow-xl shadow-primary-500/30 scale-105'
                    : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-primary-400 hover:text-primary-600'
                }`}
              >
                {cat.replace('-', ' ')}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Product Grid/List */}
      <div className={state.viewMode === 'grid' 
        ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8" 
        : "flex flex-col gap-6"}>
        <AnimatePresence mode="popLayout">
          {isLoading ? (
            Array(8).fill(0).map((_, i) => (
              <ProductSkeleton key={i} viewMode={state.viewMode} />
            ))
          ) : filteredAndSortedProducts.length > 0 ? (
            filteredAndSortedProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard product={product} viewMode={state.viewMode} />
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <div className="bg-gray-100 dark:bg-gray-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 dark:text-white">No products found</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">Try adjusting your search or filters.</p>
            </div>
          )}
        </AnimatePresence>
      </div>
      </div>
    </div>
  );
}

export default ProductList;
