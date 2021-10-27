import '../scss/datePicker.scss'
import React, { Component } from 'react'
import { TableHead, TableRow, TableCell, TableBody, TableContainer, Table } from '@material-ui/core';

const CALENDAR = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]

class DatePicker extends Component {
    constructor(props: any) {
        super(props);
        this.state={
            image: null
        };
    }

    getHead = () => {
        return (
            <TableHead>
                <TableRow>
                    <TableCell>SU</TableCell>
                    <TableCell>MO</TableCell>
                    <TableCell>TU</TableCell>
                    <TableCell>WE</TableCell>
                    <TableCell>TH</TableCell>
                    <TableCell>FR</TableCell>
                    <TableCell>SA</TableCell>
                </TableRow>
            </TableHead>
        );
    }

    getBody = () => {
        const calendar = [];
        const processedCalendar = CALENDAR.map(day => {
            return <TableCell>{day}</TableCell>
        });

        for (let index = 0; index < processedCalendar.length / 7; index++){
            calendar.push(<TableRow>{processedCalendar.slice(index*7, index*7 + 7)}</TableRow>)
        }

        return (
            <TableBody>
                {
                    calendar
                }
            </TableBody>
        );
    }
    render() {
        const defaultStyle = {marginLeft: 500, marginTop: 25, width:"380px"};
        return (
            <div>
                <h1 className="h1" style= {defaultStyle}> DatePicker </h1>
                <h2 className="h2" style= {defaultStyle}> Aici ar trebui butoanele </h2>
                <div className="Calendar" style={ defaultStyle}>
                    <div className="weekdays">
                        {this.getHead()}
                    </div>
                    <div className="days">
                        {this.getBody()}
                    </div>
                </div>
            </div>
        );
    }
}

export default DatePicker;