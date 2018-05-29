import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  constructor(private http: HttpClient) {}

  addPushSubscriber(sub: any) {
    return this.http.post('https://sicotinauth.azurewebsites.net/api/NewsletterAPI', sub);
  }

  send() {
    return this.http.post('/api/newsletter', null);
  }
}