import { PiPlugsConnectedFill } from "react-icons/pi";
import { BiSolidUserAccount } from "react-icons/bi";
import { GiSkills } from "react-icons/gi";
import { MdJoinInner } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
const DealSection = () => {
  return (
    <div>
      <div className="w-full flex justify-center">
        <button className="text-white bg-[#387DF8] rounded py-3 px-5 text-2xl font-semibold">
          Developer Guidance
        </button>
      </div>
      <div
        className="text-[#387DF8] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 m-2"
        data-aos="fade-left"
      >
        <div className="border flex justify-center items-center gap-4 p-3">
          <div className="text-6xl ">
            <PiPlugsConnectedFill></PiPlugsConnectedFill>
          </div>
          <div>
            <p className="text-xl font-medium">
              Connect with peers, industry experts, and potential employers to
              expand their network.
            </p>
          </div>
        </div>
        <div
          className="border flex justify-center items-center gap-4 p-3"
          data-aos="fade-left"
        >
          <div className="text-6xl">
            <BiSolidUserAccount></BiSolidUserAccount>
          </div>
          <div>
            <p className="text-xl font-medium">
              Expert-led sessions to guide them through the maze of development
              challenges.
            </p>
          </div>
        </div>
        <div
          className="border flex justify-center items-center gap-4 p-3"
          data-aos="fade-left"
        >
          <div className="text-6xl ">
            <MdJoinInner></MdJoinInner>
          </div>
          <div>
            <p className="text-xl font-medium">
              Join a supportive community of developers and collaborate on
              exciting projects.
            </p>
          </div>
        </div>
        <div
          className="border flex justify-center items-center gap-4 p-3"
          data-aos="fade-left"
        >
          <div className="text-6xl ">
            <GiSkills></GiSkills>
          </div>
          <div>
            <p className="text-xl font-medium">
              Acquire new skills and stay up-to-date with the latest trends in
              tech.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealSection;
