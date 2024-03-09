import './Banner.scss'
import Banner_Mate from '../../assets/Banner_Mate.jpg'
import About_Us from '../../assets/About_Us.png'


export const Banner = () => {

  Animation();
  return(
    <div className="carrousel">
        <div className="imgContainer">
            <img src={Banner_Mate} alt="Imagen 1" className="img"/>
            <img src={About_Us} alt="Imagen 2" className="img"/>
        </div>
        <ul className="puntos">
            <li className="punto active"></li>
            <li className="punto"></li>
        </ul>
    </div>
    )

}

function Animation() {
const imgContainer = document.querySelector(".imgContainer");
const punto = document.querySelectorAll(".punto");

punto.forEach((cadaPunto, i) => {
  punto[i].addEventListener("click", () => {
    let posicion = i;
    let operacion = posicion * -50;
    imgContainer.style.transform = `translateX(${operacion}%)`;
    punto.forEach((cadaPunto, i) => {
      punto[i].classList.remove("active");
    });
    punto[i].classList.add("active");
  });
});
}
