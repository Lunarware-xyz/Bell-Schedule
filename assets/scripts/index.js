function newTime() {
    let time_now = new Date();
    let time = time_now.toLocaleTimeString();
    let date = time_now.toLocaleDateString();
    let timeObj = document.getElementById('time');
    let dateObj = document.getElementById('date');
    time_now = new Date();
    timeObj.innerText = time
    dateObj.innerText = date
}

setInterval(newTime, 1000);
