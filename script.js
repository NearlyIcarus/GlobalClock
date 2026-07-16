function buildBoard() {

    // Header
    document.getElementById("pageTitle").textContent = CONFIG.title;
    document.getElementById("pageSubtitle").textContent = CONFIG.subtitle;

    // ---------- LOCAL TIME ----------

    const localZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const local = getTimeInfo(localZone);

    document.getElementById("localTime").innerHTML = `
        <div class="local-card">
            <div class="local-label">LOCAL TIME</div>
            <div class="local-clock">${local.time}</div>
            <div class="local-day">${local.date.toLocaleDateString("en-US", {
                weekday: "long"
            }).toUpperCase()}</div>
        </div>
    `;

    // ---------- REGIONS ----------

    CONFIG.regions.forEach(region => {

        const container = document.getElementById(
            region.title.toLowerCase()
        );

        container.innerHTML = "";

        region.zones.forEach(zone => {

            const info = getTimeInfo(zone.timezone);

            const status = getStatus(info.hour);

            const day = getDayLabel(info.date);

            container.innerHTML += `
                <div class="board-row">

                    <div class="board-zone">
                        ${zone.label}
                    </div>

                    <div class="board-time">
                        ${info.time}
                    </div>

                    <div class="board-day">
                        ${day}
                    </div>

                    <div class="board-status ${status.class}">
                        ${status.text}
                    </div>

                </div>
            `;

        });

    });

}

buildBoard();

setInterval(buildBoard,1000);
