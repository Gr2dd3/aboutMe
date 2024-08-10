import {useEffect, useRef} from 'react';

export default function Budget() {
    const source = "http://localhost:5173/"
    const iframeRef = useRef(null);

    useEffect(() => {
        const handleResize = (event) => {
            if (event.origin === source) {
                iframeRef.current.style.height = `${event.data.height}px`;
            }
        };

        window.addEventListener("message", handleResize);

        return () => {
            window.removeEventListener("message", handleResize);
        };
    }, []);

    return (
        <iframe
            ref={iframeRef}
            src={source}
            className="svelteBudget-frame"
            title="Svelte Budget Project"
        />
    );
}