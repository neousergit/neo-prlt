var GeneralHelper = require("../helpers/generalHelper");

module.exports = {
    prepareParams: function(strInitialDate, strFinalDate, strInitialTime, strFinalTime){
        if(strInitialDate){
            if(GeneralHelper.validateDateYYYYMMDD(strInitialDate)){
                var year = strInitialDate.substring(0,4);
                var month = strInitialDate.substring(4,6) -1;
                var day = strInitialDate.substring(6,8);
                var initialDate = new Date(year, month, day);
            } else {
                return null;
            }
        }
        if(strFinalDate){
            if(GeneralHelper.validateDate(strFinalDate)){
                var year = strFinalDate.substring(0,4);
                var month = strFinalDate.substring(4,6) -1;
                var day = strFinalDate.substring(6,8);
                var finalDate = new Date(year, month, day);
            } else {
                return null;
            }
        }
        if(strInitialTime){
            if(GeneralHelper.validateTimeHHMM(strInitialTime)){
                var hour_i = strInitialTime.substring(0,2);
                var minutes_i = strInitialTime.substring(2,4);
            } else {
                return null;
            }
        }
        if(strFinalTime){
            if(GeneralHelper.validateTimeHHMM(strFinalTime)){
                var hour_f = strFinalTime.substring(0,2);
                var minutes_f = strFinalTime.substring(2,4);
            } else {
                return null;
            }
        }
        var params = {};
        if(hour_i){
            if(!initialDate){
                return null;
            } else {
                initialDate.setHours(hour_i);
                initialDate.setMinutes(minutes_i);
            }
        }
        if(hour_f){
            if(!finalDate){
                return null;
            } else {
                finalDate.setHours(hour_f);
                finalDate.setMinutes(minutes_f);
            }
        }
        if(initialDate && finalDate){
            var it = initialDate.getTime();
            var ft = initialDate.getTime();
            if(it>ft){
                return null;
            }
        }
        return {
            initialDate: initialDate,
            finalDate: finalDate
        }
    }
};