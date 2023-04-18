import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Header from "./../layout/header/Header";
import CardItem from "./CardItem";
import { useAuth } from "../context/contextApi";

Card.propTypes = {};
const Wrapper = styled.div`
  width: 360px;
  box-shadow: 0 3.2px 2.2px rgba(0, 0, 0, 0.02),
    0 7px 5.4px rgba(0, 0, 0, 0.028), 0 12.1px 10.1px rgba(0, 0, 0, 0.035),
    0 19.8px 18.1px rgba(0, 0, 0, 0.042), 0 34.7px 33.8px rgba(0, 0, 0, 0.05),
    0 81px 81px rgba(0, 0, 0, 0.07);
  height: 600px;
  overflow: hidden;
  background-color: #fff;
  border-radius: 20px;
  z-index: 1000;
  position: relative;
  ::before {
    content: "";
    display: block;
    position: absolute;
    height: 210px;
    width: 300px;
    border-radius: 100%;
    background-color: #f6c90e;
    top: -20%;
    left: -50%;
    z-index: 0;
  }
  .wrapItem {
    padding: 20px 36px;
  }
  .WrappHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .total {
  }
  .cartItem {
  }
  .content {
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 480px;
    padding-right: 8px;
    ::-webkit-scrollbar {
      display: none;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #909090;
      border-radius: 10px;
    }
  }
`;
function Card(props) {
  const { cart, price, setPrice, setCart } = useAuth();
  return (
    <Wrapper>
      <div className="wrapItem">
        <div className="WrappHeader">
          <Header title="Your cart"></Header>
          {cart.length > 0 ? (
            <div className="total">Total: {price}</div>
          ) : (
            <div className="total">Total: 0.00</div>
          )}
        </div>
        <div className="content">
          {cart.length > 0 ? (
            <div className="cartItem">
              <CardItem></CardItem>
            </div>
          ) : (
            "Cart is empty"
          )}
        </div>
      </div>
    </Wrapper>
  );
}

export default Card;
