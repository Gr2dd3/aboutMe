import linkedinImage from '../img/linkedin.png';
import githubImage from '../img/github.png';
import resume from '../documents/Mattias_Gradin_-_resume.pdf';
import grades from '../documents/Mattias_Gradin_-_grades.pdf';
import CV from '../documents/Mattias_Gradin_-_CV.pdf';
import coverletter from '../documents/Mattias_Gradin_-_Cover_Letter.pdf';
import degree from '../documents/Examensbevis 2024.pdf';
import ratings from '../documents/Betyg 2024.pdf';
import kvalification1 from '../documents/Kvalifikationstillagg EN 2024 1_2.pdf';
import kvalification2 from '../documents/Kvalifikationstillagg EN 2024 2_2.pdf';
import cvIcon from '../img/cv_icon.png';
import gradesIcon from '../img/grades_icon.png';


export default function IntroTextSection() {
    const docs = [CV, coverletter, degree, ratings, kvalification1, kvalification2]
    const names = ["CV", "Personligt Brev", "Examensbevis", "Betyg", "Kvalifikationstillägg 1/2", "Kvalifikationstillägg 1/2"]
    const displayLinks = docs.map(function(doc, index) {
        let icon = "";
            if (index === 0 || index === 1){
                icon = <img className="downloadPDF-icon" alt="icon" src={cvIcon} />
            }
            else {
                icon = <img className="downloadPDF-icon" alt="icon" src={gradesIcon} />
            }
            return (
                <a className="downloadable" target="_blank" rel="noreferrer" download= {doc} href={doc}>
                    {icon}
                    <h3 className="downloadName">{names[index]}</h3>
                    </a>)
    })
    return (
        <>
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
                <p className="text">
                    Läs också mitt CV och personliga brev här nedanför eller ladda ner för att få veta mer om mig. 
                    Jag hoppas jag får chansen att hjälpa ert företag framåt!
                </p>
                <p className="text">
                    Mvh Mattias 
                </p>
                <div className="socialLink-container">
                    <a className="link" href="http://www.linkedin.com/in/mattias-gradin-879b50249">
                        <img className="linkedInIcon" src={linkedinImage} alt="Mattias linkedin link" />
                    </a>
                    <a className="link" href="https://github.com/gr2dd3">
                        <img className="githubIcon" src={githubImage} alt="Mattias Github link" />
                    </a>
                </div>

            <div className="downloadLinks-container">{displayLinks}</div>
            </div>



            <iframe title="pdf-resume" className="pdf-viewer" type="application/pdf" src={resume}>
                <a href={resume}>Download the PDF</a>
            </iframe>

            <iframe title="pdf-grades" className="pdf-viewer" type="application/pdf" src={grades}>
                <a href={grades}>Download the PDF</a>
            </iframe><br />
        </>
    )
}