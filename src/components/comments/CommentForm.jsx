// import Formulario from 'react-bootstrap/Form';
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup'
// import { useComment } from '../../hooks/useComment';
// import { useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import Button from 'react-bootstrap/Button';

// export const CommentForm = () => {
//     const {createComments, getComment} = useComment();
//     const params = useParams();
//     const [comment, setComent] = useState({
//         name: '',
//         description: '',
//         rating:'',
//     })

//     useEffect(()=>{
//         (async () => {
//             if(params.id){
//                 const comment = await getComment(params.id)
//                 setComent({
//                     name:comment.name,
//                     description:comment.description,
//                     rating:comment.rating,
//                 })
//             }
//         })();
//     },[params.id, getComment]);

//     return (
//     <>
//         <Formik 
//             initialValues={comment} 
//             validationSchema={Yup.object({
//             name:Yup.string(),
//             description: Yup.string().required("Por favor ingrese una descripción"),
//             rating:Yup.mixed().required("Por favor ingrese valoración"),
//             }
//         )}
//         onSubmit={ async (values, actions)=> {
//             await createComments(values);
//             actions.resetForm();
//         }}
//         >
//         {({handleSubmit, }) =>(
//             <Form onSubmit={handleSubmit}>
//             <Formulario.Group className="mb-3" controlId="exampleForm.ControlInput1">
//             <Formulario.Label>Nombre</Formulario.Label>
//             <Field
//                 name="name"
//                 placeholder="Ingrese Nombre"
//                 autoFocus
//             />
//             </Formulario.Group>
//             <Formulario.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//             <Formulario.Label>Comentario</Formulario.Label>
//             <Field
//                 name='description'
//                 as="textarea" rows={4} cols={60}
//                 placeholder="Ingrese el Comentario"
//             />
//             <ErrorMessage name='description'/>
//             </Formulario.Group>
//             <Formulario.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//             <Formulario.Label>Ingrese Valoración</Formulario.Label>
//             <Field
//                 name='rating'
//             />
//             <ErrorMessage name='rating'/>
//             </Formulario.Group>
//             <div className="d-grid gap-2">
//                 <Button type='submit' variant="primary" size='sm'>
//                 Enviar Comentario
//                 </Button>
//             </div>
//             </Form>
//             )}
//         </Formik>
//     </>
//     );
// }

