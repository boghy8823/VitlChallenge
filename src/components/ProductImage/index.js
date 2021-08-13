import React from "react";
import PropTypes from "prop-types";
import { StyledImage } from "./ProductImage.styled";

const ProductImage = ({ source, width, height, name, ...props }) => {
  return (
    <StyledImage
     src={source}
     width={width}
     height={height}
     alt={name}
      {...props}
    />
  );
};

ProductImage.propTypes = {
  source: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  name: PropTypes.string,
};

ProductImage.defaultProps = {
  source: "",
  width: "",
  height: "",
  name: "",
};

ProductImage.displayName = "ProductImage";

export default ProductImage;
