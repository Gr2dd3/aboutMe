import AboutMe from '../components/AboutMe';
import BudgetLink from '../components/BudgetLink';
// import RecipeLink from '../components/RecipeLink';
import GameLink from '../components/GameLink';
// import ForumLink from '../components/ForumLink';
import UpcomingProjects from '../components/UpcomingProjektsLink';
import IntroToPage from '../components/IntroToPage';

export default function StartPage() {
    return (
        <>
            <IntroToPage />
            <div className="segment-container">
                <AboutMe />
                <BudgetLink />
                {/* <RecipeLink /> */}
                <GameLink />
                {/*<ForumLink />*/}
                <UpcomingProjects />
        </div>
        </>
    )
}