import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  position: relative;
  flex-grow: 0.9;
  padding-top: 10px;
`;
const StyledTextarea = styled.textarea`
  width: 100%;
  font-size: 18px;
  line-height: 26px;
  outline: none;
  border: none;
  overflow: visible;
`;

const ContentInput = ({ value, placeholder, onChange }) => {
  return (
    <>
      <StyledContainer>
        <StyledTextarea
          type={"text"}
          value={value}
          placeholder={placeholder}
          onChange={(event) => onChange?.(event.target.value)}
        />
      </StyledContainer>
    </>
  );
};

export default ContentInput;
