function setupTabs(isPasswordCorrect, passwordPrompt, todayContent) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
            const targetSection = document.getElementById(btn.dataset.tab);
            targetSection.classList.add('active');
            if (btn.dataset.tab === 'today') {
                if (isPasswordCorrect) {
                    passwordPrompt.style.display = 'none';
                    todayContent.style.display = 'block';
                } else {
                    passwordPrompt.style.display = 'block';
                    todayContent.style.display = 'none';
                }
            }
        });
    });
}

function setupCopyCode() {
    document.body.addEventListener('click', (e) => {
        if (e.target.classList.contains('code-box')) {
            const code = e.target.dataset.code;
            navigator.clipboard.writeText(code).then(() => {
                e.target.textContent = 'Copied!';
                e.target.style.backgroundColor = document.body.classList.contains('light-theme') ? '#00c853' : '#0f0';
                e.target.style.color = '#000';
                e.target.style.borderColor = '#000';
                setTimeout(() => {
                    e.target.textContent = `SportyBet Code: ${code}`;
                    e.target.style.backgroundColor = document.body.classList.contains('light-theme') ? '#e0e0e0' : '#000';
                    e.target.style.color = document.body.classList.contains('light-theme') ? '#00c853' : '#0f0';
                    e.target.style.borderColor = document.body.classList.contains('light-theme') ? '#00c853' : '#0f0';
                }, 1500);
            }).catch(() => {
                alert('Failed to copy code.');
            });
        }
    });
}

function setupThemeToggle() {
    const toggleButton = document.querySelector('.theme-toggle');
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        toggleButton.textContent = '☀️';
    }
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        toggleButton.textContent = document.body.classList.contains('light-theme') ? '☀️' : '🌙';
        localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
    });
}