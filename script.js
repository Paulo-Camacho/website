function updateLATime() {
    const options = {
        timeZone: "America/Los_Angeles",
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
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