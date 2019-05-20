

$(document).on('click', '#add-task', function(event){
    $('.add-task').css('display', 'block');
});

$(document).on('click', '#submit-task', function(event){
    event.preventDefault();

    var month = $('#inputMonth').val();
    var day = $('#inputDay').val();
    var year = $('#inputYear').val();

    var task = $('#inputTask').val();

    var notes = $('#inputNotes').val();

    var priority = $('#highPriority').val();

    var ID = Date.now().toString();


    console.log(month);
    console.log(day);
    console.log(year);
    console.log(task);
    console.log(notes);

    // Add a new document in collection "tasks"
   db.collection("tasks").doc(ID).set({
    id: ID,
    month: month,
    day: day,
    year: year,
    task: task,
    notes: notes,
    priority: priority,
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

});