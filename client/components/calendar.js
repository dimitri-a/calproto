import React, { Component} from 'react';
import TimeSlot from './timeslot';

export default class Calendar extends Component {
    
    nextWeek(){
        //todo remove
        console.log('nextweek');
    }

    prevWeek(){

    }
    
    render() {
        return (
            <div>
                <div className="row seven-cols">
                    <div className="bord col-md-1 midd">SUN <br/> <TimeSlot/> </div>
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

