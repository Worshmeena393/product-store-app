import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ShoppingBag } from 'lucide-react';

function OrderConfirmation() {
  return (
    <div className="px-4 animate-in fade-in duration-500">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center min-h-[60vh] text-center">
      <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-full mb-8">
        <CheckCircle className="w-20 h-20 text-green-600 dark:text-green-400" />
      </div>
      <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">Order Placed Successfully!</h2>
      <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-md mx-auto">
        Thank you for your purchase. Your order has been confirmed and will be shipped soon.
      </p>
      <div className="flex gap-4">
        <Link 
          to="/" 
          className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl font-black text-lg transition-all duration-200 active:scale-95 shadow-xl shadow-blue-500/30"
        >
          <ShoppingBag className="w-5 h-5" />
          Continue Shopping
        </Link>
        {/* Optionally, add a link to an "Order History" page if implemented */}
        {/* <Link 
          to="/order-history" 
          className="inline-flex items-center gap-3 bg-gray-200 hover:bg-gray-300 text-gray-800 px-10 py-4 rounded-2xl font-black text-lg transition-all duration-200 active:scale-95"
        >
          View Order
        </Link> */}
      </div>
      </div>
    </div>
  );
}

export default OrderConfirmation;
