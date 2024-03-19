
console.log("index.js");
function updateCountdownTimer() {
    const eventDate = new Date('March 26, 2024 14:00:00').getTime();
    const curDate = new Date().getTime();
    const distance = eventDate - curDate;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("daysTens").innerText = days > 9 ? days.toLocaleString().substring(0, 1) : 0;

    document.getElementById("daysOnes").innerText = days > 9 ? days.toLocaleString().substring(1, 2) : days;

    document.getElementById("hoursTens").innerText = hours > 9 ? hours.toLocaleString().substring(0, 1) : 0;

    document.getElementById("hoursOnes").innerText = hours > 9 ? hours.toLocaleString().substring(1, 3) : hours;

    document.getElementById("minutesTens").innerText = minutes > 9 ? minutes.toLocaleString().substring(0, 1) : 0;

    document.getElementById("minutesOnes").innerText = minutes > 9 ? minutes.toLocaleString().substring(1, 2) : minutes;
}

window.addEventListener("load", (e) => {
    updateCountdownTimer();
    console.log("Page loaded");
    setInterval(updateCountdownTimer, 1000);
})
