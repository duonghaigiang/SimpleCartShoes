import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import shoes from "../../data/shoes";
const AuthContext = createContext();
function AuthContextProvider({ children }) {
  const [check, setCheck] = useState([]);
  const [data, setData] = useState(shoes.shoes);
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0.0);
  const values = {
    data,
    setData,
    cart,
    setCart,
    price,
    setPrice,
    check,
    setCheck,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}
function useAuth() {
  const context = useContext(AuthContext);
  if (typeof context === "undefined") throw new Error("Error");
  return context;
}
export { AuthContextProvider, useAuth };
