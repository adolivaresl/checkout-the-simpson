import rafa from '../assets/rafa_siendo_rafa.png';
import '../css/App.css';

const Footer = () => {
    return(
        <footer className="container-fluid footer">
        <div className="row">
            <div className="col-md-3 offset-md-2 welcome">
                <h4>Bienvenidos al  mundo de Los Simpson</h4>
                <img src={rafa} alt="Rafa sale dicciendo que se comió el footer"/>
            </div>
            <div className="col-md-3 dashed-border">
                <h5>Links</h5>
                <ul>
                    <li><a href="#">Merchandising</a></li>
                </ul>
                <h5>Contacto</h5>
                <ul>
                    <li>contacto@comunidadsimpsons.cl</li>
                    <li>Avenida Siempreviva 742</li>
                </ul>
            </div>
            <div className="col-md-3 dashed-border">
                <h5>Comunidad</h5>
                <ul>
                    <li><a href="https://simpsons.fandom.com/es/wiki/The_Simpsons" target="_blank">Wiki de Los Simpson</a></li>
                    <li><a href="https://www.youtube.com/@lossimpsonlatino3849" target="_blank">Cortos de los Simpsons</a></li>
                    <li><a href="https://frinkiac.com/" target="_blank">Frinkiac</a></li>
                    <li><a href="https://www.nohomers.net/" target="_blank">No Homers Club</a></li>
                </ul>
            </div>
        </div>
        <div className="row">
            <p className="created">Creado por Dani y Domi 💛</p>
        </div>
    </footer>
    )
};

export default Footer;