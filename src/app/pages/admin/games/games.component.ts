import { Component, ViewChild } from '@angular/core';
import { PagesService } from '../../home/pages.service';
import { Game } from 'src/assets/models/models.interface';
import { CustomError } from 'src/assets/models/custom-error.model';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxChessBoardView } from 'ngx-chess-board';

interface ChessMove {
  move: string;
}

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.sass']
})
export class GamesComponent extends PagesService {
  @ViewChild('board', { static: false }) board!: NgxChessBoardView;
  element!: HTMLElement | null;
  games!: Game[];
  parsedGame!: ChessMove[];
  currentGame: number = 0;
  currentMove: number = 0;
  gameCount: number = 0;
  moveCount: number = 0;
  gameLoaded: boolean = false;

  constructor(private httpclient: HttpClient, private matSnackBar: MatSnackBar) {
    super(httpclient);
  }

  ngOnInit(): void {
    this.element = document.getElementById("chessboardcontainer") as HTMLElement | null;
  }

  ngAfterViewInit(): void {
    this.board = { setPGN(pgn: string): void { }, } as NgxChessBoardView;
    this.parseGames();
  }

  parseGames() {
    this.getGames().subscribe((data: Game[] | CustomError) => {
      if (data instanceof CustomError) {
        this.matSnackBar.open(data.message, '', {
          duration: 3000
        });
      } else {
        this.games = data;
        this.parsedGame = this.parsePGN(this.games[this.currentGame].pgn);
        this.gameCount = this.games.length;
        this.moveCount = this.parsedGame.length;
        this.gameLoaded = true;
        this.board.setPGN(this.parsedGame[this.currentMove].move);
        this.currentMove++;
      }
    });
  }

  getElementDimensions(): number {
    if (this.element) {
      const rect = this.element.getBoundingClientRect();
      const width = Math.round(rect.width * .75);
      // const height = Math.round(rect.height * .80);
      return width;
      // return Math.round((width + height)/2);
    }
    return 0;
  }

  // reset() {
  //   this.board.reset();
  // }

  parsePGN(pgn: string) {
    const regex = /\d+\.{1,3}\s+([A-Za-z0-9+#]+)(?:\s+\{[%\w\s:]+\})?/g;
    const moves: ChessMove[] = [];

    let match;
    while ((match = regex.exec(pgn)) !== null) {
      if (match[1]) {
        moves.push({ move: match[1] });
      }
    }

    return moves;
  }

  getLastMove() { this.board.setPGN(this.parsedGame[this.moveCount - 1].move); }

  getFirstMove() { this.board.setPGN(this.parsedGame[0].move); }

  getNextMove() {
    if (this.currentMove + 1 < this.moveCount) {
      this.board.setPGN(this.parsedGame[this.currentMove + 1].move);

    } else { this.matSnackBar.open("This is the last move", "OK", { duration: 3000 }); }
  }

  getPreviousMove() {
    if (this.currentMove - 1 >= 0) {
      this.board.setPGN(this.parsedGame[this.currentMove - 1].move);
    } else { this.matSnackBar.open("This is the first move", "OK", { duration: 3000 }); }
  }

  nextGame() {
    if (this.currentGame + 1 < this.gameCount) {
      this.currentGame++;
      this.parsedGame = this.parsePGN(this.games[this.currentGame].pgn);
      this.currentMove = 0;
      this.moveCount = this.parsedGame.length;
      this.board.setPGN(this.parsedGame[this.currentMove].move);
      this.currentMove++;
    } else {
      this.matSnackBar.open("Loading more games", "OK", { duration: 3000 });
    }
  }

  previousGame() {
    if (this.currentGame - 1 > 0) {
      this.currentGame--;
      this.parsedGame = this.parsePGN(this.games[this.currentGame].pgn);
      this.moveCount = this.parsedGame.length;
      this.currentMove = 0;
      this.board.setPGN(this.parsedGame[this.currentMove].move);
      this.currentMove++;
    } else {
      this.matSnackBar.open("This is the first game", "OK", { duration: 3000 });
    }
  }
}
