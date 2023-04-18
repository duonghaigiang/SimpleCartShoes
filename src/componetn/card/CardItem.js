import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useAuth } from "../context/contextApi";
import { CSSTransition, TransitionGroup } from "react-transition-group";
CardItem.propTypes = {};
const Styled = styled.div`
  padding: 4px;

  .wrapImgG {
    margin-top: 24px;
    width: 60px;
    height: 85px;
    padding: 0 14px;
    border-radius: 50%;
    position: relative;
  }
  .imgG {
    top: 0;
    left: 0;
    margin-top: -45px;
    margin-left: -20px;
    position: absolute;
    width: 120px;
    transform: rotate(-20deg);
    transition: all 0.5s;
  }
  .imgG:hover {
    transform: rotate(0deg);
    transition: all 0.5s;
  }
  .ItemInfor {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .Item {
    display: block;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .ItemName {
    font-size: 14px;
    width: 80%;
  }
  .amount {
    display: flex;
  }
  .ItemPrice {
    font-size: 21px;
    font-weight: 700;
  }
  .remove {
    background-color: #ccc;
    padding: 4px 6px;
    border-radius: 12px;
    cursor: pointer;
  }
  .tru {
  }
  .cong,
  .tru {
    margin: 0 4px;
    padding: 4px;
    width: 12px;
    line-height: 1;
    background-color: #ccc;
    border-radius: 50%;
    cursor: pointer;
  }
`;
function CardItem(props) {
  const { cart, price, setPrice, setCart, check, setCheck } = useAuth();
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const total = cart.reduce(
      (accumulator, item) => accumulator + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
    setPrice(total);
  }, [cart, price]);
  const handelClickRemove = (id) => {
    setCheck({
      id: id,
      check: false,
    });
    const newCart = cart.filter((item) => {
      return item.id != id;
    });
    setCart(newCart);
  };
  const [amount, setAmount] = useState(1);

  const handleTru = (item) => {
    if (item.quantity > 1) {
      item.quantity--;
      setCart([...cart]);
    }
  };
  const handleCong = (item) => {
    item.quantity++;
    setCart([...cart]);
  };
  return (
    <Styled>
      <TransitionGroup component={null}>
        {cart.map((item) => (
          <CSSTransition key={item.id} timeout={500} classNames="item Item">
            <div className="ItemInfor " key={item.id}>
              <div className="wrapImgG" style={{ backgroundColor: item.color }}>
                <img src={item.image} className="imgG"></img>
              </div>
              <div className="Item">
                <div className="ItemName">{item.name}</div>
                <div className="ItemPrice">${item.price}</div>

                <div className="amount">
                  <div className="tru" onClick={() => handleTru(item)}>
                    -
                  </div>
                  {item.quantity < 1 ? (
                    <div>1</div>
                  ) : (
                    <div>{item.quantity}</div>
                  )}
                  <div className="cong" onClick={() => handleCong(item)}>
                    +
                  </div>
                </div>
              </div>

              <div
                className="remove"
                onClick={() => {
                  handelClickRemove(item.id);
                }}
              >
                xóa
              </div>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Styled>
  );
}

export default CardItem;
