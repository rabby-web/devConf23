const About = () => {
  return (
    <div>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800  pb-4">
              About Us
            </h1>
            <p className="font-normal text-lg leading-6 text-gray-600 ">
              Each year, 8,000+ developers, engineers, software architects, dev
              teams, managers, and executives from 70+ countries gather for
              DeveloperWeek (Feb 21–23, 2024, San Francisco Bay Area & Feb
              27-29, 2024, Virtual) to discover the latest in developer
              technologies, languages, platforms, and tools. DeveloperWeek 2024
              is the largest developer conference & event series including the
              DeveloperWeek 2024 Conference & Expo, 1,000+ attendee hackathon,
              800+ attendee tech hiring expo, and a series of workshops,
              technical talks, and keynotes. Because DeveloperWeek covers all
              new technologies, our conference and workshops invite you to get
              intro lessons (or advanced tips and tricks) on technologies like
              VR Dev, Artificial Intelligence Dev, Blockchain Dev, IoT Dev,
              Serverless technology, Microservices technology, new JavaScript
              frameworks, and more. This year, DeveloperWeek will have an
              expanded DevExec World, which is 2 days of roundtable talks,
              educational talks, and networking events for engineering managers,
              tech executives, and lead developers. Additionally, DeveloperWeek
              will be co-located with ProductWorld and CloudWorld.
            </p>
          </div>
          <div className="w-full lg:w-8/12">
            <img
              className="w-full h-full"
              src="https://i.ibb.co/dMxPynZ/technology-service.jpg"
              alt="A group of People"
            />
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800  pb-4">
              Our Conference Center
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600 ">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum.In the first place we have granted to
              God, and by this our present charter confirmed for us and our
              heirs forever that the English Church shall be free, and shall
              have her rights entire, and her liberties inviolate; and we will
              that it be thus observed; which is apparent from
            </p>
          </div>
          <div className="w-full lg:w-8/12 lg:pt-8">
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="https://i.ibb.co/17x57Nk/s1-png.png"
                  alt="Alexa featured Image"
                />
                <img
                  className="md:hidden block"
                  src="https://i.ibb.co/VCJc0Bb/s2.png"
                  alt="Alexa featured Image"
                />
                <p className="font-medium text-xl leading-5 text-gray-800  mt-4">
                  Convention City
                </p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="https://i.ibb.co/fXFwrHS/s4.png"
                  alt="Olivia featured Image"
                />
                <img
                  className="md:hidden block"
                  src="https://i.ibb.co/RBHDrFn/b1.png"
                  alt="Olivia featured Image"
                />
                <p className="font-medium text-xl leading-5 text-gray-800  mt-4">
                  The Olives
                </p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="https://i.ibb.co/6rCGR1L/s6.png"
                  alt="Liam featued Image"
                />
                <img
                  className="md:hidden block"
                  src="https://i.ibb.co/6rCGR1L/s6.png"
                  alt="Liam featued Image"
                />
                <p className="font-medium text-xl leading-5 text-gray-800  mt-4">
                  Conference Center
                </p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="https://i.ibb.co/RBHDrFn/b1.png"
                  alt="Elijah featured image"
                />
                <img
                  className="md:hidden block"
                  src="https://i.ibb.co/RBHDrFn/b1.png"
                  alt="Elijah featured image"
                />
                <p className="font-medium text-xl leading-5 text-gray-800  mt-4">
                  Pan Pacific Sonargaon
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
