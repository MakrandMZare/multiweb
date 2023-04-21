import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title"><img src="./logo23.png" alt="metro" width="150px"></img></Link> 
            <ul>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </ul>
        </nav>
    )
}

