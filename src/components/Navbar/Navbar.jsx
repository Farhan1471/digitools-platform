const Navbar = () => {
    return(
        <div className="navbar">
            <div className="navbar-start">
                <div className="flex items-center gap-1 font-bold text-xl">
                    <h2>DigiTools</h2>
                </div>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal gap-10 px-1 text-lg">
                    <li>
                        <a>Products</a>
                    </li>
                    <li>
                        <a>Features</a>
                    </li>
                    <li>
                        <a>Prices</a>
                    </li>
                    <li>
                        <a>Testimonials</a>
                    </li>
                    <li>
                        <a>FAQ</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-end gap-5">
                <a className="btn text-black">Login</a>
                <a className="btn rounded-full text-white bg-gradient-to-r from-[#4f39f6] to-[#9514fa]">Get Started</a>
            </div>
        </div>
    );
};

export default Navbar