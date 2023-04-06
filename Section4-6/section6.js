let headingSatu = document.getElementById('head1');
let btnSet = document.getElementById('btn-set');
let btnRemove = document.getElementById('btn-remove');


btnSet.addEventListener('click', function() {
    headingSatu.style.color = "white"
    headingSatu.style.backgroundColor = "black"
    headingSatu.style.padding = "30px 20px"
    headingSatu.classList.add('heading-satu', 'title', 'block');
})

btnRemove.addEventListener('click', function() {
    headingSatu.classList.remove('heading-satu');
})