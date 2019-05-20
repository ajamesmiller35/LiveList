$(document).on('click', '.status-box', function(event){
    console.log(this.id);
    var thisID = this.id;
    var statRef = db.collection('tasks').doc(this.id);

    return statRef.update({
        status: 'complete'
    })
    .then(function() {
        console.log("Document successfully updated!");
        $("#" + thisID).attr('src', 'images/checked-box.png');
        console.log("#" + thisID);
    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
});