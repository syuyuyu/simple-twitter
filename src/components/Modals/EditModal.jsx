import React,{useState,useContext} from 'react'
import styled from "styled-components";
import {
  StyledPublicButton,
  StyledBackgroundImage,
  StyledAvatarImage,
} from "../common/StyledGroup";
import AuthInput from "../AuthInput"
import DescriptionTextarea from "../DescriptionTextarea"
import closeIcon from "../../assets/icons/close.svg"
import addphotoIcon from "../../assets/icons/addphoto.svg"
import cancelIcon from "../../assets/icons/cancel.svg"
import { EditModalContext } from "../../contexts/ModalContext";



const StyledGroupContainer = styled.div`
  max-width: 1140px;
  height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 3.5fr 1.5fr;
  gap: 24px;
`;
const StyledSectionMain = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const StyledSectionPopular = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

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
  background: rgba(49, 49, 49, 0.8);
`;

const Content = styled.div`
  position: relative;
  line-height: 1.4;
  background: var(--color-white);
  margin-top: 56px;
  width: 100%;
  border-radius: 14px;
`;

const HeaderContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  padding: 13px 15px 16px 16px;
`
const AddphotoIcon= styled.button`
  width: 24px;
  height: 24px;
  background-size: cover;
  background-image: url(${addphotoIcon});
  cursor: pointer;
`
const CancelIcon= styled.button`
  width: 24px;
  height: 24px;
  background-size: cover;
  background-image: url(${cancelIcon});
  cursor: pointer;
`
const CloseIcon= styled.button`
  width: 24px;
  height: 24px;
  background-size: cover;
  background-image: url(${closeIcon});
  cursor: pointer;
`

const ImageContainer = styled.div`
  position: relative;
  height: 275px;
`
const InputContainer = styled.div`
  padding-bottom: 40px;
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  flex-direction: column;
`
const StyledBackgroundHover = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(23, 23, 37, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`
const StyleddescriptionTextarea = styled.div``

const EditModal = () => {
  const {editModal,toggleEditModal} = useContext(EditModalContext);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  return (
    <>
      {editModal && (
        <Modal>
          <Overlay onClick={toggleEditModal}></Overlay>
    <StyledGroupContainer>
      <StyledSectionPopular></StyledSectionPopular>


      <StyledSectionMain>
          <Content>
            <HeaderContainer>
              <CloseIcon onClick={toggleEditModal}></CloseIcon>
              <h5 style={{marginLeft:'30px'}}>編輯個人資料</h5>
              <StyledPublicButton style={{
                position: 'absolute',
                right:'0',
                }}>儲存</StyledPublicButton>
            </HeaderContainer>
            
            <ImageContainer>
              {/* 背景圖 */}
              <StyledBackgroundImage>
                <StyledBackgroundHover>
                  <AddphotoIcon style={{marginRight:'38.5px'}}></AddphotoIcon>
                  <CancelIcon></CancelIcon>
                </StyledBackgroundHover>
              </StyledBackgroundImage>
              {/* 大頭照 */}
              <StyledAvatarImage className='avatar'>
                <StyledBackgroundHover style={{borderRadius:'50%'}}>
                  <AddphotoIcon></AddphotoIcon>
                </StyledBackgroundHover>
              </StyledAvatarImage>
            </ImageContainer>
            
            <InputContainer>
              <AuthInput //用useReducer
                label='名稱'
                placeholder='請輸入名稱'
                value={name}
                onChange={(nameInputValue) => setName(nameInputValue)}
              />
              <StyleddescriptionTextarea>
                <DescriptionTextarea //用useReducer
                  label='名稱'
                  placeholder='自我介紹'
                  value={content}
                  onChange={(contentInputValue) => setContent(contentInputValue)}
                />
              </StyleddescriptionTextarea>

            </InputContainer>
          </Content>
        </StyledSectionMain>

      <StyledSectionPopular></StyledSectionPopular>
    </StyledGroupContainer>
        </Modal>
      )}
    </>
  );
};

export default EditModal;