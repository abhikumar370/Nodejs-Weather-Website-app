const curDate = document.getElementById("date");
let weathercdn = document.getElementById("weathercdn");

const tempStatus = "{%tempstatus%}";

      //condition to check sunny or cloudy
      if (tempStatus == "Sunny") {
        weathercnd.innerHTML =
        `<i class="fa-solid fa-sun fa-xl" style="color: #fee27c;"></i>`;
      } else if (tempStatus == "Clouds") {
        weathercnd.innerHTML =
        `<i class="fa-solid fa-clouds" style="color: #8f9aae;"></i>`;
      } else if (tempStatus == "Rainy") {
        weathercnd.innerHTML =
        `<i class="fa-light fa-cloud-rain"></i>`;
      } else {
        weathercnd.innerHTML =
        `<i class="fa-solid fa-sun fa-xl" style="color: #fee27c;"></i>`;
      }

const getCurrentDay = () => {
    var weekday = new Array(7);
    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thu";
    weekday[5] = "Fri";
    weekday[6] = "Sat";
    let currentTime = new Date();
    let day=weekday[currentTime.getDay()];
    return day;
};

const getCurrentTime = () => {

    var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
    ];
    var now = new Date();
    var month = months[now.getMonth() + 1];
    var date = now.getDate();

    let hours = now.getHours();
    let mins = now.getMinutes();


    let periods = "AM";
    if (hours > 11) {
        periods = "PM";
        if (hours > 12) hours -= 12;
    }

    if (mins < 10) {
        mins = "0" + mins;
    }
return `${month} ${date} | ${hours}:${mins}${periods}`; 
};
curDate.innerHTML= getCurrentDay() + " | " + getCurrentTime();