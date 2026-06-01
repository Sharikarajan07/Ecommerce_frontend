import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem("shopease_user");
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (e) {
      console.error("Failed to parse user from localStorage:", e);
      return null;
    }
  });

  const [accounts, setAccounts] = useState(() => {
    try {
      const savedAccounts = localStorage.getItem("shopease_accounts");
      return savedAccounts ? JSON.parse(savedAccounts) : [];
    } catch (e) {
      console.error("Failed to parse accounts from localStorage:", e);
      return [];
    }
  });

  const login = (email, password) => {
    const existingAccount = accounts.find(
      (acc) => acc.email.toLowerCase() === email.toLowerCase()
    );

    if (!existingAccount) {
      return { success: false, message: "Account does not exist. Please sign up first." };
    }

    if (existingAccount.password !== password) {
      return { success: false, message: "Incorrect password. Please try again." };
    }

    const loggedInUser = {
      name: existingAccount.name,
      email: existingAccount.email,
    };
    setUser(loggedInUser);
    localStorage.setItem("shopease_user", JSON.stringify(loggedInUser));
    return { success: true };
  };

  const signup = (name, email, password) => {
    const emailExists = accounts.some(
      (acc) => acc.email.toLowerCase() === email.toLowerCase()
    );

    if (emailExists) {
      return { success: false, message: "An account with this email already exists." };
    }

    const newAccount = { name, email, password };
    const updatedAccounts = [...accounts, newAccount];
    setAccounts(updatedAccounts);
    localStorage.setItem("shopease_accounts", JSON.stringify(updatedAccounts));

    const loggedInUser = { name, email };
    setUser(loggedInUser);
    localStorage.setItem("shopease_user", JSON.stringify(loggedInUser));
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("shopease_user");
    localStorage.removeItem("shopease_cart");
    localStorage.removeItem("shopease_wishlist");
  };

  return (
    <AuthContext.Provider value={{ user, accounts, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
