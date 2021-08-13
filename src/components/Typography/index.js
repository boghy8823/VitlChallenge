import React from "react";
import PropTypes from "prop-types";
import { StyledTypography } from "./Typography.styled";

export const variants = ["h1","h2", "body1", "body2", "button", "caption"];

const Typography = ({ component, variant, gutterBottom, gutterTop, textAlign, color, uppercase, ...props }) => {
  return (
    <StyledTypography
      as={component || "p"}
      variant={variant}
      textAlign={textAlign}
      gutterBottom={gutterBottom}
      gutterTop={gutterTop}
      uppercase={uppercase}
      color={color}
      {...props}
    />
  );
};

Typography.propTypes = {
  component: PropTypes.string,
  variant: PropTypes.oneOf(variants),
  gutterBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  gutterTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  textAlign: PropTypes.string,
  fontWeight: PropTypes.string,
  uppercase: PropTypes.bool
};

Typography.defaultProps = {
  component: "p",
  variant: "p",
  gutterBottom: 0,
  gutterTop: 0,
  textAlign: "left",
  color: "",
  fontWeight: "normal",
  uppercase: false
};

Typography.displayName = "Typography";

export default Typography;
