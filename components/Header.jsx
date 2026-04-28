import icon from "../src/assets/claude.svg";

export default function Header(props) {
    return (
        <>
            <header>
                <nav>
                    <img src={icon} alt="Claude icon" />
                    <h1>Chef Claude</h1>
                </nav>
            </header>
        </>
    );
}
