import Banner from '../components/Banner.jsx';
import CardGallery from '../components/CardGallery.jsx';
import bannerImage from '../assets/eric-muhr-P_XxsdVgtpQ-unsplash.jpg';

const bannerText = "Chez vous, partout et ailleurs";

export default function Home() {
  return (
    <>
    <Banner text={bannerText} src={bannerImage} />
    <CardGallery />
    </>
  );
}
