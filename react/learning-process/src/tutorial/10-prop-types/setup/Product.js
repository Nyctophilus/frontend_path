import React from "react";
import PropTypes from "prop-types";

const Product = ({
  price = 0,
  name = "product name",
  image = {
    url: "https://lumiere-a.akamaihd.net/v1/images/pp_thorloveandthunder_herobanner_mobile_22808_e1fcb696.jpeg?region=0,0,640,480",
  },
}) => {
  return (
    <article className="product">
      {image && <img src={image.url} alt={name} />}
      <h4>{name}</h4>
      <p>${price || 9.99}</p>
    </article>
  );
};

// Product.defaultPorps = {
//   name: "product name",
//   price: 9.99,
//   image: {
//     url: "https://lumiere-a.akamaihd.net/v1/images/pp_thorloveandthunder_herobanner_mobile_22808_e1fcb696.jpeg?region=0,0,640,480",
//   },
// };

Product.propTypes = {
  // -HL							shortcuts
  image: PropTypes.object.isRequired, //ptor
  name: PropTypes.string.isRequired, // ptsr
  price: PropTypes.number.isRequired,
};

export default Product;
