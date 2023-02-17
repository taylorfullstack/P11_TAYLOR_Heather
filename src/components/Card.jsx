import '../styles/Card.css';
import { Link } from "react-router-dom";

export default function Card({ src, title, href}) {
    return (
        <Link to={`logement/${href}`} >
            <article className="card inversed">
            <img src={src} alt={title} />
            <h2>{title}</h2>
            </article>
        </Link>
    )
}