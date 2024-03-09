import Alert from 'react-bootstrap/Alert';


export const PaymmentFailed = () => {

  return (
    <>
        <Alert variant='danger'>
        La compra fue cancelada, para regresar a la tienda, haga clic en el siguiente link.
        <Alert.Link href="/store" style={{textDecoration: 'underline'}}>Tienda Muy Argento</Alert.Link>
        </Alert>
    </>
)};
