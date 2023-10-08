import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

import { MdKeyboardDoubleArrowRight } from "react-icons/md";
const Banner = () => {
  return (
    <div>
      <div className="w-full h-[80vh] justify-center bg-[url(https://i.ibb.co/Czn0vsF/dev-co.jpg)] bg-no-repeat bg-cover bg-center">
        <div className="text-center bg-[#1f07255e] h-full w-full flex items-center justify-center">
          <div className="flex flex-col-reverse  md:flex-row justify-between items-center gap-5 p-2">
            <div className=" space-y-3" data-aos="zoom-in">
              <h1 className="text-3xl font-bold text-white">DevConf 23</h1>
              <h2 className="text-3xl md:text-5xl font-bold inline-block p-2 rounded-md bg-[#1306098e] text-[#387DF8]">
                The 2023 Developer Conference
              </h2>
              <p className="text-white text-lg">
                Join us at DevConf 23 to learn from the best and brightest minds
                in programming, including our esteemed guest speakers.
              </p>
              <button className="bg-[#387DF8] text-white text-xl font-semibold py-3 px-5 rounded flex justify-center items-center mb-6 mx-auto md:text-block">
                Explore More{" "}
                <MdKeyboardDoubleArrowRight className="text-2xl font-bold"></MdKeyboardDoubleArrowRight>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
