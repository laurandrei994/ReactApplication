import '../scss/datePicker.scss'
import React from 'react'

function range(start: number, end: number) {
    return Array.from(Array(end - start + 1)).map((_, idx) => start + idx);
}

function DatePicker() {
    var days = range(1, 30);
    const listDays = days.map((number) => <li>{number}</li>);
    const defaultStyle = {marginLeft: 500, marginTop: 25, width:"380px"};

    return (
        <div>
            <h1 className="h1" style= {defaultStyle}> DatePicker </h1>
            {/* <h2 className="h2" style= {defaultStyle}> Aici ar trebui butoanele </h2> */}
            <button className="button_start">Start Date</button>
            <button className="button_end">End Date</button>
                    
            <div className="dropdown">
                <button className="dropbtn">Luna</button>
                <div id="myDropdown" className="dropdown-content">
                    <a href="#ianuarie">Ianuarie</a>
                    <a href="#februarie">Februarie</a>
                    <a href="#martie">Martie</a>
                </div>
            </div>

            <div className="dropdown">
                <button className="dropbtn">An</button>
                <div id="myDropdown" className="dropdown-content">
                    <a href="#2018">2018</a>
                    <a href="#2019">2019</a>
                    <a href="#2020">2020</a>
                </div>
            </div>

            <div className="Calendar">
                <div className="month">
                    <ul>
                        <li className="prev">&#10094;</li>
                        <li>Octombrie 2021</li>
                        <li className="next">&#10095;</li>
                    </ul>
                </div>

                <ul className="weekdays">
                    <li>Mo</li>
                    <li>Tu</li>
                    <li>We</li>
                    <li>Th</li>
                    <li>Fr</li>
                    <li>Sa</li>
                    <li>Su</li>
                </ul>

                <ul className="days">{listDays}</ul>
                <div className="button">
                    <button >Cancel</button>
                    <button >Confirm</button>
                </div>
            </div>           
        </div>
            );
        }

export default DatePicker;

//Pentru dropdown button
// { <script>
//  When the user clicks on the button, 
// toggle between hiding and showing the dropdown content 
// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

// Close the dropdown if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }
// </script> */}