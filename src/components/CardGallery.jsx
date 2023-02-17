import Card from "./Card.jsx"
import logements from '../data/logements.json';
import '../styles/Card.css';

export default function CardGallery() {
    return (
        <section className="card-gallery">
            {
                logements.map(logement => {
                    return <Card key={logement.id} href={logement.id} title={logement.title} src={logement.cover} />
                })
            }
        </section>
    )
}