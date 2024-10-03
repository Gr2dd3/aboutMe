import { Link } from 'react-router-dom';
import forumIcon from '../img/chat.png';

export default function GameLink() {
    return (
        <Link className="segment forumSegment" to="/Forum">
            <div className="icon-container">
                <img src={forumIcon} className="profile" alt="profile" />
            </div>
        </Link>
    )
}