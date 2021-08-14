import styled from "styled-components/macro";
import CloseIcon from "../Icons/CloseIcon";

export const Container = styled.div`
  position: relative;
  padding: ${({ theme }) => theme.spacings.xl};
  background-color: ${({ theme }) => theme.colors.purpleLight30};
  border-radius: ${({ theme }) => theme.borderRadiuses.medium};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin: 10px 0;
  min-height: 185px;
  min-width: 310px;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  flex-direction: ${({ direction }) => direction || "column"};
  align-items: ${({ align }) => align || "center"};
  justify-content: ${({ justify }) => justify || "flex-start"};
  margin-right: ${({ gutterRight, theme }) =>
    theme.spacings[gutterRight] || "0px"};
  z-index: 1;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledCloseIcon = styled(CloseIcon)`
& path {
  fill: ${({ theme }) => theme.colors.lightDark2};
}
`;

export const Divider = styled.div`
  width: 70px;
  height: 2px;
  margin-top: 30px;
  margin-bottom: 25px;
  background-color:  ${({ theme }) => theme.colors.yellow};
`;