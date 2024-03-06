// Function to generate blinds structure based on game time and raise blind time
export function generateBlindsStructure(gameTime, raiseBlindTime) {
    const blindsStructure = [];
    let currentTime = 180; // 3 minutes in seconds
    let currentBlind = "10/20"; // Initial blind level

    // Loop until currentTime exceeds gameTime
    for (let i = 0; currentTime <= gameTime; i++) {
        // Push the current blind level information into blindsStructure array
        blindsStructure.push([i + 1, formatTime(currentTime), currentBlind]);
        // Increment currentTime by raiseBlindTime
        currentTime += raiseBlindTime;
        // Increment currentBlind level
        currentBlind = incrementBlind(currentBlind);
        
    }

    return blindsStructure;
}

// Function to format time in seconds to mm:ss format
export function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600); // Convert seconds to hours
    const mins = Math.floor((seconds % 3600) / 60); // Convert remaining seconds to minutes
    return `${mins.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}`; // Return formatted time
}

// Function to increment blind level
export function incrementBlind(blind) {
    const parts = blind.split('/'); // Split the blind level into small blind and big blind
    const smallBlind = parseInt(parts[0], 10); // Get the small blind
    const bigBlind = parseInt(parts[1], 10); // Get the big blind
    return `${smallBlind * 2}/${bigBlind * 2}`; // Return incremented blind level
}
