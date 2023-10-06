import banner from "../../assets/banner.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
const Banner = () => {
  return (
    <div>
      <div className="w-full h-[80vh] justify-center bg-[url(https://i.ibb.co/jWMxhsd/Blue-Watercolor-Map-of-the-World-removebg-preview.png)] bg-no-repeat bg-cover bg-center">
        <div className="text-center bg-[#ffffff94] h-full w-full flex items-center justify-center">
          <div className="flex flex-col-reverse  md:flex-row justify-between items-center gap-5 p-2">
            <div className="flex-1 md:text-left space-y-3">
              <h1 className="text-2xl font-semibold text-[#9B8AB4]">
                Dev Library
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold text-[#1B8BCB]">
                Best Programming Books
              </h2>
              <p className="text-slate-700 text-base">
                Certainly! I can provide you with information about programming
                books and articles. Programming is a vast field, so it would be
                helpful if you could specify the programming language, topic, or
                type of resource you're interested in. Here are some general
                recommendations and topics you might consider:
              </p>
              <button className="bg-[#1B8BCB] text-white text-xl font-semibold py-3 px-5 rounded flex justify-center items-center">
                Explore More{" "}
                <MdKeyboardDoubleArrowRight className="text-2xl font-bold"></MdKeyboardDoubleArrowRight>
              </button>
            </div>
            <div className="flex-1 w-full  mx-auto">
              <img className="mx-auto" src={banner} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
