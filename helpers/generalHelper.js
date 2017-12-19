module.exports = {
    validateDateYYYYMMDD: function (selectedDate){
        if(selectedDate == '') {return false;}
        
        if(!/^[0-9]{8}$/.test(selectedDate)){
            return false;
        }
        
        var year = selectedDate.substring(0,4);
        var month = selectedDate.substring(4,6);
        var day = selectedDate.substring(6,8);
      
        if (month < 1 || month > 12){
            return false;
        } else if (day < 1 || day> 31){
            return false;
        }else if ((month==4 || month==6 || month==9 || month==11) && day ==31){
            return false;
        }else if (month == 2){
            var isLeapYear = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
            if (day> 29 || (day ==29 && !isLeapYear)){
                return false;
            }
        }
        return true;
    },
    validateTimeHHMM: function(timeStr){
        
        if(timeStr == '') {return false;}
        
        if(!/^[0-9]{4}$/.test(timeStr)){
            return false;
        }
        
        var hour = timeStr.substring(0,2);
        var minutes = timeStr.substring(2,4);
      
        if (hour >= 24 || minutes >= 60){
            return false;
        }
        return true;
    },
};