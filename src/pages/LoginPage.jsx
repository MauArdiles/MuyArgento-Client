import {useForm} from 'react-hook-form'
import {useAuth} from '../Provider/AuthContext'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card'
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'

export const LoginPage = () => {

const {register, handleSubmit, formState:{errors}} = useForm()

const {signin, user, loginErrors, isAuthenticated} = useAuth()
const navigate = useNavigate()

useEffect(()=>{
  if(isAuthenticated) navigate('/adminStore')
}, [isAuthenticated, navigate])

const onSubmit = handleSubmit( (data) => {
  signin(data)
})


  return (
      <Card bg='dark' text='white' style={{display: 'flex', height:'100vh',alignItems: 'center', justifyContent: 'center'}}>
          { loginErrors.map((error, i)=> (
            <p style={{color: 'red', margin: '10px'}} key={i}>{error}</p>
            ))}
        <Card.Title style={{textAlign: 'center', padding: '5px'}}>Login</Card.Title>
        <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter Username" 
          {...register("username", {required: true})}/>
          {errors.username && <p style={{color: 'red', margin: '10px'}}>Usuario Requerido</p>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"
          {...register("password", {required: true})} />
          {errors.password && <p style={{color: 'red', margin: '10px'}}>Password Requerido</p>}
        </Form.Group>

        <Button variant="primary" type="submit">
          Ingresar
        </Button>
      </Form>
      </Card>  
  )
}
