
import BudgetLink from '../components/BudgetLink';

export default function Budget() {

    return (
        <>
            <BudgetLink />


            <iframe
                src="http://localhost:5173/"
                className="svelteBudget-container"
                title="Svelte Budget Project"
            />
        </>
    )
}