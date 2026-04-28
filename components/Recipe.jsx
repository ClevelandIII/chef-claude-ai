

export default function Recipe(props) {
    return (
        <section className="call-claude">
            <div>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <button onClick={props.onClick}>Get a recipe</button>
        </section>
    );
}
