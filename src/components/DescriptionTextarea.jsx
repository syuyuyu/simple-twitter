import styled from "styled-components";

const StyledContainer = styled.div`
  font-family: "Noto Sans TC", sans-serif;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  vertical-align: middle;
  width: 100%;
  /* height: 54px; */
  height: 100%;
  margin-bottom: 32px;
  background-color: #f5f8fa;
  border-radius: 2px;
`;


const StyledtextareaWrap = styled.div`
  display: flex;
  flex-direction: column;
  height:147px;
  background-color: #f5f8fa;

`
const StyledLabel = styled.label`
  /* font-family: "Noto Sans TC", sans-serif; */
  width: 100%;
  padding: 3px 10.5px 0;
  height: 22px;
  margin: 0 auto;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: var(--color-grayscale-dark80);
`;
const StyledTextarea = styled.textarea`
  /* font-family: "Noto Sans TC", sans-serif; */
  width: 100%;
  height: 147px;
  padding: 3px 10.5px 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  color: var(--color-grayscale-dark80);
  background-color: #f5f8fa;
  outline: none;
  border: none;
  border-bottom: 2px solid #657786;
  &:hover,
  :focus {
    border-bottom: 2px solid var(--color-secondary-blue);
  }
  &.active {
    border-bottom: 2px solid var(--color-error);
  }
`;

const StyledAlertContainer = styled.div`
  position: absolute;
  bottom: -24px;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  /* bottom:0px; */
`;
const StyledError = styled.div`
    position: absolute;
    left: 0;
    margin-top: 4px;
    height: 20px;
    line-height: 20px;
    font-size: 12px;
    font-weight: 500;
    color: var(--color-error);
`;

const StyledCount = styled.div`
  margin-top: 4px;
  height: 20px;
  line-height: 20px;
  font-size: 12px;
  font-weight: 500;
  color: var(--color-grayscale-dark80);
`;


const DescriptionTextarea = ({ type, label, value, placeholder, onChange }) => {
  return (
    <>
      <StyledContainer>
        <StyledtextareaWrap>
          <StyledLabel>{label}</StyledLabel>
          <StyledTextarea
            type={type || "text"}
            className={value.length === 50 ? "active" : ""}
            value={value}
            placeholder={placeholder}
            maxLength={160}
            onChange={(event) => onChange?.(event.target.value)}/>
        </StyledtextareaWrap>

        <StyledAlertContainer>
          {value.length === 160 ? <StyledError>字數超出上限！</StyledError> : null}
          <StyledCount>{value.length}/160</StyledCount>
        </StyledAlertContainer>
      </StyledContainer>
    </>
  );
};

export default DescriptionTextarea;
