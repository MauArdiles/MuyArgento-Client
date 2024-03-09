// import { createContext, useState, useEffect } from "react";
// import axios from "axios";
// import { createCommentsRequest} from "../api/comments.api.js";

// /*-------------------------------------------------------------------------- */
// // eslint-disable-next-line react-refresh/only-export-components
// export const CommentContext = createContext()

// // eslint-disable-next-line react/prop-types
// export const CommentProvider = ({children}) => {
//     const [comments, setComments] = useState([])

// /*------------------------------------------------------ */

// const favCommentRequest = async (id, favComm) => {
//     await axios.put(`http://localhost:5000/comments/${id}`, {
//       favComm,
//     });
//   };

// /*-------------------------------------------------------------------------- */

//     const getComments = async() => {
//         try {
//             const res = await axios.get("http://localhost:5000/comments")
//             setComments(res.data)
//         } catch (error) {
//             console.error(error)
//         }
//     }

//     const createComments = async (comment) => {
//         try {
//             const res = await createCommentsRequest(comment)
//             setComments(...comments, res.data)
//         } catch (error) {
//             console.error(error)
//         }
//     }

//     const deleteComment = async (id) =>{
//         try {
//             const res = await axios.delete("http://localhost:5000/comments/"+id)
//             if(res.status === 204){
//                 setComments(comments.filter((comments)=> comments._id !== id))
//             }
//         } catch (error) {
//             console.error(error)
//         }
//     }

//     const getComment = async (id) => {
//         try {
//             const res = await axios.get("http://localhost:5000/comments"/id)
//             return res.data
//         } catch (error) {
//             console.error(error)
//         }
//     }

//     const addFavComment = async (id) => {
//         try {
//             const commentFound = comments.find((comment) => comment._id === id);
//             await favCommentRequest(id, commentFound.favComment === false
//                 ?true
//                 :false);
//             setComments(
//                 comments.map((com) =>
//                 com._id === id
//                 ?{...com, favComment: !com.favComment}
//                 : com)
//             )
//             console.log(comments)
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     useEffect(() => {
//         getComments()
//     },[]);

//     const valorProvider = {
//         comments: comments,
//         getComments: getComments,
//         createComments: createComments,
//         deleteComment: deleteComment,
//         getComment: getComment,
//         addFavComment: addFavComment,
//     }

//     return(
//         <CommentContext.Provider value={valorProvider}>
//             {children}
//         </CommentContext.Provider>
//     )
// }
