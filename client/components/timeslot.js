// import React, {
//     PropTypes,
// } from 'react';
//
//
// let availableSlots = [
//     {
//         "dateTime": "1/1/2000",
//         "period": "9am-12am"
//     }];
//
// const TimeSlot = React.createClass({
//     render() {
//         return (
//             <div></div>
//         );
//     }
// });
//
// export default TimeSlot;


import React, { Component} from 'react';

export default class TimeSlot extends Component {
    
    someMethod(){
    }

    
    render() {
        return (
            <div>hi this is timeslot
                <button className="btn" onClick={this.someMethod.bind(this)}>lol</button>
            </div>
        );
    }
}