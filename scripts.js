function setupTabs() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
            document.getElementById(btn.dataset.tab).classList.add('active');
        });
    });
}

function setupCopyCode() {
    document.body.addEventListener('click', (e) => {
        if (e.target.classList.contains('code-box')) {
            const code = e.target.dataset.code;
            navigator.clipboard.writeText(code).then(() => {
                e.target.textContent = 'Copied!';
                e.target.style.backgroundColor = '#0f0';
                e.target.style.color = '#000';
                e.target.style.borderColor = '#000';
                setTimeout(() => {
                    e.target.textContent = `SportyBet Code: ${code}`;
                    e.target.style.backgroundColor = '#000';
                    e.target.style.color = '#0f0';
                    e.target.style.borderColor = '#0f0';
                }, 1500);
            }).catch(() => {
                alert('Failed to copy code.');
            });
        }
    });
}