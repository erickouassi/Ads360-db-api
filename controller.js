//const data = require("./data");
const dataTime = require("./db_txt_time");
const dataDailyTxt = require("./db_txt_daily");
const dataDayTxt = require("./db_txt_day");
const dataWeeklyTxt = require("./db_txt_weekly");
const dataMonthlyTxt = require("./db_txt_monthly");
const dataRandomTxt = require("./db_txt_randoms");


// Logic behind the functionalities
//import jstz from 'jstz';
var jstz = require('jstz');
const timezone = jstz.determine();
var localTime = jstz.determine().name();
//console.log(localTime);
//var serverTime = "Africa/Abidjan";

// current datetime string in America/Chicago timezone
let local_datetime_str = new Date().toLocaleString("en-US", { timeZone: localTime });

// create new Date object
//let date_local = new Date(local_datetime_str);
let d = new Date(local_datetime_str);
//let d = new Date("November 20, 2023 01:15:00");

// Weekday
let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let d_day = weekday[d.getDay()];
//console.log(d_day);


// Months
let allMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let d_month_txt = allMonths[d.getMonth()];  // May
//console.log(d_month_txt);

// year as (YYYY) format
let d_yyyy = d.getFullYear();

// month as (MM) format
let d_month = d.getMonth() + 1;

// Week number 
let startDate = new Date(d_yyyy, 0, 1); // 200X/1/1
let days = Math.floor((d - startDate) / (24 * 60 * 60 * 1000));     
let weekNumber = Math.ceil(days / 7);
//console.log(weekNumber);

// date as (DD) format
let d_dd = d.getDate();

// date time in YYYY-MM-DD format
let today = d_month + "/" + d_dd; // 11/20/2022,
//console.log(today);


class Controller {
   /* // getting all data
    async getAllData() {
      // return all data
      return new Promise((resolve, _) => resolve(data));
    } */
     // getting a random data
    async getRandomDataTxt() {
      return new Promise((resolve, reject) => {
        // get the data
        let randomIndexTxt = Math.floor(Math.random() * dataRandomTxt.length); 
        let randomDataTxt = dataRandomTxt[randomIndexTxt];
  
        if (randomDataTxt) {
          // return the data
          resolve(randomDataTxt);
        } else {
          // return an error
          reject(`Object random  not found `);
        }
      });
    }
    // getting today data
    async getTodayDataTxt() {
      return new Promise((resolve, reject) => {
        // get the data
        let todayDataTxt = dataDailyTxt.filter(function(todayIn) {
      return todayIn.frequency == today; });
     // console.log(todayData);
  //
        if (todayDataTxt) {
          // return the data
          resolve(todayDataTxt);
        } else {
          // return an error
          reject(`Today object not found `);
        }
      });
    }
    
    // add below
    // getting Sunday data
    async getSundayDataTxt() {
      return new Promise((resolve, reject) => {
        // get the data
        let sundayDataTxt = dataDayTxt.filter(function(SundayIn) {
      return SundayIn.frequency == "Sunday"; });
     // console.log(sundayData);
  //
        if (sundayDataTxt) {
          // return the data
          resolve(sundayDataTxt);
        } else {
          // return an error
          reject(`Sunday object not found `);
        }
      });
    }
    
    // getting Monday data
    async getMondayDataTxt() {
      return new Promise((resolve, reject) => {
        // get the data
        let mondayDataTxt = dataDayTxt.filter(function(MondayIn) {
      return MondayIn.frequency == "Monday"; });
     // console.log(mondayData);
  //
        if (mondayDataTxt) {
          // return the data
          resolve(mondayDataTxt);
        } else {
          // return an error
          reject(`Monday object not found `);
        }
      });
    }
    
    // getting Tuesday data
    async getTuesdayDataTxt() {
      return new Promise((resolve, reject) => {
        // get the data
        let tuesdayDataTxt = dataDayTxt.filter(function(TuesdayIn) {
      return TuesdayIn.frequency == "Tuesday"; });
     // console.log(tuesdayData);
  //
        if (tuesdayDataTxt) {
          // return the data
          resolve(tuesdayDataTxt);
        } else {
          // return an error
          reject(`Tuesday object not found `);
        }
      });
    }
    
    // getting Wednesday data
    async getWednesdayDataTxt() {
      return new Promise((resolve, reject) => {
        // get the data
        let wednesdayDataTxt = dataDayTxt.filter(function(WednesdayIn) {
      return WednesdayIn.frequency == "Wednesday"; });
     // console.log(wednesdayData);
  //
        if (wednesdayDataTxt) {
          // return the data
          resolve(wednesdayDataTxt);
        } else {
          // return an error
          reject(`Wednesday object not found `);
        }
      });
    }
    
    // getting Thursday data
    async getThursdayDataTxt() {
      return new Promise((resolve, reject) => {
        // get the data
        let thursdayDataTxt = dataDayTxt.filter(function(ThursdayIn) {
      return ThursdayIn.frequency == "Thursday"; });
     // console.log(thursdayData);
  //
        if (thursdayDataTxt) {
          // return the data
          resolve(thursdayDataTxt);
        } else {
          // return an error
          reject(`Thursday object not found `);
        }
      });
    }
    
    // getting Friday data
    async getFridayDataTxt() {
      return new Promise((resolve, reject) => {
        // get the data
        let fridayDataTxt = dataDayTxt.filter(function(FridayIn) {
      return FridayIn.frequency == "Friday"; });
     // console.log(fridayData);
  //
        if (fridayDataTxt) {
          // return the data
          resolve(fridayDataTxt);
        } else {
          // return an error
          reject(`Friday object not found `);
        }
      });
    }
    
    // getting Saturday data
    async getSaturdayDataTxt() {
      return new Promise((resolve, reject) => {
        // get the data
        let saturdayDataTxt = dataDayTxt.filter(function(SaturdayIn) {
      return SaturdayIn.frequency == "Saturday"; });
     // console.log(saturdayData);
  //
        if (saturdayDataTxt) {
          // return the data
          resolve(saturdayDataTxt);
        } else {
          // return an error
          reject(`Saturday object not found `);
        }
      });
    }
    // getting weekly data
    async getWeeklyDataTxt() {
        return new Promise((resolve, reject) => {
          // get the data
          let weeklyDataTxt = dataWeeklyTxt.filter(function(WeeklyIn) {
        return WeeklyIn.frequency == weekNumber; });
       // console.log(weeklyData);
    //
          if (weeklyDataTxt) {
            // return the data
            resolve(weeklyDataTxt);
          } else {
            // return an error
            reject(`Weekly object not found `);
          }
        });
      }
      
	    // getting Day data
    async getDayDataTxt() {
        return new Promise((resolve, reject) => {
          // get the data
          let dayDataTxt = dataDayTxt.filter(function(DayIn) {
        return DayIn.frequency == d_day; });
       // console.log(dayData);
    //
          if (dayDataTxt) {
            // return the data
            resolve(dayDataTxt);
          } else {
            // return an error
            reject(`Day object not found `);
          }
        });
      }
      
    // getting Month data
    async getMonthDataTxt() {
        return new Promise((resolve, reject) => {
          // get the data
          let monthDataTxt = dataMonthlyTxt.filter(function(MonthIn) {
        return MonthIn.frequency == d_month_txt; });
       // console.log(monthData);
    //
          if (monthDataTxt) {
            // return the data
            resolve(monthDataTxt);
          } else {
            // return an error
            reject(`Month object not found `);
          }
        });
      }
      //
      //
    // add above
  }
  module.exports = Controller;