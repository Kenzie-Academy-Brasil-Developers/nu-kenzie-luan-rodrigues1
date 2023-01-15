import logo from "../../assets/Nu Kenzie.png"

const Header = () => {
    return (
        <header>
            <nav>
                <img src={logo} alt="Logo" />
                <button>Inicio</button>
            </nav>
        </header>
    )
}

export default Header