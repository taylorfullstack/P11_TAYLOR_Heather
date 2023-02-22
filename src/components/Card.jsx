import '../styles/Card.css';
import { Link } from "react-router-dom";

export default function Card({ src, title, href}) {
    return (
        <Link to={`logement/${href}`} className="card-link">
            <article className="card inversed">
            <img src={src} alt={title} />
            <h2 className="text-shadow">{title}</h2>
            </article>
        </Link>
    )
}