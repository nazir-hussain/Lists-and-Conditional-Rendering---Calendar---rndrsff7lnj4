import React, {Component, useState,useEffect} from "react";
import '../styles/App.css';
import Select from 'react-select'

const App = () => {
  
  const options = [
    {value: "January", label:"January"},
    {value: "February", label:"February"},
    {value: "March", label:"March"},
    {value: "April", label:"April"},
    {value: "May", label:"May"},
    {value: "June", label:"June"},
    {value: "July", label:"July"},
    {value: "August", label:"August"},
    {value: "September", label:"September"},
    {value: "October", label:"October"},
    {value: "November", label:"November"},
    {value: "December", label:"December"}
  ] 
  return (
    <div id="main">
      <h1 id="heading">Calendar</h1>
      <div id="second">
      <Select id="month"
        
         value = {options.value}
        options = {options}
        defaultValue = {options[parseInt(new Date().getMonth())]}
      />
      <span id="year">{"Hi"}</span>
      <input id="year-text-box" type="text" ></input>
      </div>
      <table id="table">
        {<option value="January" >January</option>
        <option value="February" >February</option>
        <option value="March" >March</option>
        <option value="April" >April</option>
        <option value="May" >May</option>
        <option value="June">June</option>
        <option value="July">July</option>
        <option value="August">August</option>
        <option value="September">September</option>
        <option value="October">October</option>
        <option value="November">November</option>
        <option value="December">December</option>}
         
        <tr>
          <td>Sunday</td>
          <td>Monday</td>
          <td>Tuesday</td>
          <td>Wednesday</td>
          <td>Thrusday</td>
          <td>Friday</td>
          <td>Saturday</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
      <div id="buttons">
      <button id="previous-year">{"<<"}</button>
      <button id="previous-month">{"<"}</button>
      <button id="next-month">{">"}</button>
      <button id="next-year">{">>"}</button>
      </div>
    </div>
  )
}


export default App;
