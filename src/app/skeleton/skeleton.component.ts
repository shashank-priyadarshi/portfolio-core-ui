import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.sass'],
})
export class SkeletonComponent implements OnInit {
  body!: SafeHtml;
  innerHTML!: string;

  constructor(
    private sharedService: SharedService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.fetchBody();
  }

  fetchBody() {
    this.sharedService.getSharedData().subscribe((data) => {
      this.unroll(data.body);
    });
    setTimeout(() => {
      this.body = this.sanitizer.bypassSecurityTrustHtml(this.innerHTML);
    }, 100);
  }

  unroll(data: any) {
    const keys = Object.keys(data);
    keys.forEach((key) => {
      if (typeof data[key] === 'object') {
        if (isNaN(+key)) {
          this.innerHTML += '<div style="margin: 0 auto;">' + key + '<div>';
        }
        this.unroll(data[key]);
      } else {
        this.innerHTML += '<div>' + key + ': ' + data[key] + '</div>';
      }
    });
  }
}
