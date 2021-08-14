import styled from "styled-components/macro";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 40px;
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
  padding: 0 30px 20px 65px;
  display: flex;
  position: fixed;
  align-items: flex-end;
  justify-content: space-between;
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

export const Divider = styled.div`
  width: 70px;
  height: 2px;
  margin-top: 30px;
  margin-bottom: 25px;
  background-color:  ${({ theme }) => theme.colors.yellow};
`;

export const HeadingContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;