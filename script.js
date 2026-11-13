function updateLATime() {
    const options = {
        timeZone: "America/Los_Angeles",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
    };

    const formatted = new Intl.DateTimeFormat("en-US", options)
        .format(new Date())
        .replace(",", "")
        .toLowerCase();
    const clock = document.getElementById("la-time");

    if (clock) {
        clock.textContent = `${formatted} la time`;
    }
}

updateLATime();
setInterval(updateLATime, 1000);
