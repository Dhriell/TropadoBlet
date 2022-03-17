let facesList = document.querySelectorAll('ul li');
facesList.forEach((item) => {
    item.addEventListener('click', (e) => {
        let el = e.target;
        changePerson(el)
    })
})



function changePerson(e) {
    let el = e;
    let currentUser = el.getAttribute('data-op');
    let user = users[currentUser];

    // Mudanças

    document.querySelector('h1').innerText = user.nick;
    document.querySelector('h1').style.color = user.color;
    document.querySelector('h1').style.textShadow = '1px 1px px #000';
    document.querySelector('.data').innerText = user.data;
    document.querySelector('.descricao').innerText = user.descricao;
    document.querySelector('.personalidade').innerText = user.personalidade;
    document.querySelector('.apelidos').innerText = user.apelido;
    document.querySelector('.img-edit img').src = user.imagem;
    let divColor = document.querySelectorAll('.text-info');
    divColor.forEach((item) => {
        item.style.color = user.color;
        item.style.textShadow = '1px 1px 1px #000';
    });
    let back = document.querySelector('.background-image');
    back.style.backgroundImage = `url(${user.background})`;

    let rooms = user.quartos;
    createRooms(rooms);

}

function createRooms(quartos) {
    let roomsSpace = document.querySelector('.grid-rooms');
    roomsSpace.innerHTML = ''
    for (c in quartos) {
        let quarto = quartos[c].quarto;
        let div = document.createElement('div');
        div.style.backgroundImage = `url(${quarto})`;
        roomsSpace.append(div);
        div.addEventListener('click', (e) => {

            let modal = document.querySelector('.janela--modal');
            modal.style.display = 'flex';
            document.querySelector('.img--modal').src = quarto;
            console.log(quarto);

        });
    }

};


let start = document.querySelectorAll('ul li');
changePerson(start[0]);

document.querySelector('.btn--fechar').addEventListener('click',()=>{
    document.querySelector('.janela--modal').style.display = 'none'
});

document.querySelector('.janela--modal').addEventListener('click',()=>{
    document.querySelector('.janela--modal').style.display = 'none'
})
