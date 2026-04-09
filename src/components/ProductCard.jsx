import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { ShoppingCart, Star, Eye } from 'lucide-react';

import { toast } from 'react-hot-toast';

function ProductCard({ product, viewMode }) {
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart(product));
    toast.success(`${product.title.substring(0, 20)}... added to cart!`, {
      icon: '🛒',
      style: {
        borderRadius: '1rem',
        background: '#333',
        color: '#fff',
      },
    });
  };

  if (viewMode === 'list') {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 flex items-center gap-6 hover:shadow-xl transition-all duration-300 group">
        <Link to={`/product/${product.id}`} className="w-24 h-24 flex-shrink-0 bg-white p-2 rounded-lg overflow-hidden flex items-center justify-center border border-gray-100 dark:border-gray-700 group-hover:scale-105 transition-transform duration-300">
          <img src={product.image} alt={product.title} className="max-h-full max-w-full object-contain" />
        </Link>
        <div className="flex-grow min-w-0">
          <div className="flex items-center gap-2 text-xs text-primary-600 dark:text-primary-400 font-bold uppercase tracking-wider mb-1">
            {product.category}
          </div>
          <Link to={`/product/${product.id}`} className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2 truncate hover:text-primary-600 dark:hover:text-primary-400 block transition-colors">
            {product.title}
          </Link>
          <div className="flex items-center gap-1 mb-2">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{product.rating.rate}</span>
            <span className="text-xs text-gray-500 dark:text-gray-500">({product.rating.count} reviews)</span>
          </div>
          <div className="text-2xl font-black text-gray-900 dark:text-white">
            ${product.price.toFixed(2)}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <button
            type="button"
            onClick={handleAddToCart}
            className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-lg font-bold transition-all duration-200 active:scale-95 shadow-lg shadow-primary-500/30"
          >
            <ShoppingCart className="w-5 h-5" />
            Add
          </button>
          <Link
            to={`/product/${product.id}`}
            className="inline-flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 px-6 py-2.5 rounded-lg font-bold transition-all duration-200"
          >
            <Eye className="w-5 h-5" />
            View
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-500 group relative">
      <Link to={`/product/${product.id}`} className="aspect-square p-6 bg-white overflow-hidden relative flex items-center justify-center">
        <img src={product.image} alt={product.title} className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>
      <div className="p-5 flex flex-col flex-grow">
        <div className="text-xs text-primary-600 dark:text-primary-400 font-bold uppercase tracking-wider mb-2">
          {product.category}
        </div>
        <Link to={`/product/${product.id}`} className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2 line-clamp-2 hover:text-primary-600 dark:hover:text-primary-400 min-h-[3.5rem] transition-colors">
          {product.title}
        </Link>
        <div className="flex items-center gap-1 mb-4">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{product.rating.rate}</span>
          <span className="text-xs text-gray-500 dark:text-gray-500">({product.rating.count})</span>
        </div>
        <div className="mt-auto flex items-center justify-between gap-4">
          <div className="text-2xl font-black text-gray-900 dark:text-white">
            ${product.price.toFixed(2)}
          </div>
          <button
            type="button"
            onClick={handleAddToCart}
            className="p-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-bold transition-all duration-200 active:scale-90 shadow-lg shadow-primary-500/40"
            title="Add to Cart"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
