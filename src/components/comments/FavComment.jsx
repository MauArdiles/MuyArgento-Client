// import Card from 'react-bootstrap/Card';

// import { useComment } from '../../hooks/useComment'

// export const FavComment = () => {

//     const {comments} = useComment();

//   return (
//     <div style={{width:"auto", height:'fit-content'}}>
//         {comments.map((comment, idx)=>
//         comment.favComment === true ?
//             <Card key={idx} style={{ width: '18rem', alignItems: 'center', margin:'5px' }} border='primary'>
//                 <Card.Title style={{textAlign:'center'}}>{comment.name}</Card.Title>
//                 <Card.Text style={{textAlign:'center'}}>{comment.description}</Card.Text>
//                 <Card.Text style={{textAlign:'center'}}>{comment.rating}</Card.Text>
//             </Card>
//         : null
//         )}
//     </div>
//   )
// }
