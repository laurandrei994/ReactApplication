import React, { useState } from 'react';
import '../scss/datePicker.scss';
import axios from 'axios';
import { Paper, TableContainer } from '@material-ui/core';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const DatePicker = () =>
{
    const previousMonthDays: number[] = [27, 28, 29, 30];
    const currentMonthDays: number[] = Array.from({length: 31}, (_, i) => i + 1);
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dayNames = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];
    const years = [2017, 2018, 2019, 2020, 2021];

    const [openCalendar, setOpenCalendar] = useState<boolean>(false);
    const [selectedStartDate, setSelectedStartDate] = useState<number>(0);
    const [selectedEndDate, setSelectedEndDate] = useState<number>(0);
    const [selectedMonth, setSelectedMonth] = useState<string>('JAN');
    const [selectedYear, setSelectedYear] = useState<number>(2021);

    const [selectedStartDateRequest, setSelectedStartDateRequest] = useState<string>();
    const [selectedEndDateRequest, setSelectedEndDateRequest] = useState<string>();

    function createTableData(
        id: number,
        start_date: string,
        end_date: string,
      ) {
        return {id, start_date, end_date };
      }

    const date = new Date()
    const today = date.getDate();

    const openCalendarOnClick = () => {
        setOpenCalendar(!openCalendar);
    };

    const selectedMonthOnClick = () => {
        let selectBox = document.getElementById("calendar__month");
        // @ts-ignore
        setSelectedMonth((selectBox?.options[selectBox.selectedIndex].value).substring(0, 3).toUpperCase());
    };

    const selectedYearOnClick = () => {
        let selectBox = document.getElementById("calendar__year");
        // @ts-ignore
        setSelectedYear(selectBox?.options[selectBox.selectedIndex].value);
    };

    const resetSelected = () => {
        setSelectedStartDate(0);
        setSelectedEndDate(0);
    }

    const setSelectedDate = (event: React.MouseEvent<HTMLDivElement>, index: number) => {
        if (selectedEndDate===0 || selectedStartDate===0) {
            setSelectedStartDate(index);
            setSelectedEndDate(index);
        }
         else {
            if (index > selectedStartDate) {
                setSelectedStartDate(index);
            }
            if (index > selectedEndDate) {
                setSelectedStartDate(selectedEndDate);
                setSelectedEndDate(index);
            }
            if (index < selectedStartDate) {
                setSelectedStartDate(index);
            }
        }
    };

    const setRequestDates = () => {
        setSelectedStartDateRequest(`${selectedYear}-${selectedMonth}-${selectedStartDate}`);
        setSelectedEndDateRequest(`${selectedYear}-${selectedMonth}-${selectedEndDate}`);
    };

    let testRows = [
        createTableData(1, '2022-02-02', '2021-01-01'),
        createTableData(2, '2021-02-01', '2020-01-01'),
    ]
    
    let rowData: any[] = [];
    var rows: { id: number; start_date: string; end_date: string; }[] = [];
    let index = 1;

    const getRows = axios.get("https://us-central1-proiectfsdgcloud.cloudfunctions.net/getSchedule").then(function (response) {
        console.log("Response: \n");
        console.log(response.data);

        rowData = response.data;
        for (let idx = 0; idx < rowData.length; idx++) {
            let temp = createTableData(index++, rowData[idx].start_date, rowData[idx].end_date);
            rows.push(temp);
        }
        //console.log('TestRows: \n');
        //console.log(testRows);
        //console.log("Rows: \n");
        //console.log(rows);
        return response.data;
    }).catch(function (error) {
        console.log(error);
        return error;
    })

    const onSelectedDatesClick = async () => {
        let parameters = {
            start_date: `${selectedYear}-${selectedMonth}-${selectedStartDate}`,
            end_date: `${selectedYear}-${selectedMonth}-${selectedEndDate}`,
        };
      const result = await axios.get("https://us-central1-proiectfsdgcloud.cloudfunctions.net/postSchedule", { params: parameters }).catch((error) => {
          alert(error);
      });
      setRequestDates();
      console.log("Dates succesfully added!");
    };

    return (
        <div>
            <text className="calendar__title">Date Picker</text>
            <div onClick={openCalendarOnClick}>

                <div className="calendar__rangeBody">
                    <div className="calendar__startDate">
                        <text className="calendar__dateHeader">Start Date</text>
                        <text className="calendar__selectedStartDate">{selectedStartDate===0 ? 1 : selectedStartDate} {selectedMonth} {selectedYear}</text>
                    </div>

                    <div className="calendar__endDate">
                        <text className="calendar__dateHeader">End Date</text>
                        <text className="calendar__selectedEndDate">{selectedEndDate===0 ? 1 : selectedEndDate} {selectedMonth} {selectedYear}</text>
                    </div>
                </div>
            </div>
            {openCalendar && (
                <div className="calendar">
                    <div className="calendar__triangle"/>
                    <div className="calendar__row"/>
        <div className="calendar__opts">
            <h4 className="calendar__today">{today}<text className="calendar__today--text">TODAY</text></h4>
            <select className="calendar__option" id="calendar__month" onClick={selectedMonthOnClick}>
                {monthNames.map((month, index) => <option className="calendar__optBG" selected={index===0}>{month}</option>)}
            </select>

            <select id="calendar__year" onClick={selectedYearOnClick}>
                {years.map((year, index) => <option className="calendar__optBG" selected={year===2021}>{year}</option>)}
            </select>
        </div>

        <div className="calendar__body">
            <div className="calendar__days">
                {dayNames.map(day => <div>{day}</div>)}
            </div>

            <div className="calendar__dates">
                {previousMonthDays.map((day) => <div className="calendar__date calendar__date--grey"><span>{day}</span></div>)}
                {currentMonthDays.map((day, index) =>
                    <div className={"calendar__date" + (index+1 === today ? " calendar__date calendar__date--today" : "") + ((selectedStartDate>0 || selectedEndDate>0) && index+1 >= selectedStartDate && index+1 <= selectedEndDate && selectedEndDate!==0 ? " calendar__date--selected" : "")}
                         id={`${index+1}`} onClick={(e)=>setSelectedDate(e, index+1)}><span>{day}</span></div>)}
            </div>
        </div>

        <div className="calendar__buttons">
            <button
                className="calendar__button calendar__button--grey" onClick={resetSelected}>CANCEL
            </button>

            <button
                className="calendar__button calendar__button--primary" onClick={onSelectedDatesClick}>DONE
            </button>
        </div>

    </div>)}

    <br/> 
    <br/>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{background: "tomato"}}>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">start_date</TableCell>
            <TableCell align="right">end_date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{background: "turquoise"}}>
          {testRows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.start_date}</TableCell>
              <TableCell align="right">{row.end_date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
};

// @ts-ignore
export default DatePicker;
