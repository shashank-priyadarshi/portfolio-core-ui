import { Component } from '@angular/core';
import { PagesService } from '../../home/pages.service';
import { Game } from 'src/assets/models/models.interface';
import { CustomError } from 'src/assets/models/custom-error.model';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.sass']
})
export class GamesComponent extends PagesService {
  element!: HTMLElement | null;
  games!: Game[];

  constructor(private httpclient: HttpClient, private matSnackBar: MatSnackBar) {
    super(httpclient);
  }

  ngOnInit(): void {
    this.element = document.getElementById("chessboardcontainer") as HTMLElement | null;
    this.getGames().subscribe((data: Game[] | CustomError) => {
      if (data instanceof CustomError) {
        this.matSnackBar.open(data.message, '', {
          duration: 3000
        });
      } else {
        this.games = data;
      }
    });
  }

  getElementDimensions(): number {
    if (this.element){
      const rect = this.element.getBoundingClientRect();
      const width = Math.round(rect.width);
      const height = Math.round(rect.height);
      return Math.round((width + height)/2.25);
    }
    return 0;
  }

}
