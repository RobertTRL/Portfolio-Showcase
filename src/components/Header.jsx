import '../styles/header.css'

export default function Header() {
    return (
        <header className="header">
            <h3>React Portfolio Showcase</h3>
            <nav className="navbar">
                <a href="#hero">Home</a>
                <a href="#search">Search</a>
                <a href="#projects">View projects</a>
                <a href="">Add Project</a>
            </nav>
        </header>
    )
}