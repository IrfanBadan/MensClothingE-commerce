import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

const login = (email, password) => {
  let role = 'user';

  if (email === 'admin@looque.com' && password === 'admin123') {
    role = 'admin';
  }

  const newUser = {
    email,
    name: email.split('@')[0],
    role
  };

  setUser(newUser);
  localStorage.setItem('user', JSON.stringify(newUser));
};


  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
