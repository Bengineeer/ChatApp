var input = document.getElementById('typying-input');
var output = document.getElementById('send-button')
var socket = new WebSocket("ws://localhost:8080");

socket.onopen = function() {
    output.innerHTML += "Connection OK\n";
};

socket.onmessage = function(e) {
    output.innerHTML += "Get message from server: " + e.data + "\n";
};

function send() {
    socket.send(JSON.stringify(
        {
            message: input.value
        }
    ));
    input.value = "";
};