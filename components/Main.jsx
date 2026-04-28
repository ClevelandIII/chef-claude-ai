import React from "react";
import List from "./List";
import Recipe from "./Recipe";
import { getRecipeFromChefClaude } from "../ai";
import Claude from "./Claude";

export default function Main(props) {
    const [ingredientList, setIngredientList] = React.useState([]);
    const [recipe, setRecipe] = React.useState("");

    const list = ingredientList.map((prev) => <List item={prev} />);

    /**
     * Challenge: Get a recipe from the AI!
     *
     * This will be a bit harder of a challenge that will require you
     * to think critically and synthesize the skills you've been
     * learning and practicing up to this point.
     *
     * Using either the `getRecipeFromChefClaude` function or the
     * `getRecipeFromMistral` function, make it so that when the user
     * clicks "Get a recipe", the text response from the AI is displayed
     * in the <ClaudeRecipe> component.
     *
     * For now, just have it render the raw markdown that the AI returns,
     * don't worry about making it look nice yet. (We're going to use a
     * package that will render the markdown for us soon.)
     */

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromChefClaude(ingredientList);
        setRecipe(recipeMarkdown);
    }

    function add(formData) {
        const newIngredient = formData.get("ingredient");
        setIngredientList((prev) => [...prev, newIngredient]);
    }

    return (
        <main>
            <form action={add}>
                <input
                    type="text"
                    placeholder="Enter ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

            {ingredientList.length > 0 && (
                <section className="form-results">
                    <h2>Ingredients on hand:</h2>
                    <ul>{list}</ul>
                </section>
            )}

            {ingredientList.length >= 4 && <Recipe onClick={getRecipe} />}

            <Claude recipe={recipe} />
        </main>
    );
}
