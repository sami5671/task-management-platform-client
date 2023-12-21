import Marquee from "react-fast-marquee";

const Promotion = () => {
  return (
    <section className="">
      <div className="text-white font-bold py-2 bg-gradient-to-r from-gray-500 to-cyan-500">
        <Marquee number={100}>
          <h1>
            "Transform your day with our task management app. Streamline tasks
            effortlessly, boost productivity, and seize success. Try now for
            enhanced efficiency." !!!!!!
          </h1>
        </Marquee>
      </div>
    </section>
  );
};

export default Promotion;
