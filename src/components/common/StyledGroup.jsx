import styled from "styled-components";

const StyledGroupContainer = styled.div`
  max-width: 1140px;
  height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 3.5fr 1.5fr;
  gap: 24px;
  background: #5ff;
`;

const StyledSectionSidebar = styled.div`
  background: var(--color-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  `
const StyledSidebarContainer = styled.div`
  width: 100%;
  height : 330px;
  `
const StyleSidebarItem = styled.div`
  padding: 13px  0 0 13px;
  &:not(:nth-child(4)){
    margin-bottom: 40px;
  }
`
const StyledSidebarLogout = styled.div`
  width: 100%;
  height: 45px;
  padding:0 0 0 13px;

`

const StyledSectionMain = styled.div`
  background: #9a9a9a;
`;
const StyledSectionPopular = styled.div`
  background: #848484;
`;
export {
  StyledGroupContainer,
  StyledSectionSidebar,
  StyledSectionMain,
  StyledSectionPopular,
  StyledSidebarContainer,
  StyledSidebarLogout,
  StyleSidebarItem,
};
