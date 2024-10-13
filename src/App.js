import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartPage from './pages/StartPage';
import Layout from './components/Layout';
import ThisIsMe from './pages/ThisIsMe';
import Budget from './pages/Budget';
import Recipe from './pages/Recipe';
import Game from './pages/Game';
import Forum from './pages/Forum';
import UpcomingProjects from './pages/UpcomingProjects';
import UpcomingProjectsDetailPage from './components/UpcomingProjectsDetailPage';
import './styling/StartPage.css';
import './styling/ThisIsMe.css';
import './styling/Budget.css';
import './styling/ScrollToTop.css';
import './styling/game.css';
import './styling/ContactMe.css';
import './styling/UpcomingProjects.css';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<StartPage />} />
            <Route path="/ThisIsMe" element={<ThisIsMe />} />
            <Route path="/Budget" element={<Budget />} />
            <Route path="/Recipe" element={<Recipe />} />
            <Route path="/Game" element={<Game />} />
            <Route path="/Forum" element={<Forum />} />
            <Route path="/UpcomingProjects" element={<UpcomingProjects />} />
            <Route path="/UpcomingProjects/:id" element={<UpcomingProjectsDetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
