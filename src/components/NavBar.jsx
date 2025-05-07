import { Link } from 'react-router'
import { CiShoppingCart } from "react-icons/ci";
import "../style/components/_navBar.scss"
import { IoMenu } from "react-icons/io5";


export default function NavBar({ setShowCartList }) {
    return (
        <div>
            <nav>
                <img src="logo.png" alt="" />
                <ul className="links">
                    <Link to={"/"}>Home</Link>
                    <Link to={"/Shop"}>Shop</Link>
                    <Link to={"/Blog"}>Blog</Link>
                    <Link to={"/About Us"}>About Us</Link>
                    <Link to={"/Contact Us"}>Contact US</Link>
                </ul>
                <IoMenu className='menu_bar'/>
                <div className="wcicon">
                    <CiShoppingCart onClick={() => setShowCartList(true)} />
                    <div className="cart">
                        <div className="cart_number">0</div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
