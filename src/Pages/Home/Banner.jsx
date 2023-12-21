import banner from "../../assets/Image/pic2.jpg";

const Banner = () => {
  return (
    <div className="relative bg-cover bg-center h-80 md:h-96 lg:h-screen flex items-center justify-center z-0">
      <img
        className="absolute w-full h-full object-cover object-center opacity-90"
        src={banner}
        alt="Banner"
      />
      <div className="absolute bg-slate-900 bg-opacity-60 w-full h-full rounded-md flex flex-col items-center justify-center z-10">
        <div className="lg:px-44">
          <h2 className="text-2xl lg:text-7xl mt-12 font-bold mb-4 text-white">
            Empower Your Day with Seamless Task Management
          </h2>
          <p className="text-base sm:text-lg px-2 md:text-xl lg:text-2xl text-white">
            Transform your daily routine with our task management app.
            Seamlessly organize, prioritize, and accomplish tasks with
            efficiency. Empower your day for success and boost productivity
            effortlessly.
          </p>
          <div className="px-2">
            <button className="bg-gray-800 mt-4 text-white px-8 py-3 rounded-md shadow-lg hover:bg-white hover:text-black transition duration-300">
              Let's Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
