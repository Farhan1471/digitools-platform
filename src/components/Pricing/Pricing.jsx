const Pricing = () => {
  return (
    <div className="mt-16">
        <div className="text-center mb-6">
            <h3 className="text-4xl font-semibold mb-2">Simple, Transparent Pricing</h3>
            <p className="text-[#627382FF] mb-2">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full md:w-[90%] lg:w-[80%] mx-auto px-4 justify-items-center">
            <div className="card w-96 bg-[#F9FAFC] shadow-sm max-w-[300px]">
                <div className="card-body flex flex-col">
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
                    <div className="mt-auto">
                        <button className="btn btn-primary rounded-full w-full bg-gradient-to-r from-[#4f39f6] to-[#9514fa]">Get Started Free</button>
                    </div>
                </div>
            </div>

            <div className="card realative w-96 bg-gradient-to-r from-[#4f39f6] to-[#9514fa] shadow-sm max-w-[300px] text-white">

                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FEF3C6] text-[#BB4D00] text-xs font-medium px-3 py-1 rounded-full">
                    Most Popular
                </div>


                <div className="card-body">
                    <div className="">
                        <h2 className="text-2xl font-semibold mb-1">Pro</h2>
                        <p className="text-white mb-2">Best for professionals</p>
                        <p className="text-white mb-3"><span className="text-3xl text-white font-bold">$29</span>/Month</p>
                    </div>
                    <ul className="flex flex-col gap-2 text-xs">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className="text-white">Access to all premium tools</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className="text-white">Unlimited templates</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className="text-white">Priority support</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className="text-white">Unlimited Projects</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className="text-white">Cloud Sync</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className="text-white">Advanced Analytics</span>
                        </li>
                    </ul>
                    <div className="mt-6">
                        <button className="btn btn-primary rounded-full w-full bg-white text-[#4f39f6]">Start Pro Trial</button>
                    </div>
                </div>
            </div>

            <div className="card w-96 bg-[#F9FAFC] shadow-sm max-w-[300px]">
                <div className="card-body">
                    <div className="">
                        <h2 className="text-2xl font-semibold mb-1">Enterprise</h2>
                        <p className="text-[#627382FF] mb-2">For teams and businesses</p>
                        <p className="text-[#627382FF] mb-3"><span className="text-3xl text-black font-bold">$99</span>/Month</p>
                    </div>
                    <ul className="flex flex-col gap-2 text-xs">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className="text-[#627382FF]">Everything in Pro</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className="text-[#627382FF]">Team collaboration</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className="text-[#627382FF]">Custom integration</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className="text-[#627382FF]">Dedicated Support</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className="text-[#627382FF]">SLA guarantee</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className="text-[#627382FF]">Custom branding</span>
                        </li>
                    </ul>
                    <div className="mt-6">
                        <button className="btn btn-primary rounded-full w-full bg-gradient-to-r from-[#4f39f6] to-[#9514fa]">Contact Sales</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Pricing;