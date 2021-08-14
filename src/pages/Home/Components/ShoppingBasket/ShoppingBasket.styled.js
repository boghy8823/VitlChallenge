import styled from "styled-components/macro";
import CloseIcon from "../../../../components/Icons/CloseIcon";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
`;

export const ButtonContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacings.xxxxxl || "0px"};
`;

export const FieldRow = styled.div`
  display: flex;
  margin-bottom: ${({ theme }) => theme.spacings.l || "0px"};
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 0 15px;
`;

export const StyledCloseIcon = styled(CloseIcon)`
& path {
  fill: ${({ theme }) => theme.colors.lightDark2};
}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
