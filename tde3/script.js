function getIdadeBasedOnNome() {
    const BASE_URL = 'https://api.agify.io/';

    let inptNome = document.getElementById('name-input');
    let btn = document.getElementById('btn');
    let main = document.getElementById('main');

    let nome = inptNome.value == null ? '' : inptNome.value.trim();  
    
    if (isEmpty(nome)) {
        alert('Digite o seu nome para prosseguir.');
        return;
    }
    
    let url = `${BASE_URL}?name=${nome}`;

    fetch(url, {method: 'GET'})
        .then(function (response) {
            if (!response.ok) {
                throw new Error(`Erro ao buscar dados no servidor. ${response.status}`);
            }
            return response.json();
        })
        .then(function (response) {
            const probableAge = document.createElement('p');
            const probableAgeText = document.createTextNode(`A sua idade é provavelmente ${response.age} anos!`);
            probableAge.appendChild(probableAgeText);
            main.appendChild(probableAge);
        });

        hideButton(btn);    
}

function isEmpty(nome) {
    return nome == '';
}

function hideButton(btn) {
    btn.classList.add('invisible');
}