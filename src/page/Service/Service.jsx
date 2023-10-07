import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";

const Service = () => {
  const [event, setEvent] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setEvent(data));
  }, []);
  console.log(event);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {event.map((cart) => (
          <Cart cart={cart} key={cart.id}></Cart>
        ))}
      </div>
    </div>
  );
};

export default Service;
