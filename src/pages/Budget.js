export default function Budget() {
    const source = "http://localhost:5173/"

    return (
        <iframe
            src={source}
            className="svelteBudget-frame"
            title="Svelte Budget Project"
        />
    );
}