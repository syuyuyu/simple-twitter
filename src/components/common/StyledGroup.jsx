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

const StyledSidebarContainer = styled.div`
  background: #f00;
`
const StyledMainCotainer = styled.div`
  background: #0f0;
`;
const StyledPopularContainer = styled.div`
  background: #00f;
`;
export {
  StyledGroupContainer as GroupContainer,
  StyledSidebarContainer as SidebarContainer,
  StyledMainCotainer as MainCotainer,
  StyledPopularContainer as PopularContainer,
};
