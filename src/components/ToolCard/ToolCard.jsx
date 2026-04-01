import { useState } from "react";
import { toast } from "react-toastify";


const ToolCard = ({ tool, cart, setCart}) => {
    
  const [isBuy, setIsBuy] = useState(false);

  const handleBuy = () => {
    setIsBuy(true);

    const isFound = cart.find(item => item.id === tool.id)
    if(isFound){
        toast.error("Item already in cart")
        return
    }


    setCart([...cart, tool]);
    toast("Item added to cart")
  };

  return (
        <div className="card w-[90%] bg-[#F9FAFC] shadow-sm">
            <div className="card-body">
                <div>

                    <div className="flex items-start justify-between">
                        <div className="bg-white rounded-full w-fit p-2.5 border-2 border-[#F2F2F2] mb-2">
                            <img src={tool.icon} alt="User" height={20} width={20} />
                        </div>
                        {/* <p className="bg-red-300 rounded-full px-2 py-1 w-fit">{tool.tag}</p> */}
                        <div className="flex w-fit items-center gap-2 bg-[#4f39f6]/20 border border-[#4f39f6] text-[#4f39f6] text-xs font-medium px-2 py-1 rounded-full mx-auto lg:mx-0 mt-[-10px]">
                            {tool.tag}
                        </div>
                    </div>

                    <h2 className="text-xl font-semibold mb-1">{tool.name}</h2>
                    <p className="text-[#627382FF] text-xs mb-2">{tool.description}</p>
                    <p className="text-[#627382FF] text-xs mb-2"><span className="text-2xl text-black font-semibold">${tool.price}</span>/{tool.period}</p>
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
  );
};

export default ToolCard;
