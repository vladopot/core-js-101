/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates#Date_object
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date     *
 *                                                                                           *
 ******************************************************************************************* */


/**
 * Parses a rfc2822 string date representation into date value
 * For rfc2822 date specification refer to : http://tools.ietf.org/html/rfc2822#page-14
 *
 * @param {string} value
 * @return {date}
 *
 * @example:
 *    'December 17, 1995 03:24:00'    => Date()
 *    'Tue, 26 Jan 2016 13:48:02 GMT' => Date()
 *    'Sun, 17 May 1998 03:00:00 GMT+01' => Date()
 */
function parseDataFromRfc2822(value) {
  const milSec = Date.parse(value);
  return milSec;
}

/**
 * Parses an ISO 8601 string date representation into date value
 * For ISO 8601 date specification refer to : https://en.wikipedia.org/wiki/ISO_8601
 *
 * @param {string} value
 * @return {date}
 *
 * @example :
 *    '2016-01-19T16:07:37+00:00'    => Date()
 *    '2016-01-19T08:07:37Z' => Date()
 */
function parseDataFromIso8601(value) {
  const dat = new Date(value);
  return Date.parse(dat.toString());
}

/**
 * Returns true if specified date is leap year and false otherwise
 * Please find algorithm here: https://en.wikipedia.org/wiki/Leap_year#Algorithm
 *
 * @param {date} date
 * @return {bool}
 *
 * @example :
 *    Date(1900,1,1)    => false
 *    Date(2000,1,1)    => true
 *    Date(2001,1,1)    => false
 *    Date(2012,1,1)    => true
 *    Date(2015,1,1)    => false
 */
function isLeapYear(date) {
  const year = date.getFullYear();
  const feb = new Date(year, 2, 0);
  if (feb.getDate() === 29) {
    return true;
  }
  return false;
}

/**
 * Returns the string representation of the timespan between two dates.
 * The format of output string is "HH:mm:ss.sss"
 *
 * @param {date} startDate
 * @param {date} endDate
 * @return {string}
 *
 * @example:
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,11,0,0)   => "01:00:00.000"
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,10,30,0)       => "00:30:00.000"
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,10,0,20)        => "00:00:20.000"
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,10,0,0,250)     => "00:00:00.250"
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,15,20,10,453)   => "05:20:10.453"
 */

function timeSpanToString(/* startDate, endDate */) {
  // const DIFF = endDate - startDate;
  // let HH = 0;
  // let mm = 0;
  // let ss = 0;
  // let sss = 0;
  // let ost = 0;
  // if (DIFF >= 3600000) {
  //   if (Math.floor(DIFF / 3600000) < 10) {
  //     HH = `0${Math.floor(DIFF / 3600000)}`;
  //   } else {
  //     HH = `${Math.floor(DIFF / 3600000)}`;
  //   }
  //   ost = DIFF - HH * 3600000;
  // }
  // if (ost >= 60000) {
  //   if (Math.floor(ost / 60000) < 10) {
  //     mm = `0${Math.floor(ost / 60000)}`;
  //   } else {
  //     mm = `${Math.floor(ost / 60000)}`;
  //   }
  //   ost = DIFF - HH * 3600000 - mm * 60000;
  // }
  // if (ost >= 1000) {
  //   if (Math.floor(ost / 1000) < 10) {
  //     ss = `0${Math.floor(ost / 1000)}`;
  //   } else {
  //     ss = `${Math.floor(ost / 1000)}`;
  //   }
  //   ost = DIFF - HH * 3600000 - mm * 60000 - ss * 1000;
  // }
  // console.log(`${HH}:${mm}:${ss}.${ost}`);
  throw new Error('Not implemented');
}

// timeSpanToString(new Date(2000, 1, 1, 10, 0, 0), new Date(2000, 1, 1, 10, 30, 0));

/**
 * Returns the angle (in radians) between the hands of an analog clock
 * for the specified Greenwich time.
 * If you have problem with solution please read: https://en.wikipedia.org/wiki/Clock_angle_problem
 *
 * SMALL TIP: convert to radians just once, before return in order to not lost precision
 *
 * @param {date} date
 * @return {number}
 *
 * @example:
 *    Date.UTC(2016,2,5, 0, 0) => 0
 *    Date.UTC(2016,3,5, 3, 0) => Math.PI/2
 *    Date.UTC(2016,3,5,18, 0) => Math.PI
 *    Date.UTC(2016,3,5,21, 0) => Math.PI/2
 */
function angleBetweenClockHands(/* date */) {
  throw new Error('Not implemented');
}


module.exports = {
  parseDataFromRfc2822,
  parseDataFromIso8601,
  isLeapYear,
  timeSpanToString,
  angleBetweenClockHands,
};
