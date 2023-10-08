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
              Education Conference a Pathway to Success
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-between items-center mb-5 text-gray-500">
                <span className="text-sm text-[#387DF8]">11 days ago</span>
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-[#387DF8] ">
                <a href="#">Education Conference a Pathway to Success</a>
              </h2>
              <p className="mb-5 font-light text-white">
                The secret to success in the ever-changing field of education is
                to stay informed. The role of education conferences in shaping
                the future of learning cannot be overstated. These events
                provide a platform for stakeholders, including educators,
                researchers, and others, to network, exchange ideas, and
                discover innovative teaching and learning strategies. Attending
                an education conference…
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
                </a>
              </div>
            </article>
            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-between items-center mb-5 text-gray-500">
                <span className="text-sm text-[#387DF8]">14 days ago</span>
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-[#387DF8]">
                <a href="#">
                  How Do You Get Conference Alerts For Your Favourite Academic
                  Conference?
                </a>
              </h2>
              <p className="mb-5 font-light text-white">
                Are you planning to present your recent research article at an
                academic conference? If yes, you will need to make extensive
                preparations ahead of time to give your finest performance.
                However, the most significant information you need now is the
                academic event’s date and location. Thousands of conferences are
                held throughout the year in various…
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
