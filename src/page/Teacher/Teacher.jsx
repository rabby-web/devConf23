import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";

const Teacher = () => {
  return (
    <div className="border mx-6 p-2 text-center">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-auto "
      >
        <SwiperSlide className="grid grid-cols-2">
          <div className="p-2 bg-slate-200">
            <div>
              <img
                className="w-full h-full"
                src="https://devconfbd.com/_next/image?url=%2Fimages%2Fspeakers%2Fjhankar.png&w=384&q=75"
                alt=""
              />
              <h2 className="text-2xl font-semibold">Jhanker Mahmub</h2>
              <p className="text-xl">Founder, Programming Hero</p>
              <p className="text-xl">Founder, Programming Hero</p>
              <p className="text-xl">Founder, Programming Hero</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-2 bg-slate-200">
            <div>
              <img
                className="w-full h-full"
                src="https://devconfbd.com/_next/image?url=%2Fimages%2Fspeakers%2Fjhankar.png&w=384&q=75"
                alt=""
              />
              <h2 className="text-2xl font-semibold">Jhanker Mahmub</h2>
              <p className="text-xl">Founder, Programming Hero</p>
              <p className="text-xl">Founder, Programming Hero</p>
              <p className="text-xl">Founder, Programming Hero</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-2 bg-slate-200">
            <div>
              <img
                className="w-full h-full"
                src="https://devconfbd.com/_next/image?url=%2Fimages%2Fspeakers%2Fjhankar.png&w=384&q=75"
                alt=""
              />
              <h2 className="text-2xl font-semibold">Jhanker Mahmub</h2>
              <p className="text-xl">Founder, Programming Hero</p>
              <p className="text-xl">Founder, Programming Hero</p>
              <p className="text-xl">Founder, Programming Hero</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-2 bg-slate-200">
            <div>
              <img
                className="w-full h-full"
                src="https://devconfbd.com/_next/image?url=%2Fimages%2Fspeakers%2Fjhankar.png&w=384&q=75"
                alt=""
              />
              <h2 className="text-2xl font-semibold">Jhanker Mahmub</h2>
              <p className="text-xl">Founder, Programming Hero</p>
              <p className="text-xl">Founder, Programming Hero</p>
              <p className="text-xl">Founder, Programming Hero</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Teacher;
