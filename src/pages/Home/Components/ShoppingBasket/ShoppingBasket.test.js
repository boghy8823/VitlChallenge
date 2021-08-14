import React from "react";
import { mount } from "../../../../helpers/testHelpers";
import ShoppingBasket from "./index";

const sampleProduct = [{
  "name": "Vitamin A",
  "price": 6,
  "nutrients": [
    {
      "id": "vitamin-a",
      "amount": 800
    }
  ]
}];

const defaultProps = {
  closeModal: () => {},
  isModalOpen: () => {}, 
  products: []
};

const setup = (props) =>
  mount(<ShoppingBasket {...defaultProps} {...props} />);

describe("Shopping basket component", () => {
  it("should represent the component mounted", () => {
    const { wrapper } = setup({ products: sampleProduct });

    expect(wrapper.find(ShoppingBasket)).toHaveLength(1);
  });
});
