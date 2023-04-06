let btnSubmit = document.getElementById("btn-submit")

btnSubmit.addEventListener("click", function() {
    let textName = document.getElementById("text-name")
    let textAge = document.getElementById("text-age")
    let textGender = document.getElementById("text-gender")
    let name = document.getElementById("name").value
    let age = document.getElementById("age").value
    let gender = document.getElementById("gender").value
    
    
    textName.innerText = `Nama : ${name}`
    textAge.innerText = `Umur : ${age}`
    textGender.innerText = `Jenis kelamin : ${gender}`
})