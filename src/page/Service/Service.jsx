import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Service = () => {
  const [event, setEvent] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setEvent(data));
  }, []);
  // console.log(event);
  return (
    <div>
      <div className="text-center" data-aos="fade-right">
        <div className="w-full flex justify-center ">
          <button className="rounded text-white bg-[#387DF8] py-1 px-8 text-2xl font-semibold">
            Service
          </button>
        </div>
        <p className="text-[#387DF8] text-lg font-medium">
          Join us at devConf 23 to learn from the best and brightest minds in
          programming, including our esteemed guest speakers.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {event.map((cart) => (
          <Cart cart={cart} key={cart.id}></Cart>
        ))}
      </div>
    </div>
  );
};

export default Service;
