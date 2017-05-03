import React, { Component, PropTypes } from 'react';
//import './style.css';

export default class Calendar extends Component {
    render() {
        const { fields, data, children } = this.props;
        return (
            <div>
                yoho moi je suis the calendar
                <div className="row seven-cols">
                    <div className="bord col-md-1 midd">SUN <br/> 12 </div>
                    <div className="bord  col-md-1 midd">MON <br/> 13</div>
                    <div className="bord col-md-1 midd">TUE<br/> 14</div>
                    <div className="bord col-md-1 midd">WED<br/> 15</div>
                    <div className="bord col-md-1 midd">THU<br/> 16</div>
                    <div className="bord col-md-1 midd">FRI<br/> 17</div>
                    <div className="bord col-md-1 midd">SAT<br/> 18</div>
                </div>
            </div>
        );
    }
}

