export default function Button({className, dataAction, ariaLabel, onClick, children}) {
    return ( 
        <button type="button" className={className} data-action={dataAction} onClick={onClick} aria-label={ariaLabel}>{children}</button>
        )
}