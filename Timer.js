export {Tracker}
export {startTimerButton}
let startTimerButton = document.querySelector('.start-timer-button');
const timerElement = document.createElement("div");
class Tracker
{
    constructor(element)
    {
        this.startTime = null;
        this.timerInterval = null;
        this.startTimer();
        this.draw(element)
    }
    startTimer()
    {
        this.startTime = new Date().getTime();
        this.timerInterval = setInterval(()=>
        {   
            this.displayTime();
        }, 1000);
    }

    getElapsedTime()
    {
        const currentTime = new Date().getTime();
        const elapsedTime = currentTime - this.startTime;
        return elapsedTime;
    }
    
    draw(element)
    {
        element.append(timerElement);
    }

    displayTime()
    {
        const elapsedTime = this.getElapsedTime();
        timerElement.innerText = this.formatTime(elapsedTime);
    }

    formatTime(millisecondes)
    {
        let seconds = Math.floor(millisecondes / 1000);
        let minutes = Math.floor(seconds / 60);
        seconds %= 60;
        let hours = Math.floor(minutes / 60);
        minutes %= 60;

        return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}`;
    }
    pad(num)
    {
        return num < 10 ? '0' + num : num;
    }
}



