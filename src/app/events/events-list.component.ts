import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ToastrService } from "../common/toastr.service";
import { EventService } from "./shared/event.service";

@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html'
})

export class EventsListComponent {
    events?:any

    constructor(private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute) { //dependency injection
        
    }

    ngOnInit(){
        //this.eventService.getEvents().subscribe(events => { this.events = events}); // subscribe
        this.events = this.route.snapshot.data['events']; //data['events'] matches events on the routes.ts. resolver gets events from event service, route takes this and put this on the route, and we can access it in our component  
    }

    handleThumbnailClick(eventName: any){
        this.toastr.success(eventName)
    }

    handleEventClicked(data: any){
        console.log('received:',data)
    }

}