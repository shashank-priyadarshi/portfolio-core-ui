import { ViewportRuler } from '@angular/cdk/scrolling';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  @ViewChild('resume')
  resume!: TemplateRef<any>;
  name!: string;
  currentYear!: number;

  constructor(
    private matDialog: MatDialog,
    private viewportRuler: ViewportRuler,
    private title: Title
  ) {
    this.currentYear = new Date().getFullYear();
  }

  ngOnInit(): void {
    this.title.setTitle('Home');
  }

  calculateExperience(doj: string) {
    return new Date().getTime() - new Date(doj).getTime();
  }

  loadIFrame() {
    const viewportSize = this.viewportRuler.getViewportSize();
    const height = Math.max(viewportSize.height * 0.8, 400) + 'px'; // set minimum height to 400px
    const width = Math.max(viewportSize.width * 0.8, 600) + 'px'; // set minimum width to 600px
    this.matDialog.open(this.resume, {
      height: height,
      width: width,
    });
  }
}
