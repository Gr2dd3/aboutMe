import { Link } from 'react-router-dom';
import upcomingIcon from '../img/upcoming-events.png';

export default function UpcomingProjectsLink() {
    return (
        <Link className="segment upcomingProjectsSegment" to="/UpcomingProjects">
            <div className="icon-container">
                <img src={upcomingIcon} className="profile" alt="profile" />
            </div>
            <div className="segment-text-container">
                <h3>Se vilka projekt som kommer dyka upp snart</h3>
            </div>
        </Link>
    )
}