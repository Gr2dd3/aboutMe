import { Link } from "react-router-dom";
import portrait from '../img/Mattias23.jpg';
import coverletter from '../documents/Mattias_Gradin_-_Cover_Letter.pdf';
import cv from '../documents/Mattias_Gradin_-_CV.pdf';
import homeIcon from '../img/216242_home_icon.svg';
import linkedinImage from '../img/linkedin.png';
import githubImage from '../img/github.png';


export default function ThisIsMe() {
    return (
        <div className="segment-container">
            <div className="segment aboutme" to="/ThisIsMe">
                <Link className="homelink" to="/">
                    <img className="homelink-icon" src={homeIcon} alt="homebutton" />
                </Link>
                <div className="profile-container">
                    <img src={portrait} className="profile" alt="profile" />
                </div>
                <h1>Mattias Gradin</h1>
            </div>

            <div className="text-container">
                <h3 className="headline">Hej,</h3>
                <p className="text">
                    Jag heter Mattias Gradin och jag tog examen som systemutvecklare i juni 2024. 
                    Jag hade ett starkt teknikintresse redan när jag gick gymnasiets teknikprogram med inrikting på dator/data 2003-2005. 
                    Det har suttit i och funnits som ett intresse hela livet. 
                </p>
                <p className="text">
                    Jag älskar problemlösningen som backend erbjuder och jag utvecklar mig gärna i nya spännande språk!
                    Frontend är något som ger mig utlopp för min visuella sida, jag tycker om att se ett snyggt resultat av mitt arbete.
                    Mitt inre tv-spelsbarn får utlopp när jag arbetar med att utveckla spel och digitala tvillingar.
                </p>
                <p className="text">
                    Jag har många års arbetslivserfarenhet inom olika brancher och vet hur man är professionell i alla väder.
                    Under min utbildning till systemutvecklare har jag fått möjligheten att studera/jobba väldigt nära 
                    olika företag vilket bidragit ytterliggare till min erfarenhet men även gett mig en ordentlig insyn i vardagen som utvecklare,
                    både som konsult och anställd.
                </p>
                <p className="text">
                    Jag brinner för programmering och utveckling. Jag är teknikintresserad, problemlösningsorienterad och social. 
                    Bland mina bästa egenskaper finns min kreativitet, logik och att jag är en teamplayer!  
                </p>
                <p className="text">
                    Här har jag samlat olika projekt och info om mig, nästan som en portfolio. Kika runt, kolla in mina sociala media och hör 
                    gärna av dig om du har några frågor!
                </p>
                <div className="link-container">
                    <a className="text link" href="http://www.linkedin.com/in/mattias-gradin-879b50249">
                        <img className="linkedInIcon" src={linkedinImage} alt="Mattias linkedin link" />
                    </a>
                    <a className="text link" href="https://github.com/gr2dd3">
                        <img className="githubIcon" src={githubImage} alt="Mattias Github link" />
                    </a>
                </div>
                <p className="text">
                    Läs också mitt CV och personliga brev här nedanför för att få veta mer om mig. 
                    Jag hoppas jag får chansen att hjälpa ert företag framåt!
                </p>
                <p className="text">
                    Mvh Mattias 
                </p>
            </div>

            <iframe title="pdf-coverletter" className="pdf-viewer" type="application/pdf" src={coverletter}>
                <a href={coverletter}>Download the PDF</a>
            </iframe>

            <iframe title="pdf-cv" className="pdf-viewer" type="application/pdf" src={cv}>
                <a href={cv}>Download the PDF</a>
            </iframe>
    
        </div>
    )
}