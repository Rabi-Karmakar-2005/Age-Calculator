let submitBtn = document.querySelector('.submitBtn');

let isLeapyear = (year) => {            // Function for checking a year is leapyear or not.
    if(year % 4 === 0){
        if(year % 100 === 0){
            if(year % 400 === 0){
                return true;
            }
            else{
                return false;
            }
        }
        else{
            return true;
        }
    }
    else{
        return false;
    }
}

let getNumberOfDays = (month,year) => {     // This function returns the number of days in month.
    let day = 0;
    switch(month){
        case 1 :
            day = 31;
            break;
        case 2 : 
            if(isLeapyear(year)){
                day = 29;
            }
            else{
                day = 28;
            }
            break;
        case 3 :
            day = 31;
            break;
        case 4 : 
            day = 30;
            break;
        case 5 :
            day = 31;
            break;
        case 6 : 
            day = 30;
            break;
        case 7 :
            day = 31;
            break;
        case 8 : 
            day = 31;
            break;
        case 9 :
            day = 30;
            break;
        case 10 : 
            day = 31;
            break;
        case 11 :
            day = 30;
            break;
        case 12 : 
            day = 31;
            break;
    }
    return day;
}

let get = (date) => {               // Takes DOB as argument and returns the number of days,months & years as an object respect top current date.
    let dob = new Date(date);
    let dob_year = dob.getFullYear();
    let dob_month = dob.getMonth();
    let dob_day = dob.getDate();

    let currentDate = new Date();
    let current_year = currentDate.getFullYear();
    let current_month = currentDate.getMonth();
    let current_day = currentDate.getDate();

    let yearCount = 0,monthCount = 0,dayCount = 0;

    yearCount = current_year - dob_year - 1;
    monthCount = (12 - dob_month) + current_month - 1;
    dayCount = (getNumberOfDays(dob_month,dob_year) - dob_day) + current_day;


    if(dayCount >= 30){
        monthCount += Math.floor(dayCount / 30);
        dayCount %= 30;
    }

    if(monthCount >= 12){
        yearCount += Math.floor(monthCount / 12);
        monthCount %= 12;
    }

    return {year : yearCount,month : monthCount,day : dayCount};
}

submitBtn.addEventListener('click',() => {       //onclick on submit button we can see our age as day, month, year format. 
    let date = document.querySelector('.input');
    let output = document.querySelector('.message');
    let age = get(date.value);
    output.innerHTML = `Your age is ${age.year} years ${age.month} months ${age.day} days`;
    setTimeout(() => {
        output.innerHTML =``;
    },30000);
})