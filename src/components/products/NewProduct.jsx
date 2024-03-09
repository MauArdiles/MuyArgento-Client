// import {Formik, Field, Form, ErrorMessage} from 'formik'
// import * as Yup from 'yup'
// import {useProduct} from '../../hooks/useProduct'
// import {useParams} from 'react-router-dom'
// import Button from 'react-bootstrap/Button';
// import Spinner from 'react-bootstrap/Spinner';
// import Formulario from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';
// import { useEffect, useState } from 'react';

// export const NewProduct = () => {
//     const {createProducts, getProduct} = useProduct()

//     const [show, setShow] = useState(false);
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     const params = useParams()

//     const [product, setProduct] = useState({
//         product_name: '',
//         product_description: '',
//         product_price: '',
//         product_image: null,
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

//   return (
//     <>
//     <Button className='mt-2' variant="primary" onClick={handleShow} >
//       Cargar Producto
//     </Button>
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Carga de Producto</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//         <Formik
//             initialValues={product}
//             validationSchema={Yup.object(
//             {
//                 product_name: Yup.string().required("Nombre del producto requerido"),
//                 product_description: Yup.string().required("Descripción del producto requerida"),
//                 product_price: Yup.mixed().required("Precio requerido"),
//             }
//             )}
//             onSubmit={async(values, actions) => {
//                 await createProducts(values);
//                 actions.resetForm();
//                 actions.setSubmitting(false);
//                 handleClose();
//             }}
//             enableReinitialize
//             >
//             {({handleSubmit, setFieldValue, isSubmitting}) => (
//                 <Form onSubmit={handleSubmit}>
//                   <Formulario.Group className="mb-3" controlId="exampleForm.ControlInput1">
//                     <Formulario.Label>Nombre Producto</Formulario.Label>
//                     <Field
//                       name='product_name'
//                       placeholder="Nombre Producto"
//                       autoFocus
//                     />
//                     <ErrorMessage name='product_name'/>
//                   </Formulario.Group>
//                   <Formulario.Group
//                     className="mb-3"
//                     controlId="exampleForm.ControlTextarea1"
//                   >
//                     <Formulario.Label>Descripcion del Producto</Formulario.Label>
//                     <Field
//                       name='product_description'
//                       as="textarea" rows={3}
//                       placeholder="Descripcion"
//                       />
//                     <ErrorMessage name='product_description'/>
//                   </Formulario.Group>
//                   <Formulario.Group className="mb-3" controlId="exampleForm.ControlInput1">
//                   <Formulario.Label>Precio del Producto</Formulario.Label>
//                   <Field
//                     name='product_price'
//                     placeholder="Ingrese Precio"
//                   />
//                   <ErrorMessage name='product_price'/>
//                   </Formulario.Group>
//                   <Formulario.Group className="mb-3" controlId="exampleForm.ControlInput2">
//                     <Formulario.Label>Seleccione Imágen</Formulario.Label>
//                       <Formulario.Control
//                         name='product_image'
//                         type='file'
//                         size='sm'
//                         onChange={(e) => setFieldValue('product_image', e.target.files[0])}
//                       />
//                   </Formulario.Group>
//                   <Button variant="secondary" onClick={handleClose}>
//                     Cancelar
//                   </Button>
//                   <Button
//                     type='submit' variant="primary"
//                     disabled={isSubmitting}>
//                     {isSubmitting ? (
//                     <>
//                     <Spinner
//                       as="span"
//                       animation="border"
//                       size="sm"
//                       role="status"
//                       aria-hidden="true"
//                     />
//                     <span className="visually-hidden">Loading...</span>
//                     </>
//                     ): ("Guardar")}
//                 </Button>
//             </Form>
//             )}
//         </Formik>
//         </Modal.Body>
//         </Modal>
//     </>
//   )
// }
