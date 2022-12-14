import styled from "styled-components";
import {StyledAdminUserCard,StyledAdminUserBackground,StyledAdminUserAvatar,StyledName} from "./common/StyledGroup";
import likeIcom from "../icons/like.svg";
import tweetIcon from "../icons/tweet.svg";

const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 120px;
  margin-top: 16px;
`;
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  &.p{
    line-height: 26px;
  }
`;

const StyledIcon = styled.div`
  width: 24px;
  height: 24px;
  background-size: cover;
  margin-right: 9px;

  &.replyIcon {
    background-image: url(${tweetIcon});
  }
  &.likeIcon {
    background-image: url(${likeIcom});
  }
`;

const StyledUserAccount = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: var(--color-grayscale-dark70);
`;

const StyleUserCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
  position: relative;
`

const StyledCardFollow = styled.div`
  color: var(--color-dark-100);
  margin-top: 9px;
  span:nth-child(even){
  color: var(--color-secondary);
  }
  span:nth-child(2){
  margin-right:8px;
  }
`

const AdminUserCard =({user})=>{
  return (
    <>
    <StyledAdminUserCard>
      <StyledAdminUserBackground></StyledAdminUserBackground>
      <StyleUserCardContent>
        <StyledName>{'user.name'}</StyledName>
        <StyledUserAccount>@{'user.account'}</StyledUserAccount>
          <IconsContainer>
            <IconContainer>
              <StyledIcon className='replyIcon'></StyledIcon>
              <p>13</p>
            </IconContainer>
            <IconContainer>
              <StyledIcon className='likeIcon'></StyledIcon>
              <p>76</p>
            </IconContainer>
          </IconsContainer>
          <StyledCardFollow>
            <span>34個</span>
            <span>跟隨中</span>
            <span>59位</span>
            <span>跟隨者</span>
          </StyledCardFollow>
          <StyledAdminUserAvatar src={'user.img'}></StyledAdminUserAvatar>
      </StyleUserCardContent>
    </StyledAdminUserCard>
    </>
  )
}

export default AdminUserCard;