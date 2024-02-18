import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: 'books', title: "Books", component: BooksComponent, outlet: 'Books', pathMatch: 'full' },
    { path: 'resume', title: "Resume", component: ResumeComponent, outlet: 'Resume', pathMatch: 'full' },
    { path: 'contact', title: "Contact", component: ContactComponent, outlet: 'Contact',pathMatch: 'full' },
    { path: 'home', title: "Home", component: HomeComponent, outlet: 'Home', pathMatch: 'full'  },
    { path: '', title: "Home", component: HomeComponent, outlet: 'Home', pathMatch: 'full'  },
    { path: '**', redirectTo: '' }
];
