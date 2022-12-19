import {createContext} from 'react';


  // const toggleEditModal = () => {
  //   //如果editModal=true ->要關掉modal
  //   if(editModal){
  //     setEditModal(!editModal);
  //     setName('');
  //     setIntro('');
  //     setCoverImg(null);
  //     setAvatarImg(null);
  //   }
  //     setEditModal(!editModal);
  // };



export const TweetModalContext = createContext(0);
export const ReplyModalContext = createContext(0);
export const EditModalContext = createContext(0);