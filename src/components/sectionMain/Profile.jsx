import React, { useContext, useEffect, useState } from "react";
import { EditModalContext } from "../../contexts/ModalContext";
import { Outlet, useNavigate } from "react-router-dom";
import {
  StyledMainContainer,
  StyledHeader,
  StyledTitleContainer,
  StyledBackIcon,
  StyledTitleH5,
  StyledTitleTweetCount,
  StyledProfileContainer,
  StyledBackgroundImage,
  StyledEditContainer,
  StyledPublicButton,
  StyledAvatarImage,
  StyledTitleWrapper,
  StyledInfoWrapper,
  StyledAccount,
  StyledContent,
  StyledFollowsWrapper,
  StyledFollowWrapper,
  StyledTweetsNavbar,
  StyledTweetsNavbarWrapper,
} from "../common/StyledGroup";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import EditModal from "../Modals/EditModal";
import { useAuth } from "../../contexts/AuthContext";
import { getReplys } from "../../api/tweets";
import { LikeTweetContext, OtherUserContext, UserReplyContext, UserTweetContext } from "../../contexts/TweetContext";
import { getLikeTweets, getUserTweets } from "../../api/tweets";
import { getUser, putUser } from "../../api/user";
import Swal from "sweetalert2";

const NavLink = styled(Link)`
  height: 52px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-line-default);
  &:hover {
    cursor: pointer;
    border-bottom: 2px solid var(--color-main);
    color: var(--color-main);
  }
  &.active {
    border-bottom: 2px solid var(--color-main);
    color: var(--color-main);
  }
`;

