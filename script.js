// <!----------------------------Program no 1----------------------------------------->
var is_date = function(input) {
    if (Object.prototype.toString.call(input) === "[object Date]")
        return true;
    return false;
}
console.log(is_date("October 13, 2014 11:13:00"));
console.log(is_date(new Date(86400000)));
console.log(is_date(new Date(99, 5, 24, 11, 33, 30, 0)));
console.log(is_date([1, 2, 4, 0]));
// <!----------------------------Program no 2----------------------------------------->
var curday = function(sp) {
    today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //As January is 0.
    var yyyy = today.getFullYear();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    return (mm + sp + dd + sp + yyyy);
};
console.log(curday('/'));
console.log(curday('-'));
// <!----------------------------Program no 3----------------------------------------->
var getDaysInMonth = function(month, year) {
    return new Date(year, month, 0).getDate();
};
console.log(getDaysInMonth(1, 2012));
console.log(getDaysInMonth(2, 2012));
console.log(getDaysInMonth(9, 2012));
console.log(getDaysInMonth(12, 2012));
// <!----------------------------Program no 4----------------------------------------->
var month_name = function(dt) {
    mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return mlist[dt.getMonth()];
};
console.log(month_name(new Date("10/11/2009")));
console.log(month_name(new Date("11/13/2014")));
// <!----------------------------Program no 5----------------------------------------->
var compare_dates = function(date1, date2) {
    if (date1 > date2) return ("Date1 > Date2");
    else if (date1 < date2) return ("Date2 > Date1");
    else return ("Date1 = Date2");
}

console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00')));
console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00')));
console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));
// <!----------------------------Program no 6----------------------------------------->
var add_minutes = function(dt, minutes) {
    return new Date(dt.getTime() + minutes * 60000);
}
console.log(add_minutes(new Date(2014, 10, 2), 30).toString());
// <!----------------------------Program no 7----------------------------------------->
var is_weekend = function(date1) {
    var dt = new Date(date1);

    if (dt.getDay() == 6 || dt.getDay() == 0) {
        return "weekend";
    }
}

console.log(is_weekend('Nov 15, 2014'));
console.log(is_weekend('Nov 16, 2014'));
console.log(is_weekend('Nov 17, 2014'));
// <!----------------------------Program no 8----------------------------------------->
var date_diff_indays = function(date1, date2) {
    dt1 = new Date(date1);
    dt2 = new Date(date2);
    return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24));
}
console.log(date_diff_indays('04/02/2014', '11/04/2014'));
console.log(date_diff_indays('12/02/2014', '11/04/2014'));
// <!----------------------------Program no 9----------------------------------------->    
var lastday = function(y, m) {
    return new Date(y, m + 1, 0).getDate();
}
console.log(lastday(2014, 0));
console.log(lastday(2014, 1));
console.log(lastday(2014, 11));
// <!----------------------------Program no 10----------------------------------------->
var yesterday = function(date1) {
    var dt = new Date(date1);
    return new Date((dt.setDate(dt.getDate() - 1))).toString();
}
console.log(yesterday('Nov 15, 2014'));
console.log(yesterday('Nov 16, 2015'));
console.log(yesterday('Nov 17, 2016'));
// <!----------------------------Program no 11----------------------------------------->
function max_date(all_dates) {
    var max_dt = all_dates[0],
        max_dtObj = new Date(all_dates[0]);
    all_dates.forEach(function(dt, index) {
        if (new Date(dt) > max_dtObj) {
            max_dt = dt;
            max_dtObj = new Date(dt);
        }
    });
    return max_dt;
}
console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03']));
// <!----------------------------Program no 12----------------------------------------->
function min_date(all_dates) {
    var min_dt = all_dates[0],
        min_dtObj = new Date(all_dates[0]);
    all_dates.forEach(function(dt, index) {
        if (new Date(dt) < min_dtObj) {
            min_dt = dt;
            min_dtObj = new Date(dt);
        }
    });
    return min_dt;
}
console.log(min_date(['2015/02/01', '2015/02/02', '2015/01/03']));
// <!----------------------------Program no 13----------------------------------------->
function timeConvert(n) {
    var num = n;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return num + " minutes = " + rhours + " hour(s) and " + rminutes + " minute(s).";
}

console.log(timeConvert(200));
// <!----------------------------Program no 14----------------------------------------->
function days_of_a_year(year) {

    return isLeapYear(year) ? 366 : 365;
}

function isLeapYear(year) {
    return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
}

console.log(days_of_a_year(2015));
console.log(days_of_a_year(2016));
// <!----------------------------Program no 15----------------------------------------->
function quarter_of_the_year(date) {
    var month = date.getMonth() + 1;
    return (Math.ceil(month / 3));
}


