import React,{useState,useContext,useRef,useEffect,useMemo } from 'react'
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
import { getUser,putUser } from '../../api/user';


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
const AddphotoIcon= styled.div`
  width: 24px;
  height: 24px;
  background-size: cover;
  background-image: url(${addphotoIcon});
  cursor: pointer;
`
const CancelIcon= styled.div`
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
  const coverRef = useRef();

  const {editModal,toggleEditModal} = useContext(EditModalContext);
  const [name, setName] = useState("");
  const [intro, setIntro] = useState("");
  const [coverImg, setCoverImg] = useState(null);
  const [avatarImg, setAvatarImg] = useState(null);
  // isUpdating是否正在串API
  const [isUpdating, setIsUpdating] = useState(false);

  // name輸入input
  // const handleNameChange=(e)=>{
  //   if(isUpdating){
  //     return;
  //   }
  //   // let inputName = e.target.value || '';
  //   setName(e.target.value);
  // };

  // intro輸入input
  // const handleIntroChange=(e)=>{
  //   if(isUpdating){
  //     return;
  //   }
  //   // let inputIntro = e.target.value || '';
  //   setIntro(e.target.value);
  // };


  const handleImgChange=(e)=>{
    if(isUpdating){
      return;
    }
    const selectedFile = e.target.files[0];
    const objectUrl = URL.createObjectURL(selectedFile);
    if (e.target.id === "cover") {
      console.log('cover')
      setCoverImg(objectUrl);
    } else if (e.target.id === "avatar") {
      console.log('avatar')
      setAvatarImg(objectUrl);
    }
  };

  const handleSubmit=async()=>{
    setIsUpdating(true)
    // alert('修改資料中')
    // console.log('name',name)
    // console.log('intro',intro)
    const introduction =intro
    const cover = coverImg
    const avatar = avatarImg
    //這裡串接patch api
    const patchUser = await putUser({name,introduction,cover,avatar})
    console.log('patchUser: ',patchUser)
    setIsUpdating(false)
  };

  //刪除背景圖
  const handleCancel=()=>{
    const ans = window.confirm(`確定要移除圖片嗎`); // confirm加window
    if(ans){
      setCoverImg('')
      console.log(`setCoverImg('')`)
    }else{
      setCoverImg(coverImg)
      console.log(`setCoverImg('coverImg')`)
    }

  };


  const isValid = useMemo(() => {
    if (!name || name.length > 50) {
      return false;
    }
    if (!intro || intro.length > 160) {
      return false;
    }
    return true;
  }, [name, intro]);


  
  useEffect(()=>{
    const getUserData = async () => {
      try {
        const user = await getUser();
        setCoverImg(user?.cover);
        setAvatarImg(user?.avatar);
        setName(user?.name);
        setIntro(user?.introduction);
        console.log('EditModal useEffect getUser')
      } catch (error) {
        console.error(error);
      }
    };
    getUserData();
  }, [toggleEditModal]);
  
  
// })

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
              <StyledPublicButton 
                onClick={handleSubmit}
                disabled={!isValid}
                style={{
                  position: 'absolute',
                  right:'0',
                  }}
                  >儲存</StyledPublicButton>
            </HeaderContainer>
            
            <ImageContainer>
              {/* 背景圖 */}
                  {/* <label for={isUpdating ? "" : "cover"}> */}
              <StyledBackgroundImage style={{
                backgroundImage:`url('${coverImg}')`,
                objectFit:'contain',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'}} >
                {/* <CoverImage /> */}
                <StyledBackgroundHover>
                  <label for={"cover"}>
                    <AddphotoIcon
                      style={{marginRight:'38.5px'}}>
                    </AddphotoIcon>
                    <input
                      ref={coverRef}
                      accept="image/png, image/jpeg, image/jpg"
                      type="file"
                      id="cover"
                      onChange={(e) => handleImgChange(e, "cover")}
                      style={{
                        display: "none"
                      }}></input>
                  </label>
                  <CancelIcon onClick={handleCancel}></CancelIcon>
                </StyledBackgroundHover>
              </StyledBackgroundImage>
              {/* 大頭照 */}
              <StyledAvatarImage className='avatar' style={{backgroundImage:`url('${avatarImg}')`,objectFit:'contain',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'}}>
                <StyledBackgroundHover style={{borderRadius:'50%'}}>
                    <label for={isUpdating ? "" : "avatar"}>
                  <AddphotoIcon></AddphotoIcon>
                      {/* <img src={avatarImg} width="200px" alt="" /> */}
                      <input
                        ref={coverRef}
                        type="file"
                        id="avatar"
                        onChange={(e) => handleImgChange(e, "avatar")}
                        style={{
                          display: "none"
                        }}
                      />
                    </label>
                </StyledBackgroundHover>
              </StyledAvatarImage>
            </ImageContainer>
            
            <InputContainer>
              <AuthInput //用useReducer
                label='名稱'
                placeholder='請輸入名稱'
                value={name}
                // onChange={handleNameChange}
                onChange={(value=>isUpdating? value :setName(value))}
              />
              <StyleddescriptionTextarea>
                <DescriptionTextarea //用useReducer
                  label='介紹'
                  placeholder='自我介紹'
                  value={intro}
                  // onChange={handleIntroChange}
                  onChange={(value=>isUpdating? value :setIntro(value))}
                />
                {/* <div>{intro}</div> */}
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