const Profile = () => {
  const { toggleEditModal } = useContext(EditModalContext);
  const navigate = useNavigate();
  const { isAuthenticated, currentMember } = useAuth();
  const { setUserReplys } = useContext(UserReplyContext);
  const { setLikeTweets } = useContext(LikeTweetContext);
  const { otherUser, setOtherUser } = useContext(OtherUserContext);
  const { setUserTweets } = useContext(UserTweetContext);

  const [coverPre, setCoverPre] = useState(otherUser.cover);
  const [avatarPre, setAvatarPre] = useState(otherUser.avatar);
  const [coverImg, setCoverImg] = useState(null);
  const [avatarImg, setAvatarImg] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [name, setName] = useState(otherUser.name);
  const [intro, setIntro] = useState(otherUser.introduction);
  const [noCover,setNoCover]= useState(false);
  
  //????????????
  const handleImgChange=(e)=>{
    if(isUpdating){
      return;
    }
    const selectedFile = e.target.files[0];
    const objectUrl = window.URL.createObjectURL(selectedFile);
    if (e.target.id === "cover") {
      setCoverImg(selectedFile);
      setCoverPre(objectUrl)
    } else if (e.target.id === "avatar") {
      setAvatarImg(selectedFile);
      setAvatarPre(objectUrl);
    }
  };

//???????????????
  const handleCancel=()=>{
    Swal.fire({
      title: '????????????',
      text: "?????????????????????????",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '??????'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          '?????????',
          'success'
        )
        setCoverPre('')
        setNoCover(1)
      }
    })
  };

  //??????????????????
  const handleSubmit=async()=>{
    if(!name){
      Swal.fire({
        title: "?????????????????????",
        icon: "error",
        showConfirmButton: false,
        timer: 1000,
        position: "top",
      });
      return;
    };
    try{
      // const newCover = coverImg? coverImg : coverPre
      const cover = noCover===1? 'delete': coverImg
      const formData = new FormData()
      formData.append('name',name)
      formData.append('introduction',intro)
      formData.append('avatar',avatarImg)
      formData.append('cover',cover)
      setNoCover(0)

      setIsUpdating(true)
      const res = await putUser({formData})
      if(res){
        await Swal.fire({
          title: "???????????????",
          icon: "success",
          showConfirmButton: false,
          timer: 1000,
          position: "top",
        });
        toggleEditModal()
        setIsUpdating(false)
        return;
      }
    }catch(err){
      setNoCover(false)
      console.error('editModal faild :',err) 
    }
  };

  //GET ????????????
  useEffect(() => {
    const getUserAsync = async () => {
      try {
        const user = await getUser();
        setOtherUser(user);
        return;
      } catch (error) {
        console.error(error);
      }
    };
    getUserAsync();
    return () => {};
  }, [setOtherUser,setCoverPre,setCoverImg]);

  //??????????????????????????????
  useEffect(() => {
    const getUserTweetsAsync = async () => {
      try {
        const userTweets = await getUserTweets();
        setUserTweets(userTweets.map((userTweet) => ({ ...userTweet })));
        return;
      } catch (error) {
        console.error(error);
      }
    };
    getUserTweetsAsync();
    return () => {};
  }, [setUserTweets]);

  //?????????????????????
  useEffect(() => {
    const getUserReplysAsync = async () => {
      try {
        const userReplys = await getReplys();
        setUserReplys(userReplys.map((tweet) => ({ ...tweet })));
        return;
      } catch (error) {
        console.error(error);
      }
    };
    getUserReplysAsync();
    return () => {};
  }, [setUserReplys]);
  //???????????????
  useEffect(() => {
    const getLikeTweetsAsync = async () => {
      try {
        const likeTweets = await getLikeTweets();
        setLikeTweets(likeTweets.map((tweet) => ({ ...tweet })));
        return;
      } catch (error) {
        console.error(error);
      }
    };
    getLikeTweetsAsync();
    return () => {};
  }, [setLikeTweets]);

  //????????????
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [navigate, isAuthenticated]);

  return (
    <>
      <StyledMainContainer>
        <StyledHeader style={{ border: "0px" }}>
          <StyledTitleContainer>
            <StyledBackIcon className='backIcon' onClick={() => navigate(-1)}></StyledBackIcon>
            <StyledTitleWrapper>
              <StyledTitleH5>{currentMember?.name}</StyledTitleH5>
              <StyledTitleTweetCount>{otherUser.tweetCount}??????</StyledTitleTweetCount>
            </StyledTitleWrapper>
          </StyledTitleContainer>
        </StyledHeader>
        <StyledProfileContainer>
          { noCover === false ? (
            <StyledBackgroundImage
              className='cover'
              style={{ backgroundImage: `url('${coverPre}')` }}
            ></StyledBackgroundImage>
          ) : (
            <StyledBackgroundImage className='cover'></StyledBackgroundImage>
          )}
          <StyledAvatarImage
            className='avatar'
            style={{ backgroundImage: `url('${avatarPre}')` }}
          ></StyledAvatarImage>

          <StyledEditContainer>
            <StyledPublicButton whiteMode={true} onClick={toggleEditModal}>
              ??????????????????
            </StyledPublicButton>
          </StyledEditContainer>
          <StyledInfoWrapper>
            <StyledTitleH5>{name}</StyledTitleH5>
            <StyledAccount style={{ fontSize: "14px", fontWeight: "400" }}>@{otherUser.account}</StyledAccount>
            <StyledContent>{intro}</StyledContent>
            <StyledFollowsWrapper>
              <Link to='follow/following'>
                <StyledFollowWrapper>
                  <p style={{ color: "var(--color-grayscale-dark100)" }}>{otherUser.followingCount}???</p>
                  <p>?????????</p>
                </StyledFollowWrapper>
              </Link>
              <Link to='follow/follower'>
                <StyledFollowWrapper>
                  <p style={{ color: "var(--color-grayscale-dark100)" }}>{otherUser.followerCount}???</p>
                  <p>?????????</p>
                </StyledFollowWrapper>
              </Link>
            </StyledFollowsWrapper>
          </StyledInfoWrapper>
        </StyledProfileContainer>
        <StyledTweetsNavbarWrapper>
          <StyledTweetsNavbar>
            <NavLink to='tweets'>??????</NavLink>
            <NavLink to='replys'>??????</NavLink>
            <NavLink to='likes'>???????????????</NavLink>
          </StyledTweetsNavbar>
        </StyledTweetsNavbarWrapper>
        <Outlet />
      </StyledMainContainer>
      <EditModal
        // otherUser={otherUser}
        handleImgChange={handleImgChange}
        coverPre={coverPre}
        // setCoverPre={setCoverPre}
        avatarPre={avatarPre}
        // setAvatarPre={setAvatarPre}
        // coverImg={coverImg}
        // setCoverImg={setCoverImg}
        // avatarImg={avatarImg}
        // setAvatarImg={setAvatarImg}
        isUpdating={isUpdating}
        // setIsUpdating={setIsUpdating}
        handleSubmit={handleSubmit}
        name={name}
        setName={setName}
        intro={intro}
        setIntro={setIntro}
        handleCancel={handleCancel}
      />
    </>
  );
};

export default Profile;
