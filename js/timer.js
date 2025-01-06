function startCountdown(targetDate){
    const timerElement = document.getElementById("timer");

    const updateTimer = () => {
        const now = new Date().getTime();
        const targetTime = new Date(targetDate).getTime();
        const timeRemaining = targetTime - now;

        if (timeRemaining <= 0) {
            timerElement.textContent = "زمان به پایان رسید";
            clearInterval(interval);
            return;
        }

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor(timeRemaining % (1000 * 60 * 60 * 24)/(1000 * 60 * 60));
        const minutes = Math.floor(timeRemaining % (1000 * 60 * 60)/(1000 * 60));
        const seconds = Math.floor(timeRemaining % (1000* 60) / 1000);

        timerElement.textContent = `${String(days).padStart(2, "0")}:${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
}

startCountdown("2025-01-07 02:05:00");