import * as React from 'react';
import './App.css';
import Square from './Square';

interface IBoardProps {
  squares: string[],
}

interface IBoardState {
  squares: string[],
}

class Board extends React.Component<IBoardProps, IBoardState> {
  constructor(props: IBoardProps) {
    super(props);
    this.state = {
      squares: new Array(9),
    };
  }

  public render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }

  private renderSquare(i: number) {
    return <Square value={this.state.squares[i]} onClick={this.markCell} cell={i}/>;
  }

  private markCell(i: number): any {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({ squares });
  }
}

export default Board;
