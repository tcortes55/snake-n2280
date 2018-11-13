import { Component } from '@angular/core';
import { COLORS, CONTROLS, BOARD_WIDTH, BOARD_HEIGHT } from './app.constants';

@Component({
  selector: 'snake-n2280',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'snake-n2280';

  
  public board = [];


  private snake = {
    direction: CONTROLS.LEFT,
    parts: [
      {
        // Initially it is not displayed
        x: -1,
        y: -1
      }
    ]
  };


  private fruit = {
    // Initially it is not displayed
    x: -1,
    y: -1
  };





  constructor() {
    this.setBoard();
  }



  setBoard(): void {
    this.board = [];

    for (let i = 0; i < BOARD_HEIGHT; i++) {
      this.board[i] = [];
      for (let j = 0; j <  BOARD_WIDTH; j++)
      {
        this.board[i][j] = false; // indicates that the snake is not currently in this location
      }
    }

  }

  setColors(col: number, row: number): string {
    // if (this.board[col][row] === true) {
    //   return COLORS.BODY;
    // }

    if (this.fruit.x === row && this.fruit.y === col) {
      return COLORS.FRUIT;
    } else if (this.snake.parts[0].x === row && this.snake.parts[0].y === col) {
      return COLORS.HEAD;
    } else if (this.board[col][row] === true) {
      return COLORS.BODY;
    }

    return COLORS.BOARD;
  };

}