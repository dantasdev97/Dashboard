let content = document.getElementById('ajax-content');

function fetchContent(el) {
    let view = el.getAttribute('a-view');
    let folder = el.getAttribute('a-folder');

    fetch(`/ajax/${folder}/${view}.html`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(html => {
            console.log(html); // Exibe o conteúdo HTML no console (opcional)
            content.innerHTML = html; // Define o conteúdo da div com o ID 'ajax-content'
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
