import { Component } from '@angular/core';
import {DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-events-view',
  templateUrl: './events-view.component.html',
  styleUrls: ['./events-view.component.css']
})
export class EventsViewComponent {
  data : any[];
  constructor(private  dataService: DataService){
    this.data = dataService.getEventos();
  }
}
