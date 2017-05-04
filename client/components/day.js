import React, {Component} from 'react';
import TimeSlot from './timeslot'

export default class Day extends Component {

    constructor(props) {
        super(props);
        //todo remove
        console.log('testing=props', props);
    }

    someMethod() {

    }

    render() {
        return (
            <div>
                {this.props.day.date}//todo remove translate this to day
                <TimeSlot slot={this.props.day.morning}/>
                <TimeSlot slot={this.props.day.arvo}/>
                <TimeSlot slot={this.props.day.evening}/>
            </div>
        );
    }
}