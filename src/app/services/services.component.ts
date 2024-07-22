import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

interface Event {
  name: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  events: Event[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getEvents().subscribe((data: Event[]) => {
      this.events = data;
    });
  }
}
