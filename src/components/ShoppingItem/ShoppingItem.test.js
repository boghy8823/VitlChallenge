import React from "react";
import { mount } from "../../helpers/testHelpers";
import Button from "../Button";
import ShoppingItem from "./index";

const defaultProps = {
  name: "test",
  addToBasket: () => {},
  editable: true,
  removeFromBasket: () => {},
};

const setup = (props) => mount(<ShoppingItem {...defaultProps} {...props} />);

describe("Shopping Item component", () => {
  it("should represent the component mounted", () => {
    const { wrapper } = setup();

    expect(wrapper.find(ShoppingItem)).toHaveLength(1);
  });

  it("should represent a shopping item with populated data", () => {
    const { wrapper } = setup();

    expect(wrapper.find('Typography[data-test="item-name"]').text()).toBe(
      defaultProps.name
    );
    expect(wrapper.find('ProductImage[data-test="product-image"]')).toHaveLength(1);
    expect(wrapper.find(Button)).toHaveLength(2);
  });
});
