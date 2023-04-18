import React, { useState } from "react";
import PropTypes from "prop-types";
import Header from "../layout/header/Header";
import styled from "styled-components";
import Item from "./../item/Item";
import shoes from "../../data/shoes";
import { useAuth } from "../context/contextApi";

Product.propTypes = {};
const Wrapper = styled.div`
  width: 360px;
  overflow: hidden;
  box-shadow: 0 3.2px 2.2px rgba(0, 0, 0, 0.02),
    0 7px 5.4px rgba(0, 0, 0, 0.028), 0 12.1px 10.1px rgba(0, 0, 0, 0.035),
    0 19.8px 18.1px rgba(0, 0, 0, 0.042), 0 34.7px 33.8px rgba(0, 0, 0, 0.05),
    0 81px 81px rgba(0, 0, 0, 0.07);
  height: 600px;
  background-color: #fff;
  border-radius: 20px;
  z-index: 1000;
  position: relative;
  ::before {
    content: "";
    display: block;
    position: absolute;
    width: 300px;
    height: 210px;
    border-radius: 100%;
    background-color: #f6c90e;
    top: -20%;
    left: -50%;
    z-index: 0;
  }

  .content {
    max-height: 470px;
    overflow-y: auto;
    overflow-x: hidden;
    z-index: 1000;
    ::-webkit-scrollbar {
      display: none;
    }
  }
  .wrapItem {
    padding: 20px 36px;
    z-index: 1000;
  }
  .title {
    color: #303841;
    z-index: 10000;
  }
`;
function Product({ childrend }) {
  const { data } = useAuth();
  return (
    <Wrapper>
      <div className="wrapItem">
        <Header title="Our Products"></Header>
        <div className="content">
          {data.map((item) => (
            <div key={item.id}>
              <Item
                img={item.image}
                title={item.name}
                description={item.description}
                price={item.price}
                item={item}
                color={item.color}
              ></Item>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default Product;
