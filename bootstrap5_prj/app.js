const countdown = () => {
    const countDate = new Date('May 20, 2022 00:00:00').getTime(); //getTime() used to get the time in milliseconds
    const now = new Date().getTime(); //gets the current time
    const gap = countDate - now;



    //The working of the time kini
    const second = 1000; //1000 milliseconds in a second
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //calculating from the gap how many days, minuted and seconds are there
    const textDay = Math.floor(gap / day); // the day is in decimal so we use Math.floor to round it down
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);


    document.querySelector(".day").innerHTML = textDay; //replacing the class day with the calculated day
    document.querySelector(".hour").innerHTML = textHour;
    document.querySelector(".minute").innerHTML = textMinute;
    document.querySelector(".second").innerHTML = textSecond;

}



// countdown(); we didn't do this because the code would only execute once

setInterval(countdown, 1000); //this runs the coundown every second