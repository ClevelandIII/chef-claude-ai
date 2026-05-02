import icon from "../src/assets/claude2.svg";

export default function Header(props) {
    return (
        <>
            <header>
                <nav>
                    <img src={icon} alt="Claude icon" className="claudeIcon"/>
                    <h1>Chef Claude</h1>
                </nav>
            </header>
        </>
    );
}
