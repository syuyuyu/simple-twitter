// // import { useState } from "react";
// // import { deleteFollow, postFollowing } from "../api/user";

// import { createContext, useContext, useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";

  
  
// //   //追隨開關
// //   const handleToggleFollow = async (targetUser) => {
// //     const [isFollow, setIsFollow] = useState("");
// //     const userId = localStorage.getItem("userId");

// //     if (userId === targetUser.followingId) {
// //       return;
// //     }
// //     //開始跟隨
// //     if (!targetUser.isFollowed) {
// //       try {
// //         const res = await postFollowing(targetUser.followingId);
// //         if(res){
// //           setIsFollow(isFollow+1);
// //         }
// //       } catch (error) {
// //         console.error(error);
// //       }
// //     } else {
// //       //取消追隨
// //       try {
// //         const res = await deleteFollow(targetUser.followingId);
// //         if(res){
// //           setIsFollow(isFollow-1);
// //         }
// //       } catch (error) {
// //         console.error(error);
// //       }
// //     }
// //   };

// //   export default FollowController;


// const initUsers = {
//   users: [],
// };

// const defaultControlCotext = {
//   handleToggleFollow: null, // 控制跟隨
//   handleToggleLike: null, // 控制喜歡
// };

// const ControlCotext = createContext(defaultControlCotext);
// export const useControl = () => useContext(ControlCotext);

// export const ControlProvider = (props) => {
//   const [isFollow, setIsFollow] = useState("");
//   const [activeLike, setActiveLike] = useState(null);
//   const userId = localStorage.getItem("userId");
  

//   const handleToggleFollow async (targetUser) => {

//       if (userId === targetUser.followingId) {
//         return;
//       }
//       //開始跟隨
//       if (!targetUser.isFollowed) {
//         try {
//           const res = await postFollowing(targetUser.followingId);
//           if(res){
//             setIsFollow(isFollow+1);
//           }
//         } catch (error) {
//           console.error(error);
//         }
//       } else {
//         //取消追隨
//         try {
//           const res = await deleteFollow(targetUser.followingId);
//           if(res){
//             setIsFollow(isFollow-1);
//           }
//         } catch (error) {
//           console.error(error);
//         }
          
//     };
//   }




//   return (
//     <ControlCotext.Provider
//       value={
//         isFollow,
//         setIsFollow,
//         activeLike,
//         setActiveLike,
//         handleToggleFollow,
//       }
//     >
//       {children}
//     </ControlCotext.Provider>
//   );
// };



//       //   logout: () => {
//       //     localStorage.removeItem("authToken");
//       //     localStorage.removeItem("userId");
//       //     localStorage.removeItem("role");
//       //     setPayload(null);
//       //     setIsAuthenticated(false);
//       //   },
//       // }



