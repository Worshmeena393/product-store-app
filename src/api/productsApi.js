import axios from 'axios';

const API_URL = 'https://dummyjson.com';

export const fetchProducts = async () => {
  const { data } = await axios.get(`${API_URL}/products`);
  return data.products.map(p => ({
    id: p.id,
    title: p.title,
    price: p.price,
    description: p.description,
    category: p.category,
    image: p.thumbnail,
    rating: {
      rate: p.rating,
      count: Math.floor(Math.random() * 500) + 50 // DummyJSON doesn't provide rating count
    }
  }));
};

export const fetchProductById = async (id) => {
  const { data } = await axios.get(`${API_URL}/products/${id}`);
  return {
    id: data.id,
    title: data.title,
    price: data.price,
    description: data.description,
    category: data.category,
    image: data.thumbnail,
    rating: {
      rate: data.rating,
      count: Math.floor(Math.random() * 500) + 50
    }
  };
};

export const fetchCategories = async () => {
  const { data } = await axios.get(`${API_URL}/products/categories`);
  // DummyJSON categories can be strings or objects, let's normalize to strings
  return data.map(cat => typeof cat === 'string' ? cat : cat.slug);
};

export const fetchProductsByCategory = async (category) => {
  const { data } = await axios.get(`${API_URL}/products/category/${category}`);
  return data.products.map(p => ({
    id: p.id,
    title: p.title,
    price: p.price,
    description: p.description,
    category: p.category,
    image: p.thumbnail,
    rating: {
      rate: p.rating,
      count: Math.floor(Math.random() * 500) + 50
    }
  }));
};
