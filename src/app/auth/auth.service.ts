import { Injectable } from '@angular/core';
import { SharedService } from '../shared.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends SharedService {}
