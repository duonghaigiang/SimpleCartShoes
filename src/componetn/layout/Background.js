import React from "react";
import PropTypes from "prop-types";

Background.propTypes = {};

function Background({ chilrend }) {
  const scroll = () => {
    document.addEventListener("scroll", function () {
      const parallaxContainer = document.querySelector(".parallax-container");
      const parallaxBackground = document.querySelector(".parallax-background");
      const containerRect = parallaxContainer.getBoundingClientRect();

      const scrolledRatio =
        containerRect.top / (window.innerHeight - containerRect.height);
      parallaxBackground.style.transform = `translateY(${
        scrolledRatio * -50
      }%)`;
    });
  };
  scroll();
  return (
    <div>
      <div class="parallax-container">
        <div class="parallax-background"></div>
        <div class="parallax-content">{chilrend}</div>
      </div>
    </div>
  );
}

export default Background;
