let is24HourFormat = true;
function displayClock() {
    const time = document.querySelector('.screen.time');
    const currentDate = document.querySelector('.current--date');
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes().toString().padStart(2, '0');
    const second = date.getSeconds().toString().padStart(2, '0');

    let formattedHour = hour;
    let meridiem = '';

    if (!is24HourFormat) {
        formattedHour = (hour % 12) || 12;
        meridiem = hour < 12 ? 'AM' : 'PM';
    }

    const fullTime = `${formattedHour}:${minute}:${second} ${meridiem}`;

    time.textContent = fullTime;

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    currentDate.textContent = date.toLocaleDateString(undefined, options);
}

function toggleFormat() {
    is24HourFormat = !is24HourFormat;
    document.getElementById('formatButton').textContent = is24HourFormat ? 'Switch to 12-hour format' : 'Switch to 24-hour format';
    displayClock(); // Update the clock display
}

document.getElementById('formatButton').addEventListener('click', toggleFormat);

setInterval(displayClock, 1000);
displayClock(); // Initial display


