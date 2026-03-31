const Stats = () => {
  return (
    <div className="bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white w-full">
        <div className="flex justify-around px-60 py-8">
            <div className="">
                <div className="stat-value">50K+</div>
                <div className="stat-desc text-white">Active User</div>
            </div>

            <div className="">
                <div className="stat-value">200+</div>
                <div className="stat-desc text-white">Premium Tools</div>
            </div>

            <div className="">
                <div className="stat-value">4.9</div>
                <div className="stat-desc text-white">Rating</div>
            </div>
        </div>
    </div>
  );
};

export default Stats;