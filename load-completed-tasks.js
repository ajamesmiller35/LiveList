
var monthsText = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

// Create a query against the collection.
var query = db.collection(uid).where("status", "==", "complete");

    query.get().then(function(querySnapshot){

    querySnapshot.forEach(function(doc){
        $('#completed-tasks-box').append('<div class="row"><div class="col-lg-4 border-bottom-white"><p class="text-white"><p id="task-due-date" class="text-white">' + monthsText[doc.data().month] + ' ' + doc.data().day + ' ' + doc.data().year + '</p></p></div><div id="past-due-tasks tasks" class="col-lg-8 border-bottom-white"><img id="' + doc.data().id + '" src="images/checked-box.png" class="status-box"/>' + '<p id="' + doc.data().id + '" class="text-white task">' + doc.data().task + '</p>' + '</div></div>');
        
        console.log(doc.data());
    });
});

