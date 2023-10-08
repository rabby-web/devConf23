import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Blog = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-200 text-[#387DF8] ">
        <div
          className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-[#387DF8]">
              Event Blog
            </h2>
            <p className=" text-[#387DF8] font-semibold sm:text-2xl ">
              We use an agile approach to test assumptions and connect with the
              needs of your audience early and often.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-between items-center mb-5 text-gray-500">
                <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                  <svg
                    className="mr-1 w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                  </svg>
                  Tutorial
                </span>
                <span className="text-sm text-[#387DF8]">14 days ago</span>
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-[#387DF8] ">
                <a href="#">LeadDev March 14-15, New York</a>
              </h2>
              <p className="mb-5 font-light text-white">
                LeadDev is considered one of the most major technical leadership
                events of the year. A popular conference for engineering
                managers and executives, LeadDev’s two-day event is great for
                networking and getting practical advice with other leaders in
                top leaders including with David Yee (VP of Engineering, The New
                York Times), Lena Reinhard (Engineering Leadership & Executive
                Coach), Carol Lee (Senior Research Scientist, Pluralsight Flow),
                Polina Giralt (Staff Engineer, Squarespace), Matthias Gruter
                (Engineering Lead, Computer & Networking, Spotify), Mike McQuaid
                (Principal Engineer, GitHub), and David Fowler (Partner Software
                Architect, Microsoft).
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <img
                    className="w-7 h-7 rounded-full"
                    src="https://devconfbd.com/_next/image?url=%2Fimages%2Fspeakers%2Fsamnan.png&w=384&q=75"
                    alt="Jese Leos avatar"
                  />
                  <span className="font-medium dark:text-white">Jese Leos</span>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                >
                  Read more
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </article>
            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-between items-center mb-5 text-gray-500">
                <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                  <svg
                    className="mr-1 w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                      clip-clipRule="evenodd"
                    ></path>
                    <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
                  </svg>
                  Article
                </span>
                <span className="text-sm text-[#387DF8]">14 days ago</span>
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-[#387DF8]">
                <a href="#"> NDC London January 23-27, London</a>
              </h2>
              <p className="mb-5 font-light text-white">
                The Queen Elizabeth II Center is hosting NDC London this year.
                Participants will get exclusive access to 12 workshops (Python,
                Microservices, DevOps, and more) and around 115 conference
                sessions (JavaScript, Agile, Embedded, Big Data, Serverless,
                .NET, Design, Artificial Intelligence, Docker, IoT, and
                Architecture). The list of speakers includes Adrienne Braganza
                Tacke (Senior Developer Advocate, Cisco), Alyssa Nicoll (Sr.
                Developer Advocate at Progress and Angular Google Developer
                Expert), Callum Whyte (.NET Developer, Microsoft MVP), Hila Fish
                (Senior DevOps Engineer, Wix.com), and Jo Franchetti (DevRel,
                Spotify).
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <img
                    className="w-7 h-7 rounded-full"
                    src="https://devconfbd.com/_next/image?url=%2Fimages%2Fspeakers%2Fnazib.png&w=384&q=75"
                    alt="Bonnie Green avatar"
                  />
                  <span className="font-medium dark:text-white">
                    Bonnie Green
                  </span>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                >
                  Read more
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-clipRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
