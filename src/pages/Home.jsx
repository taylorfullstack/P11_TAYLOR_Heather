import Banner from '../components/Banner.jsx';
import CardSection from '../components/CardSection.jsx';
import bannerImage from '../assets/eric-muhr-P_XxsdVgtpQ-unsplash.jpg';

const bannerText = "Chez vous, partout et ailleurs";

export default function Home() {
  return (
    <>
    <Banner text={bannerText} src={bannerImage} />
    <CardSection />
    </>
  );
}
