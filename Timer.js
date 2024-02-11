let startTimerButton = document.querySelector('.start-timer-button');
taskContainer.append(testDiv);

let timer = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

class Tracker
{
    constructor(isStarted = false)
    {
        this.isStarted = isStarted;
        this.draw();
        setInterval(this.startTimer, 1000);
    }
    startTimer()
    {
        timer++;
        if(seconds <= 60)
        {
            seconds++;
        }
        if (seconds == 60)
        {
            minutes++;
            seconds = 0;
        }
        if (minutes == 60)
        {
            hours ++;
            minutes = 0;
        }
        console.log('timer: ' + timer);
        console.log("sec: " + seconds);
        console.log("minutes: " + minutes);
        console.log("hours: " + hours);
    }
    draw()
    {
        let secondsRight = 0;
        let secondsLeft = 0;
        let trackerElement = document.createElement("div");
        let secondsElementRight = document.createElement("span");
        let secondsElementLeft = document.createElement("span");
        // let hoursElement = document.createElement("span");        
        
        if(seconds < 10)
        {
            secondsRight ++;
            secondsElementRight.innerText = secondsRight;
            secondsElementLeft.innerText = "0";
        }
        if (secondsRight == 10)
        {
            secondsRight = 0;
            secondsLeft ++;
            secondsElementLeft.innerText = secondsLeft;
        }
        if (seconds == 60)
        {
            let minutesElement = document.createElement("span");
            minutesElement.append(trackerElement);
            minutesElement.innerText = minutes;
        }
        if (minutes == 60)
        
        taskContainer.append(trackerElement);
        secondsElementLeft.append(trackerElement);
        secondsElementRight.append(trackerElement);
    }
}

startTimerButton.addEventListener("click",()=>
{
    new Tracker();
})


