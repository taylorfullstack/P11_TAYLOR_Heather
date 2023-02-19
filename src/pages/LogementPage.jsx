import logements from '../data/logements.json';
import Logement from '../components/Logement.jsx';

export default function LogementPage() {
    const path = window.location.hash;
    //const path = window.location.pathname;
    const id = path.split("/").at(-1);
    const logement = logements.find(logement => logement.id === id);
    return (
    <Logement key={logement.id} {...logement} />
    )
}

