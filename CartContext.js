import { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function loadCart() {
      try {
        const storedCart = await AsyncStorage.getItem('cart');
        if (storedCart) setCartItems(JSON.parse(storedCart));
      } catch (error) {
        console.log('Ошибка загрузки корзины:', error);
      }
    }
    loadCart();
  }, []);

  useEffect(() => {
    async function saveCart() {
      try {
        await AsyncStorage.setItem('cart', JSON.stringify(cartItems));
      } catch (error) {
        console.log('Ошибка сохранения корзины:', error);
      }
    }
    saveCart();
  }, [cartItems]);

  function addToCart(product) {
    setCartItems(prev => [...prev, product]);
  }

  function removeFromCart(productId) {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  }

  function clearCart() {
    setCartItems([]);
  }

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}