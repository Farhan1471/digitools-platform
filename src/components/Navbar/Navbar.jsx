import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Cart from '../Cart/Cart'



const Navbar = ({cart}) => {
    return(
        <div className="">
            <div className='hidden md:flex navbar w-[80%] mx-auto sm:hidden'>
                <div className="navbar-start">
                    <h2 className="bg-gradient-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent text-3xl font-bold pb-1">DigiTools</h2>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal gap-10 px-1 text-md">
                        <li><a className='hover:bg-transparent hover:text-purple-600 hover:font-semibold'>Products</a></li>
                        <li><a className='hover:bg-transparent hover:text-purple-600 hover:font-semibold'>Features</a></li>
                        <li><a className='hover:bg-transparent hover:text-purple-600 hover:font-semibold'>Prices</a></li>
                        <li><a className='hover:bg-transparent hover:text-purple-600 hover:font-semibold'>Testimonials</a></li>
                        <li><a className='hover:bg-transparent hover:text-purple-600 hover:font-semibold'>FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end gap-5">
                    <a className="cursor-pointer"><FontAwesomeIcon icon={faCartShopping} />{cart.length > 0 && cart.length}</a>
                    <a className="btn border-transparent bg-transparent text-black hover:bg-transparent hover:text-purple-600">Login</a>
                    <a className="btn rounded-full text-white bg-gradient-to-r from-[#4f39f6] to-[#9514fa]">Get Started</a>
                </div>
            </div>

            <div className="md:hidden w-[80%] mx-auto">
                <div className='flex justify-between items-center mb-4'>
                    <h2 className='bg-gradient-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent text-3xl font-bold'>DigiTool</h2>

                    <a className="cursor-pointer"><FontAwesomeIcon icon={faCartShopping} />{cart.length > 0 && cart.length}</a>
                    
                    <div className='dropdown dropdown-end'>
                        <label tabIndex={0} className="btn btn-ghost text-xl">☰</label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 right-0 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Products</a></li>
                            <li><a>Features</a></li>
                            <li><a>Prices</a></li>
                            <li><a>Testimonials</a></li>
                            <li><a>FAQ</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Navbar