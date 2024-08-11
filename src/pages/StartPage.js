import AboutMe from '../components/AboutMe';
import BudgetLink from '../components/BudgetLink';
// import RecipeLink from '../components/RecipeLink';
import GameLink from '../components/GameLink';
import ForumLink from '../components/ForumLink';

export default function StartPage() {
    return (
        <div className="segment-container">
            <AboutMe />
            <BudgetLink />
            {/* <RecipeLink /> */}
            <GameLink />
            <ForumLink />
        </div>
    )
}