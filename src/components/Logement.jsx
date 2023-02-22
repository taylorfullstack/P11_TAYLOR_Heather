
import Carousel from "./Carousel";
import Collapse from "./Collapse"
import Tags from "./Tags"
import Rate from "./Rate";
import Host from "./Host";
import '../styles/Logement.css';

export default function Logement({...logement}) {
    return (
        <article className="logement">
            <Carousel images={logement.pictures} title={logement.title}/>
            <section className="article-section">
                <div className="title-tag-wrapper">
                    <div className="title-wrapper">
                        <h1>{logement.title}</h1>
                        <h2>{logement.location}</h2>
                    </div>
                    <Tags tags={logement.tags}/>
                </div>
                <div className="host-rate-wrapper">
                    <Host name={logement.host.name} src={logement.host.picture}/>
                    <Rate rate={logement.rating}/>
                </div>
            </section>
            <section className="collapse-wrapper">
                <Collapse details={logement.description} summary="Description" page="logement"/>
                <Collapse details={logement.equipments} summary="Équipements" page="logement"/>
            </section>
        </article>
    )
}