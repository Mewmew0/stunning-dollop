let Name = prompt("Please enter your name","Your Name")
document.querySelector("#name").innerHTML = `Welcome <strong>${Name}!!</strong>`

function updateClock() {
            const now = new Date();
            
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');
            const dayofweek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const days = dayofweek[now.getDay()]
            
            const timeString = `${hours}:${minutes}:${seconds} ${days}`;
            
            document.getElementById('saat').textContent = timeString;
        }

        // Update the clock every second
        setInterval(updateClock, 1000);

        // Initialize the clock immediately
        updateClock();