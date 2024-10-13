import { Link } from 'react-router-dom';
import gameIcon from '../img/console.png';

export default function GameLink() {
    return (
        <Link className="segment gameSegment" to="/Game">
            <div className="icon-container">
                <img src={gameIcon} className="profile" alt="profile" />
            </div>
            <div className="segment-text-container">
                <h3>MAZERUNNER! Gjord med Godot Engine, är även mobilanpassad</h3>
            </div>
        </Link>
    )
}