import React from "react";
import gameIcon from '../img/MazeRunner_Labyrinth.png';

const GameComponent = () => {

  const openGameInNewWindow = () => {
    const gameWindow = window.open('/MazeRunner.html', '_blank');
    if (!gameWindow) {
      alert('Tillåt popup-fönster för att starta spelet.');
    }
  };

  return (
    <div>
      <div className="segment gameSegment">
      <div className="profile-container">
                <img src={gameIcon} className="profile" alt="profile" />
            </div>
      </div>
      <div className="text-container">
        <div className="text text-center">
          <h1 className="game-text">Welcome to MAZE RUNNER!</h1>
          <p className="game-text">Grab the key - Unlock the door</p>
          <p className="game-text">Get to the finish line</p>
          <p className="game-text">Watch out for traps, hidden or not!</p>
          <p className="game-text">Q - Controls</p>
          <p className="game-text">Klicka på knappen nedan för att starta spelet i ett nytt fönster.</p>
          <button className="game-start-button" onClick={openGameInNewWindow}>Starta Spelet</button>
        </div>
      </div>
    </div>
  );
};

export default GameComponent;
