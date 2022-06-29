function* getStop() {
    yield "Madurai";
    yield "Dindugal";
    yield "Tirchy";
    yield "Ariyalur";
    yield "Virudhachalam";
}

const trainLine = getStop();
const nextStopButton = document.getElementById("next-stop");
nextStopButton.addEventListener('click', () => {
    let currentStop = trainLine.next();
    if (currentStop.done) {
        console.log("<-- We have reached the destination -->");
        nextStopButton.setAttribute('disabled', true);
    } else {
        console.log(currentStop.value);
    }
});