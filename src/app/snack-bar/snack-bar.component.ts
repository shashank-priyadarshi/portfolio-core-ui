import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.sass'],
})
export class SnackBarComponent implements OnInit {
  @Input() snack!: string;
  @Input() action!: string;

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  openSnackBar() {
    this.snackBar.open(this.snack, this.action, {
      duration: 3000,
    });
  }
}
