import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { selectCartItems, selectCartTotalPrice, clearCart } from '../store/cartSlice';
import { ShoppingBag, ArrowLeft, CheckCircle } from 'lucide-react';
import { toast } from 'react-hot-toast';

function CheckoutPage() {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotalPrice);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    // Simulate payment processing
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true });
      }, 1500); // Simulate a network request delay
    });
  };

  const processCheckout = async () => {
    if (cartItems.length === 0) {
      toast.error("Your cart is empty!");
      navigate('/');
      return;
    }

    toast.promise(
      handlePlaceOrder(),
      {
        loading: 'Processing your order...',
        success: 'Order placed successfully!',
        error: 'Failed to place order. Please try again.',
      }
    ).then((response) => {
      if (response.success) {
        dispatch(clearCart());
        navigate('/order-confirmation');
      }
    });
  };

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 animate-in fade-in duration-500">
        <div className="bg-primary-50 dark:bg-primary-900/20 p-8 rounded-full mb-8">
          <ShoppingBag className="w-20 h-20 text-primary-600 dark:text-primary-400" />
        </div>
        <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">Your cart is empty</h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-md mx-auto">
          Looks like you haven't added anything to your cart yet. Start shopping to checkout!
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
      <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-8">Checkout</h1>

      <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Order Summary</h2>
        
        <div className="space-y-4 mb-8">
          {cartItems.map(item => (
            <div key={item.id} className="flex justify-between items-center pb-4 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.title} className="w-16 h-16 object-contain rounded-lg border border-gray-100 dark:border-gray-700" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{item.title}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Quantity: {item.quantity}</p>
                </div>
              </div>
              <span className="font-semibold text-gray-900 dark:text-white">${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
          <span className="text-xl font-bold text-gray-900 dark:text-white">Total:</span>
          <span className="text-3xl font-black text-primary-600 dark:text-primary-400">${totalPrice.toFixed(2)}</span>
        </div>

        <button
          onClick={processCheckout}
          className="w-full mt-10 inline-flex items-center justify-center gap-3 bg-primary-600 hover:bg-primary-700 text-white px-10 py-4 rounded-2xl font-black text-lg transition-all duration-200 active:scale-95 shadow-xl shadow-primary-500/30"
        >
          <CheckCircle className="w-6 h-6" />
          Place Order
        </button>
      </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
