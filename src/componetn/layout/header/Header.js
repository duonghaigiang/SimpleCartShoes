import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

Header.propTypes = {};
const Wrapper = styled.div`
  position: relative;

  .title {
    font-size: 24px;
    font-weight: 700;
    z-index: 1000;
  }
`;
function Header({ title }) {
  return (
    <Wrapper>
      <img
        src="https://raw.githubusercontent.com/GoldenOwlAsia/webdev-intern-assignment/06fbfd8575545f69163d6f630097b077dcde74b5/app/assets/nike.png"
        alt=""
        className="iconNike"
      />
      <div className="title">{title}</div>
    </Wrapper>
  );
}

export default Header;
