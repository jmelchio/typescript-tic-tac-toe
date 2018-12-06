import * as React from 'react';
import './App.css';

interface ISquareProps {
  value: string,
}

interface ISquareStatus {
  value: string,
}

class Square extends React.Component<ISquareProps, ISquareStatus> {

  constructor(props: ISquareProps) {
    super(props);
    this.state = {
      value: props.value,
    }
  }

  public render() {
    return (
      <button className="square" onClick={this.markCell}>
        {this.state.value}
      </button>
    );
  }

  private markCell = () => {
    this.setState({ value: 'X' });
  }
}

export default Square;
