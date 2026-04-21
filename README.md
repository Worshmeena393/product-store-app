# 🛍️ Product Store App

## 📖 Project Overview

This is a React-based Product Store application that allows users to browse products, view detailed product information, manage a shopping cart, and complete a checkout process.

The application demonstrates modern React development practices by integrating:

* **Context API + useReducer** for global app settings
* **Redux Toolkit** for cart state management
* **React Query (TanStack Query)** for efficient data fetching and caching

---

## ✨ Features

### 🔹 Core Features

* Product listing from a public API
* Product details page
* Add, remove, and update cart items
* Cart summary (total items and total price)
* Checkout process with order review
* Order confirmation page

---

### 🔹 App Settings (Context API + useReducer)

* Dark / Light mode toggle
* Grid / List view toggle

---

### 🔹 State Management

* Context API + useReducer → UI settings (theme, layout)
* Redux Toolkit → Cart state, reducers, and actions
* React Query → API calls with caching, loading, and error handling

---

### 🔹 Enhanced Features

* Persistent cart and theme using localStorage
* Product search (title/description)
* Category filtering
* Sorting (price and rating)
* Toast notifications
* Skeleton loading UI
* Fully responsive design (mobile, tablet, desktop)
* Smooth animations (Framer Motion)

---

## 🛠️ Tools & Libraries

* React
* Vite
* Tailwind CSS
* React Router DOM
* Redux Toolkit
* React Query (TanStack Query)
* Axios
* Lucide React
* React Hot Toast
* Framer Motion

---

##  Components & Pages

* **Navbar** → Navigation bar with cart and theme toggle
* **ProductList** → Displays products with search, filter, sort, and skeleton loaders
* **ProductDetails** → Detailed product view with rating and add-to-cart
* **CartPage** → Manage cart (increase, decrease, remove, clear)
* **CheckoutPage** → Simulated checkout process
* **OrderConfirmation** → Displays success message after order
* **Skeletons** → Loading placeholders
* **SettingsContext** → Context API + useReducer for UI settings
* **cartSlice** → Redux Toolkit slice for cart logic
* **store** → Redux store with localStorage persistence
* **App.jsx** → Root integration (Router + Providers + Toaster)

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Worshmeena393/product-store-app
cd product-store-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

The app will be available at:
 http://localhost:5175/

---

### 4. Build for Production

```bash
npm run build
```

---

### 5. Run Linter (Optional)

```bash
npm run lint
```

---

 Screenshots

Screenshots are included for:

* Mobile view
* Tablet view
* Desktop view

---

 Learning Outcomes

Through this project, I learned:

* Advanced React state management
* API handling with caching (React Query)
* Building reusable components
* Creating responsive and user-friendly UI

---

 Author

**Worshmeena Qayoumi**
React Development Student
