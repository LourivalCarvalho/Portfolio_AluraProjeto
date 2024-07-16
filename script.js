const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (name && email && subject && message) {
        // Enviar mensagem para o e-mail
        console.log(`Enviar mensagem para ${email} com assunto ${subject} e mensagem ${message}`);
    } else {
        alert('Preencha todos os campos!');
    }
});