console.log(quarter_of_the_year(new Date()));
console.log(quarter_of_the_year(new Date(2015, 1, 21)));
console.log(quarter_of_the_year(new Date(2015, 10, 18)));
// <!----------------------------Program no 16----------------------------------------->
function days_passed(dt) {
    var current = new Date(dt.getTime());
    var previous = new Date(dt.getFullYear(), 0, 1);

    return Math.ceil((current - previous + 1) / 86400000);
}
console.log(days_passed(new Date(2015, 0, 15)));
console.log(days_passed(new Date(2015, 11, 14)));
// <!----------------------------Program no 17----------------------------------------->
function Unix_timestamp(t) {
    var dt = new Date(t * 1000);
    var hr = dt.getHours();
    var m = "0" + dt.getMinutes();
    var s = "0" + dt.getSeconds();
    return hr + ':' + m.substr(-2) + ':' + s.substr(-2);
}

console.log(Unix_timestamp(1412743274));
// <!----------------------------Program no 18----------------------------------------->
function calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

console.log(calculate_age(new Date(1982, 11, 4)));

console.log(calculate_age(new Date(1962, 1, 1)));
// <!----------------------------Program no 19----------------------------------------->
function day_of_the_month(d) {
    return (d.getDate() < 10 ? '0' : '') + d.getDate();
}

d = new Date();
console.log(day_of_the_month(d));

d = new Date(2015, 10, 1);
console.log(day_of_the_month(d));
// <!----------------------------Program no 20----------------------------------------->
Date.shortDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function short_Days(dt) {
    return Date.shortDays[dt.getDay()];
}

dt = new Date();
console.log(short_Days(dt));

dt = new Date(2015, 10, 1);
console.log(short_Days(dt));
// <!----------------------------Program no 21----------------------------------------->
Date.longDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function long_Days(dt) {
    return Date.longDays[dt.getDay()];
}

dt = new Date();
console.log(long_Days(dt));

dt = new Date(2015, 10, 1);
console.log(long_Days(dt));
// <!----------------------------Program no 22----------------------------------------->
function ISO_numeric_date(dt) {
    return (dt.getDay() === 0 ? 7 : dt.getDay());
}

dt = new Date();
console.log(ISO_numeric_date(dt));

dt = new Date(2015, 10, 1);
console.log(ISO_numeric_date(dt));
// <!----------------------------Program no 23----------------------------------------->
function english_ordinal_suffix(dt) {
    return dt.getDate() + (dt.getDate() % 10 == 1 && dt.getDate() != 11 ? 'st' : (dt.getDate() % 10 == 2 && dt.getDate() != 12 ? 'nd' : (dt.getDate() % 10 == 3 && dt.getDate() != 13 ? 'rd' : 'th')));
}

dt = new Date();
console.log(english_ordinal_suffix(dt));

dt = new Date(2015, 10, 1);
console.log(english_ordinal_suffix(dt));
// <!----------------------------Program no 24----------------------------------------->
function ISO8601_week_no(dt) {
    var tdt = new Date(dt.valueOf());
    var dayn = (dt.getDay() + 6) % 7;
    tdt.setDate(tdt.getDate() - dayn + 3);
    var firstThursday = tdt.valueOf();
    tdt.setMonth(0, 1);
    if (tdt.getDay() !== 4) {
        tdt.setMonth(0, 1 + ((4 - tdt.getDay()) + 7) % 7);
    }
    return 1 + Math.ceil((firstThursday - tdt) / 604800000);
}

dt = new Date();
console.log(ISO8601_week_no(dt));

dt = new Date(2015, 10, 1);
console.log(ISO8601_week_no(dt));
// <!----------------------------Program no 25----------------------------------------->
Date.longMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function full_month(dt) {
    return Date.longMonths[dt.getMonth()];
}

dt = new Date();
console.log(full_month(dt));

dt = new Date(2015, 10, 1);
console.log(full_month(dt));
// <!----------------------------Program no 26----------------------------------------->
function numeric_month(dt) {
    return (dt.getMonth() < 9 ? '0' : '') + (dt.getMonth() + 1);
}
dt = new Date();
console.log(numeric_month(dt));

dt = new Date(2015, 10, 1);
console.log(numeric_month(dt));
// <!----------------------------Program no 27----------------------------------------->
Date.shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function short_months(dt) {
    return Date.shortMonths[dt.getMonth()];
}

dt = new Date();
console.log(short_months(dt));

