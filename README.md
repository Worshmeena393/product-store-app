# Product Store App

## Project Title
Product Store App

## Short Description
This is a React-based product store application that allows users to browse products, view product details, manage a shopping cart, and proceed through a checkout process. The application demonstrates the integration of Context API + useReducer for app settings, Redux Toolkit for cart management, and React Query for efficient data fetching.

## Features

### Core Features:
*   **Product Listing:** Displays a list of products fetched from a public API.
*   **Product Details:** View detailed information for each product on a dedicated page.
*   **Shopping Cart:** Add, remove, increase, and decrease quantities of items in the cart.
*   **Cart Summary:** Shows the total number of items and the total price in the cart.
*   **Checkout Process:** A simplified checkout flow with order review and simulated payment.
*   **Order Confirmation:** Displays a confirmation message after a successful order.

### App Settings (Context API + useReducer):
*   **Dark/Light Mode Toggle:** Switch between dark and light themes for a personalized viewing experience.
*   **Grid/List View Toggle:** Change the layout of product listings between a grid and a list view.

### State Management:
*   **Context API + useReducer:** Used for managing global app settings like theme and view mode.
*   **Redux Toolkit:** Manages the shopping cart state, ensuring consistent updates across components.
*   **React Query:** Handles data fetching for products and categories, providing loading, error, and caching mechanisms.

### Enhanced Features:
*   **Persistent Cart & Theme:** Cart items and theme preference are saved in local storage.
*   **Product Search:** Search products by title or description.
*   **Category Filtering:** Filter products by various categories.
*   **Product Sorting:** Sort products by price (low to high, high to low) and rating.
*   **Toast Messages:** Provides user feedback for actions like adding items to the cart.
*   **Skeleton Loading:** Displays loading skeletons while product data is being fetched.
*   **Responsive Design:** Adapts to different screen sizes for a consistent user experience.

## Tools/Libraries Used
*   **React:** Frontend JavaScript library.
*   **Vite:** Fast build tool for modern web projects.
*   **Tailwind CSS:** Utility-first CSS framework for rapid UI development.
*   **React Router DOM:** Declarative routing for React.
*   **Redux Toolkit:** Official, opinionated, batteries-included toolset for efficient Redux development.
*   **React Query (TanStack Query):** Powerful asynchronous state management library for React.
*   **Axios:** Promise-based HTTP client for the browser and Node.js.
*   **Lucide React:** Beautifully simple and customizable open-source icons.
*   **React Hot Toast:** Declarative and customizable toast notifications.
*   **Framer Motion:** Production-ready motion library for React.

## Steps to Run the Project

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd product-store-app
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The application will typically be available at `http://localhost:5176/`.

4.  **Run Linter (Optional):**
    ```bash
    npm run lint
    ```

## Screenshots or Short Video
*(Please add screenshots or a short video demonstrating the application's features here.)*
