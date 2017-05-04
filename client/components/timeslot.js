import React, { Component} from 'react';

export default class TimeSlot extends Component {

    constructor(props) {
        super(props);
        //todo remove
        console.log('testing=timeslots props', props);
    }

    someMethod(){

    }

    
    render() {
        return (
            <div>
                {this.props.slot.text}<br/>
                {this.props.slot.period}
            </div>
        );
    }
}