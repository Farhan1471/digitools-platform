import UserIcon from "../../assets/user.png";
import PackageIcon from "../../assets/package.png";
import RocketIcon from "../../assets/rocket.png";


const Feature = () => {
  return (
    <div className="mt-24">
        <div className="text-center">
            <h3 className="text-4xl font-semibold mb-2">Get Started in 3 Steps</h3>
            <p className="text-[#627382FF] mb-2">Start using premium digital tools in minutes, not hours.</p>
        </div>

        <div className="flex justify-center gap-7">
            <div className="card bg-base-100 w-88 h-88 shadow-sm">
                {/* Card Badge */}
                <div className="flex justify-end mr-4 mt-4 mb-6">
                    <div className="bg-gradient-to-r from-[#4f39f6] to-[#9514fa] rounded-full w-8 h-8 flex items-center justify-center text-white">01</div>
                </div>

                {/* Icon */}
                <div className="flex items-center justify-center">
                    <div className="bg-gradient-to-b from-[#4f39f6]/10 to-[#9514fa]/10 rounded-full p-4">
                        <img src={UserIcon} alt="User" height={40} width={40} />
                    </div>
                </div>

                {/* Card Description */}
                <div className="card-body text-center">
                    <h2 className="text-2xl font-semibold">Create Account</h2>
                    <p className="text-[#627382FF]">Sign up for free in seconds. No credit card required to get started.</p>
                </div>
            </div>

            <div className="card bg-base-100 w-88 h-88 shadow-sm">
                {/* Card Badge */}
                <div className="flex justify-end mr-4 mt-4 mb-6">
                    <div className="bg-gradient-to-r from-[#4f39f6] to-[#9514fa] rounded-full w-8 h-8 flex items-center justify-center text-white">02</div>
                </div>

                {/* Icon */}
                <div className="flex items-center justify-center">
                    <div className="bg-gradient-to-b from-[#4f39f6]/10 to-[#9514fa]/10 rounded-full p-4">
                        <img src={PackageIcon} alt="Package" height={40} width={40} />
                    </div>
                </div>

                {/* Card Description */}
                <div className="card-body text-center">
                    <h2 className="text-2xl font-semibold">Choose Products</h2>
                    <p className="text-[#627382FF]">Browse our catalog and select the tools that fit your needs.</p>
                </div>
            </div>

            <div className="card bg-base-100 w-88 h-88 shadow-sm">
                {/* Card Badge */}
                <div className="flex justify-end mr-4 mt-4 mb-6">
                    <div className="bg-gradient-to-r from-[#4f39f6] to-[#9514fa] rounded-full w-8 h-8 flex items-center justify-center text-white">03</div>
                </div>

                {/* Icon */}
                <div className="flex items-center justify-center">
                    <div className="bg-gradient-to-b from-[#4f39f6]/10 to-[#9514fa]/10 rounded-full p-4">
                        <img src={RocketIcon} alt="Rocket" height={40} width={40} />
                    </div>
                </div>

                {/* Card Description */}
                <div className="card-body text-center">
                    <h2 className="text-2xl font-semibold">Start Creating</h2>
                    <p className="text-[#627382FF]">Download and start using your premium  tools immediately.</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Feature;