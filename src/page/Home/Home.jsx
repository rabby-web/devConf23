import Banner from "../Banner/Banner";
import DealSection from "../DealSection/DealSection";

const Home = () => {
  return (
    <div>
      <div className="mb-6">
        <Banner></Banner>
      </div>
      <div className="mt-10">
        <DealSection></DealSection>
      </div>
      <h2>Home Section</h2>
    </div>
  );
};

export default Home;
