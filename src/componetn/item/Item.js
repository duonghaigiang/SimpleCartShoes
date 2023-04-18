import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Icon from "./../icon/Icon";
import { useAuth } from "../context/contextApi";

Item.propTypes = {};
const Wrapper = styled.div`
  margin-top: 18px;
  margin-bottom: 18px;
  z-index: 10000;

  .wrapImg {
    cursor: pointer;
    background-color: #ccc;
    border-radius: 20px;
  }
  .img {
    width: 100%;
    transform: rotate(-20deg);
    padding: 20px 0;
  }
  .img:hover {
    transform: rotate(0);
    transition: all 0.5s;
  }
  .title {
    font-size: 20px;
    color: #303841;

    font-weight: 700;
  }
  .description {
    margin: 10px 0;
    color: #a6a6a6;
  }
  .card {
    margin-top: 20px;
  }
  .price {
    font-size: 22px;
    font-weight: 700;
    color: #303841;
  }
  .wrapFt {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .icon {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
  .add {
    background-color: #f6c90e;
    padding: 4px 4px;
    border-radius: 4px;
    font-weight: 700;
    color: #303841;
    cursor: pointer;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }
`;
function Item({ title, description, price, img, item, color }) {
  const { cart, setCart } = useAuth();

  const handleClick = (item) => {
    console.log("item", item);
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
        return [...prevCart];
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };
  const isInCart = () => {
    return cart.some((cartItem) => cartItem.id === item.id);
  };
  useEffect(() => {
    console.log("cart", cart);
  }, [cart]);
  return (
    <Wrapper>
      <div className="wrapImg" style={{ backgroundColor: color }}>
        <img className="img" src={img}></img>
      </div>
      <div className="card">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
        <div className="wrapFt">
          <div className="price">${price}</div>
          {isInCart() ? (
            <Icon className="icon" style={{ opacity: 1 }}></Icon>
          ) : (
            <div
              className="add"
              onClick={() => {
                handleClick(item);
              }}
            >
              ADD TO CARD
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
}

export default Item;
