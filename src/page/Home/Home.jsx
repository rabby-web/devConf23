import Banner from "../Banner/Banner";
import DealSection from "../DealSection/DealSection";
import Service from "../Service/Service";
import Speaker from "../Speaker/Speaker";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Home = () => {
  return (
    <div>
      <div className="mb-6" data-aos="zoom-in">
        <Banner></Banner>
      </div>
      <div className="my-10" data-aos="fade-up">
        <DealSection></DealSection>
      </div>
      <div className="" data-aos="zoom-in">
        <Service></Service>
      </div>

      <div data-aos="fade-down">
        <Speaker></Speaker>
      </div>
    </div>
  );
};

export default Home;
