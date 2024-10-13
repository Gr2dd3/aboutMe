
import { Link } from "react-router-dom";
import portrait from '../img/Mattias23.jpg';

export default function AboutMe() {
    return (
        <Link className="segment aboutme" to="/ThisIsMe">
            <div className="profile-container">
                <img src={portrait} className="profile" alt="profile" />
            </div>
            <div className="segment-text-container">
                <h3>Läs om och kontakta mig!</h3>
            </div>
        </Link>
    )
}