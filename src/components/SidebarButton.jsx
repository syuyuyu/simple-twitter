import styled from 'styled-components';

const StyledSidebarButton =styled.button`
  /* button */
  display: flex;
  width: 178px;
  height: 46px;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
  color: var(--color-white);
  background-color: var(--color-main);
  border-radius: 50px;
  cursor: pointer;
  margin-top: 24px;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
`


const SidebarButton = ({ toggleTweetModal }) => {
  return (
    <StyledSidebarButton onClick={toggleTweetModal}>
      <p>推文</p>
    </StyledSidebarButton>
  );
};

export default SidebarButton;