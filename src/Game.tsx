import * as React from 'react';
import './App.css';
import Board from './Board';

class Game extends React.Component {
  public render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board squares={[]}/>
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
