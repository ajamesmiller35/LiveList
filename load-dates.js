var month = new Date();
var monthNum = new Date();
var day = new Date();
var year = new Date();
var leapYear = false;
var d = new Array();
var m = new Array();
var y = new Array();

month = month.getUTCMonth() + 1;
day = day.getDate();
year = year.getFullYear();

	
if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400) )
{
	leapYear = true;  
}

var months = ["","Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

monthName = months[month];

console.log(month);
console.log(day);
console.log('Month Name: ' + monthName);

var thisDay = 0;

for(var i = 0; i < 7; i++){



/*if ( (month == 1 || 3 || 5 || 7 || 8 || 10 || 12) && day+thisDay == 31){
    month++;
    day = 1;
    thisDay = 0;
    console.log('option 1');
}

else if ( (month == 2 && day+thisDay == 29 && leapYear == true) || (month == 2 && day+thisDay == 28) ){
    month++;
    day = 1;
    thisDay = 0;
    console.log('option 2');
}

else if ((month == 4) && (day+thisDay) == 30){
    console.log(month);
    console.log(day);
    console.log(thisDay);
    month++;
    day = 1;
    thisDay = 0;
    console.log('option 3');
}


$('#' + i).text(months[month] + " " + (day+thisDay) + ", " + year);

thisDay++;*/

switch (month){
    case 1:
            if ((day+thisDay) > 31){
                month++;
                day = 1;
                thisDay = 0;
                }
        break;
    case 2:
            if ((leapYear == false) && (day+thisDay > 28)){
                month++;
                day = 1;
                thisDay = 0;
                }
            else if ((leapYear == true) && (day+thisDay > 29)){
                month++;
                day = 1;
                thisDay = 0;
                }
        break;
    case 3:
            if ((day+thisDay) > 31){
                month++;
                day = 1;
                thisDay = 0;
                }
        break;
    case 4:
            if ((day+thisDay) > 30){
                month++;
                day = 1;
                thisDay = 0;
                }
        break;
    case 5:
            if ((day+thisDay) > 31){
                month++;
                day = 1;
                thisDay = 0;
            }
        break;
    case 6:
            if ((day+thisDay) > 30){
                month++;
                day = 1;
                thisDay = 0;
                }
        break;
    case 7:
            if ((day+thisDay) > 31){
                month++;
                day = 1;
                thisDay = 0;
                }
        break;
    case 8:
            if ((day+thisDay) > 31){
                month++;
                day = 1;
                thisDay = 0;
                }
        break;
    case 9:
            if ((day+thisDay) > 30){
                month++;
                day = 1;
                thisDay = 0;
                }
        break;
    case 10:
            if ((day+thisDay) > 31){
                month++;
                day = 1;
                thisDay = 0;
                }
        break;
    case 11:
            if ((day+thisDay) > 30){
                month++;
                day = 1;
                thisDay = 0;
                }
        break;
    case 12:
            if ((day+thisDay) > 31){
                year++;
                month = 1;
                day = 1;
                thisDay = 0;
                }
        break;
}
    $('#' + i).text(months[month] + " " + (day+thisDay) + ", " + year);
    d[i]=day+thisDay;
    m[i]=month;
    y[i]=year;

    console.log('date logged: ' + m[i] + d[i] + y[i]);

    thisDay++;
}

db.collection(uid).get().then(function(querySnapshot) {

    querySnapshot.forEach(function(doc){
        if((((doc.data().day < day) && (doc.data().month < month)) || (doc.data().year < year)) && (doc.data().status == 'incomplete')){
            console.log(doc.id, " => ", doc.data());
            
                $('#past-due-tasks').append('<img id="' + doc.data().id + '" class="status-box" src="images/box.png"/>' + '<p id="' + doc.data().id + '" class="text-white task">' + doc.data().task + '</p>');
           
            }
        for(var i = 0; i < 7; i++){
            if(m[i] == doc.data().month && d[i] == doc.data().day && y[i] == doc.data().year && doc.data().status == 'incomplete'){
                $('#' + i + 'task').append('<img id="' + doc.data().id + '" class="status-box" src="images/box.png"/>' + '<p id="' + doc.data().id + '" class="text-white task">' + doc.data().task + '</p>');
            }
        }
    });
});

