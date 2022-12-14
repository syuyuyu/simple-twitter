import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  position: relative;
  flex-grow: 0.9;
`;
const StyledInput = styled.input`
  font-size: 18px;
  line-height: 26px;
  outline: none;
  border: none;
`;

const ContentInput = ({ type, value, placeholder, onChange }) => {
  return (
    <>
      <StyledContainer>
        <StyledInput
          type={type || "text"}
          value={value}
          placeholder={placeholder}
          onChange={(event) => onChange?.(event.target.value)}
        />
      </StyledContainer>
    </>
  );
};

export default ContentInput;
