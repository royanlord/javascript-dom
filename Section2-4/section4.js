let btnCreate = document.getElementById('btn');
btnCreate.addEventListener('click', function() {
    let div = document.createElement('div');
    div.id = "box"
    div.innerHTML = "<p>Hello World!</p>"
    document.body.appendChild(div)
})