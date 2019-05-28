var taskStatus = false;
$(document).on('keyup', function(event){
    if($('#inputTask').val()){
        taskStatus = true;
        $('#task-warning').css('display', 'none');
        console.log("task status: " + taskStatus);
        console.log($('#inputTask').val());
    }
    });

$(document).on('click', '#add-task', function(event){
    $('.add-task').css('display', 'block');
});

$(document).on('click', '#submit-task', function(event){
    event.preventDefault();    

    if(dateValid && taskStatus){

    var month = $('#inputMonth').val();
    var day = $('#inputDay').val();
    var year = $('#inputYear').val();
    var leapYear = false;

    if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400) )
    {
	    leapYear = true;  
    }

    var task = $('#inputTask').val();

    var notes = $('#inputNotes').val();

    var priority = $('#highPriority').val();

    var ID = Date.now().toString();

    var monthMultiplier = 0;

    if(month == 1){
        monthMultiplier = 0;
    }
    if(month >= 2){
        monthMultiplier += 31;
    }
    if((month >= 3) && (leapYear == true)){
        monthMultiplier += 29;
    }
    if((month >= 3) && (leapYear == false)){
        monthMultiplier += 28;
    }
    if(month >= 4){
        monthMultiplier += 31;
    }
    if(month >= 5){
        monthMultiplier += 30;
    }
    if(month >= 6){
        monthMultiplier += 31;
    }
    if(month >= 7){
        monthMultiplier += 30;
    }
    if(month >= 8){
        monthMultiplier += 31;
    }
    if(month >= 9){
        monthMultiplier += 31;
    }
    if(month >= 10){
        monthMultiplier += 30;
    }
    if(month >= 11){
        monthMultiplier += 31;
    }
    if(month >= 12){
        monthMultiplier += 30;
    }
    
    var dayInt = parseInt(day, 10);
    var yearInt = parseInt(year, 10);

    //var dateID = yearInt + (100/(monthMultiplier + dayInt)); 

    if(leapYear == false){
        var dateID = yearInt + ((monthMultiplier + dayInt)/365);
    }
    else if(leapYear == true){
        var dateID = yearInt + ((monthMultiplier + dayInt)/366);
    }

    console.log('monthMultiplier: ' + monthMultiplier);
    console.log('dateID: ' + dateID);
    console.log('dayInt: ' + dayInt);


    console.log(month);
    console.log(day);
    console.log(year);
    console.log(task);
    console.log(notes);

    // Add a new document in collection "tasks"
   db.collection(uid).doc(ID).set({
    id: ID,
    month: month,
    day: day,
    year: year,
    task: task,
    notes: notes,
    priority: priority,
    dateID: dateID,
    status: "incomplete"
})
.then(function() {
    console.log("Document successfully written!");
    location.reload();
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});

    $('.add-task').css('display', 'none');
}
if(taskStatus == false){
    console.log('Task required');
    $('#task-warning').css('display', 'block');
}
if(dateValid == false){
    console.log('date invalid');
    $('#date-submit-warning').css('display', 'block');
}
else{
    console.log('date false');
}

});