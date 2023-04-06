let btnSubmit = document.getElementById("btn-submit")

btnSubmit.addEventListener("click", function() {
    let result = document.getElementById("res-name")
    let name = document.getElementById("name").value
    result.innerText = `Nama saya ${name}`
})