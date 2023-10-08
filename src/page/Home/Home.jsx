import Banner from "../Banner/Banner";
import DealSection from "../DealSection/DealSection";
import Service from "../Service/Service";
import Teacher from "../Teacher/Teacher";

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
        <Teacher></Teacher>
      </div>
      <h2>Home Section</h2>
      <div></div>
    </div>
  );
};

export default Home;
