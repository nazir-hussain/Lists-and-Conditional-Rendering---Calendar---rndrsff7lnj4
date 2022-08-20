// import React, {Component, useState,useEffect} from "react";
// import '../styles/App.css';
// import Select from 'react-select'

// const App = () => {
  
//   const options = [
//     {value: "January", label:"January"},
//     {value: "February", label:"February"},
//     {value: "March", label:"March"},
//     {value: "April", label:"April"},
//     {value: "May", label:"May"},
//     {value: "June", label:"June"},
//     {value: "July", label:"July"},
//     {value: "August", label:"August"},
//     {value: "September", label:"September"},
//     {value: "October", label:"October"},
//     {value: "November", label:"November"},
//     {value: "December", label:"December"}
//   ] 
//   return (
//     <div id="main">
//       <h1 id="heading">Calendar</h1>
//       <div id="second">
//       <Select id="month"
        
//          value = {options.value}
//         options = {options}
//         defaultValue = {options[parseInt(new Date().getMonth())]}
//       />
//       <span id="year">{"Hi"}</span>
//       <input id="year-text-box" type="text" ></input>
//       </div>
//       <table id="table">
//         {<option value="January" >January</option>
//         <option value="February" >February</option>
//         <option value="March" >March</option>
//         <option value="April" >April</option>
//         <option value="May" >May</option>
//         <option value="June">June</option>
//         <option value="July">July</option>
//         <option value="August">August</option>
//         <option value="September">September</option>
//         <option value="October">October</option>
//         <option value="November">November</option>
//         <option value="December">December</option>}
         
//         <tr>
//           <td>Sunday</td>
//           <td>Monday</td>
//           <td>Tuesday</td>
//           <td>Wednesday</td>
//           <td>Thrusday</td>
//           <td>Friday</td>
//           <td>Saturday</td>
//         </tr>
//         <tr>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//         </tr>
//         <tr>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//         </tr>
//         <tr>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//         </tr>
//         <tr>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//         </tr>
//         <tr>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//         </tr>
//         <tr>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td></td>
//         </tr>
//       </table>
//       <div id="buttons">
//       <button id="previous-year">{"<<"}</button>
//       <button id="previous-month">{"<"}</button>
//       <button id="next-month">{">"}</button>
//       <button id="next-year">{">>"}</button>
//       </div>
//     </div>
//   )
// }


// export default App;



// 2nd methode

// import React from "react";
// import { useState } from "react";
// import "../styles/App.css";
// import { AiOutlinePlus } from "react-icons/ai";
// import { Modal, Button } from "react-bootstrap";

// const App = () => {
//   const formSubmitHandler = (e) => {
//     e.preventDefault();
//   };
//   return (
//     <>
//       <div className="main-container">
//         <h2 className="main-heading">Calender App</h2>
//         <div className="table-wrapper">
//           <table className="table">
//             <tbody>
//               <tr className="days-row"></tr>
//               <tr></tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title> Add your Event</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <form id="form" onSubmit={formSubmitHandler}>
//             <div className="mb-3"></div>
//             <div className="row">
//               <div className="mb-3 col"></div>
//               <div className="mb-3 col"></div>
//             </div>
//             <button type="submit" className="btn btn-primary">
//               Submit
//             </button>
//           </form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" id="btn-close" onClick={handleClose}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };

// export default App;





// 3rd methode



let date = new Date();

const renderDates = () => {

    getWeather();
    date.setDate(1);
    let day = date.getDay();
    let today = new Date();
    let endDate = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDate();

    let prevDate = new Date(
        date.getFullYear(),
        date.getMonth(),
        0
    ).getDate();

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
        "November", "December"]
    
    document.getElementById("month").innerHTML = months[date.getMonth()];

    let weeks = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

    weeks[new Date().getDay()];
    let dt = new Date().getDate();
    let fullYear = new Date().getFullYear();

    document.getElementById("month-date").innerHTML = weeks[new Date().getDay()] + " , " + " " + dt + " " + " "+ fullYear;
    let cells = "";
    for (x = day; x > 0; x--) {
        cells += "<div class='prev_date iterator'>" + (prevDate - x + 1) + "</div>";
    }
    for (i = 1; i <= endDate; i++) {
        if (i == today.getDate() && date.getMonth() == today.getMonth()) {
            cells += "<div class='today iterator'>" + i + "</div>";
        } else {
            cells += "<div class='iterator'>" + i + "</div>";
        }
    }

    document.getElementsByClassName("days")[0].innerHTML = cells;
}

