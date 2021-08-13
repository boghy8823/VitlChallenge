import styled from "styled-components/macro";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.beige};
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ direction }) => direction || "column"};
  justify-content: ${({ justify }) => justify || "flex-start"};
  align-items: ${({ align }) => align || "flex-start"};
  z-index: 1;
`;

export const Header = styled.div`
  width: 100%;
  height: 100px;
  top: 0;
  padding: 0 30px 20px;
  display: flex;
  position: fixed;
  align-items: flex-end;
  justify-content: flex-end;
  overflow:hidden;
  background: ${({ theme }) => theme.colors.white};
  z-index: 2;
`;

export const TotalItems = styled.div`
    display: block;
    width: 36px;
    height: 36px;
    z-index: 2;
    position: absolute;
    top: -9px;
    right: -9px;
    border-radius: 50%;
    background-color: red;
    line-height: 36px;
    color: white;
    overflow: hidden;
`;