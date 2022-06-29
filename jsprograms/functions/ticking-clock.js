function clock() {
    const clockElement = document.getElementById("clock");
    return setInterval(() => {
        let date = new Date();
        let tick = date.toLocaleTimeString();
        clockElement.textContent = tick;
    }, 1000);
}

clock();