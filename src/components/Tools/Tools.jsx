import { use } from "react";
import ToolCard from "../ToolCard/ToolCard";
import Cart from "../Cart/Cart";

const Tools = ({toolPromise, cart, setCart}) =>{
    const tools = use(toolPromise)
    // const [isBuy, setIsBuy] = useState(false)
    return(
        <div className="mt-24">
            <div className="text-center">
                <h3 className="text-4xl font-semibold mb-2">Premium Digital Tools</h3>
                <p className="text-[#627382FF] mb-2">Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            </div>

            <div className="grid grid-cols-3 justify-items-center gap-2 mx-auto">
                {tools.map(tool => 
                <ToolCard key={tool.id} tool={tool} cart={cart} setCart={setCart}/>)}
            </div>
        </div>
    )
}


export default Tools