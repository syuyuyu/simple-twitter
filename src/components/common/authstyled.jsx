import styled from "styled-components";
import logo from "../../icons/logo.svg";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 356px;
  height: 100vh;
  margin: 0 auto;
  padding-top: 64px;
`;

const StyleLogo = styled.div`
  width: 50px;
  height: 50px;
  margin-bottom: 24px;
  .logo-icon {
    width: 40px;
    height: 40px;
    background-image: url(${logo});
    background-size: cover;
  }
`;

const H3Title = styled.h3`
  /* font-family: "Noto Sans TC", sans-serif; */
  font-size: 28px;
  font-weight: 700;
  line-height: 26px;
  color: var(--color-grayscale-dark100);
  margin-bottom: 40px;
`;

const StyledButton = styled.button`
  border-radius: 30px;
  background-color: var(--color-main);
  border: none;
  color: var(--color-white);
  min-width: 356px;
  height: 46px;
  font-family: "Noto Sans TC", sans-serif;
  font-size: 20px;
  font-weight: 400;
  padding: 8px 0;
  margin-top: 2px;

  &:hover {
    cursor: pointer;
  }
`;

const StyledLinkText = styled.div`
  font-family: "Noto Sans TC", sans-serif;
  color: var(--color-primary);
  font-size: 16px;
  font-weight: 400;
  margin-top: 22px;
  border-bottom: 1px solid var(--color-primary);
  &:hover {
    cursor: pointer;
  }
`;

const StyledDot = styled.div`
  font-family: "Noto Sans TC", sans-serif;
  color: var(--color-grayscale-dark100);
  font-size: 16px;
  font-weight: 400;
  margin: 22px 12px 0;
`;

const StyledLinkTextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
export {
  StyledContainer as AuthContainer,
  StyleLogo as LogoStyle,
  H3Title as TitleH3,
  StyledButton as AuthButton,
  StyledLinkText as AuthLinkText,
  StyledDot as AuthDot,
  StyledLinkTextContainer as LinkTextContainer,
};
