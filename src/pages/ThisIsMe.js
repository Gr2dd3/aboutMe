import portrait from '../img/Självporträtt1.jpg';
import IntroTextSection from "../components/IntroTextSection.js";
import ScrollToTop from '../components/ScrollToTop.js';
import HomeLink from "../components/HomeLink.js";

export default function ThisIsMe() {
    return (
        <div className="segment-container">
            <div className="segment aboutme-segment" to="/ThisIsMe">
            <HomeLink />
                <div className="profile-container">
                    <img src={portrait} className="profile" alt="profile" />
                </div>
                <h1>Mattias Gradin</h1>
            </div>
            <IntroTextSection />
            <div className="homeLink-bottomPage-container">
            <ScrollToTop />
            </div>
        </div>
    )
}