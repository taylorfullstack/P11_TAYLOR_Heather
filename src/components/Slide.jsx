import '../styles/Slideshow.css'

export default function Slide({ src, alt, ariaLabel, isVisible}) {
    let visibility;
    isVisible ?  visibility = "show" : visibility = "hide";

    return (
        <img src={src} alt={alt} className="slide" data-slide={visibility} aria-roledescription="slide" aria-label={ariaLabel}/>
    )
}