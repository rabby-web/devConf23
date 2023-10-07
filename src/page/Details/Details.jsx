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
    <div>
      <div className="m-5 rounded">
        {/* trainer */}
        <div className="border rounded bg-slate-200 ">
          <div className="flex flex-col md:flex-row items-center gap-5">
            <div className="bg-slate-300 rounded">
              <img className="max-w-[350px]" src={trainer?.image} alt="" />
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
        <div className="border">
          <div className="flex items-center justify-center my-5 ">
            <div className="m-3">
              <div className="relative flex  w-full max-w-[48rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md border">
                <div className="relative m-0 w-full shrink-0 overflow-hidden rounded-xl  bg-white bg-clip-border text-gray-700">
                  <img
                    src={img}
                    alt="image"
                    className="h-72 w-full object-cover"
                  />
                </div>
                <div className="p-3">
                  <div className="font-bold text-[#387DF8]">
                    <span className="flex gap-1 items-center">
                      <MdLocationPin />
                      {location}
                    </span>
                    <span className="flex gap-1 items-center">
                      <MdAccessTimeFilled /> {time}
                    </span>
                  </div>

                  <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {title}
                  </h4>

                  <p className="mb-4 block font-sans text-sm font-normal leading-relaxed text-gray-700 antialiased">
                    {description}
                  </p>
                  <div className="flex justify-between text-xl font-bold text-[#387DF8]">
                    <h2>Price: {price}$</h2>
                    <a className="inline-block" href="#">
                      <Link to={`/cart/${id}`}>
                        <button
                          className="flex bg-[#387DF8] select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all  disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                        >
                          Details
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            aria-hidden="true"
                            className="h-4 w-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            ></path>
                          </svg>
                        </button>
                      </Link>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
