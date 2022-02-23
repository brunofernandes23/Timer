function clock() {
    function getSeconds(seconds) {
        const date = new Date(seconds * 1000);
        return date.toLocaleTimeString("pt-BR", {
            hour12: false,
            timeZone: "UTC",
        });
    }

    const clock = document.querySelector("#clock");
    const start = document.querySelector("#start");
    const pause = document.querySelector("#pause");
    const stop = document.querySelector("#stop");
    let seconds = 0;
    let timer;

    function startClock() {
        timer = setInterval(() => {
            seconds++;
            clock.innerHTML = getSeconds(seconds);
        }, 1000);
    }

    start.addEventListener("click", (e) => {
        clock.classList.remove("paused");
        clearInterval(timer);
        startClock();
    });

    pause.addEventListener("click", (e) => {
        clearInterval(timer);
        clock.classList.add("paused");
    });

    stop.addEventListener("click", (e) => {
        clock.classList.remove("paused");
        clearInterval(timer);
        clock.innerHTML = "00:00:00";
        seconds = 0;
    });
}

clock();