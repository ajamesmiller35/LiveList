var dateValid = false;

    $(document).on('keyup',function(){

        if ($('.add-task').css('display') == 'block'){
            var monthTest = parseInt($('.monthInput').val(), 10); 
            var dayTest = parseInt($('.dayInput').val(), 10);
            var yearTest = parseInt($('.yearInput').val(), 10);
        }
        else{
            var monthTest = parseInt($('#month-detail').html(), 10);
            var dayTest = parseInt($('#day-detail').html(), 10);
            var yearTest = parseInt($('#year-detail').html(), 10);
        }
        
        var leapYearTest = false;
        

        if( (0 == yearTest % 4) && (0 != yearTest % 100) || (0 == yearTest % 400) ){
            leapYearTest = true;  
        }

        console.log("month: " + monthTest);
        console.log("day: " + dayTest);
        console.log("year: " + yearTest);
        console.log("Leap Year: " + leapYearTest);

        if(monthTest && dayTest && yearTest){
            if(monthTest >= 1 && monthTest <=12){
                if((dayTest <=31 && dayTest >=1) && ((monthTest === 1) || (monthTest === 3) || (monthTest === 5) || (monthTest === 7) || (monthTest === 8) || (monthTest === 10) || (monthTest === 12))){
                    if ($('.add-task').css('display') == 'block'){
                        $('#date-submit-warning').css('display', 'none');
                        $('#date-success').css('display', 'block');
                        $('#date-warning').css('display', 'none');
                    }
                    else{
                        $('#date-update-success').css('display', 'block');
                        $('#date-update-warning').css('display', 'none');
                    }
                    dateValid = true;
                }
                else if((monthTest == 2 && leapYearTest == true) && (dayTest <=29 && dayTest >=1)){
                    if ($('.add-task').css('display') == 'block'){
                        $('#date-success').css('display', 'block');
                        $('#date-warning').css('display', 'none');
                        $('#date-submit-warning').css('display', 'none');
                    }
                    else{
                        $('#date-update-success').css('display', 'block');
                        $('#date-update-warning').css('display', 'none');
                    }
                    dateValid = true;
                }
                else if((monthTest == 2 && leapYearTest == false) && (dayTest <=28 && dayTest >=1)){
                    if ($('.add-task').css('display') == 'block'){
                        $('#date-success').css('display', 'block');
                        $('#date-warning').css('display', 'none');
                        $('#date-submit-warning').css('display', 'none');
                    }
                    else{
                        $('#date-update-success').css('display', 'block');
                        $('#date-update-warning').css('display', 'none');
                    }
                    dateValid = true;
                }
                else if((dayTest <= 30 && dayTest >= 0) && ((monthTest === 4) || (monthTest === 6) || (monthTest === 9) || (monthTest === 11))){
                    if ($('.add-task').css('display') == 'block'){
                        $('#date-success').css('display', 'block');
                        $('#date-warning').css('display', 'none');
                        $('#date-submit-warning').css('display', 'none');
                    }
                    else{
                        $('#date-update-success').css('display', 'block');
                        $('#date-update-warning').css('display', 'none');
                    }
                    dateValid = true;
                }
                else{
                    //$('#date-warning').css('display', 'block');
                    //$('#date-success').css('display', 'none');
                    //$('#date-update-success').css('display', 'none');
                    //$('#date-update-warning').css('display', 'block');
                    if($('.add-task').css('display') == 'block'){
                        $('#date-warning').css('display', 'block');
                        $('#date-success').css('display', 'none');
                        }
                        else{
                        $('#date-update-warning').css('display', 'block');
                        $('#date-update-success').css('display', 'none');
                    }
                    dateValid = false;
                }
            }
            else{
                if($('.add-task').css('display') == 'block'){
                $('#date-warning').css('display', 'block');
                $('#date-success').css('display', 'none');
                }
                else{
                $('#date-update-warning').css('display', 'block');
                $('#date-update-success').css('display', 'none');
                }
                dateValid = false;
            }
            
        }
        console.log(dateValid);
    });