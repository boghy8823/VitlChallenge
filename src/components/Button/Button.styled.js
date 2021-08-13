import styled, { css } from "styled-components";

const typeStyles = {
  primary: css`
    color: ${({ theme }) => theme.colors.lightDark};
    background-color: ${({ theme }) => theme.colors.yellow};

    &:disabled {
      background-color: ${({ theme }) => theme.colors.lightDark2};
    }

    &:hover {
      box-shadow: ${({ theme }) => theme.shadows.dp1};
      border-radius: ${({ theme }) => theme.borderRadiuses.small};
    }

    &:hover:disabled {
      background-color: ${({ theme }) => theme.colors.lightDark2};
    }

    &:focus-visible {
      box-shadow: ${({ theme }) => theme.shadows.dp1};
      border-radius: ${({ theme }) => theme.borderRadiuses.small};
    }

    &:active {
      box-shadow: ${({ theme }) => theme.shadows.dp1};
      border-radius: ${({ theme }) => theme.borderRadiuses.small};
    }
  `,
  clear: css`
    background-color: transparent;
    border: none;
    color: ${({ theme, color }) => theme.colors[color] || theme.colors.gray};
  `,
};

export const StyledButton = styled.button`
  display: flex;
  position: relative;
  height: ${({ height }) => (height || "auto")};
  width: ${({ width }) => (width || "auto")};
  padding: 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  vertical-align: middle;
  overflow: hidden;
  cursor: pointer;
  border: none;
  font-style: normal;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  line-height: 17px;
  user-select: none;
  transition: all 150ms ease;
  overflow: visible;

  ${({ variant }) => typeStyles[variant] || typeStyles.primary}

  &:disabled {
    cursor: not-allowed;
    box-shadow: none;
  }

  &:focus {
    outline: none;
  }
`;
