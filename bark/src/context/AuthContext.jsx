import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Aleks", sellerStatus: true });

  const login = (userData) => {
    // Add your authentication logic here (e.g., API calls)
    setUser(userData);
  };

  const logout = () => {
    // Add your logout logic here
    setUser(null);
  };

  const changeSellerStatus = () => {
    // Add your logout logic here
    setUser((user) => ({ ...user, sellerStatus: !user.sellerStatus }));
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, changeSellerStatus }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
