import { Link } from "react-router-dom"
import logo from "../../assets/Nu Kenzie.png"
import cardhome from "../../assets/cardhome2.png"
const Home = () => {
    return (
        <>
        <section>
            <header>
                <img src={logo} alt="logo"/>
                <h1>Centralize o controle das suas finanças</h1>
                <h3>de forma rápida e segura</h3>
                <Link to={"/dashboard"}>Iniciar</Link>
            </header>
            <div>
                <img src={cardhome} alt="imagem de card dashboard" />
            </div>
        </section>

        </>
    )
}

export default Home