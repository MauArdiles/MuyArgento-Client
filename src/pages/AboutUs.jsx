import { Header } from "../components/header/Header";
import { NewFooter } from "../components/footer/NewFooter";
import Card from "react-bootstrap/Card";
import Logo from "../assets/Logo Negra.jpeg";
import Container from "react-bootstrap/Container";

export const AboutUs = () => {
  return (
    <>
      <Header />
      <Container style={{ marginLeft: "30%" }}>
        <Card
          border="info"
          style={{ width: "50em", textAlign: "center", marginBottom: "1em" }}
        >
          <Card.Header>
            <img src={Logo} />
          </Card.Header>
          <Card.Body>
            <Card.Text>
              {" "}
              Somos un grupo de cuatro amigos apasionados, unidos por la visión
              de llevar los productos argentinos más allá de las fronteras.
              Basados en la hermosa ciudad de Córdoba, Argentina, nos
              enorgullece presentarnos como un equipo dedicado al comercio
              exterior y la expansión global de los tesoros que nuestra tierra
              tiene para ofrecer.
            </Card.Text>
            <Card.Title>Nuestra Historia</Card.Title>
            <Card.Text>
              La diversidad de nuestras culturas y antecedentes individuales nos
              ha llevado a unir fuerzas en esta emocionante empresa. Con un
              objetivo compartido y una pasión por descubrir y compartir la
              riqueza de los productos argentinos, decidimos emprender este
              viaje juntos. Nuestra amistad sólida y nuestra determinación nos
              impulsan a llevar nuestros productos a cada rincón del mundo.
            </Card.Text>
            <Card.Title>Nuestro Enfoque</Card.Title>
            <Card.Text>
              En Muy Argento, nuestro enfoque está claro: facilitar el acceso a
              los productos argentinos auténticos sin importar la ubicación. Nos
              especializamos en comercio exterior, utilizando nuestros
              conocimientos y conexiones para superar las barreras geográficas y
              culturales. Desde los sabores únicos de la gastronomía argentina
              hasta las artesanías y productos tradicionales, nos comprometemos
              a llevar la esencia de Argentina a su puerta.
            </Card.Text>
            <Card.Title>Desde Córdoba para el Mundo</Card.Title>
            <Card.Text>
              Nuestra base en Córdoba, Argentina, no solo es nuestro hogar, sino
              también el corazón de nuestras operaciones. Desde aquí coordinamos
              y gestionamos todas las etapas del proceso de exportación,
              asegurando la calidad, autenticidad y satisfacción en cada envío.
              Córdoba, con su energía vibrante y su ubicación estratégica, nos
              brinda la inspiración y el enfoque para cumplir nuestra misión con
              éxito.
            </Card.Text>
            <Card.Title>Únete a Nuestro Viaje</Card.Title>
            <Card.Text>
              Te invitamos a formar parte de nuestro emocionante viaje a medida
              que cruzamos fronteras y compartimos lo mejor de Argentina con el
              mundo. Ya sea que estés buscando productos únicos, deseando
              experimentar la cultura argentina o buscando oportunidades de
              comercio exterior, estamos aquí para ser tu puente hacia un mundo
              de posibilidades.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Card.Text>
              ¡Gracias por acompañarnos en esta emocionante travesía!
            </Card.Text>
            El equipo de Muy Argento
          </Card.Footer>
        </Card>
      </Container>
      <NewFooter />
    </>
  );
};
