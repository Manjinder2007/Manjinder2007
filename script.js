// script.js

const sendButton = document.getElementById('send-button');
const messageInput = document.getElementById('message-input');
const chatBox = document.getElementById('chat-box');
const projectForm = document.getElementById('project-form');
const projectList = document.getElementById('project-list');

sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    if (message) {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);
        messageInput.value = '';
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});

projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('project-title').value;
    const description = document.getElementById('project-description').value;
    
    const projectElement = document.createElement('div');
    projectElement.innerHTML = `<h3>${title}</h3><p>${description}</p>`;
    projectList.appendChild(projectElement);
    
    projectForm.reset();
});
