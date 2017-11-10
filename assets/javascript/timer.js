var counter = 120;
var intervalId;
var isRunning = false;

function run() {
    if (!isRunning) {
        intervalId = setInterval(decrement, 1000);
        isRunning = true;
    }
    else {
        alert("already running");
    }
}

function decrement() {

    counter--;

    $("#timer").html("<h2>" + counter + "</h2>");

    if (counter === 0) {

        stop();

        alert("Time Up!");
    }
}

function stop() {

    clearInterval(intervalId);
    isRunning = false;
}

run();
