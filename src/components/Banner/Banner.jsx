import BannerImage from "../../assets/banner.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDot } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const Banner = () => {
  return (
    <div className="relative min-h-162.5 flex items-center overflow-hidden">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-4">
          <div className="flex w-fit items-center gap-2 bg-[#4f39f6]/20 text-[#4f39f6] text-sm font-medium px-4 py-2 rounded-full mx-auto lg:mx-0">
            <FontAwesomeIcon icon={faCircleDot} />
            New: AI-Powered Tools Available
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center lg:text-left leading-tight text-black">
            Supercharge Your
            <br />
            <span>
              Digital Workflow
            </span>
          </h1>

          <p className="text-md text-zinc-700 max-w-lg text-center lg:text-left">
            Access premium AI tools, design assets, templates, and productivity <br /> software—all in one place. Start creating faster today. <br /> Explore Products

          </p>

          <div className="flex flex-wrap gap-4 pt-4 sm:flex-row justify-center lg:justify-start">
            <button className="btn rounded-full text-white bg-gradient-to-r from-[#4f39f6] to-[#9514fa]">
              Explore Products
            </button>
            <button className="btn bg-white border-[#4f39f6] rounded-full text-[#4f39f6]">
              <FontAwesomeIcon icon={faPlay} />
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <img
              className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-3xl animate-pulse"
              src={BannerImage}
              alt="AI Models Banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;