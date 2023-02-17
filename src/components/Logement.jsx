
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
            <section className="logement-text-wrapper">
                <div className="location-wrapper">
                    <h1>{logement.title}</h1>
                    <h2>{logement.location}</h2>
                    <Tags tags={logement.tags}/>
                </div>

                <div className="rate-host-wrapper">
                    <Host name={logement.host.name} src={logement.host.picture}/>
                    <Rate rate={logement.rating}/>
                </div>
                
                <div className="collapse-wrapper">
                    <Collapse details={logement.description} summary="Description" page="logement"/>
                    <Collapse details={logement.equipments} summary="Équipements" page="logement"/>
                </div>
            </section>
        </article>
    )
}