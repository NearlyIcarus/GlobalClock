function buildBoard() {

    // Header
    document.getElementById("pageTitle").textContent = CONFIG.title;
    document.getElementById("pageSubtitle").textContent = CONFIG.subtitle;

    // Local Time
    const localZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const local = getTimeInfo(localZone);

    document.getElementById("localTime").innerHTML = `
        <div class="local-panel">

            <div class="local-title">
                LOCAL TIME
            </div>

            <div class="local-clock">
                ${local.time}
            </div>

            <div class="local-day">
                ${local.date.toLocaleDateString("en-US",{
                    weekday:"long"
                }).toUpperCase()}
            </div>

        </div>
    `;

    // Board

    let html = `

        <div class="board-header">

            <div>ZONE</div>
            <div>TIME</div>
            <div>DAY</div>
            <div>STATUS</div>

        </div>

    `;

    CONFIG.regions.forEach(region=>{

        html += `<div class="board-divider">${region.title}</div>`;

        region.zones.forEach(zone=>{

            const info = getTimeInfo(zone.timezone);

            const status = getStatus(info.hour);

            html += `

                <div class="board-row">

                    <div class="board-zone">
                        ${zone.label}
                    </div>

                    <div class="board-time">
                        ${info.time}
                    </div>

                    <div class="board-day">
                        ${getDayLabel(info.date)}
                    </div>

                    <div class="board-status ${status.class}">
                        ${status.text}
                    </div>

                </div>

            `;

        });

    });

    document.getElementById("board").innerHTML = html;

}

buildBoard();

setInterval(buildBoard,1000);