dt = new Date(2015, 10, 1);
console.log(short_months(dt));
// <!----------------------------Program no 28----------------------------------------->
function full_year(dt) {
    return dt.getFullYear();
}
dt = new Date();
console.log(full_year(dt));

dt = new Date(2015, 10, 1);
console.log(full_year(dt));
// <!----------------------------Program no 29----------------------------------------->
function sort_year(dt) {
    return ('' + dt.getFullYear()).substr(2);
}

dt = new Date();
console.log(sort_year(dt));

dt = new Date(1989, 10, 1);
console.log(sort_year(dt));
// <!----------------------------Program no 30----------------------------------------->
function lower_am_pm(dt) {
    return dt.getHours() < 12 ? 'AM' : 'PM';
}

dt = new Date();
console.log(lower_am_pm(dt));

dt = new Date(1989, 10, 1);
console.log(lower_am_pm(dt));
// <!----------------------------Program no 31----------------------------------------->
function upper_am_pm(dt) {
    return dt.getHours() < 12 ? 'AM' : 'PM';
}

dt = new Date();
console.log(upper_am_pm(dt));

dt = new Date(1989, 10, 1);
console.log(upper_am_pm(dt));
// <!----------------------------Program no 32----------------------------------------->
function internet_time(dt) {
    return Math.floor((((dt.getUTCHours() + 1) % 24) + dt.getUTCMinutes() / 60 + dt.getUTCSeconds() / 3600) * 1000 / 24);
}

dt = new Date();
console.log(internet_time(dt));

dt = new Date(1989, 10, 1);
console.log(internet_time(dt));
// <!----------------------------Program no 33----------------------------------------->
function hours_with_zeroes(dt) {
    return ((dt.getHours() % 12 || 12) < 10 ? '0' : '') + (dt.getHours() % 12 || 12);
}

dt = new Date();
console.log(hours_with_zeroes(dt));

dt = new Date(1989, 10, 1);
console.log(hours_with_zeroes(dt));
// <!----------------------------Program no 34----------------------------------------->
function hours_without_zeroes(dt) {
    return dt.getHours();
}

dt = new Date();
console.log(hours_without_zeroes(dt));

dt = new Date(1989, 10, 1);
console.log(hours_without_zeroes(dt));
// <!----------------------------Program no 35----------------------------------------->
function minutes_with_leading_zeros(dt) {
    return (dt.getMinutes() < 10 ? '0' : '') + dt.getMinutes();
}

dt = new Date();
console.log(minutes_with_leading_zeros(dt));

dt = new Date(1989, 10, 1);
console.log(minutes_with_leading_zeros(dt));
// <!----------------------------Program no 36----------------------------------------->
function seconds_with_leading_zeros(dt) {
    return (dt.getMinutes() < 10 ? '0' : '') + dt.getMinutes();
}

dt = new Date();
console.log(seconds_with_leading_zeros(dt));

dt = new Date(1989, 10, 1);
console.log(seconds_with_leading_zeros(dt));
// <!----------------------------Program no 37----------------------------------------->
function seconds_with_leading_zeros(dt) {
    return /\((.*)\)/.exec(new Date().toString())[1];
}

dt = new Date();
console.log(seconds_with_leading_zeros(dt));

dt = new Date(1989, 10, 1);
console.log(seconds_with_leading_zeros(dt));
// <!----------------------------Program no 38----------------------------------------->
function daylights_savings(dt) {
    var dst = null;
    for (var i = 0; i < 12; ++i) {
        var d = new Date(dt.getFullYear(), i, 1);
        var offset = dt.getTimezoneOffset();

        if (dst === null)
            dst = offset;
        else if (offset < dst) {
            dst = offset;
            break;
        } else if (offset > dst)
            break;
    }
    return (dt.getTimezoneOffset() == dst) | 0;
}

dt = new Date();
console.log(daylights_savings(dt));

dt = new Date(1989, 10, 1);
console.log(daylights_savings(dt));
// <!----------------------------Program no 39----------------------------------------->
function diff_to_GMT(dt) {
    return (-dt.getTimezoneOffset() < 0 ? '-' : '+') + (Math.abs(dt.getTimezoneOffset() / 60) < 10 ? '0' : '') + (Math.abs(dt.getTimezoneOffset() / 60)) + '00';
}

dt = new Date();
console.log(diff_to_GMT(dt));

dt = new Date(1989, 10, 1);
console.log(diff_to_GMT(dt));
// <!----------------------------Program no 40----------------------------------------->
function timezone_offset_in_seconds(dt) {
    return -dt.getTimezoneOffset() * 60;
}

dt = new Date();
console.log(timezone_offset_in_seconds(dt));

