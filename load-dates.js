var month = new Date();
var monthNum = new Date();
var day = new Date();
var year = new Date();
var leapYear = false;

month = month.getUTCMonth();
day = day.getDate();
year = year.getFullYear();

	
if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400) )
{
	leapYear = true;  
}

var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

monthName = months[month];

console.log(months);

var thisDay = 0;

for(var i = 0; i < 7; i++){



if ( (month == 1 || 3 || 5 || 7 || 8 || 10 || 12) && day+thisDay == 31){
    month++;
    day = 1;
    thisDay = 0;
}

if ( (month == 2 && day+thisDay == 29 && leapYear == true) || (month == 2 && day+thisDay == 28) ){
    month++;
    day = 1;
    thisDay = 0;
}

if ((month == 4 || 6 || 9 || 11) && day+thisDay == 30){
    month++;
    day = 1;
    thisDay = 0;
}


$('#' + i).text(months[month] + " " + (day+thisDay) + ", " + year);

thisDay++;

}

