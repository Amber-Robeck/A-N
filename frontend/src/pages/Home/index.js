import Carousel from "../../components/Carousel";
import HomeCards from "../../components/HomeCards";
import NavigationCard from "../../components/NavigationCard";
import RatingBanner from "../../components/RatingBanner";

const Home = () => {
    return ( 
        <>
        <Carousel/>
        <NavigationCard/>
        <RatingBanner/>
        <HomeCards/>
        </>
     );
}
 
export default Home;