import React, { useState, useRef } from "react";
import "./Tour.css";

const Tour = ({
  id,
  name,
  image,
  info,
  price,
  removeHandler,
}) => {
  const [readMore, setReadMore] = useState(true);

  const readMoreHandler = () => {
    setReadMore(!readMore);
  };

  return (
    <div className="tour">
      <img src={image} alt={name} />
      <div className="txt">
        <div className="info">
          <h4>{name}</h4>
          <span>${price}</span>
        </div>
        <p
          className={readMore ? "more" : "less"}
          onClick={readMoreHandler}
        >
          {readMore ? `${info.substring(0, 200)}...` : info}
        </p>

        <button className="del-btn" onClick={removeHandler}>
          Not Interested
        </button>
      </div>
    </div>
  );
};

export default Tour;
