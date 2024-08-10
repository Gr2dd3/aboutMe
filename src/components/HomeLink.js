import { Link } from "react-router-dom";
import homeIcon from '../img/216242_home_icon.svg';

export default function HomeLink() {
    return (
        <Link className="homelink" to="/">
        <img className="homelink-icon" src={homeIcon} alt="homebutton" />
    </Link>
    )
}