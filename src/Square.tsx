import * as React from 'react';
import './App.css';

interface ISquareProps {
  value: string,
  onClick: (event: any) => void,
  cell: string,
}

class Square extends React.Component<ISquareProps> {

  constructor(props: ISquareProps) {
    super(props);
  }

  public render() {
    return (
      <button className="square" onClick={this.props.onClick} id={this.props.cell}>
        {this.props.value}
      </button>
    );
  }
}

export default Square;
