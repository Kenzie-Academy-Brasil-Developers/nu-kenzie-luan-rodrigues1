import { useContext } from "react"
import { TransactionsContext } from "../../contexts/transactionsContext"
import logo from "../../assets/Nu Kenzie.png"

const Header = () => {
    const {} = useContext(TransactionsContext)
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