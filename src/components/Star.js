import React from 'react';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Star = ({ rating }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {rating >= index + 1 ? (
          <FaStar className="icon" style={{ marginTop: 4, marginBottom: 4 }} />
        ) : rating >= number ? (
          <FaStarHalfAlt className="icon" />
        ) : (
          <AiOutlineStar className="icon" />
        )}
      </span>
    );
  });

  return (
    <div className="flex items-center gap-4 mb-4">
      <div className="flex gap-0.2rem items-center justify-start">
        {ratingStar}
      </div>
    </div>
  );
};

export default Star;
