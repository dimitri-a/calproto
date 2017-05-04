import React, {Component} from 'react';
import TimeSlot from './timeslot'

export default class Day extends Component {

    constructor(props) {
        super(props);
    }

    someMethod() {
    }


    render() {
        return (
            <div>
                <TimeSlot slot={this.props.}/>
                <TimeSlot slot={}/>
                <TimeSlot slot={}/>
            </div>
        );
    }
}