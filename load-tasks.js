db.collection("tasks").get().then(function(querySnapshot) {
    var month = new Date();
    var day = new Date();
    var year = new Date();
    

    month = month.getUTCMonth() + 1;
    day = day.getDate();
    year = year.getFullYear();
    
    querySnapshot.forEach(function(doc) {

        console.log(doc.data().month);
        console.log(month);
        console.log(doc.data().day);
        console.log(day);
        console.log(doc.data().year);
        console.log(year);

        // doc.data() is never undefined for query doc snapshots
        if((((doc.data().day < day) && (doc.data().month < month)) || (doc.data().year < year)) && (doc.data().status == 'incomplete')){
        console.log(doc.id, " => ", doc.data());
        
            $('#past-due-tasks').append('<img id="' + doc.data().id + '" class="status-box" src="images/box.png"/>' + '<p class="text-white task">' + doc.data().task + '</p>');
       
        }
        else if((doc.data().day == day) && (doc.data().month == month) && (doc.data().year == year)){
            console.log("MATCH:" + doc.id);
            $('#0task').append('<img id="' + doc.data().id + '" class="status-box" src="images/box.png"/>' + '<p id="' + doc.data().id + '" class="text-white task">' + doc.data().task + '</p>');
        }
        else if((doc.data().day == (day+1)) && (doc.data().month == month) && (doc.data().year == year)){
            console.log("MATCH:" + doc.id);
            $('#1task').append('<img id="' + doc.data().id + '" class="status-box" src="images/box.png"/>' + '<p id="' + doc.data().id + '" class="text-white task">' + doc.data().task + '</p>');
        }
        else if((doc.data().day == (day+2)) && (doc.data().month == month) && (doc.data().year == year)){
            console.log("MATCH:" + doc.id);
            $('#2task').append('<img id="' + doc.data().id + '" class="status-box" src="images/box.png"/>' + '<p id="' + doc.data().id + '" class="text-white task">' + doc.data().task + '</p>');
        }
        else if((doc.data().day == (day+3)) && (doc.data().month == month) && (doc.data().year == year)){
            console.log("MATCH:" + doc.id);
            $('#3task').append('<img id="' + doc.data().id + '" class="status-box" src="images/box.png"/>' + '<p id="' + doc.data().id + '" class="text-white task">' + doc.data().task + '</p>');
        }
        else if((doc.data().day == (day+4)) && (doc.data().month == month) && (doc.data().year == year)){
            console.log("MATCH:" + doc.id);
            $('#4task').append('<img id="' + doc.data().id + '" class="status-box" src="images/box.png"/>' + '<p id="' + doc.data().id + '" class="text-white task">' + doc.data().task + '</p>');
        }
        else if((doc.data().day == (day+5)) && (doc.data().month == month) && (doc.data().year == year)){
            console.log("MATCH:" + doc.id);
            $('#5task').append('<img id="' + doc.data().id + '" class="status-box" src="images/box.png"/>' + '<p id="' + doc.data().id + '" class="text-white task">' + doc.data().task + '</p>');
        }
        else if((doc.data().day == (day+6)) && (doc.data().month == month) && (doc.data().year == year)){
            console.log("MATCH:" + doc.id);
            $('#6task').append('<img id="' + doc.data().id + '" class="status-box" src="images/box.png"/>' + '<p id="' + doc.data().id + '" class="text-white task">' + doc.data().task + '</p>');
        }
        else{

        }
    });
});


