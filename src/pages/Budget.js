export default function Budget() {
    const source = "https://ambitious-dune-07093cb1e.5.azurestaticapps.net/"

    return (
        <iframe
            src={source}
            className="svelteBudget-frame"
            title="Svelte Budget Project"
        />
    );
}