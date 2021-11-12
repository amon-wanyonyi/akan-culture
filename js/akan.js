//Date and Month validation
function invalid(day, month) {
    if (day < 1 || day > || month == 2 && day) {
        alert("Date entered is invalid");
        day.focus();
        return false;
    } else if (month < 1 || month > 12) {
        alert("Month entered is invalid");
        month.focus();
        return false;
    } else {
        return true;
    }
}

//Function to call Akan names according to user inputs
//function akanName()