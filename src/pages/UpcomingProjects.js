import { Link } from 'react-router-dom'; // Importera Link
import UpcomingIcon from '../img/upcoming-events.png';
import HomeLink from "../components/HomeLink.js";

const UpcomingProjects = () => {
    const projects = [
        { id: 1, name: "Game Forum", description: "En app om spel för att hitta likasinnade och prata." },
        //{ id: 2, name: "Recept", description: "Spara dina favoritrecept" }
    ];

    return (
        <div>
            <div className="segment upcomingProjectsSegment">
            <HomeLink />
                <div className="icon-container">
                    <img src={UpcomingIcon} className="profile" alt="profile" />
                </div>
            </div>
            <div className="upcoming-segment-container">
                <h2 className="upcoming-projects-headline">Kommande Projekt</h2>
                <div className="upcoming-segment">
                    <ul>
                        {projects.map(project => (
                            <li key={project.id} className="project-item">
                                <div className="project-content">
                                    <span className="project-name">{project.name}</span>
                                    <p className="project-description">{project.description}</p>
                                    <Link to={`/UpcomingProjects/${project.id}?name=${project.name}&description=${project.description}`} className="project-button">Läs mer</Link>
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
