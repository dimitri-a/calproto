import React, {Component} from 'react';
import Day from './day';

export default class Calendar extends Component {


    nextWeek() {
        //get timeslots/details next week


        //todo remove
        console.log('nextweek');
    }

    prevWeek() {

        //todo remove
        console.log('prevweek');
    }

    currentWeek() {
        //get currentweek

    }



    render() {

        const today=
            {
                "date": "1/1/2017",
                "morning":
                    {
                        "text":"AM",
                        "period": "7am-10am"
                    },
                "arvo":
                    {
                        "text":"AM/PM",
                        "period": "11am-2pm"
                    },

                "evening":
                    {
                        "text":"PM",
                        "period": "2pm-4pm"
                    }
            }

        return (
            <div>
                <div className="row seven-cols">
                    <div className="bord col-md-1 midd"> <Day day={today}/> </div>
                    <div className="bord col-md-1 midd"> <Day day={today}/> </div>
                    <div className="bord col-md-1 midd"> <Day day={today}/> </div>
                    <div className="bord col-md-1 midd"> <Day day={today}/> </div>
                    <div className="bord col-md-1 midd"> <Day day={today}/> </div>
                    <div className="bord col-md-1 midd"> <Day day={today}/> </div>
                    <div className="bord col-md-1 midd"> <Day day={today}/> </div>
                </div>
                <button className="btn" onClick={this.prevWeek.bind(this)}>prev week</button>

                <button className="btn" onClick={this.nextWeek.bind(this)}>next week</button>

            </div>
        );
    }
}

