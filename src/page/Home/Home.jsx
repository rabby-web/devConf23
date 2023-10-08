import Banner from "../Banner/Banner";
import DealSection from "../DealSection/DealSection";
import Service from "../Service/Service";
import Speaker from "../Speaker/Speaker";

const Home = () => {
  return (
    <div>
      <div className="mb-6">
        <Banner></Banner>
      </div>
      <div className="my-10">
        <DealSection></DealSection>
      </div>
      <div>
        <Service></Service>
      </div>

      <div>
        <Speaker></Speaker>
      </div>
    </div>
  );
};

export default Home;
