import React from "react";
import PropTypes from "prop-types";
const Rating = ({ rating, text, color }) => {
  return (
    <div className="rating">
      <span>
        <i
          style={{ color: color }}
          className={
            rating >= 1
              ? "fas fa-star"
              : rating >= 0.5
              ? "fa fa-star-half"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color: color }}
          className={
            rating >= 2
              ? "fas fa-star"
              : rating >= 1.5
              ? "fa fa-star-half"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color: color }}
          className={
            rating >= 3
              ? "fas fa-star"
              : rating >= 2.5
              ? "fa fa-star-half"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color: color }}
          className={
            rating >= 4
              ? "fas fa-star"
              : rating >= 3.5
              ? "fa fa-star-half"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color: color }}
          className={
            rating >= 5
              ? "fas fa-star"
              : rating >= 4.5
              ? "fa fa-star-half"
              : "far fa-star"
          }
        ></i>
      </span>
      <span> {text && text} reviews</span>
    </div>
  );
};

Rating.defaultProps = {
  color: "grey",
};


export default Rating;