dt = new Date(1989, 10, 1);
console.log(timezone_offset_in_seconds(dt));
// <!----------------------------Program no 41----------------------------------------->
function add_years(dt, n) {
    return new Date(dt.setFullYear(dt.getFullYear() + n));
}

dt = new Date();
console.log(add_years(dt, 10).toString());

dt = new Date(2014, 10, 2);
console.log(add_years(dt, 10).toString());
// <!----------------------------Program no 42----------------------------------------->
function add_weeks(dt, n) {
    return new Date(dt.setDate(dt.getDate() + (n * 7)));
}

dt = new Date();
console.log(add_weeks(dt, 10).toString());

dt = new Date(2014, 10, 2);
console.log(add_weeks(dt, 10).toString());
// <!----------------------------Program no 43----------------------------------------->
function add_months(dt, n) {

    return new Date(dt.setMonth(dt.getMonth() + n));
}

dt = new Date();
console.log(add_months(dt, 10).toString());

dt = new Date(2014, 10, 2);
console.log(add_months(dt, 10).toString());
// <!----------------------------Program no 44----------------------------------------->
function diff_minutes(dt2, dt1) {

    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= 60;
    return Math.abs(Math.round(diff));

}

dt1 = new Date(2014, 10, 2);
dt2 = new Date(2014, 10, 3);
console.log(diff_minutes(dt1, dt2));
// <!----------------------------Program no 45----------------------------------------->
function diff_hours(dt2, dt1) {

    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60);
    return Math.abs(Math.round(diff));

}

dt1 = new Date(2014, 10, 2);
dt2 = new Date(2014, 10, 3);
console.log(diff_hours(dt1, dt2));


dt1 = new Date("October 13, 2014 08:11:00");
dt2 = new Date("October 13, 2014 11:13:00");
console.log(diff_hours(dt1, dt2));
// <!----------------------------Program no 46----------------------------------------->
function diff_days(dt2, dt1) {

    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60 * 24);
    return Math.abs(Math.round(diff));

}

dt1 = new Date(2014, 10, 2);
dt2 = new Date(2014, 10, 6);
console.log(diff_days(dt1, dt2));

dt1 = new Date("October 13, 2014 08:11:00");
dt2 = new Date("October 19, 2014 11:13:00");
console.log(diff_days(dt1, dt2));
// <!----------------------------Program no 47----------------------------------------->
function diff_weeks(dt2, dt1) {

    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60 * 24 * 7);
    return Math.abs(Math.round(diff));

}

dt1 = new Date(2014, 10, 2);
dt2 = new Date(2014, 10, 11);
console.log(diff_weeks(dt1, dt2));

dt1 = new Date("June 13, 2014 08:11:00");
dt2 = new Date("October 19, 2014 11:13:00");
console.log(diff_weeks(dt1, dt2));
// <!----------------------------Program no 48----------------------------------------->
function diff_months(dt2, dt1) {

    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60 * 24 * 7 * 4);
    return Math.abs(Math.round(diff));

}

dt1 = new Date(2014, 10, 2);
dt2 = new Date(2014, 10, 11);
console.log(diff_months(dt1, dt2));

dt1 = new Date("June 13, 2014 08:11:00");
dt2 = new Date("October 19, 2014 11:13:00");
console.log(diff_months(dt1, dt2));
// <!----------------------------Program no 49----------------------------------------->
function diff_years(dt2, dt1) {

    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60 * 24);
    return Math.abs(Math.round(diff / 365.25));

}

dt1 = new Date(2014, 10, 2);
dt2 = new Date(2014, 10, 11);
console.log(diff_years(dt1, dt2));

dt1 = new Date("June 13, 2014 08:11:00");
dt2 = new Date("October 19, 2017 11:13:00");
console.log(diff_years(dt1, dt2));
// <!----------------------------Program no 50----------------------------------------->
function startOfWeek(date) {
    var diff = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);

    return new Date(date.setDate(diff));

}

dt = new Date();

console.log(startOfWeek(dt).toString());
// <!----------------------------Program no 51----------------------------------------->
function endOfWeek(date) {

    var lastday = date.getDate() - (date.getDay() - 1) + 6;
    return new Date(date.setDate(lastday));

}

dt = new Date();

console.log(endOfWeek(dt).toString());
// <!----------------------------Program no 52----------------------------------------->
function startOfMonth(date) {

    return new Date(date.getFullYear(), date.getMonth(), 1);

}

dt = new Date();

console.log(startOfMonth(dt).toString());
// <!----------------------------Program no 53----------------------------------------->
function endOfMonth(date) {

    return new Date(date.getFullYear(), date.getMonth() + 1, 0);

}

dt = new Date();

console.log(endOfMonth(dt).toString());