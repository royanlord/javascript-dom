let btnSet = document.getElementById('btn-set');
let btnRemove = document.getElementById('btn-remove');
let btnDisable = document.getElementById('btn-disable');
let hasAttr = document.getElementById('has');

btnSet.addEventListener('click', function() {
    btnDisable.setAttribute('disabled', true);
    let yes = btnDisable.hasAttribute('disabled')
    hasAttr.innerHTML = `btn Disable has atribute? ${yes}`;
})

btnRemove.addEventListener('click', function() {
    btnDisable.removeAttribute('disabled');
    let no = btnDisable.hasAttribute('disabled')
    hasAttr.innerHTML = `btn Disable has atribute? ${no}`;
})