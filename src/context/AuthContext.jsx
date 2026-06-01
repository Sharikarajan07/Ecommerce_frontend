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

  const login = (email, password, name = "Customer") => {
    // Simple mock auth simulation: save email as username
    const mockUser = {
      email,
      name: name || email.split("@")[0],
    };
    setUser(mockUser);
    localStorage.setItem("shopease_user", JSON.stringify(mockUser));
    return true;
  };

  const signup = (name, email, password) => {
    const mockUser = {
      name,
      email,
    };
    setUser(mockUser);
    localStorage.setItem("shopease_user", JSON.stringify(mockUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("shopease_user");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
