import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import product_image from "../../../../images/product_image.png";
import { Wrapper, Row, Container } from "./ShoppingBasket.styled";
import ProductImage from "../../../../components/ProductImage";
import Typography from "../../../../components/Typography";
import Button from "../../../../components/Button";
import Modal from "../../../../components/Modal";
import { removeFromBasket } from "../../../../store/Main";

const ShoppingBasket = ({ closeModal, isModalOpen, products }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const onRemoveFromBasket = (product) => {
    setLoading(true);
    try {
      dispatch(removeFromBasket(product));
    } catch (err) {
      setError(err?.response?.data?.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      maxWidth="475px"
      borderRadius="32px"
    >
      <Container>
        {products &&
          products.map((product, index) => (
            <Wrapper key={index}>
              <ProductImage
                source={product_image}
                width="100"
                height="100"
                name={product.name}
              />
              <Row>
                <Typography color="black" variant="body2" gutterBottom="xl">
                  {product.name}
                </Typography>
                <Button variant="clear" onClick={() => onRemoveFromBasket(product)} disabled={loading}>
                  <Typography color="red" variant="body1">
                    Remove
                  </Typography>
                </Button>
              </Row>
            </Wrapper>
          ))}
        {error && <p>There has been an error</p>}
        {loading && <p>Loading...</p>}
        {products.length === 0 && ( <Typography color="lightDark" variant="body2">There are no items in the basket</Typography>)}
      </Container>
    </Modal>
  );
};

ShoppingBasket.propTypes = {
  products: PropTypes.arrayOf({
    name: PropTypes.string,
  }),
  closeModal: PropTypes.func,
  onSubmit: PropTypes.func,
  isModalOpen: PropTypes.bool,
  inEditMode: PropTypes.bool,
};

ShoppingBasket.defaultProps = {
  closeModal: () => {},
  onSubmit: () => {},
  isModalOpen: false,
  inEditMode: false,
  products: []
};

export default ShoppingBasket;
