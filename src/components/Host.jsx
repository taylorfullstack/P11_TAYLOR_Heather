import '../styles/Host.css'

export default function Host({name, src}){
    const fullName = name.split(" ");
    return (
        <div className="host">
        <div className="host-name">
            <span>{fullName.at(0)}</span>
            <span>{fullName.at(-1)}</span>
        </div>
            
            
            <img className="host-picture" alt={name} src={src} width="64" height="64"></img>
        </div>
    )
}