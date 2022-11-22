import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactFormService } from '../contact-form.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass'],
})
export class ContactComponent implements OnInit {
  FormData!: FormGroup;
  constructor(
    private builder: FormBuilder,
    private contactservice: ContactFormService
  ) {}

  ngOnInit(): void {
    this.FormData = this.builder.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required]),
      Message: new FormControl('', [Validators.required]),
    });
  }
  onSubmit(FormData: any) {
    console.log(FormData);
    this.contactservice.PostMessage(FormData).subscribe(
      (response) => {
        location.href = 'https://mailthis.to/gungun';
        console.log(response);
      },
      (error) => {
        console.warn(error.responseText);
        console.log({ error });
      }
    );
  }
}
