let btnCreate = document.getElementById('btn');
btnCreate.addEventListener('click', function() {
    let div = document.createElement('div'); // membuat element div
    div.id = "box" // menambahkan id pada div tsb
    div.innerHTML = "<p>Hello World!</p>" 
    document.body.appendChild(div) // menambahkan element p ke dalam div dengan id box
})