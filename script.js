const zones = [
    { label: "Eastern", timezone: "America/New_York", region: "americas" },
    { label: "Central", timezone: "America/Chicago", region: "americas" },
    { label: "Pacific", timezone: "America/Los_Angeles", region: "americas" },
    { label: "Honolulu", timezone: "Pacific/Honolulu", region: "americas" },

    { label: "Western Australia", timezone: "Australia/Perth", region: "australia" },
    { label: "Darwin", timezone: "Australia/Darwin", region: "australia" },
    { label: "Sydney", timezone: "Australia/Sydney", region: "australia" }
];

function formatTime(timezone) {

    const now = new Date();

    return {
        time: new Intl.DateTimeFormat("en-US", {
            timeZone: timezone,
            hour: "numeric",
            minute: "2-digit",
            hour12: true
        }).format(now),

        day: new Intl.DateTimeFormat("en-US", {
            timeZone: timezone,
            weekday: "long"
        }).format(now)
    };

}

function buildPage() {

    document.getElementById("americas").innerHTML = "";
    document.getElementById("australia").innerHTML = "";

    // YOUR LOCAL TIME

    const local = formatTime(Intl.DateTimeFormat().resolvedOptions().timeZone);

    document.getElementById("localTime").innerHTML = `
        <div class="local">
            <div class="label">YOUR TIME</div>
            <div class="localTime">${local.time}</div>
            <div class="localDay">${local.day}</div>
        </div>
    `;

    // WORLD CLOCKS

    zones.forEach(zone => {

        const t = formatTime(zone.timezone);

        document.getElementById(zone.region).innerHTML += `
            <div class="row">
                <span>${zone.label}</span>
                <span>${t.time}</span>
            </div>
        `;
    });

}

buildPage();
setInterval(buildPage,1000);
