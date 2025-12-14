console.log('JS carregou'); // DEBUG

function countdown() {
    const countDate = new Date(2026, 4, 30, 16, 30, 0).getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    console.log('gap:', gap); // DEBUG

    const hour = 1000 * 60 * 60;
    const day = hour * 24;

    const days = gap > 0 ? Math.floor(gap / day) : 0;
    const hours = gap > 0 ? Math.floor((gap % day) / hour) : 0;

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');

    if (!daysEl || !hoursEl) {
        console.error('IDs não encontrados no HTML');
        return;
    }

    daysEl.innerText = String(days).padStart(2, '0');
    hoursEl.innerText = String(hours).padStart(2, '0');
}

document.addEventListener('DOMContentLoaded', () => {
    countdown();
    setInterval(countdown, 60000);
});
