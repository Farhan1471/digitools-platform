const Workflow = () => {
  return (
    <div className="mt-24">
        <div className="hero bg-gradient-to-r from-[#4f39f6] to-[#9514fa] py-12">
            <div className="hero-content text-center text-white">
                <div className="">
                    <h1 className="text-4xl font-semibold">Ready to Transform Your Workflow?</h1>
                    <p className="pt-2 pb-6 text-sm">
                        Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.
                    </p>
                    <div className="flex gap-3 justify-center">
                        <button className="btn btn-primary rounded-full bg-white text-[#4f39f6]">Explore Products</button>
                        <button className="btn btn-primary rounded-full bg-transparent border-white text-white">View Pricing</button>
                    </div>

                    <div>
                        <p className="text-sm pt-4">14-day free trial • No credit card required • Cancel anytime</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Workflow;