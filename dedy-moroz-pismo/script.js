// Создаём снежинки
const snowflakesContainer = document.getElementById('snowflakes');
const snowflakeCount = 60;

for (let i = 0; i < snowflakeCount; i++) {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.innerHTML = '❄';
    snowflake.style.left = Math.random() * 100 + '%';
    snowflake.style.opacity = Math.random() * 0.7 + 0.3;
    snowflake.style.animationDuration = Math.random() * 5 + 5 + 's';
    snowflake.style.fontSize = Math.random() * 15 + 10 + 'px';
    snowflakesContainer.appendChild(snowflake);
}

// Обработчик кнопки
document.getElementById('sendButton').addEventListener('click', function() {
    alert('Кураторы Арокен.ру САМЫЕ ЛУЧШИЕ! спасибо вам за работу! 🎅❄️');
});
