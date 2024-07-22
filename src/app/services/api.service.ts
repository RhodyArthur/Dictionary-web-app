import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { response } from '../interfaces/response.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

  constructor(private http: HttpClient) { }

  fetchDefinition(word: string): Observable<response[]> {
    return this.http.get<response[]>(`${this.apiUrl}${word}`);
  }
}
