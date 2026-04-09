import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { fetchProductById } from '../api/productsApi';
import { addToCart } from '../store/cartSlice';
import { ShoppingCart, ArrowLeft, Star, Heart, Share2 } from 'lucide-react';

import { toast } from 'react-hot-toast';

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success('Added to cart!', {
      icon: '🛍️',
    });
  };

  const { data: product, isLoading, isError, error } = useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProductById(id),
  });

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        <p className="text-gray-600 dark:text-gray-400 font-medium">Fetching details...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-2xl max-w-md">
          <h2 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-2">Oops! Something went wrong</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">{error.message || 'We could not load the product details. Please try again later.'}</p>
          <Link to="/" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 py-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-6xl mx-auto">
      <Link to="/" className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 font-bold mb-8 transition-colors group">
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        Back to All Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Product Image */}
        <div className="bg-white p-12 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm flex items-center justify-center relative overflow-hidden group">
          <img src={product.image} alt={product.title} className="max-h-[500px] max-w-full object-contain group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <button className="p-2.5 bg-white/80 dark:bg-gray-800/80 backdrop-blur rounded-full shadow-md hover:text-red-500 transition-colors">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-2.5 bg-white/80 dark:bg-gray-800/80 backdrop-blur rounded-full shadow-md hover:text-primary-500 transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col space-y-6">
          <div className="space-y-2">
            <span className="text-primary-600 dark:text-primary-400 font-bold uppercase tracking-widest text-sm">
              {product.category}
            </span>
            <h1 className="text-4xl font-black text-gray-900 dark:text-white leading-tight">
              {product.title}
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center bg-yellow-400/10 text-yellow-600 dark:text-yellow-400 px-3 py-1 rounded-full font-bold">
              <Star className="w-4 h-4 fill-current mr-1" />
              {product.rating.rate}
            </div>
            <span className="text-gray-500 dark:text-gray-400 font-medium">
              Based on {product.rating.count} reviews
            </span>
          </div>

          <div className="text-4xl font-black text-gray-900 dark:text-white py-4 border-y border-gray-100 dark:border-gray-800">
            ${product.price.toFixed(2)}
          </div>

          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            {product.description}
          </p>

          <div className="flex items-center gap-4 pt-8">
            <button
              type="button"
              onClick={handleAddToCart}
              className="flex-grow flex items-center justify-center gap-3 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-2xl font-black text-lg transition-all duration-200 active:scale-95 shadow-xl shadow-primary-500/40"
            >
              <ShoppingCart className="w-6 h-6" />
              Add to Cart
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-12">
            <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-800">
              <div className="text-xs text-gray-500 dark:text-gray-400 uppercase font-bold tracking-wider mb-1">Shipping</div>
              <div className="text-gray-800 dark:text-gray-200 font-bold">Free Worldwide</div>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-800">
              <div className="text-xs text-gray-500 dark:text-gray-400 uppercase font-bold tracking-wider mb-1">Returns</div>
              <div className="text-gray-800 dark:text-gray-200 font-bold">30-day Policy</div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default ProductDetails;
