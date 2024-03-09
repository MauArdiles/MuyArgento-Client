import { Header } from "../components/header/Header";
import { Banner } from "../components/banner/Banner";
import { Footer } from "../components/footer/Footer";
import { MostRated } from "../components/ratedProducts/MostRated";
// import { FavComment } from "../components/comments/FavComment";

export const Home = () => {
  return (
    <>
      <header>
        <nav>
          <Header />
        </nav>
        <Banner />
      </header>
      <main style={{ display: "flex", flexFlow: "column" }}>
        <section>
          <h2
            style={{
              font: "helvetica, arial, sans serif",
              fontSize: 26,
              textAlign: "center",
              textDecoration: "underline",
            }}
          >
            Productos Destacados
          </h2>
          <MostRated />
        </section>
        <section>
          <h3
            style={{
              font: "helvetica, arial, sans serif",
              fontSize: 26,
              textAlign: "center",
              textDecoration: "underline",
            }}
          >
            Comentarios
          </h3>
          {/* <FavComment /> */}
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
