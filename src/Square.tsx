import * as React from 'react';
import './App.css';

interface ISquareProps {
  value: string,
  onClick: (i: number) => any,
  cell: number,
}

class Square extends React.Component<ISquareProps> {

  constructor(props: ISquareProps) {
    super(props);
  }

  public render() {
    return (
      <button className="square" onClick={this.onClick}>
        {this.props.value}
      </button>
    );
  }

  private onClick = () => {
    this.props.onClick(this.props.cell);
  }
}

export default Square;
