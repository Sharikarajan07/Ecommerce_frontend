import { createContext, useState, useContext, useEffect } from "react";
import { useAuth } from "./AuthContext";

const CartContext = createContext();

export function CartProvider({ children }) {
  const { user } = useAuth();
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem("shopease_cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (e) {
      console.error("Failed to parse cart items from localStorage:", e);
      return [];
    }
  });

  // Save cart items to localStorage on any cart change
  useEffect(() => {
    localStorage.setItem("shopease_cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Clear cart state when user logs out
  useEffect(() => {
    if (!user) {
      setCartItems([]);
    }
  }, [user]);

  const [wishlistItems, setWishlistItems] = useState(() => {
    try {
      const savedWishlist = localStorage.getItem("shopease_wishlist");
      return savedWishlist ? JSON.parse(savedWishlist) : [];
    } catch (e) {
      console.error("Failed to parse wishlist items from localStorage:", e);
      return [];
    }
  });

  // Save wishlist items to localStorage on change
  useEffect(() => {
    localStorage.setItem("shopease_wishlist", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  // Clear wishlist state when user logs out
  useEffect(() => {
    if (!user) {
      setWishlistItems([]);
    }
  }, [user]);

  const addToCart = (product) => {
    if (!user) {
      alert("Please sign in to add items to your cart.");
      window.location.href = "/login";
      return;
    }
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id);
      if (itemExists) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, amount) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const getCartCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const toggleWishlist = (product) => {
    if (!user) {
      alert("Please sign in to like products.");
      window.location.href = "/login";
      return;
    }
    setWishlistItems((prevItems) => {
      const exists = prevItems.find((item) => item.id === product.id);
      if (exists) {
        return prevItems.filter((item) => item.id !== product.id);
      }
      return [...prevItems, product];
    });
  };

  const isInWishlist = (id) => {
    return wishlistItems.some((item) => item.id === id);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        wishlistItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        getCartCount,
        getCartTotal,
        toggleWishlist,
        isInWishlist,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
