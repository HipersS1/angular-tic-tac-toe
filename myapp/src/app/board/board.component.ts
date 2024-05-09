import { Component } from '@angular/core';
import { SquareComponent } from "../square/square.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-board',
  standalone: true,
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
  imports: [SquareComponent, CommonModule]
})
export class BoardComponent {
  squares!: string[];
  xIsNext!: boolean;
  winner!: string;

  constructor() { }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = '';
    this.xIsNext = true;
  }

  makeMove(idX: number) {
    if (!this.winner && !this.squares[idX]) {
      this.squares.splice(idX, 1, this.player);
      this.xIsNext = !this.xIsNext;
      this.calculateWinner();
    }
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for (let index = 0; index < lines.length; index++) {
      const [a, b, c] = lines[index];

      if (this.squares[a]
        && this.squares[a] === this.squares[b]
        && this.squares[a] === this.squares[c]
      ) {
        this.winner = this.squares[a];
      }
    }

    return null;
  }
}
