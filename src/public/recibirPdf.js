const generar = () => {
    let sexo
    document.getElementsByName("sexo").forEach(element => {
        if (element.checked) {
            sexo = element.value
        }
    });

    const data = {
        numeroExpediente: document.getElementById("numeroExpediente").value,
        apellidoPaterno: document.getElementById("apellidoPaterno").value,
        apellidoMaterno: document.getElementById("apellidoMaterno").value,
        //nombre: "David Fidencio",
        nombre: document.getElementById("nombre").value,
        edad: document.getElementById("edad").value,
        sexo,
        //fechaNacimiento: new Date(1997, 07, 10),
        fechaNacimiento: document.getElementById("fechaNacimiento").value,
        fecha: new Date().toJSON(),
        pesoActual: document.getElementById("pesoActual").value,
        estatura: document.getElementById("estatura").value,
        frecuenciaCardiaca: document.getElementById("frecuenciaCardiaca").value,
        frecuenciaRespiratoria: document.getElementById("frecuenciaRespiratoria").value,
        sistolica: document.getElementById("sistolica").value,
        diastolica: document.getElementById("diastolica").value,
        temperatura: document.getElementById("temperatura").value,
        pulso: document.getElementById("pulso").value,
        enfermeraTaps: document.getElementById("enfermeraTaps").value,
        cedulaProfesional: document.getElementById("cedulaProfesional").value,
        nombreMedico: document.getElementById("nombreMedico").value,
        /* numeroExpediente: "1234567890123",
        apellidoPaterno: "Peralta",
        apellidoMaterno: "García",
        //nombre: "David Fidencio",
        nombre: document.getElementById("nombre").value,
        edad: 22,
        sexo,
        //fechaNacimiento: new Date(1997, 07, 10),
        fechaNacimiento: document.getElementById("fechaNacimiento").value,
        fecha: new Date(),
        pesoActual: 65,
        estatura: 168,
        frecuenciaCardiaca: 12345,
        frecuenciaRespiratoria: 12345,
        sistolica: "sistolica",
        diastolica: "diastolica",
        temperatura: 40,
        pulso: 12345,
        enfermeraTaps: "enfermeraTaps",
        cedulaProfesional: "ABCDE12345",
        nombreMedico: "José Alfredo Peralta García", */
        //resumenInterrogatorio.length:1311
        /* resumenInterrogatorio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in suscipit purus.  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus nec hendrerit felis. Morbi aliquam facilisis risus eu lacinia. Sed eu leo in turpis fringilla hendrerit. Ut nec accumsan nisl.'
            + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in suscipit purus.  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus nec hendrerit felis. Morbi aliquam facilisis risus eu lacinia. Sed eu leo in turpis fringilla hendrerit. Ut nec accumsan nisl."
            + 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in suscipit purus.  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus nec hendrerit felis. Morbi aliquam facilisis risus eu lacinia. Sed eu leo in turpis fringilla hendrerit. Ut nec accumsan nisl.'
            + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in suscipit purus.  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus nec hendrerit felis. Morbi aliquam facilisis risus eu lacinia. Sed eu leo in turpis fringilla hendrerit. Ut nec accumsan nisl. aliquam facilisis risus eu lacinia. Sed eu leo in."
            + "Lorem ipsum dolor sit amet, consectetur.", */
        resumenInterrogatorio: document.getElementById("resumenInterrogatorio").value,
        //exploracionFisica.length : 1499
        /* exploracionFisica: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in suscipit purus.  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus nec hendrerit felis. Morbi aliquam facilisis risus eu lacinia. Sed eu leo in turpis fringilla hendrerit. Ut nec accumsan nisl.'
            + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in suscipit purus.  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus nec hendrerit felis. Morbi aliquam facilisis risus eu lacinia. Sed eu leo in turpis fringilla hendrerit. Ut nec accumsan nisl."
            + 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in suscipit purus.  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus nec hendrerit felis. Morbi aliquam facilisis risus eu lacinia. Sed eu leo in turpis fringilla hendrerit. Ut nec accumsan nisl.'
            + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in suscipit purus.  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus nec hendrerit felis. Morbi aliquam facilisis risus eu lacinia. Sed eu leo in turpis fringilla hendrerit. Ut nec accumsan nisl. aliquam facilisis risus eu lacinia. Sed eu leo in."
            + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in suscipit purus.  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus nec hendrerit felis. Morbi aliquam facilisis ris.", */
        exploracionFisica: document.getElementById("exploracionFisica").value,
        //resultadoServiciosAuxiliaresDiagnostico.length:805
        /* resultadoServiciosAuxiliaresDiagnostico: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in suscipit purus.  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus nec hendrerit felis. Morbi aliquam facilisis risus eu lacinia. Sed eu leo in turpis fringilla hendrerit. Ut nec accumsan nisl.'
            + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in suscipit purus.  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus nec hendrerit felis. Morbi aliquam facilisis risus eu lacinia. Sed eu leo in turpis fringilla hendrerit. Ut nec accumsan nisl."
            + 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in suscipit purus.  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus nec hendrerit f.' ,*/
        resultadoServiciosAuxiliaresDiagnostico: document.getElementById("resultadoServiciosAuxiliaresDiagnostico").value,
        //diagnostico.length:500
        /* diagnostico: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in suscipit purus.  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus nec hendrerit felis. Morbi aliquam facilisis risus eu lacinia. Sed eu leo in turpis fringilla hendrerit. Ut nec accumsan nisl.'
            + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in suscipit purus.  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus nec hendrerit f.", */
        diagnostico: document.getElementById("diagnostico").value,
        //planEstudioTratamiento.length:824
        /* planEstudioTratamiento: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in suscipit purus.  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus nec hendrerit felis. Morbi aliquam facilisis risus eu lacinia. Sed eu leo in turpis fringilla hendrerit. Ut nec accumsan nisl.'
            + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in suscipit purus.  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus nec hendrerit felis. Morbi aliquam facilisis risus eu lacinia. Sed eu leo in turpis fringilla hendrerit. Ut nec accumsan nisl."
            + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in suscipit purus.  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus nec hendrerit felis. Morbi aliquam.", */
        planEstudioTratamiento: document.getElementById("planEstudioTratamiento").value,
        //pronostico.length:675
        /* pronostico: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in suscipit purus.  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus nec hendrerit felis. Morbi aliquam facilisis risus eu lacinia. Sed eu leo in turpis fringilla hendrerit. Ut nec accumsan nisl.'
            + 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in suscipit purus.  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus nec hendrerit felis. Morbi aliquam facilisis risus eu lacinia. Sed eu leo in turpis fringilla hendrerit. Ut nec accumsan nisl.'
            + 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam i.' */
        pronostico: document.getElementById("pronostico").value
    }

    fetch('/patient', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(response => {
        response.json().then(data => {
            if (data.error) {
                console.log(data)
            } else {
                window.open('pdf/Nota de evolución.pdf', '_blank')
            }
        })
    })
}