import banner from "../../assets/banner.png";
const Banner = () => {
  return (
    <div>
      <div className="w-full h-[80vh] justify-center bg-[url(https://i.ibb.co/jWMxhsd/Blue-Watercolor-Map-of-the-World-removebg-preview.png)] bg-no-repeat bg-cover bg-center">
        <div className="text-center bg-[#ffffff94] h-full w-full flex items-center justify-center">
          <div className="flex flex-col-reverse  md:flex-row justify-between items-center gap-5 ">
            <div className="flex-1 md:text-left space-y-3">
              <h1 className="text-2xl font-semibold">Jhankar Mahmub</h1>
              <h2 className="text-3xl md:text-5xl font-bold text-[#1B8BCB]">
                Programming Hero
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                nulla minus illo sed modi itaque eos vero nam iste assumenda
                voluptate asperiores, tempora aspernatur provident repellendus
                nesciunt, ea illum earum.
              </p>
              <button className="bg-[#1B8BCB] text-white text-xl font-semibold py-3 px-5 rounded">
                Explore More
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
