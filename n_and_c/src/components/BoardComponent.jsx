import React from 'react';
import Square from './SquareComponent.jsx';
import calculateWinner from './WinnerComponent.jsx';

export default class Board extends React.Component {

  constructor(){
    super();
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    }
  }

  handleClick(num){
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[num]){
      return;
    }
    squares[num] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    });
  }

  renderSquare(num) {
    return <Square value={this.state.squares[num]} 
    onClick={() => this.handleClick(num)}
    />
  }

  render() {

    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner){
      status = 'Winner: ' + winner;
    }
    else {
      status = 'Next Player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

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
      )
  }
}