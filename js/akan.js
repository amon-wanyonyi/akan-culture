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
function akanName() {
    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);
    var gender = document.querySelector('input[name="gender"]:checked').value;

    if (invalid(day, month)) {
        var dayIndex = new Date(year, month, -1, day).getDay();

        alert("Your Akan name is: " + getakanName(dayIndex, gender));
    }
}

function get akanName(dayIndex, gender) {
    var boyNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwam"];
    var girlNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];


    return gender === "Male" ? boyNames[dayIndex] : girlNames[dayIndex];
}

// An alternative of the function call and returns boolean

var CC, YY, MM, DD, d, dayValue;

function calculateDayValue() {
    year = document.getElementById("year").value;
    CC = parseInt(year.substring(0, 2));
    YY = parseInt(year.substring(2, 4));
    MM = parseInt(document.getElementById("month").value);
    DD = parseInt(document.getElementById("date").value);
    d = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;
    console.log(d);
    return (Math.round(d));
}