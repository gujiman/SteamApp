import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EventData } from '../../providers/event-data/event-data';
/*
  Generated class for the EventDetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/event-detail/event-detail.html',
  providers: [EventData]
})
export class EventDetailPage {
  currentEvent: any;

   constructor(private nav: NavController, private navParams: NavParams) {
     this.navParams = navParams;
     this.currentEvent = this.navParams.get('eventDetail');
   }

   deleteEvent(eventName: string, eventDate: string, eventPrice: number, eventCost: number) {
     this.eventData.deleteEvent(eventName, eventData, eventPrice, eventCost)then( () => {
      this.nav.delete();
    });
     
   };
}