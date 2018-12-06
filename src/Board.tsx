import * as React from 'react';
import './App.css';
import Square from './Square';

class Board extends React.Component {

  public render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare('')}
          {this.renderSquare('')}
          {this.renderSquare('')}
        </div>
        <div className="board-row">
          {this.renderSquare('')}
          {this.renderSquare('')}
          {this.renderSquare('')}
        </div>
        <div className="board-row">
          {this.renderSquare('')}
          {this.renderSquare('')}
          {this.renderSquare('')}
        </div>
      </div>
    );
  }

  private renderSquare(check: string) {
    return <Square value={check}/>;
  }
}

export default Board;
