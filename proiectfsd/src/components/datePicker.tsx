import '../scss/datePicker.scss'
import React from 'react'

function DatePicker() {
    return (  
        <div className='Calendar'>
            <div className="month">
                <ul>
                    <li>15&emsp;August&emsp;2018</li>
                </ul>
            </div>

            <ul className="weekdays">
                <li>SU</li>
                <li>MO</li>
                <li>TU</li>
                <li>WE</li>
                <li>TH</li>
                <li>FR</li>
                <li>SA</li>
            </ul>

            <ul className="days">
                <span id="other">
                    <li>29</li>
                    <li>30</li>
                    <li>31</li>
                </span>
                <span id="current_month">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li>10</li>
                    <li>11</li>
                    <li>12</li>
                    <li>13</li>
                    <li>14</li>
                    <li><span className="active">15</span></li>
                    <li>16</li>
                    <li>17</li>
                    <li>18</li>
                    <li>19</li>
                    <li>20</li>
                    <li>21</li>
                    <li>22</li>
                    <li>23</li>
                    <li>24</li>
                    <li>25</li>
                    <li>26</li>
                    <li>27</li>
                    <li>28</li>
                    <li>29</li>
                    <li>30</li>
                    <li>31</li>
                </span>
                <span id="other">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                </span>
            </ul>
        </div>
    );
}

export default DatePicker;