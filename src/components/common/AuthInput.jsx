import styled from "styled-components";

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  vertical-align: middle;
  width: 100%;
  height: 54px;
  margin-bottom: 32px;
  background-color: #f5f8fa;
  border-radius: 2px;
`;
const StyledLabel = styled.label`
  width: 100%;
  padding: 3px 10.5px 0;
  height: 22px;
  margin: 0 auto;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: #696974;
`;
const StyledInput = styled.input`
  width: 100%;
  height: 26px;
  padding: 3px 10.5px 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  color: #696974;
  background-color: #f5f8fa;
  outline: none;
  border: none;
  border-bottom: 2px solid #657786;
  &:hover,
  :focus {
    border-bottom: 2px solid #50b5ff;
  }
`;

const StyledAlertContainer = styled.div`
  position: absolute;
  top: 54px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const StyledError = styled.div`
  margin-top: 4px;
  height: 20px;
  line-height: 20px;
  font-size: 12px;
  font-weight: 500;
  color: #fc5a5a;
`;

const StyledCount = styled.div`
  margin-top: 4px;
  height: 20px;
  line-height: 20px;
  font-size: 12px;
  font-weight: 500;
  color: #696974;
`;

const AuthInput = ({ type, label, value, placeholder, onChange }) => {
  return (
    <>
      <StyledContainer>
        <StyledLabel>{label}</StyledLabel>
        <StyledInput
          type={type || "text"}
          value={value}
          placeholder={placeholder}
          onChange={(event) => onChange?.(event.target.value)}
        />
        <StyledAlertContainer>
          <StyledError>字數超出上限！</StyledError>
          <StyledCount>50/50</StyledCount>
        </StyledAlertContainer>
      </StyledContainer>
    </>
  );
};

export default AuthInput;
