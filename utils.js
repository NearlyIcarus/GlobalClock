function getTimeInfo(timezone) {

    const now = new Date();

    const local = new Date(now.toLocaleString("en-US", { timeZone: timezone }));

    const time = local.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit"
    });

    const hour = local.getHours();

    return {
        time,
        hour,
        date: local
    };
}

function getDayLabel(date) {

    const today = new Date();

    const localToday = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate()
    );

    const localDate = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate()
    );

    const diff = Math.round(
        (localDate - localToday) / 86400000
    );

    if (diff === 0) return "TODAY";
    if (diff === 1) return "TOMORROW";
    if (diff === -1) return "YESTERDAY";

    return date.toLocaleDateString("en-US", {
        weekday: "long"
    }).toUpperCase();
}

function getStatus(hour) {

    if (hour >= 8 && hour < 17)
        return { text: "BUSINESS", class: "business" };

    if (hour >= 6 && hour < 8)
        return { text: "EARLY", class: "early" };

    if (hour >= 17 && hour < 22)
        return { text: "AFTER HOURS", class: "afterhours" };

    return { text: "OFFLINE", class: "offline" };
}
