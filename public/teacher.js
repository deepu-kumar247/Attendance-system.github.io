document.addEventListener('DOMContentLoaded', function() {
    // Generate Code Section
    const attendanceForm = document.getElementById('attendance-form');
    const generateCodeBtn = document.getElementById('generate-code-btn');
    const displayCode = document.getElementById('display-code');
    const codeSection = document.getElementById('code-section');
    const timerElement = document.getElementById('timer');

    if (generateCodeBtn) {
        generateCodeBtn.addEventListener('click', async function() {
            const className = document.getElementById('class').value;
            const subject = document.getElementById('subject').value;

            if (!className || !subject) {
                alert('Please fill in both class and subject.');
                return;
            }

            try {
                const response = await fetch('/api/generate-code', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ class: className, subject })
                });

                const data = await response.json();

                if (data.success) {
                    displayCode.textContent = data.code;
                    codeSection.style.display = 'block';
                    let timeLeft = 180;
                    timerElement.textContent = `${timeLeft} seconds`;
                    
                    const timer = setInterval(() => {
                        timeLeft--;
                        if (timeLeft >= 0) {
                            timerElement.textContent = `${timeLeft} seconds`;
                        } else {
                            clearInterval(timer);
                            timerElement.textContent = 'Expired';
                        }
                    }, 1000);

                } else {
                    alert('Error: ' + data.message);
                }
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred. Please try again.');
            }
        });
    }

    // Download Report Section
    const downloadForm = document.getElementById('download-form');
    
    if (downloadForm) {
        downloadForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevents the default form submission

            const className = document.getElementById('download-class').value;
            const subject = document.getElementById('download-subject').value;
            const date = document.getElementById('download-date').value;

            // Creates the URL with the correct query parameters
            const url = `/api/download-attendance?class=${className}&subject=${subject}&date=${date}`;

            // Redirects to the URL to start the download
            window.location.href = url;
        });
    }
});