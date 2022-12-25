import { createContext, useContext, useState } from "react";
import { postLike, postUnLike } from "../api/tweets";
import { deleteFollow, postFollowing } from "../api/user";


const defaultControlCotext = {
  handleToggleFollow: null, // 控制跟隨
  handleToggleLike: null, // 控制喜歡
};

const ControlCotext = createContext(defaultControlCotext);
export const useControl = () => useContext(ControlCotext);


export const ControlProvider = ({ children }) => {
  const [isFollow, setIsFollow] = useState(0);
  const [likeCount, setLikeCount] = useState(0);
  const [activeLike, setActiveLike] = useState(null);
  const [newUser, setNewUser] = useState(null);
  const [newTweet, setNewTweet] = useState(null);
  const userId = localStorage.getItem("userId");

return (
    <>
      <ControlCotext.Provider 
      value ={{
        isFollow,
        setIsFollow,
        activeLike,
        setActiveLike,
        likeCount,
        setLikeCount,
        newUser,
        setNewUser,
        newTweet,
        setNewTweet,
        onToggleFollow : async (targetUser) => {
          console.log(targetUser)
          if (userId === targetUser.id) {
            return;
          }
          if (!targetUser.isFollowed) {
            try {
              const res = await postFollowing(targetUser.id);
              if(res){
                return(
                  setIsFollow(isFollow+1),
                  setNewUser(res)
                )
              }
            } catch (error) {
              console.error(error);
            }
          } else {
            //取消追隨
            try {
              const res = await deleteFollow(targetUser.id);
              if(res){
                return (
                setIsFollow(isFollow-1),
                setNewTweet(res)
                )
              }
            } catch (error) {
              console.error(error);
            }
          };
        },
        // toggle Like
        onToggleLike: async (targetTweet) => {
          const UserId = localStorage.getItem("userId");
          console.log(targetTweet);
          const { id } = { ...targetTweet.User };
          if (Number(UserId) === Number(id)) {
            return;
          }
          if (targetTweet.isLiked === false) {
            try {
              const res = await postLike(targetTweet.id);
              console.log("POST 按讚", res);
              setActiveLike(true);
              setLikeCount(likeCount + 1);
              setNewTweet(res)
              return res
            } catch (error) {
              console.error(error);
            }
          } else {
            try {
              const res = await postUnLike(targetTweet.id);
              console.log("POST 取消讚", res);
              setActiveLike(false);
              setLikeCount(likeCount - 1);
              setNewTweet(res)
              return res
            } catch (error) {
              console.error(error);
            }
          }
        }

      }}
      
    >
        {children}
      </ControlCotext.Provider>
    </>
  );
};








      //   logout: () => {
      //     localStorage.removeItem("authToken");
      //     localStorage.removeItem("userId");
      //     localStorage.removeItem("role");
      //     setPayload(null);
      //     setIsAuthenticated(false);
      //   },
      // }



 
  
//   //追隨開關
//   const handleToggleFollow = async (targetUser) => {
//     const [isFollow, setIsFollow] = useState("");
//     const userId = localStorage.getItem("userId");

//     if (userId === targetUser.followingId) {
//       return;
//     }
//     //開始跟隨
//     if (!targetUser.isFollowed) {
//       try {
//         const res = await postFollowing(targetUser.followingId);
//         if(res){
//           setIsFollow(isFollow+1);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     } else {
//       //取消追隨
//       try {
//         const res = await deleteFollow(targetUser.followingId);
//         if(res){
//           setIsFollow(isFollow-1);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   };

//   export default FollowController;