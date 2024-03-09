import {Header} from '../components/header/Header';
import {Banner} from '../components/banner/Banner';
import { Footer } from '../components/footer/Footer';

import Container from 'react-bootstrap/Container'



export const AboutUs = () => {
  return (
    <>
    <div>
        <Header />
        <Banner />
        <Container fluid>
          <h2 style={{textAlign:'center', fontSize:'45px'}}>Bienvenidos a Muy Argento</h2>
          <p style={{fontSize:'18px', textAlign:'justify'}}>Somos un grupo de cuatro amigos apasionados, unidos por la visión de llevar los productos argentinos más allá de las fronteras.
            Basados en la hermosa ciudad de Córdoba, Argentina, nos enorgullece presentarnos como un equipo dedicado al comercio exterior y 
            la expansión global de los tesoros que nuestra tierra tiene para ofrecer.
          </p>
          <h3 style={{textAlign:'left', fontSize:'36px', marginLeft:'30px'}}>Nuestra Historia</h3>
          <p style={{fontSize:'18px', textAlign:'justify'}}>La diversidad de nuestras culturas y antecedentes individuales nos ha llevado a
            unir fuerzas en esta emocionante empresa. Con un objetivo compartido y una pasión por descubrir y compartir la riqueza de los
            productos argentinos, decidimos emprender este viaje juntos. Nuestra amistad sólida y nuestra determinación nos impulsan a llevar
            nuestros productos a cada rincón del mundo.
          </p>
          <h3 style={{textAlign:'left', fontSize:'36px', marginLeft:'30px'}}>Nuestro Enfoque</h3>
          <p style={{fontSize:'18px', textAlign:'justify'}}>En Muy Argento, nuestro enfoque está claro: facilitar el acceso a los productos
            argentinos auténticos sin importar la ubicación. Nos especializamos en comercio exterior, utilizando nuestros conocimientos y 
            conexiones para superar las barreras geográficas y culturales. Desde los sabores únicos de la gastronomía argentina hasta las 
            artesanías y productos tradicionales, nos comprometemos a llevar la esencia de Argentina a su puerta.
          </p>
          <h3 style={{textAlign:'left', fontSize:'36px', marginLeft:'30px'}}>Desde Córdoba para el Mundo</h3>
          <p style={{fontSize:'18px', textAlign:'justify'}}>Nuestra base en Córdoba, Argentina, no solo es nuestro hogar, sino también el 
            corazón de nuestras operaciones. Desde aquí coordinamos y gestionamos todas las etapas del proceso de exportación, asegurando la 
            calidad, autenticidad y satisfacción en cada envío. Córdoba, con su energía vibrante y su ubicación estratégica, nos brinda la 
            inspiración y el enfoque para cumplir nuestra misión con éxito.
          </p>
          <h3 style={{textAlign:'left', fontSize:'36px', marginLeft:'30px'}}>Únete a Nuestro Viaje</h3>
          <p style={{fontSize:'18px', textAlign:'justify'}}>Te invitamos a formar parte de nuestro emocionante viaje a medida que cruzamos 
            fronteras y compartimos lo mejor de Argentina con el mundo. Ya sea que estés buscando productos únicos, deseando experimentar la 
            cultura argentina o buscando oportunidades de comercio exterior, estamos aquí para ser tu puente hacia un mundo de posibilidades.
          </p>
          <h4 style={{textAlign:'center', fontSize:'24px'}}>¡Gracias por acompañarnos en esta emocionante travesía!</h4>
          <h4 style={{textAlign:'center', fontSize:'24px'}}>El equipo de Muy Argento</h4>
        </Container>
        <Footer />
    </div>
    </>
  )
}
