// import UserIcon from "../../assets/user.png";
// import PackageIcon from "../../assets/package.png";
// import RocketIcon from "../../assets/rocket.png";


const Pricing = () => {
  return (
    <div className="mt-24">
        <div className="text-center">
            <h3 className="text-4xl font-semibold mb-2">Get Started in 3 Steps</h3>
            <p className="text-[#627382FF] mb-2">Start using premium digital tools in minutes, not hours.</p>
        </div>

        <div className="flex justify-center gap-7">
            <div className="card w-96 bg-[#F9FAFC] shadow-sm max-w-[300px]">
                <div className="card-body">
                    <div className="">
                        <h2 className="text-2xl font-semibold mb-1">Starter</h2>
                        <p className="text-[#627382FF] mb-2">Perfect for getting started</p>
                        <p className="text-[#627382FF] mb-3"><span className="text-3xl text-black font-bold">$0</span>/Month</p>
                    </div>
                    <ul className="flex flex-col gap-2 text-xs">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className="text-[#627382FF]">Access to 10 free tools</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className="text-[#627382FF]">Basic templates</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className="text-[#627382FF]">Community support</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className="text-[#627382FF]">1 project per month</span>
                        </li>
                    </ul>
                    <div className="mt-6">
                        <button className="btn btn-primary rounded-full w-full bg-gradient-to-r from-[#4f39f6] to-[#9514fa]">Get Started Free</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-[#F9FAFC] shadow-sm max-w-[300px]">
                <div className="card-body">
                    <div className="">
                        <h2 className="text-2xl font-semibold mb-1">Pro</h2>
                        <p className="text-[#627382FF] mb-2">Best for professionals</p>
                        <p className="text-[#627382FF] mb-3"><span className="text-3xl text-black font-bold">$29</span>/Month</p>
                    </div>
                    <ul className="flex flex-col gap-2 text-xs">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className="text-[#627382FF]">Access to all premium tools</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className="text-[#627382FF]">Unlimited templates</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className="text-[#627382FF]">Priority support</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className="text-[#627382FF]">Unlimited Projects</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className="text-[#627382FF]">Cloud Sync</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className="text-[#627382FF]">Advanced Analytics</span>
                        </li>
                    </ul>
                    <div className="mt-6">
                        <button className="btn btn-primary rounded-full w-full bg-gradient-to-r from-[#4f39f6] to-[#9514fa]">Get Started Free</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
  );
};

export default Pricing;