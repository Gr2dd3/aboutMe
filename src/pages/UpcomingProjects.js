import { Link } from 'react-router-dom'; // Importera Link
import UpcomingIcon from '../img/upcoming-events.png';
import HomeLink from "../components/HomeLink.js";
import { useState } from 'react';

const UpcomingProjects = () => {
    // Definiera projekten först
    const projects = [
        { id: 1, name: "Game Forum", presentation: "Skapa ämnen och diskutera. Byggt med Razor Pages", description: "Byggt med Razor Pages och ett RestAPI i bakgrunden är ett ställe där man kan göra inlägg, kommentera och skicka privata meddelanden till andra användare" },
        { id: 2, name: "QR Scanning", presentation: "Skapa QR-koder", description: "Mer utförlig beskrivning kommer senare" },
        { id: 3, name: "Playgrounds", presentation: "Hitta till och betygsätt lekplatser", description: "Längre beskrivning kommer."}
    ];

    const [votes, setVotes] = useState(Array(projects.length).fill(0)); // Array för att hålla röstresultat

    const handleVote = (index) => {
        const newVotes = [...votes];
        newVotes[index] += 1; // Öka rösten för valt projekt
        setVotes(newVotes); // Uppdatera state
    };

    return (
        <div>
            <div className="segment upcomingProjectsSegment-inpage">
                <HomeLink />
                <div className="icon-container">
                    <img src={UpcomingIcon} className="profile" alt="profile" />
                </div>
            </div>
                <h2 className="upcoming-projects-headline">Kommande Projekt</h2>
            <div className="upcoming-segment-container">
                <div className="upcoming-segment">
                    <ul>
                        {projects.map((project, index) => (
                            <li key={project.id} className="project-item">
                                <div className="project-content">
                                    <span className="project-name">{project.name}</span>
                                    <p className="project-description">{project.presentation}</p>
                                    <Link to={`/UpcomingProjects/${project.id}?name=${project.name}&description=${project.description}`} className="project-button">Läs mer</Link>
                                    <button className="vote-button" onClick={() => handleVote(index)}>Rösta</button> {/* Röstknapp */}
                                    <div className="vote-result">Röster: {votes[index]}</div> {/* Visa röstningsresultat */}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UpcomingProjects;
