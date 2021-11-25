
const gameEngine = () => {
    showName();
    showTime();
}

const showName = () => {
    let name = prompt("Please enter your name...");
    let myName = document.getElementById("myName");
    myName.innerText = name;
}

const showTime = () => {
    var date = new Date;
    var dayNumber = date.getDay();
    var arrayOfWeekdays = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
    var weekDayName = arrayOfWeekdays[dayNumber];
    var localeTime = date.toLocaleTimeString();

    document.getElementById("myClock").innerHTML = weekDayName + " " + localeTime;
    setTimeout(showTime, 1000);
}

gameEngine();