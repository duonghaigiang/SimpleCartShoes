import logo from "./logo.svg";
import "./App.css";
import Background from "./componetn/layout/Background";
import Product from "./componetn/product/Product";
import Card from "./componetn/card/Card";
import { AuthContextProvider } from "./componetn/context/contextApi";
import styled, { keyframes } from "styled-components";

function App() {
  return (
    <AuthContextProvider>
      <Product></Product>
      <Card></Card>
    </AuthContextProvider>
  );
}

export default App;
