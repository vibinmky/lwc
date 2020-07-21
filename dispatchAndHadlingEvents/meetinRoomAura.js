({
    doInit: function (component, event, helper) {

        component.set("v.meetingRoomInfo",
            [{
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
            ]
        );

    },

    handleClick: function (component, event, helper) {
        component.set("v.selectedRoomName", event.getParam("Capacity"));
    }
})
