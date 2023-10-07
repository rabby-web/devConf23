import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { MdLocationPin, MdAccessTimeFilled } from "react-icons/md";
import { Link } from "react-router-dom";

const Details = () => {
  const [data, setData] = useState();
  const { id } = useParams();
  const events = useLoaderData();
  console.log(id, events);
  useEffect(() => {
    const findEvents = events?.find((seeEvent) => seeEvent.id === id);
    setData(findEvents);
  }, [events, id]);
  // console.log(event);
  const { title, img, trainer, time, description, price, location } =
    data || {};

  return (
    <div className="bg-slate-200 py-4 my-4 rounded-md">
      <h1 className="text-center font-bold text-4xl text-[#387DF8]">
        Event Details
      </h1>
      <div className="m-5 rounded">
        {/* trainer */}
        <div className="border bg-slate-50 rounded  md:p-2 lg:p-8 m-2">
          <div className="flex flex-col md:flex-row items-center gap-5">
            <div className=" rounded">
              <img
                className="max-w-[350px] h-auto"
                src={trainer?.image}
                alt=""
              />
            </div>
            <div className="space-y-3 gap-5 mt-5 md:mt-0 text-center md:text-left">
              <h2 className="text-3xl font-bold bg-[#387DF8] inline-block p-3 rounded text-white">
                {trainer?.name}
              </h2>
              <h3 className="text-2xl font-bold text-[#387DF8]">
                {trainer?.company}
              </h3>
              <h2 className="text-2xl font-bold">Trainer Bio</h2>
              <p className="text-lg font-semibold">{trainer?.designation}</p>
            </div>
          </div>
        </div>
        {/* conf */}
        <div>
          <div className="m-2 rounded">
            <div className="relative rounded md:flex justify-center items-center flex-row gap-2  bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative rounded m-0 w-full md:w-1/2 shrink-0 overflow-hidden   bg-white bg-clip-border text-gray-700">
                <img
                  src={img}
                  alt="image"
                  className="h-96 w-full rounded object-cover"
                />
              </div>
              <div className="py-3 text-center md:text-left">
                <h2 className="mb-2 block font-sans text-2xl text-[#387DF8] font-semibold leading-relaxed tracking-normal  rounded antialiased">
                  {title}
                </h2>
                <h4 className="mb-2 block font-sans text-3xl text-[#387DF8] font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  {title}
                </h4>
                <h2 className="text-base">{description}</h2>
                <p className="mb-4 block font-sans text-2xl font-semibold leading-relaxed">
                  Event Booking Price:{" "}
                  <span className="font-bold text-[#387DF8]">{price}</span>
                </p>
                <Link className="mb-2" to={`/cart/${id}`}>
                  <a className="inline-block" href="#">
                    <button
                      className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-base font-bold  bg-[#387DF8] text-white transition-all disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                    >
                      Booking Now
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
