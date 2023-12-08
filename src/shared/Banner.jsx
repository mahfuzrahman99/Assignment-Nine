import dog from "../assets/dogbanner.png";
import female from "../assets/docter 2.png";
import bannerBg from "../assets/R-removebg-preview.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Banner = () => {
  return (
    <div
      className="relative mb-16 rounded-lg py-5"
      style={{
        backgroundImage: `url(${bannerBg})`, // Set the background image
        backgroundSize: "cover", // Adjust the background size as needed
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0  bg-black opacity-70"
        style={{ zIndex: 1 }}
      ></div>

      <div className="flex flex-col-reverse z-10 md:flex-row justify-center items-center relative">
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
        >
          <h2 className="text-2xl md:text-4xl text-center font-extrabold text-white">
            Why is cleanliness important <br /> for humans?
          </h2>
          <p className="text-lg font-normal mt-3 text-center text-white">
            Cleanliness is vital for health, well-being, safety, and
            productivity <br /> It prevents disease, enhances comfort, and
            promotes respect, <br /> impacting individuals and the environment
            positively
          </p>
        </div>
        <div className="">
          <img
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            src={female}
            alt=""
          />
        </div>
      </div>

      <div className="md:flex  justify-center z-10 items-center gap-16 md:gap-0 relative">
        <div>
          <img
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            src={dog}
            alt=""
          />
        </div>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
        >
          <h2 className="text-2xl md:text-4xl text-center font-extrabold text-white">
            What is Healthy Paws?
          </h2>
          <p className="text-lg font-normal mt-3 text-center text-white">
            Healthy Paws is a contemporary service for those <br /> who require
            remote consultation services <br /> regarding the health of their
            pets
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
