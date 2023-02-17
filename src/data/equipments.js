import logements from './logements.json';
 
export default function equipments() {
    const allEquipments = []; 
    logements.map((logement) => {
        const logementEquipments = logement.equipments;
        console.log(logement.equipments);
        allEquipments.push(logementEquipments);
        return logement.equipments;
    })
    //console.log(allEquipments);

    const test = [...new Set(allEquipments.flatMap(equipment => equipment))];;
    //console.table(test);
    return allEquipments;
}

const availableEquipments = [
    {name: "Équipements de base", icon: ""},
    {name: "Micro-Ondes", icon: ""},
    {name: "Douche italienne", icon: ""},
    {name: "Frigo", icon: ""},
    {name: "WIFI", icon: ""},
    {name: "Parking", icon: ""},
    {name: "Sèche Cheveux", icon: ""},
    {name: "Machine à laver", icon: ""},
    {name: "Cuisine équipée", icon: ""},
    {name: "Télévision", icon: ""},
    {name: "Chambre Séparée", icon: ""},
    {name: "Climatisation", icon: ""},
    {name: "Frigo Américain", icon: ""},
    {name: "Salle de bains", icon: ""},
    {name: "Bureau", icon: ""},
    {name: "Lit King Size", icon: ""},
    {name: "Ascenseur", icon: ""},
    {name: "Vue Parc", icon: ""},
    {name: "Chauffage", icon: ""},
    {name: "Sèche linge", icon: ""},
    {name: "Clic-clac", icon: ""},
    {name: "Four", icon: ""},
    {name: "Rangements", icon: ""},
    {name: "Lit", icon: ""},
    {name: "Bouilloire", icon: ""},
    {name: "SDB", icon: ""},
    {name: "Toilettes sèches", icon: ""},
    {name: "Cintres", icon: ""},
    {name: "Baie vitrée", icon: ""},
    {name: "Hotte", icon: ""},
    {name: "Baignoire", icon: ""}
];

console.log(availableEquipments);