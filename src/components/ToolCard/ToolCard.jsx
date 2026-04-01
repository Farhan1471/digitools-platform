import { useState } from "react";


const ToolCard = ({ tool, cart, setCart}) => {
    
  const [isBuy, setIsBuy] = useState(false);

  const handleBuy = () => {
    setIsBuy(true);
    setCart([...cart, tool]);

  };

  return (
    <div className="">
        <div className="card w-96 bg-[#F9FAFC] shadow-sm max-w-[300px]">
            <div className="card-body">
                <div>
                    <img src={tool.icon} alt="" />
                    <p className="bg-red-300 rounded-full px-3 py-2">{tool.tag}</p>
                    <h2 className="text-2xl font-semibold mb-1">{tool.name}</h2>
                    <p className="text-[#627382FF] mb-2">{tool.description}</p>
                    <p className="text-[#627382FF] mb-3"><span className="text-3xl text-black font-bold">${tool.price}</span>/{tool.period}</p>
                </div>
                <ul className="flex flex-col gap-2 text-xs">
                    {tool.features.map((feature, index) => (
                    <li key={index}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span className="text-[#627382FF]">{feature}</span>
                    </li>
                    ))}
                </ul>
                <div className="mt-6">
                    <button onClick={handleBuy} className="btn btn-primary rounded-full w-full bg-gradient-to-r from-[#4f39f6] to-[#9514fa]">{isBuy ? "Added to Cart" : "Buy Now"}</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ToolCard;
