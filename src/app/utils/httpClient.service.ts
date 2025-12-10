import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getAuthToken } from './token';

interface CustomHeaders {
  isAuth?: boolean;
  xClientUuid?: string;
  xClientPlatform?: string;
  xClientMobile?: string;
}

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  post() {
    return;
    {
    }
  }
}
