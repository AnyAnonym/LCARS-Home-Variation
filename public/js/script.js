// Light Control Script
document.getElementById('lightOn').addEventListener('click', () => {
    sendSignal('on');
});

document.getElementById('lightOff').addEventListener('click', () => {
    sendSignal('off');
});

function sendSignal(command) {
    // Send signal to server, which communicates with SPS
    fetch('/api/light', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ command })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}