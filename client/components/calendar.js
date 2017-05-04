import React, {Component} from 'react';
import TimeSlot from './timeslot';

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

        const
            timeslot_morning =
                {
                    "date": "1/1/2017",
                    "period": "7am-10am"
                },
            timeslot_arvo =
                {
                    "date": "1/1/2017",
                    "period": "11am-2pm"
                },

            timeslot_evening =
                {
                    "date": "1/1/2017",
                    "period": "2pm-4pm"
                },
        today =[{"morning":timeslot_morning},{"arvo": timeslot_arvo},{"evening":timeslot_evening}]

        return (
            <div>
                <div className="row seven-cols">
                    <div className="bord col-md-1 midd"> <Day day={today}/> </div>
                    <div className="bord  col-md-1 midd">MON <br/> 13</div>
                    <div className="bord col-md-1 midd">TUE<br/> 14</div>
                    <div className="bord col-md-1 midd">WED<br/> 15</div>
                    <div className="bord col-md-1 midd">THU<br/> 16</div>
                    <div className="bord col-md-1 midd">FRI<br/> 17</div>
                    <div className="bord col-md-1 midd">SAT<br/> 18</div>
                </div>
                <button className="btn" onClick={this.prevWeek.bind(this)}>prev week</button>

                <button className="btn" onClick={this.nextWeek.bind(this)}>next week</button>

            </div>
        );
    }
}

