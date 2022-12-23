import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  position: relative;
  flex-grow: 0.9;
  padding: 15px 0 0 8px;
  height: 100%;
`;
const StyledTextarea = styled.textarea`
  width: 100%;
  font-size: 18px;
  line-height: 26px;
  outline: none;
  border: none;
  min-height: 150px;
`;

const ContentTextarea = ({ inputValue, placeholder, onChange }) => {
  return (
    <>
      <StyledContainer>
        <StyledTextarea
          type={"text"}
          value={inputValue}
          placeholder={placeholder}
          maxLength={140}
          onChange={(event) => onChange?.(event.target.value)}
        />
      </StyledContainer>
    </>
  );
};

export default ContentTextarea;
