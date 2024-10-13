
import { Link } from "react-router-dom";
import recipeBook from '../img/recipe-book.png';

export default function RecipeLink() {
    return (
        <Link className="segment recipeSegment" to="/Recipe">
            <div className="icon-container">
                <img src={recipeBook} className="budget-icon" alt="budget" />
            </div>
            <div className="segment-text-container">
                <h3>Made in .Net MAUI</h3>
            </div>
        </Link>
    )
}