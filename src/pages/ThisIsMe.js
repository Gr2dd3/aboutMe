import { Link } from "react-router-dom";
import portrait from '../img/Mattias23.jpg';
import coverletter from '../documents/Mattias_Gradin_-_Cover_Letter.pdf';
import homeIcon from '../img/216242_home_icon.svg';


export default function ThisIsMe() {
    return (
        <>
            <div className="segment aboutme" to="/ThisIsMe">
                <Link className="homelink" to="/">
                    <img src={homeIcon} alt="homebutton" />
                </Link>
                <div className="profile-container">
                    <img src={portrait} className="profile" alt="profile" />
                </div>
                <h1>Mattias Gradin</h1>
            </div>

                <embed className="pdf-viewer" type="application/pdf" src={coverletter}></embed>
       
        </>
    )
}