const moveDate = (para) => {
    if (para == 'prev') {
        date.setMonth(date.getMonth() - 1);
    } else if (para == 'next') {
        date.setMonth(date.getMonth() + 1);
    }

    renderDates();
}


// Getting coordinates(location) and weather
const getWeather = () => {
    let temperature = document.getElementById("temperature");
    let description = document.getElementById("description");
    let location = document.getElementById("location");

    let api = "https://api.openweathermap.org/data/2.5/weather";
    let apiKey = "f146799a557e8ab658304c1b30cc3cfd";

    location.innerHTML = "Locating...";

    navigator.geolocation.getCurrentPosition(success, error);

    function success(position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;

        let url = api + "?lat=" + latitude + "&lon=" + longitude + "&appid=" + apiKey + "&units=imperial";

        fetch(url)
            .then(response => response.json())
            .then(data => {
                let temp = data.main.temp;
                let C = 5 / 9 * (temp - 32);
                temperature.innerHTML = C.toFixed() + "° C";
                let place = data.name + ', ' + data.sys.country;
                location.innerHTML = place;
                description.innerHTML = data.weather[0].main;
            });
    }

    function error() {
        document.getElementById('lctn').style.visibility = "hidden";
        document.getElementById('temptr').style.visibility = "hidden";
        location.innerHTML = "";
    }
}

// Getting time
const getTime = () => {
    let date = new Date();
    let time = date.toLocaleTimeString();
    document.getElementById("time").innerText = time;
}

setInterval(getTime, 1000);

//events
function getLocalStrgArrData() {
    return JSON.parse(localStorage.getItem('events'));
}

function setLocalStrgArrData(arr) {
    localStorage.setItem('events', JSON.stringify(arr));
}

function deleteEvent(delId) {
    let arr = getLocalStrgArrData();
    arr.splice(delId, 1);
    setLocalStrgArrData(arr);
    showEvents();
}

function confirmation(delId) {
    if (confirm("Are you sure want to delete this event...?") == true) {
        deleteEvent(delId);
    }
    eventHeading();
}

function showEvents() {

    let arr = getLocalStrgArrData();
    // console.log(arr + " no");
    if (arr != null) {
        let evList = "";
        for (let i in arr) {

            evList += `
            <li style="width: 100%; display: flex; justify-content: center; 
            align-items: center; padding: 4px 0; overflow: hidden;">${arr[i]} &nbsp;&nbsp;&nbsp; 
            <span class="fa-solid fa-trash" style="cursor: pointer;" onclick="confirmation(${i})"></span></li>`;
        }
        document.getElementById('evList').innerHTML = evList;
    }
}

const addEvent = (cdate) => {

    let inputEvent = prompt("Add your event below....");

    id = "";
    if (inputEvent) { // promt true
        if (inputEvent.length > 2) {

            if (id == '') { // Addition

                date.setDate(cdate);
                let eventDate = date.getDate();
                let eventMonth = date.getMonth();
                let eventYear = date.getFullYear();
                let eventVal = eventDate + "~" + eventMonth + "~" + eventYear + "  =>  " + inputEvent;

                let arr = getLocalStrgArrData();
                if (arr == null) {
                    let data = [eventVal];
                    setLocalStrgArrData(data);
                } else {
                    arr.push(eventVal);
                    setLocalStrgArrData(arr);
                }

                alert("Event saved Successfully...");
            } else { // Updation/Edit

            }

        } else {
            alert('please enter word more than length 3');
        }
    } else { // prompt false
        console.log(inputEvent);
    }
    showEvents();

    eventHeading();


}

showEvents();

let calDates = document.querySelectorAll('.days');
for (item of calDates) {
    item.addEventListener('click', (e) => {
        eventText = e.target.innerText;
        let intVal = parseInt(eventText);
        addEvent(intVal);
    })
    break;
}

function eventHeading() {

    let liLength = getLocalStrgArrData();
    if (liLength.length < 1) {
        document.getElementById('evt').style.display = "none";
    } else {

        document.getElementById('evt').style.display = "";
    }
}

eventHeading();

// Tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})
