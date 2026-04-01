import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return(
        <div className="navbar w-[80%] mx-auto">
            <div className="navbar-start">
                <h2 className="bg-gradient-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent text-3xl font-bold pb-1">DigiTools</h2>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal gap-10 px-1 text-md">
                    <li>
                        <a className='hover:bg-transparent hover:text-purple-600 hover:font-semibold'>Products</a>
                    </li>
                    <li>
                        <a className='hover:bg-transparent hover:text-purple-600 hover:font-semibold'>Features</a>
                    </li>
                    <li>
                        <a className='hover:bg-transparent hover:text-purple-600 hover:font-semibold'>Prices</a>
                    </li>
                    <li>
                        <a className='hover:bg-transparent hover:text-purple-600 hover:font-semibold'>Testimonials</a>
                    </li>
                    <li>
                        <a className='hover:bg-transparent hover:text-purple-600 hover:font-semibold'>FAQ</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-end gap-5">
                <a className="cursor-pointer"><FontAwesomeIcon icon={faCartShopping} /></a>
                
                <a className="btn border-transparent bg-transparent text-black hover:bg-transparent hover:text-purple-600">Login</a>
                <a className="btn rounded-full text-white bg-gradient-to-r from-[#4f39f6] to-[#9514fa]">Get Started</a>
            </div>
        </div>
    );
};

export default Navbar