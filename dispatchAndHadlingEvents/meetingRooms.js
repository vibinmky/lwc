import {
  LightningElement
} from 'lwc';

export default class MeetingRooms extends LightningElement {

  meetingRoomsInfo = [{
      Name: 'A-1',
      Capacity: '12'
    },
    {
      Name: 'B-1',
      Capacity: '10'
    },
    {
      Name: 'C-1',
      Capacity: '7'
    },
    {
      Name: 'C-2',
      Capacity: '8'
    }
  ];

  selectedRoomName;

  tileSelected(event) {
    const room = event.detail;
    this.selectedRoomName = room.Name;
  }

constructor() {
    super();
    this.template.addEventListener('selectedroomevent', this.tileSelected.bind(this));
  }
}
