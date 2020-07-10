import {
  LightningElement,
  api
} from 'lwc';

export default class MeetingRoom extends LightningElement {
  @api meetingRoomInfo; //{Name: 'A-1' , Capacity: '12' }
  @api show = false;

  selectedMeetingRoom() {
    // create custom event then dispatch it
    const selectedRoomEvent = new CustomEvent('selectedroomevent', {
      detail: this.meetingRoomInfo, bubbles: true
    });
    this.dispatchEvent(selectedRoomEvent);
  }
}
