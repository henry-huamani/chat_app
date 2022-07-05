const socket = io();

const username = document.getElementById('username');
const message = document.getElementById('message');
const btn = document.getElementById('btn');
const output = document.getElementsByClassName('output');
const actions = document.getElementsByClassName('actions');

message.onchange = () => {
    socket.emit('chat:typing', username.value);
};

btn.onclick = () => {
    socket.emit('chat:message', {
        user: username.value,
        msg: message.value
    });
};

socket.on('chat:typing', (username) => {
    actions[0].innerHTML = `<p>
        <em>${username} is typing</em>
    </p>`;
})

socket.on('chat:message', (data) => {
    actions[0].innerHTML = '';
    output[0].innerHTML += `<p>
        <strong>${data.user}</strong>: ${data.msg}
    </p>`;
})