import React, { useContext ,useState,useEffect } from "react";
import styled from "styled-components";
import {
  StyledContentContainer,
  StyledContentWrapper,
  StyledAvatarDefault,
  StyledButtonContainer,
  StyledError,
  StyledPublicButton,
} from "../common/StyledGroup";
import Swal from "sweetalert2";
import close from "../../assets/icons/close.svg";
import ReplyTweet from "../ReplyTweet";
import { ReplyModalContext } from "../../contexts/ModalContext";
import { TargetTweetContext } from "../../contexts/TweetContext";
import { createReply } from "../../api/tweets";
import { getUser } from "../../api/user";

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background: rgba(50, 50, 60, 0.4);
`;

const Content = styled.div`
  position: absolute;
  top: 56px;
  left: 50%;
  transform: translate(-57.2%, 0);
  background: var(--color-white);
  border-radius: 14px;
  max-width: 634px;
  min-width: 634px;
`;

const Close = styled.button`
  width: 24px;
  height: 24px;
  margin: 16px 15px;
  &:hover {
    cursor: pointer;
  }
  &.close {
    background-image: url(${close});
    background-size: cover;
  }
`;

const NavContainer = styled.div`
  height: 50px;
  width: 100%;
  border-bottom: 1px solid #e6ecf0;
`;
const TweetContainer = styled.div`
  width: 100%;
  
`;
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
`;

const ReplyModal = () => {
  const {replyModal,toggleReplyModal} = useContext(ReplyModalContext);
  const {targetTweet} = useContext(TargetTweetContext);
  const [inputValue,setInputValue] = useState('');
  const [isUpload,setIsUpload] = useState(false)
  const id = targetTweet.id
  const [avater,setAvatar] = useState('');

  const handleChange =(descripton)=>{
    if(isUpload){
      return
    }
    setInputValue(descripton)
  }

  const handleSubmit=async({inputValue,id})=>{
    if(isUpload){
      Swal.fire({
        title: "上傳中請稍等",
        icon: "error",
        showConfirmButton: false,
        timer: 1000,
        position: "top",
      });
    };
    if(!inputValue){
      Swal.fire({
        title: "推文不可為空白",
        icon: "error",
        showConfirmButton: false,
        timer: 1000,
        position: "top",
      });
      return;
    };
    setIsUpload(true)
      // console.log('reply modal id:',id)
      // console.log('reply modal inputValue:',inputValue)
    try{
      const comment = inputValue
      const tweetId = id
      const res = await createReply({comment,tweetId})
      // console.log('reply modal id:',id)
      // console.log('reply res:',res)
      if(res){
        await Swal.fire({
          title: "資料儲存中",
          icon: "success",
          showConfirmButton: false,
          timer: 1000,
          position: "top",
        });
      }
      toggleReplyModal()
      setIsUpload(false)
    }catch(err){
      Swal.fire({
        title: "儲存失敗",
        icon: "error",
        showConfirmButton: false,
        timer: 1000,
        position: "top",
      });
    }
  };


  useEffect(()=>{
    const getAvatar=async()=>{
      try{
        const res = await getUser()
        // console.log('getAvatar:',res.avatar)
        setAvatar(res.avatar)
      }catch(err){
        console.error('replyModal getAvatar error :',err)
      }
    }
    getAvatar();
  },[])

  return (
    <>
      {replyModal && (
        <Modal>
          <Overlay onClick={toggleReplyModal}></Overlay>
          <Content>
            <NavContainer>
              <Close className='close' onClick={toggleReplyModal}></Close>
            </NavContainer>
            <TweetContainer>
              <ReplyTweet tweet={targetTweet}/>
            </TweetContainer>
            <StyledContentContainer style={{ border: "none", height: "243px" }}>
              <StyledContentWrapper>
                <StyledAvatarDefault style={{ margin: "0px 8px 16px 16px"}}>
                  <div className='avatar'style={{backgroundImage:`url('${avater}')`,borderRadius:'50%'}}></div>
                </StyledAvatarDefault>
                <StyledContainer>
                  <StyledTextarea
                    type='text'
                    placeholder='推你的回覆'
                    value={inputValue}
                    maxLength={140}
                    onChange={(event) => handleChange?.(event.target.value)}
                  />
              </StyledContainer>
              </StyledContentWrapper>
              <StyledButtonContainer>
                <StyledError>字數不可超過140字</StyledError>
                <StyledPublicButton onClick={()=>handleSubmit({inputValue,id})}>回覆</StyledPublicButton>
              </StyledButtonContainer>
            </StyledContentContainer>
          </Content>
        </Modal>
      )}
    </>
  );
};

export default ReplyModal;


