import Category from "../Components/Cateogery";
import Navigation from "../Components/Navigation";
import hero_image from '../assets/images/computer/Hero/monitor_hero.jpg'
import Footers from '../Components/Footers'
import Contact from "../Components/Contact";

const Home = () => {
  return ( 
    <div className="flex flex-col min-h-screen " >
      <Navigation/>
      <Category/>
      {/* <div className="hero h-[400px]">
        <img className="h-full w-full object-cover " src={hero_image} alt="heroimg" />
      </div> */}
      <Contact/>
      <Footers/>
    </div>
  );
}
 
export default Home;
