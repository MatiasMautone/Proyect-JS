let nombreAlumno = prompt("Ingrese su Nombre y Apellido: (ESC para salir)");

while (nombreAlumno!= "ESC") {
      let datoAlumno = "Ingrese su Materia:\n";
      datoAlumno += "Matematica\n";
      datoAlumno += "Historia\n";
      datoAlumno += "Lengua\n";
      let materia = prompt(datoAlumno);
      let cuatrimestre1 = parseInt(prompt("Ingrese la nota de su primer cuatrimestre"));
      let cuatrimestre2 = parseInt(prompt("Ingrese la nota de su segundo cuatrimestre"));
      let cuatrimestre3 = parseInt(prompt("Ingrese la nota de su tercer cuatrimestre"));
      let promedio = calcularPromedio(cuatrimestre1,cuatrimestre2,cuatrimestre3)
      function calcularPromedio(cuatrimestre1,cuatrimestre2,cuatrimestre3) {
        return (cuatrimestre1 + cuatrimestre2 + cuatrimestre3) / 3
}
    alert ("Alumno: " + nombreAlumno + "\nEn la materia: " + materia + "\nSu promedio fue de: " + promedio.toFixed(1)); 
}
