import Banner from "../Banner/Banner";
import Cart from "../Cart/Cart";
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Cart></Cart>
        <Cart></Cart>
        <Cart></Cart>
      </div>
      <h2>Home Section</h2>
    </div>
  );
};

export default Home;
