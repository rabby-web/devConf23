import { useEffect, useState } from "react";

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
      <p>ppppppppppppppppp{event.length}</p>
    </div>
  );
};

export default Service;
