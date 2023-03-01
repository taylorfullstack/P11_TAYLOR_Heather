import '../styles/Collapse.css';

export default function Collapse({details, summary, page}) {
    const type = summary;
    const currentPage = page;
    const textClass = currentPage === "logement" ? "details-text logement-details" : "details-text values-details";
    const summaryClass = currentPage === "logement" ? "logement-summary" : "values-summary";
    function detailsText() {
        if(type !== "Équipements"){
            return <p className={textClass}>{details}</p>
        } else {
            return (
                <ul className={textClass}>
                    {details.map((detail, index) => {
                        return <li key={index}>{detail}</li>
                    })}
                </ul>
            )
        }
    }

    return (
        <details className='details collapse'>
            <summary className='inversed summary text-shadow'>
                <span className={summaryClass}>{summary}</span>
                <span className='summary-icon'></span>
            </summary>
            {detailsText()}
        </details>
    );
}