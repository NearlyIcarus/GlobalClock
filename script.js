const zones = [
    {
        label: "Eastern",
        timezone: "America/New_York"
    },
    {
        label: "Central",
        timezone: "America/Chicago"
    },
    {
        label: "Pacific",
        timezone: "America/Los_Angeles"
    },
    {
        label: "Honolulu",
        timezone: "Pacific/Honolulu"
    },
    {
        label: "Western Australia",
        timezone: "Australia/Perth"
    },
    {
        label: "Darwin",
        timezone: "Australia/Darwin"
    },
    {
        label: "Sydney",
        timezone: "Australia/Sydney"
    }
];

const container = document.getElementById("clocks");

function buildClocks() {

    container.innerHTML = "";

    zones.forEach(zone => {

        const now = new Date();

        const time = new Intl.DateTimeFormat("en-US", {
            timeZone: zone.timezone,
            hour: "numeric",
            minute: "2-digit",
            hour12: true
        }).format(now);

        const day = new Intl.DateTimeFormat("en-US", {
            timeZone: zone.timezone,
            weekday: "long"
        }).format(now);

        container.innerHTML += `
            <div class="clock">
                <div class="city">${zone.label}</div>
                <div class="time">${time}</div>
                <div class="day">${day}</div>
            </div>
        `;
    });

}

buildClocks();
setInterval(buildClocks, 1000);
