let content = document.getElementById('ajax-content');

function fetchContent(el) {
    let view = el.getAttribute('a-view');
    let folder = el.getAttribute('a-folder');
    
    fetch(`/ajax/${folder} ${view}.html`)
        .then(response => response.text()) // Aqui, esperamos pela resolução da promessa de texto
        .then(html => {
            content.innerHTML = html;
        })
        .catch(error => {
            console.error('Erro ao buscar conteúdo:', error);
        });
}

let button = document.querySelector('form button.btn')
button,addEventListener