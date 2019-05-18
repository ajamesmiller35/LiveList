

$(document).on('click', '#add-task', function(event){
    $('.add-task').css('display', 'block');
});

$(document).on('click', '#submit-task', function(event){
    var month = $('#month').html();
    var day = $('#day').html();
    var year = $('#year').html();

    var task = $('#task').html();

    var notes = $('#notes').html();

    console.log(month);
    console.log(day);
    console.log(year);
    console.log(task);
    console.log(notes);

    // Add a new document in collection "cities"
   db.collection("tasks").doc(task).set({
    month: month,
    day: day,
    year: year,
    task: task,
    notes, notes
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});

    $('.add-task').css('display', 'none');

});