import { Component } from '@angular/core';
import { PagesService } from '../../home/pages.service';
import { CustomError } from 'src/assets/models/custom-error.model';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Plugin {
  name: string;
  endpoint: string;
}

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.sass']
})
export class ActionsComponent extends PagesService {
  plugins: Array<Plugin> = [];

  constructor(private snackbar: MatSnackBar, private httpclient: HttpClient) {
    super(httpclient);
  }

  ngOnInit(): void {
    this.plugins.push({
      name: 'GitHub Integration',
      endpoint: 'trigger'
    });
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
