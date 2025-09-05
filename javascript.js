const envelope = document.getElementById('envelope');
        const content = document.getElementById('content');
        const btn = document.getElementById('revealBtn');
        const message = document.getElementById('secretMessage');
        
        function toggleEnvelope() {
            const isOpen = envelope.classList.toggle('open');
            content.classList.toggle('open');
            content.setAttribute('aria-hidden', !isOpen);
            envelope.setAttribute('aria-pressed', isOpen);
        }

        envelope.addEventListener('click', toggleEnvelope);
        envelope.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleEnvelope();
            }
        });

        btn.addEventListener('click', () => {
            const isShown = message.classList.toggle('show');
            btn.setAttribute('aria-expanded', isShown);
            btn.textContent = isShown ? 'Good boy 😏' : 'MWUA!!!';
        });