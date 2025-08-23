/*
  NOTA: A configuração do Tailwind foi movida para este arquivo.
  Em um projeto de produção, o ideal seria usar um arquivo `tailwind.config.js`
  e um processo de build, em vez de configurar via script.
*/
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', 'sans-serif'],
            }
        }
    }
}

// Função para o contador regressivo
const countdown = () => {
    // Data do evento
    const countDate = new Date('May 30, 2026 16:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    // Cálculos de tempo
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    
    // Garante que o contador não fique negativo
    const textDay = gap > 0 ? Math.floor(gap / day) : 0;
    const textHour = gap > 0 ? Math.floor((gap % day) / hour) : 0;
    const textMinute = gap > 0 ? Math.floor((gap % hour) / minute) : 0;
    
    // Seleciona os elementos no DOM
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');

    // Atualiza o HTML com os valores, garantindo 2 dígitos
    if (daysEl) daysEl.innerText = String(textDay).padStart(2, '0');
    if (hoursEl) hoursEl.innerText = String(textHour).padStart(2, '0');
    if (minutesEl) minutesEl.innerText = String(textMinute).padStart(2, '0');
};

// Aguarda o carregamento do conteúdo do DOM para executar os scripts
document.addEventListener('DOMContentLoaded', () => {
    // Inicia o contador e o atualiza a cada segundo
    countdown();
    setInterval(countdown, 1000);
});