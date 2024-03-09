// import {createContext, useState, useEffect} from 'react'
// import axios from "axios";

// export const ContextProduct = createContext()

// // eslint-disable-next-line react/prop-types
// export const ProductProvider = ({children}) => {

//     const [products, setProducts] = useState([])

//     const createProductsRequest = async (producto) =>{
//         const form = new FormData()
//         for(let key in producto){
//             form.append(key, producto[key])
//         }
//         return await axios.post("http://localhost:5000/products", form, {
//             headers: {
//                 'Content-Type': 'multipart/form-data',
//             },
//         })
//     }

//     const updateProductsRequest = async (id, newFields) =>{
//         const form = new FormData()
//         for(let key in newFields) {
//             form.append(key, newFields[key])
//         }
//         return await axios.put(`http://localhost:5000/products/${id}`, form, {
//             headers: {
//                 'Content-Type': 'multipart/form-data',
//             },
//         })
//     }

//     const addFavProductRequest = async (id, favProduct) => {
//         await axios.put(`http://localhost:5000/products/${id}`, {favProduct});
//     };
// /*----------------------------------------------------------- */
//     const getProducts =  async() => {
//         try{
//             const resp = await axios.get("http://localhost:5000/products");
//             setProducts(resp.data)
//         }catch(err){
//             console.error(err)
//         }
//     }

//     const createProducts = async(prod) => {
//         try {
//             const resp = await createProductsRequest(prod);
//             setProducts([...products, resp.data])
//         } catch (error) {
//             console.error(error)
//         }
//     }

//     const deleteProducts = async (id) =>{
//         try {
//             const resp = await axios.delete("http://localhost:5000/products/" + id)
//             if(resp.status === 204){
//                 setProducts(products.filter((products) => products._id != id));
//             }
//         } catch (error) {
//             console.error(error)
//         }
//     }

//     const getProduct = async(id) =>{
//         try {
//             const resp = await axios.get("http://localhost:5000/products/" + id)
//             return resp.data
//         } catch (error) {
//             console.error(error)
//         }

//     }

//     const updateProduct = async(id, prod) =>{
//         try {
//             const resp = await updateProductsRequest(id, prod)
//             setProducts(products.map((prod)=>  (prod._id === id) ? resp.data : prod))
//         } catch (error) {
//             console.error(error)
//         }
//     }

//     const addFavProduct = async(id) => {
//         try {
//             const productFound = products.find((product)=>product._id === id);
//             await addFavProductRequest(id, productFound.favProduct === false? true: false);
//             setProducts(
//                 products.map((prod) =>
//                 prod._id === id ? {...prod, favProduct: !prod.favProduct} : prod)
//             )
//         } catch (error) {
//             console.log(error)
//         }
//     };

//     useEffect(() =>{
//         getProducts()
//       // eslint-disable-next-line react-hooks/exhaustive-deps
//       },[]);

//     const valorProvider = {
//         products: products,
//         getProducts: getProducts,
//         createProducts: createProducts,
//         deleteProducts: deleteProducts,
//         getProduct: getProduct,
//         updateProduct: updateProduct,
//         addFavProduct: addFavProduct,
//     }
//     return (
//     <ContextProduct.Provider value={valorProvider}>
//         {children}
//     </ContextProduct.Provider>
//     )
// }
