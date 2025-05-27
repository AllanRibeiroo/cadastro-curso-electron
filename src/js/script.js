var form = document.getElementById("form-curso")

form.addEventListener("submit", function(event){
    event.preventDefault();

    var nomeDoCurso = document.getElementById("nome-curso").value
    var cargaHoraria = document.getElementById("carga-horaria").value

    var meusCursos = []

    var objetoCurso = {
        nome: nomeDoCurso,
        cargaHoraria: cargaHoraria
    }

    meusCursos.push(objetoCurso)

    meusCursos.forEach(curso => {
        var minhaLi = document.createElement("li")

        minhaLi.innerText = curso.nome
    })

})