import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
  removeFromCart, 
  increaseQuantity, 
  decreaseQuantity, 
  clearCart, 
  selectCartItems, 
  selectCartTotalCount, 
  selectCartTotalPrice 
} from '../store/cartSlice';
import { ShoppingCart, Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';

function CartPage() {
  const cartItems = useSelector(selectCartItems);
  const totalCount = useSelector(selectCartTotalCount);
  const totalPrice = useSelector(selectCartTotalPrice);
  const dispatch = useDispatch();

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 animate-in fade-in duration-500">
        <div className="bg-primary-50 dark:bg-primary-900/20 p-8 rounded-full mb-8">
          <ShoppingBag className="w-20 h-20 text-primary-600 dark:text-primary-400" />
        </div>
        <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">Your cart is empty</h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-md mx-auto">
          Looks like you haven't added anything to your cart yet. Explore our amazing products!
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-3 bg-primary-600 hover:bg-primary-700 text-white px-10 py-4 rounded-2xl font-black text-lg transition-all duration-200 active:scale-95 shadow-xl shadow-primary-500/30"
        >
          <ArrowLeft className="w-5 h-5" />
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="px-4 py-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-12">
        <h1 className="text-4xl font-black text-gray-900 dark:text-white flex items-center gap-4">
          Shopping Cart
          <span className="text-lg font-bold text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
            {totalCount} items
          </span>
        </h1>
        <button
          onClick={() => dispatch(clearCart())}
          className="text-red-500 hover:text-red-600 font-bold flex items-center gap-2 group transition-colors"
        >
          <Trash2 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          Clear Cart
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Cart Items List */}
        <div className="lg:col-span-2 space-y-6">
          {cartItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 p-6 flex flex-col sm:flex-row items-center gap-8 group hover:shadow-xl transition-all duration-300"
            >
              <div className="w-32 h-32 flex-shrink-0 bg-white p-4 rounded-2xl border border-gray-50 dark:border-gray-700 overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform">
                <img src={item.image} alt={item.title} className="max-h-full max-w-full object-contain" />
              </div>
              
              <div className="flex-grow text-center sm:text-left">
                <div className="text-xs text-primary-600 dark:text-primary-400 font-bold uppercase tracking-wider mb-1">
                  {item.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-1">
                  {item.title}
                </h3>
                <div className="text-2xl font-black text-gray-900 dark:text-white mb-4">
                  ${item.price.toFixed(2)}
                </div>
              </div>

              <div className="flex flex-col items-center sm:items-end gap-4">
                <div className="flex items-center gap-4 bg-gray-50 dark:bg-gray-700/50 p-2 rounded-2xl border border-gray-100 dark:border-gray-700">
                  <button
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    className="p-2 hover:bg-white dark:hover:bg-gray-600 rounded-xl transition-colors shadow-sm disabled:opacity-30"
                    disabled={item.quantity <= 1}
                  >
                    <Minus className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                  </button>
                  <span className="w-8 text-center font-black text-xl text-gray-900 dark:text-white">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => dispatch(increaseQuantity(item.id))}
                    className="p-2 hover:bg-white dark:hover:bg-gray-600 rounded-xl transition-colors shadow-sm"
                  >
                    <Plus className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                  </button>
                </div>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-gray-400 hover:text-red-500 font-bold transition-colors flex items-center gap-2"
                >
                  <Trash2 className="w-4 h-4" />
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-gray-900 dark:bg-gray-800 text-white rounded-3xl p-8 sticky top-24 shadow-2xl">
            <h2 className="text-2xl font-black mb-8">Order Summary</h2>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-gray-400 font-medium">
                <span>Subtotal</span>
                <span className="text-white">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-400 font-medium">
                <span>Shipping</span>
                <span className="text-green-400 font-bold uppercase text-sm">Free</span>
              </div>
              <div className="flex justify-between text-gray-400 font-medium">
                <span>Tax</span>
                <span className="text-white">$0.00</span>
              </div>
            </div>
            <div className="pt-8 border-t border-gray-800 dark:border-gray-700 mb-10">
              <div className="flex justify-between items-end">
                <span className="text-gray-400 font-bold uppercase tracking-widest text-xs">Total Amount</span>
                <span className="text-4xl font-black text-primary-600 dark:text-white">${totalPrice.toFixed(2)}</span>
              </div>
            </div>
            <Link to="/checkout" className="w-full bg-primary-600 hover:bg-primary-700 text-white py-5 rounded-2xl font-black text-xl transition-all duration-200 active:scale-95 shadow-xl shadow-primary-500/30">
              Checkout Now
            </Link>
            <div className="mt-6 text-center text-xs text-gray-500 font-bold uppercase tracking-widest">
              Secure SSL Encryption
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default CartPage;
