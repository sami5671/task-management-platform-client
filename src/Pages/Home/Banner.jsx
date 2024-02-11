import { Link } from "react-router-dom";
import banner from "../../assets/Image/pic2.jpg";
import UseAuth from "../../Components/Hooks/UseAuth";
import img1 from "../../assets/Image/todo1.png";
import img2 from "../../assets/Image/mainlogo.png";
import img3 from "../../assets/Image/todo2.png";

const Banner = () => {
  const { user } = UseAuth();

  return (
    // <div className="relative bg-cover bg-center h-80 md:h-96 lg:h-screen flex items-center justify-center z-0">
    //   <img
    //     className="absolute w-full h-full object-cover object-center opacity-90"
    //     src={banner}
    //     alt="Banner"
    //   />
    //   <div className="absolute bg-slate-900 bg-opacity-60 w-full h-full rounded-md flex flex-col items-center justify-center z-10">
    //     <div className="lg:px-44">
    //       <h2 className="text-2xl lg:text-7xl mt-12 font-bold mb-4 text-white">
    //         Empower Your Day with Seamless Task Management
    //       </h2>
    //       <p className="text-base sm:text-lg px-2 md:text-xl lg:text-2xl text-white">
    //         Transform your daily routine with our task management app.
    //         Seamlessly organize, prioritize, and accomplish tasks with
    //         efficiency. Empower your day for success and boost productivity
    //         effortlessly.
    //       </p>
    //       {user ? (
    //         <p className="text-white"></p>
    //       ) : (
    //         <Link to="/login">
    //           <div className="px-2">
    //             <button className="bg-gray-800 mt-4 text-white px-8 py-3 rounded-md shadow-lg hover:bg-white hover:text-black transition duration-300">
    //               Let's Explore
    //             </button>
    //           </div>
    //         </Link>
    //       )}
    //     </div>
    //   </div>
    // </div>

    <div className="max-w-screen-xl mx-auto">
      <div>
        <h1 className="text-white mb-24">hello</h1>
      </div>
      <section className="grid lg:grid-cols-3 gap-6">
        <div>
          <img src={img1} className="lg:w-[340px] lg:h-[550px]" alt="" />
        </div>
        <div className="flex flex-col items-center lg:mt-32">
          <img src={img2} className="w-[100px] h-[90px]" alt="" />
          <h1 className="text-slate-500 text-3xl">Microsoft To Do</h1>
          <p className="mt-4 mb-4">To Do gives you focus, from work to play.</p>
          <button className="px-8 py-2 border-2 text-black hover:bg-blue-500 hover:text-white cursor-pointer">
            Get started
          </button>
        </div>
        <div>
          <img src={img3} className="lg:w-[310px] lg:h-[570px]" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Banner;
