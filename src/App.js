import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartPage from './pages/StartPage';
import Layout from './components/Layout';
import ThisIsMe from './pages/ThisIsMe';
import './styling/StartPage.css';
import './styling/ThisIsMe.css';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<StartPage />} />
            <Route path="/ThisIsMe" element={<ThisIsMe />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
