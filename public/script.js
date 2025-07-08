document.getElementById('send-btn').addEventListener('click', async () => {
  const input = document.getElementById('user-input');
  const message = input.value;
  if (!message) return;

  const chatBox = document.getElementById('chat-box');
  chatBox.innerHTML += `<div class="user">${message}</div>`;
  input.value = '';

  const res = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message })
  });
  const data = await res.json();
  chatBox.innerHTML += `<div class="bot">${data.reply}</div>`;
  chatBox.scrollTop = chatBox.scrollHeight;
});
