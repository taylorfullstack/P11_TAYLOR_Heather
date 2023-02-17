import logo from "../assets/logo_light.svg";
import '../styles/Footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <img alt="Kasa" src={logo}></img>
            <div className="copyright">
                <span>©</span>
                <span id="copyright-date">{new Date().getFullYear()}</span>
                <span>Kasa.</span>
                <span>Tous droits réservés</span>
            </div>
            
        </footer>
    );
}
