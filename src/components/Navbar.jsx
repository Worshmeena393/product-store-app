import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ShoppingCart, Sun, Moon, LayoutGrid, List } from 'lucide-react';
import { useSettings } from '../context/SettingsContext';
import { selectCartTotalCount } from '../store/cartSlice';

function Navbar() {
  const { state, dispatch } = useSettings();
  const cartItemCount = useSelector(selectCartTotalCount);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary-600 dark:text-primary-400">
          StoreApp
        </Link>

        <div className="flex items-center gap-4">
          {/* View Mode Toggle */}
          <button
            onClick={() => dispatch({ type: 'SET_VIEW_MODE', payload: state.viewMode === 'grid' ? 'list' : 'grid' })}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            title={`Switch to ${state.viewMode === 'grid' ? 'List' : 'Grid'} view`}
          >
            {state.viewMode === 'grid' ? (
              <List className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            ) : (
              <LayoutGrid className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            )}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => dispatch({ type: 'TOGGLE_THEME' })}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {state.theme === 'light' ? (
              <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            ) : (
              <Sun className="w-5 h-5 text-gray-300" />
            )}
          </button>

          {/* Cart Link */}
          <Link to="/cart" className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <ShoppingCart className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
