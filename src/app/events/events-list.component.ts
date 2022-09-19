import { Component } from "@angular/core";
import { ToastrService } from "../common/toastr.service";
import { EventService } from "./shared/event.service";

@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html'
})

export class EventsListComponent {
    events?:any[]

    constructor(private eventService: EventService, private toastr: ToastrService) { //dependency injection
        
    }

    ngOnInit(){
        this.events = this.eventService.getEvents()
    }

    handleThumbnailClick(eventName: any){
        this.toastr.success(eventName)
    }

    handleEventClicked(data: any){
        console.log('received:',data)
    }

}