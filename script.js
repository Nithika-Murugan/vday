const heart = document.getElementById('fheart');

        // Function to make the heart vibrate
        function startVibration() {
            let xOffset = 0;
            let yOffset = 0;
            let vibrateDirection = 1; // Direction for vibration

            // Create a vibration effect using JavaScript
            setInterval(() => {
                // Change offset for shaking
                if (vibrateDirection === 1) {
                    xOffset = Math.random() * 2;
                    yOffset = Math.random() * 2;
                    vibrateDirection = -1;
                } else {
                    xOffset = -Math.random() * 2;
                    yOffset = -Math.random() * 2;
                    vibrateDirection = 1;
                }

                // Apply the offset to the heart's position for vibration effect
                heart.style.transform = `rotate(-45deg) translate(${xOffset}px, ${yOffset}px)`;
            }, 100); // Change every 100ms
        }

        // Start vibration
        startVibration();
