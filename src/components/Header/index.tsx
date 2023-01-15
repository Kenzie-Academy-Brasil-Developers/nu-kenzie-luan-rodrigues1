import logo from "../../assets/Nu Kenzie.png"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav>
                <img src={logo} alt="Logo" />
                <Link to={"/"}>Inicio</Link>
            </nav>
        </header>
    )
}

export default Header