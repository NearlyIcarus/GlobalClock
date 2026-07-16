function getTime(timezone) {

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

    const clocks = document.getElementById("clocks");
    clocks.innerHTML = "";

    // Local Time

    const local = getTime(Intl.DateTimeFormat().resolvedOptions().timeZone);

    clocks.innerHTML += `
        <div class="local-clock">
            <div class="city">YOUR TIME</div>
            <div class="time">${local.time}</div>
            <div class="day">${local.day}</div>
        </div>
    `;

    CONFIG.regions.forEach(region => {

        clocks.innerHTML += `
            <h2 class="region-title">${region.name}</h2>
        `;

        region.zones.forEach(zone => {

            const t = getTime(zone.timezone);

            clocks.innerHTML += `
                <div class="row">
                    <span class="zone">${zone.label}</span>
                    <span class="zone-time">${t.time}</span>
                </div>
            `;

        });

    });

}

buildPage();

setInterval(buildPage,1000);
