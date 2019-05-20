$(document).on('click', '.task', function(event){
    var taskRef = db.collection('tasks').doc(this.id);

    taskRef.get().then(function(doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            $('#month-detail').html(doc.data().month);
            $('#day-detail').html(doc.data().day);
            $('#year-detail').html(doc.data().year);
            $('#task-detail').html(doc.data().task);
            $('#notes-detail').html(doc.data().notes);
            //$('#highPriority2').attr('value', doc.data().priority);

            if(doc.data().priority != $('#highPriority2').val()){
                document.getElementById('highPriority2').click();
            }

        $(document).on('click', '#update-task', function(event){
            var month = $('#month-detail').html();
            var day = $('#day-detail').html();
            var year = $('#year-detail').html();
            var task = $('#task-detail').html();
            var notes = $('#notes-detail').html();
            var priority = $('#highPriority2').val();
            //console.log($('#highPriority2').val());
            //console.log("Document data:", doc.data());
            return taskRef.update({
                month: month,
                day: day,
                year: year,
                task: task,
                notes: notes,
                priority: priority
            })
            .then(function() {
                console.log("Document successfully updated!");
                location.reload();
            })
            .catch(function(error) {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
        });

        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
});

