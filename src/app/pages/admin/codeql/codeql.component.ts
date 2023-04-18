import { Component } from '@angular/core';

@Component({
  selector: 'app-codeql',
  templateUrl: './codeql.component.html',
  styleUrls: ['./codeql.component.sass']
})
export class CodeqlComponent {
  selectedOption: string = "";
  plugins = [
    { value: "sonar", label: "SonarQube" },
    { value: "stackhawk", label: "StackHawk" },
    { value: "circleci", label: "CircleCI" },
    { value: "deepsource", label: "DeepSource" },
    { value: "github", label: "GitHub" },
  ];
}
