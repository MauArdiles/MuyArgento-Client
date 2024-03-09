// import { useComment } from "../../hooks/useComment"
// import Card from 'react-bootstrap/Card';
// import toast from 'react-hot-toast' 
// import Button from 'react-bootstrap/Button';

// export const Comments = () => {
//   const {comments, deleteComment, addFavComment} = useComment()

//   const handleDeleteComment = (id) =>{
//     toast((t)=> (
//       <div>
//         <p>Seguro que quieres eliminar el comentario?</p>
//         <div className="d-grid gap-2">
//           <Button variant="primary" size="sm" onClick={()=> {
//             deleteComment(id);
//             toast.dismiss(t.id)
//           }}>
//             Eliminar Comentario
//           </Button>
//           <Button variant="secondary" size="sm" onClick={()=> {toast.dismiss(t.id)}}>
//             Cancelar
//           </Button >
//         </div>
//       </div>
//     ))
//   }

//   const handleFav = async (id) => {
//     await addFavComment(id)
//   };

//   return (
//     <div style={{display:'flex', flexFlow:'row', justifyContent:'center', margin:'5px'}}>    
//     {comments.map((comment, idx) =>  
//     <Card key={idx} style={{ width: '18rem' }}>
//       <Card.Body style={{display:'flex', flexFlow:'column', justifyContent:'center'}}>
//         <Card.Title className="text-center">{comment.name}</Card.Title>
//         <Card.Subtitle className="mb-2 text-muted text-center">{comment.rating}</Card.Subtitle>
//         <Card.Text>
//           {comment.description}
//         </Card.Text>
//         <Button variant="danger" className="text-center" size="sm"
//         onClick={(e) => {
//           e.stopPropagation();
//           handleDeleteComment(comment._id)
//         }}>
//           Eliminar Comentario
//         </Button>
//         <Button variant="success" className="text-center" size="sm" style={{margin:'2px'}}
//         onClick={()=> handleFav(comment._id)}
//         >
//         {comment.favComment === false 
//         ?'Agregar a Destacados' 
//         :'Retirar de Destacados'}
//         </Button>
//       </Card.Body>
//     </Card>
//     )}
//     </div>
//     )
//   }
