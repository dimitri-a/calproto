import React, {Component} from 'react';
import Day from './day';
let today;

export default class Calendar extends Component {


    constructor(props) {
        super();
        this.currentWeek();
        this.state = {
            today: {
                "date": "1/1/2017",
                "morning": {
                    "text": "AM",
                    "period": "7am-10am"
                },
                "arvo": {
                    "text": "AM/PM",
                    "period": "11am-2pm"
                },

                "evening": {
                    "text": "PM",
                    "period": "2pm-4pm"
                }
            }
        };
    }

    nextWeek() {
        //get timeslots/details next week


        //todo remove
        console.log('nextweek');
    }

    prevWeek() {

        //todo remove
        console.log('prevweek');

        this.setState({today:
            {
            "date": "3/2/2017",

            "morning": {
                "text": "AM",
                "period": "6am-8am"
            },
            "arvo": {
                "text": "AM/PM",
                "period": "11am-2pm"
            },

            "evening": {
                "text": "PM",
                "period": "2pm-4pm"
            }
        }});

        //todo remove
        console.log('testing=prevweek', this.state.today);
    }

    currentWeek() {
        //todo remove
        console.log('testing=currentweek');

    }

    render() {
        return (
            <div>
                <button className="btn" onClick={this.prevWeek.bind(this)}>prev week</button>
                <button className="btn" onClick={this.nextWeek.bind(this)}>next week</button>
                <div className="row seven-cols">
                    <div className="bord col-md-1 midd"><Day day={this.state.today}/></div>
                    <div className="bord col-md-1 midd"><Day day={this.state.today}/></div>
                    <div className="bord col-md-1 midd"><Day day={this.state.today}/></div>
                    <div className="bord col-md-1 midd"><Day day={this.state.today}/></div>
                    <div className="bord col-md-1 midd"><Day day={this.state.today}/></div>
                    <div className="bord col-md-1 midd"><Day day={this.state.today}/></div>
                    <div className="bord col-md-1 midd"><Day day={this.state.today}/></div>

                </div>
            </div>
        );
    }
}

