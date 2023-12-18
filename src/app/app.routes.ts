import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: 'books', title: "Books", component: BooksComponent, pathMatch: 'full' },
    { path: 'resume', title: "Resume", component: ResumeComponent, pathMatch: 'full' },
    { path: 'contact', title: "Contact", component: ContactComponent, pathMatch: 'full' },
    { path: '', title: "Home", component: HomeComponent, pathMatch: 'full'  },
    { path: '**', redirectTo: '/' }
];
