import styled from "styled-components";
import likeIcom from "../../assets/icons/like.svg";
import tweetIcon from "../../assets/icons/tweet.svg";
import { useAdmin } from "../../contexts/AdminContext";

const StyledAdminUserCard = styled.div`
  height: 300px;
  border-radius: 10px;
  background-color: #F6F7F8;
  /* min-width: 249px; */
  /* margin-left: 8px; */
  /* margin-right: 8px; */
`
const StyledAdminUserBackground = styled.div`
    height: 125px;
    width: 100%;
    background-color: grey;
    border-radius: 10px 10px 0 0;
    background-size:cover;
    position: relative;
`
const StyledAdminUserAvatar= styled.img`
    height:100px;
    width: 100px;
    background-color: black;
    border-radius: 50%;
    border: 3px solid var(--color-white);
    position: absolute;
    top: 0;
    transform: translateY(-105px);
    background-size:cover;
`
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
const StyledName = styled.p`
  height: 26px;
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
  color: var(--color-grayscale-dark100);
  &:hover {
    cursor: pointer;
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
  margin-top: 13px;
  span:nth-child(even){
  color: var(--color-secondary);
  }
  span:nth-child(2){
  margin-right:8px;
  }
`
const AdminUserCard =()=>{
  const { getUsers } = useAdmin();

  return (
    <>
      {getUsers?.map((user, index) => (
        <StyledAdminUserCard key={index}>
          <StyledAdminUserBackground style={{ backgroundImage: `url('${user.cover}')` }}></StyledAdminUserBackground>
          <StyleUserCardContent>
            <StyledName>{user.name}</StyledName>
            <StyledUserAccount>@{user.account}</StyledUserAccount>
            <IconsContainer>
              <IconContainer>
                <StyledIcon className='replyIcon'></StyledIcon>
                <p>{user.tweetCount}</p>
              </IconContainer>
              <IconContainer>
                <StyledIcon className='likeIcon'></StyledIcon>
                <p>{user.likeCount}</p>
              </IconContainer>
            </IconsContainer>
            <StyledCardFollow>
              <span>{user.followingCount}個</span>
              <span>跟隨中</span>
              <span>{user.followerCount}位</span>
              <span>跟隨者</span>
            </StyledCardFollow>
            <StyledAdminUserAvatar src={user.avatar}></StyledAdminUserAvatar>
          </StyleUserCardContent>
        </StyledAdminUserCard>
      ))}
    </>
  );
}

export default AdminUserCard;