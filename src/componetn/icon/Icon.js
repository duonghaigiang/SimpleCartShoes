import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

Icon.propTypes = {};
const Styled = styled.div`
  img {
    width: 32px;
    background-color: #f6c90e;
    color: #303841;
    padding: 6px;
    border-radius: 50%;
  }
`;
function Icon(props) {
  return (
    <Styled>
      <img
        src="https://raw.githubusercontent.com/GoldenOwlAsia/webdev-intern-assignment/06fbfd8575545f69163d6f630097b077dcde74b5/app/assets/check.png"
        alt=""
      />
    </Styled>
  );
}

export default Icon;
