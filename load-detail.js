$(document).on('click', '.task', function(event){
    var taskRef = db.collection(uid).doc(this.id);

    taskRef.get().then(function(doc) {
        if (doc.exists) {
            //console.log("Document data:", doc.data());
            $('#month-detail').html(doc.data().month);
            $('#day-detail').html(doc.data().day);
            $('#year-detail').html(doc.data().year);
            $('#task-detail').html(doc.data().task);
            $('#notes-detail').html(doc.data().notes);
            console.log(doc.data());
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

            console.log("updated dateID: " + dateID);
            //console.log("Document data:", doc.data());
            return taskRef.update({
                month: month,
                day: day,
                year: year,
                task: task,
                notes: notes,
                priority: priority,
                dateID: dateID
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

