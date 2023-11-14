import { Component } from '@angular/core';
import { PagesService } from '../../home/pages.service';
import { CustomError } from 'src/assets/models/custom-error.model';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

interface name {
  name: string;
}

interface label {
  label: string;
}

interface source {
  source: string;
}

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.sass']
})
export class ActionsComponent extends PagesService {
  actions: (name & source)[] = [];
  chartSrcOptions: (name & label & source)[] = [];
  plugins: (name & label)[]= [];

  constructor(private snackbar: MatSnackBar, private httpclient: HttpClient) {
    super(httpclient);
  }

  ngOnInit(): void {
    this.actions.push({
      name: 'GitHub Integration',
      source: 'trigger'
    });
    this.plugins.push(
      { name: "sonar", label: "SonarQube" },
      { name: "stackhawk", label: "StackHawk" },
      { name: "circleci", label: "CircleCI" },
      { name: "deepsource", label: "DeepSource" },
      { name: "github", label: "GitHub" }
    );
    this.chartSrcOptions.push(
      { name: "categories", label: "Categories", source: "https://wakatime.com/share/@a6a86545-e882-487e-a007-4dcc8b053d30/70e78b12-d1ec-42c4-8fa2-5a7732bceb76.svg" },
      { name: "languages", label: "Languages", source: "https://wakatime.com/share/@a6a86545-e882-487e-a007-4dcc8b053d30/d2b1061a-9748-4152-bacb-e2d80d360a71.svg" },
      { name: "os", label: "OS", source: "https://wakatime.com/share/@a6a86545-e882-487e-a007-4dcc8b053d30/d7550462-9064-42f2-8cb1-bb2cd775b7f4.svg" },
      { name: "activity", label: "Coding Activity", source: "https://wakatime.com/share/@a6a86545-e882-487e-a007-4dcc8b053d30/c2aa8944-895a-4b4d-9f72-cff37f1fd0fa.svg" }
    );
  }

  trigger(endpoint: string) {
    this.postData(endpoint, '').subscribe((data) => {
      let message: string;
      if (data instanceof CustomError) {
        message = "Error while triggering plugin: " + data.message;;
      } else {
        message = "Plugin triggered successfully: " + data.message;
      }
      this.snackbar.open(message, 'Dismiss', {
        duration: 3000
      })
    });
  }
}
