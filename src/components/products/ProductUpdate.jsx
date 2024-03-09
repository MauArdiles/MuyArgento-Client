// import {Formik, Form, ErrorMessage,Field} from 'formik'
// import * as Yup from 'yup'
// import {useProduct} from '../../hooks/useProduct'
// import {useNavigate, useParams} from 'react-router-dom'
// import { useEffect, useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Formulario from 'react-bootstrap/Form';
// import Spinner from 'react-bootstrap/Spinner';

// export const ProductUpdate =()=> {

//   const {getProduct, updateProduct} = useProduct()
//   const navigate = useNavigate()
//   const params = useParams()
//   const [product, setProduct] = useState({
//       product_name: '',
//       product_description: '',
//       product_price: '',
//       product_image: null,
//     })

//     useEffect(()=>{
//       (async ()=>{
//           if(params.id){
//           const product = await getProduct(params.id)
//           setProduct({
//             product_name: product.product_name,
//             product_description: product.product_description,
//             product_price: product.product_price,
//           })
//           }
//       })();
//     },[params.id, getProduct])

//     const handleExit = () => {
//       navigate('/adminStore')
//     }

//   return (
//     <>
//         <Formik
//           initialValues={product}
//           validationSchema={Yup.object(
//           {
//               product_name: Yup.string().required("Nombre del producto requerido"),
//               product_description: Yup.string().required("Descripción del producto requerida"),
//               product_price: Yup.string().required("Precio requerido"),
//           }
//           )}
//           onSubmit={async(values, actions) => {
//               await updateProduct(params.id, values);
//               actions.resetForm()
//               actions.setSubmitting(false);
//               navigate('/adminStore')
//           }}
//           enableReinitialize
//         >
//         {({handleSubmit, setFieldValue, isSubmitting}) => (
//           <Form onSubmit={handleSubmit}>
//             <Formulario.Group className="mb-3" controlId="exampleForm.ControlInput1">
//               <Formulario.Label>Nombre Producto</Formulario.Label>
//               <Field
//                 name='product_name'
//                 autoFocus
//               />
//               <ErrorMessage name='product_name'/>
//             </Formulario.Group>
//             <Formulario.Group
//               className="mb-3"
//               controlId="exampleForm.ControlTextarea1"
//             >
//               <Formulario.Label>Descripcion del Producto</Formulario.Label>
//               <Field
//               name='product_description'
//               as="textarea" rows={2} />
//               <ErrorMessage name='product_description'/>
//             </Formulario.Group>
//             <Formulario.Group className="mb-3" controlId="exampleForm.ControlInput1">
//               <Formulario.Label>Precio del Producto</Formulario.Label>
//               <Field
//                 name='product_price'
//                 placeholder="Ingrese Precio del Producto"
//               />
//               <ErrorMessage name='product_price'/>
//             </Formulario.Group>
//             <Formulario.Group className="mb-3" controlId="exampleForm.ControlInput2">
//               <Formulario.Label>Seleccione Imágen</Formulario.Label>
//               <Formulario.Control
//                 name='product_image'
//                 type='file'
//                 size='sm'
//                 onChange={(e) => setFieldValue('product_image', e.target.files[0])}
//               />
//             </Formulario.Group>
//           <Button variant="secondary" onClick={handleExit}>
//             Cerrar
//           </Button>
//           <Button type='submit' variant="primary" disabled={isSubmitting}>
//             {isSubmitting ? (
//               <>
//               <Spinner
//                 as="span"
//                 animation="border"
//                 size="sm"
//                 role="status"
//                 aria-hidden="true"
//               />
//               <span className="visually-hidden">Loading...</span>
//               </>
//             ): ("Guardar Cambios")}
//           </Button>
//           </Form>
//           )}
//         </Formik>
//     </>
//   );
// }
