import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostTicket, Tickets } from './models/Tickets';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  favoriteTicket(id: number) {
    throw new Error('Method not implemented.');
  }

  
  constructor(private httpClient: HttpClient) { }
  baseUrl = "https://localhost:5001/Tickets";

  getTickets() {
    return this.httpClient.get<Array<Tickets>>(this.baseUrl);
  }

  deleteTicket(id: number) {
    return this.httpClient.delete<Tickets> (`${this.baseUrl}`) //need to update the rest of the url for the ticket id
  }

  postTicket(ticket: PostTicket) {
    return this.httpClient.post<Tickets>(this.baseUrl, ticket);
  }

}
