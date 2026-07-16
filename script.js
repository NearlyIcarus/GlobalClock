function getTime(timezone) {

    const now = new Date();

    return {

        time: new Intl.DateTimeFormat("en-US", {
            timeZone: timezone,
            hour: "numeric",
            minute: "2-digit",
            hour12: true
        }).format(now),

        weekday: new Intl.DateTimeFormat("en-US", {
            timeZone: timezone,
            weekday: "long"
        }).format(now)

    };

}

function updateLocalTime() {

    const local = getTime(Intl.DateTimeFormat().resolvedOptions().timeZone);

    document.getElementById("localTime").innerHTML = `

        <div class="local-label">YOUR TIME</div>

        <div class="local-clock">${local.time}</div>

        <div class="local-day">${local.weekday}</div>

    `;

}

function updateRegions() {

    CONFIG.regions.forEach(region => {

        const container = document.getElementById(region.element);

        container.innerHTML = "";

        region.zones.forEach(zone => {

            const t = getTime(zone.timezone);

            container.innerHTML += `

                <div class="row">

                    <span>${zone.label}</span>

                    <span>${t.time}</span>

                </div>

            `;

        });

    });

}

function refresh() {

    updateLocalTime();

    updateRegions();

}

refresh();

setInterval(refresh,1000);
