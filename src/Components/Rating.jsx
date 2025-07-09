import React from "react";  

const Rating = ({ value }) => {
  const stars = Array(5)
    .fill(0)
    .map((_, index) => (
      <span key={index} style={{ color: index < value ? "gold" : "#ccc" }}>★</span>
    ));

  return <div>{stars}</div>;
};

export default Rating;
