import { Link } from "react-router-dom";
import '../styling/StartPage.css';
import portrait from '../img/Mattias23.jpg';

export default function StartPage(){
    return (
        <>
            <Link class="segment a2" to="/ThisIsMe">
                <div class="profile-container">
                    <img src={portrait} class="profile" alt="profile" />
                </div>
                <h1>Mattias Gradin</h1>
            </Link>
        </>
    )
}