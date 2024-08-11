import { Link } from "react-router-dom";
import budgetIcon from '../img/budgetIcon.png';

export default function BudgetLink() {
    return (
        <Link className="segment budgetSegment" to="/Budget">
            <div className="icon-container">
                <img src={budgetIcon} className="budget-icon" alt="budget" />
            </div>
        </Link>
    )
}