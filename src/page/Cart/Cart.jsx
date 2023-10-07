import { MdLocationPin, MdAccessTimeFilled } from "react-icons/md";
import { Link } from "react-router-dom";
const Cart = ({ cart }) => {
  const { id, location, img, title, time, description, price } = cart || {};
  return (
    <div>
      <div className="flex items-center justify-center my-5 ">
        <div className="m-3">
          <div className="relative flex  w-full max-w-[48rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md border">
            <div className="relative m-0 w-full shrink-0 overflow-hidden rounded-xl  bg-white bg-clip-border text-gray-700">
              <img src={img} alt="image" className="h-60 w-full object-cover" />
            </div>
            <div className="p-3">
              <div className="font-bold text-[#387DF8]">
                <span className="flex gap-1 items-center">
                  <MdLocationPin /> {location}
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
                      Event Details
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
  );
};

export default Cart;
