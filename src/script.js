 // Countdown timer script
        function startCountdown() {
            const countdownDate = new Date("July 26, 2025 18:00:00").getTime();
            const countdownInterval = setInterval(() => {
                const now = new Date().getTime();
                const distance = countdownDate - now;

                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                document.querySelectorAll('.countdown-value').forEach((element, index) => {
                    if (index === 0) element.textContent = days;
                    else if (index === 1) element.textContent = hours;
                    else if (index === 2) element.textContent = minutes;
                    else if (index === 3) element.textContent = seconds;
                });

                if (distance < 0) {
                    clearInterval(countdownInterval);
                    document.querySelector('.countdown-timer').innerHTML = "<p class='text-white text-center'>Event has started!</p>";
                }
            }, 1000);
        }

        // Start the countdown when the page loads
        window.onload = startCountdown;