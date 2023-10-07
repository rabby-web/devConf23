import { MdLocationPin, MdAccessTimeFilled } from "react-icons/md";
const Cart = () => {
  return (
    <div>
      <div className="flex items-center justify-center my-5 ">
        <div className="m-3">
          <div className="relative flex  w-full max-w-[48rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md border">
            <div className="relative m-0 w-full shrink-0 overflow-hidden rounded-xl  bg-white bg-clip-border text-gray-700">
              <img
                src="https://i.ibb.co/Czn0vsF/dev-co.jpg"
                alt="image"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-3">
              <div className="font-bold text-[#387DF8]">
                <span className="flex gap-1 items-center">
                  <MdLocationPin /> Programming Hero Auditorium, London
                </span>
                <span className="flex gap-1 items-center">
                  <MdAccessTimeFilled /> 9.30 - 10.30 AM
                </span>
              </div>

              <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                ashfasdfhsdlfhd
              </h4>

              <p className="mb-4 block font-sans text-sm font-normal leading-relaxed text-gray-700 antialiased">
                Other features that may be found on mobile phones include GPS
                navigation, music (MP3) and video (MP4) playback, RDS radio
                receiver, built-in projector, vibration and other ring options,
                alarms, memo recording, personal digital assistant functions,
                ability to watch streaming video, video download, video calling
              </p>
              <div className="flex justify-between text-xl font-bold text-[#387DF8]">
                <h2>Price: 00$</h2>
                <a className="inline-block" href="#">
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
