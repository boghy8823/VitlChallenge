import React from "react";
import PropTypes from "prop-types";
import Typography from "../../components/Typography";
import Button from "../../components/Button";
import ProductImage from "../../components/ProductImage";
import product_image from "../../images/product_image.png";
import { Wrapper, StyledCloseIcon, Field, Divider } from "./ShoppingItem.styled";

const ShoppingItem = ({
  name,
  editable,
  addToBasket,
  removeFromBasket,
  loading,
  error,
}) => {
  return (
    <Wrapper>
      {editable && (
        <Field direction="row" align="flex-end" justify="flex-end">
          <Button variant="clear" onClick={removeFromBasket}><StyledCloseIcon />AA</Button>
        </Field>
      )}
      <ProductImage
        source={product_image}
        width="300"
        height="300"
        name={name}
        data-test="product-image"
      />
      <Typography color="black" variant="body2" data-test="item-name">
        {name}
      </Typography>
      <Divider />
      <Button width="170px" height="60px" onClick={addToBasket}>Add to basket</Button>
      {loading && <p>loading...</p>}
      {error && <p>error...</p>}
    </Wrapper>
  );
};

ShoppingItem.propTypes = {
  name: PropTypes.string,
  editable: PropTypes.bool,
  loading: PropTypes.bool,
  error: PropTypes.string,
  addToBasket: PropTypes.func,
  removeFromBasket: PropTypes.func,
};

ShoppingItem.defaultProps = {
  editable: false,
  addToBasket: () => {},
  removeFromBasket: () => {},
  loading: false,
  error: null,
};

export default ShoppingItem;
