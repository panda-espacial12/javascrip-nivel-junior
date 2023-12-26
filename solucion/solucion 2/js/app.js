blet cantidad = prompt("cuantos alumnos son");
let alumnostotales = [];

for (i = 0; i < cantidad; i++) {
    alumnostotales[i] = [prompt("nombre del alumno" + (i + 1)), 0];

}

const tomarAsistencia = (nombre, p) => {
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "p") {
        alumnostotales[p][1]++;
    }
}

for (i = 0; i < 30; i++) {
    for (alumnos in alumnostotales) {
        tomarAsistencia(alumnostotales[alumno][0], alumno);
    }
}

for (alumno in alumnostotales) {
    let resultado = `${alumnostotales[alumno][0]}:<br>
    ________asistencias: ${alumnostotales[alumno][1]} <br>
    ________ausencias:   ${30 - alumnostotales[alumno[1]]}
    `;
    if (30 - alumnostotales[alumno][1] > 18){
        resultado += "b style='color:red'>reprobadis por inasistencias</br><br><br>";
    }else{
        resultado+=  "<br><br>"
    }

}

