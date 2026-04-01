import { use } from "react";
import ToolCard from "../ToolCard/ToolCard";
import Cart from "../Cart/Cart";

const Tools = ({toolPromise, cart, setCart}) =>{
    const tools = use(toolPromise)
    // const [isBuy, setIsBuy] = useState(false)
    return(
        <div className="">
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-6 mx-auto w-[80%]">
                {tools.map(tool => 
                <ToolCard key={tool.id} tool={tool} cart={cart} setCart={setCart}/>)}
            </div>
        </div>
    )
}


export default Tools