import "./footer.css";

const Footer = () => {
  return (
    <div className="col-md-2 col-lg-3 col-xl-3 mx-auto mt-3">
      <div className=" container text-center text-md-start">
        <div className="row text-center text-md-start">
          <div className="col-md-2 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="titulo text-uppercase mb-4 font-weight-bold text-primary">
              ENVIOS
            </h5>
            <p>
              <li className="fas fa-truck me-3"></li>CORREO ARGENTINO
            </p>
            <p>
              <li className="fas fa-truck me-3"></li>ANDREANI
            </p>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="titulo text-uppercase mb-4 font-weight-bold text-primary">
              PREGUNTAS FRECUENTES
            </h5>
            <p>Trabajamos con plan reserva? SI</p>
            <p>Hacemos cambios/devoluciones? SI</p>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className=" titulo text-uppercase mb-4 font-weight-bold text-primary">
              CONTACTANOS
            </h5>

            <p>
              <li className="fas fa-home me-3"></li>San Juan 1212 CABA
            </p>
            <p>
              <li className="fas fa-envelope me-3"></li>IbiShoes@gmail.com
            </p>
            <p>
              <li className="fas fa-phone me-3"></li>421-2323
            </p>
          </div>

          <div className="redes">
            <h5 className="titulo">SEGUINOS EN NUESTRAS REDES</h5>
            <li className="fab fa-facebook">FACEBOOK</li>
            <li className="fab fa-twitter">TWITTER</li>
            <li className="fab fa-whatsapp">WHATSAPP</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
