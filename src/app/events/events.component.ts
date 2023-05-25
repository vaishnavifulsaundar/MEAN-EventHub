import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html'
})
export class EventsComponent implements OnInit 
{

  events :any[]= []
  constructor(private _eventService: EventService, private _router: Router) { }

  ngOnInit() 
  {
    this._eventService.getEvents()
      .subscribe(
        res => this.events = res,
        err => console.log(err)
      )
  }

  admissionForm(){
    this._router.navigate(['/admissionform'])
  }
}
