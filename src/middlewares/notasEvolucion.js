const PDFDocument = require('pdfkit');
const fs = require('fs');

const generatePdf = async (req, res, next) => {
    try {
        const doc = new PDFDocument();
        const writeStream = await doc.pipe(fs.createWriteStream('src/pdf/Nota de evolución.pdf'));

        const numeroExpediente = req.body.numeroExpediente
        const apellidoPaterno = req.body.apellidoPaterno
        const apellidoMaterno = req.body.apellidoMaterno
        const nombre = req.body.nombre
        const edad = req.body.edad
        const sexo = req.body.sexo
        const fechaNacimiento = new Date(req.body.fechaNacimiento)
        const fecha = new Date(req.body.fecha)
        const pesoActual = req.body.pesoActual
        const estatura = req.body.estatura
        const frecuenciaCardiaca = req.body.frecuenciaCardiaca
        const frecuenciaRespiratoria = req.body.frecuenciaRespiratoria
        const sistolica = req.body.sistolica
        const diastolica = req.body.diastolica
        const temperatura = req.body.temperatura
        const pulso = req.body.pulso
        const enfermeraTaps = req.body.enfermeraTaps
        const cedulaProfesional = req.body.cedulaProfesional
        //resumenInterrogatorio.length=1311
        const resumenInterrogatorio = req.body.resumenInterrogatorio
        //exploracionFisica.length = 1499
        const exploracionFisica = req.body.exploracionFisica
        //resultadoServiciosAuxiliaresDiagnostico.length=805
        const resultadoServiciosAuxiliaresDiagnostico = req.body.resultadoServiciosAuxiliaresDiagnostico
        //diagnostico.length=500
        const diagnostico = req.body.diagnostico
        //planEstudioTratamiento.length=824
        const planEstudioTratamiento = req.body.planEstudioTratamiento
        //pronostico.length=675
        const pronostico = req.body.pronostico
        const nombreMedico = req.body.nombreMedico


        doc.image('img/secretariaDeSalud.PNG', 38.5, 30, { width: 77.8 })

        doc
            .font('Helvetica-Bold')
            .fontSize(14.5)
            .text('SERVICIOS ESTATALES DE SALUD EN GUERRERO', 163, 30)
            .fontSize(12.5)
            .text('NOTAS DE EVOLUCIÓN', 269, 53)
        //linea larga horizontal
        doc.moveTo(187, 65)
            .lineTo(564, 65)
            //cuadro de expediente
            //primera linea vertical
            .moveTo(461, 65)
            .lineTo(461, 93)
            //segunda linea vertical
            .moveTo(564, 65)
            .lineTo(564, 93)
            //segunda linea horizontal
            .moveTo(461, 75)
            .lineTo(564, 75)
            //tercera linea horizontal
            .moveTo(461, 93)
            .lineTo(564, 93)
            .stroke()

        doc
            .fontSize(8)
            .text('N° EXPEDIENTE', 478, 68)
            .text(numeroExpediente, { align: 'right' }, 81)
            .fontSize(10)
            .text('A.- IDENTIFICACION', 41, 104.5)

        //cuadro A identificación
        doc.lineWidth(2)
            //primera linea horizontal
            .moveTo(41, 117.5)
            .lineTo(564, 117.5)
            //segunda linea horizontal
            .moveTo(41, 177.5)
            .lineTo(564, 177.5)
            //primera linea vertical
            .moveTo(41, 117.5)
            .lineTo(41, 177.5)
            //segunda linea vertical
            .moveTo(564, 117.5)
            .lineTo(564, 177.5)
            .stroke()

        doc
            .font('Helvetica')
            .fontSize(7)
            .text('1.-NOMBRE:', 44.5, 125.5)

        doc.lineWidth(1)
            .moveTo(88, 132.5)
            .lineTo(366.5, 132.5)
            .stroke()

        doc
            .text(edad + " años", 415, 125)
            .text('2.- EDAD:', 375, 125)

        doc
            .moveTo(407, 132.5)
            .lineTo(451.5, 132.5)
            .stroke()
        if (sexo === '1') {
            doc
                .text('X', 512.5, 125.5)
        } else if (sexo === '0') {
            doc
                .text('X', 547.5, 125.5)
        }
        doc
            .text('3.- SEXO:   M   (     )', 459, 125.5)
            .text('F', 531, 125.5)
            .text('(     )', 542, 125.5)
            .text(apellidoPaterno, 97, 125)
            .text('Apellido Paterno', 97, 135)
            .text(apellidoMaterno, 189, 125)
            .text('Apellido Materno', 189, 135)
            .text(nombre, 282, 125)
            .text('Nombre(s)', 282, 135)
            .text('FECHA DE NACIMIENTO:', 44.5, 156)
        //primer cuadro pequeño
        doc
            //primera linea horizontal
            .moveTo(150, 152)
            .lineTo(182, 152)
            //segunda linea horizontal
            .moveTo(150, 165)
            .lineTo(182, 165)
            //primera linea vertical
            .moveTo(150, 152)
            .lineTo(150, 165)
            //segunda linea vertical
            .moveTo(182, 152)
            .lineTo(182, 165)
            .stroke()
        //segundo cuadro pequeño
        doc
            //primera linea horizontal
            .moveTo(190, 152)
            .lineTo(222, 152)
            //segunda linea horizontal
            .moveTo(190, 165)
            .lineTo(222, 165)
            //primera linea vertical
            .moveTo(190, 152)
            .lineTo(190, 165)
            //segunda linea vertical
            .moveTo(222, 152)
            .lineTo(222, 165)
            .stroke()

        //tercer cuadro pequeño
        doc
            //primera linea horizontal
            .moveTo(230, 152)
            .lineTo(262, 152)
            //segunda linea horizontal
            .moveTo(230, 165)
            .lineTo(262, 165)
            //primera linea vertical
            .moveTo(230, 152)
            .lineTo(230, 165)
            //segunda linea vertical
            .moveTo(262, 152)
            .lineTo(262, 165)
            .stroke()

        doc
            .text(fechaNacimiento.getUTCDate(), 162, 156)
            .text('DÍA', 160, 169)
            .text(fechaNacimiento.getMonth() + 1, 204, 156)
            .text('MES', 198, 169)
            .text(fechaNacimiento.getFullYear(), 238, 156)
            .text('AÑO', 238, 169)
            .font('Helvetica-Bold')
            .fontSize(10)
            .text('B.- SIGNOS VITALES, DIAGNÓSTICO, PRESCRIPCIÓN Y EVOLUCIÓN.', 41, 185.5)

        //cuadro B Signos vitales, diagnóstico, prescripcion y evolución
        const XLineaVertical1 = 41
        const YLineaHorizontal1 = 201
        const XLineaVertical2 = 230
        const YLineaHorizontal2 = 412

        doc.rect(XLineaVertical1, YLineaHorizontal1, 189, 211)

        /* doc
            //primera linea horizontal
            .moveTo(XLineaVertical1, YLineaHorizontal1)
            .lineTo(XLineaVertical2, YLineaHorizontal1)
            //segunda linea horizontal
            .moveTo(XLineaVertical1, YLineaHorizontal2)
            .lineTo(XLineaVertical2, YLineaHorizontal2)
            //primera linea vertical
            .moveTo(XLineaVertical1, YLineaHorizontal1)
            .lineTo(XLineaVertical1, YLineaHorizontal2)
            //segunda linea vertical
            .moveTo(XLineaVertical2, YLineaHorizontal1)
            .lineTo(XLineaVertical2, YLineaHorizontal2)
            .stroke() */

        doc
            //linea horizontal de abajo 4.- fecha
            .moveTo(XLineaVertical1, 214)
            .lineTo(XLineaVertical2, 214)
            .stroke()

        doc
            .font('Helvetica')
            .fontSize(7)
            .text('4.- FECHA', 118, 205)

        doc
            //linea horizontal de abajo dia, mes, año, hora
            .moveTo(XLineaVertical1, 228)
            .lineTo(XLineaVertical2, 228)
            .stroke()

            //linea vertical de dia
            .moveTo(88, 214)
            .lineTo(88, 241)
            .stroke()
            .text('DÍA', 59, 219)
            .text(fecha.getDate(), 60, 232)


            //linea vertical de mes
            .moveTo(136, 214)
            .lineTo(136, 241)
            .stroke()
            .text('MES', 103.5, 219)
            .text(fecha.getMonth() + 1, 110, 232)
            //linea vertical de año
            .moveTo(183, 214)
            .lineTo(183, 241)
            .text(fecha.getFullYear(), 152, 232)
            .text('AÑO', 152, 219)
            //hora
            .text('HORA', 196.5, 219)
            .text(fecha.toLocaleTimeString('en-MX', {
                hour: '2-digit',
                minute: '2-digit'
            }), 192, 232)
            .stroke()

            //linea horizontal de abajo 2 dia, mes, año, hora
            .moveTo(XLineaVertical1, 241)
            .lineTo(XLineaVertical2, 241)
            .stroke()

            //linea horizontal de abajo peso actual
            .moveTo(XLineaVertical1, 254)
            .lineTo(XLineaVertical2, 254)
            .text('5.- PESO ACTUAL', 44.5, 244.5)
            .text(pesoActual + " KG", 175, 244.5)
            .stroke()

            //linea vertical de peso/estatura
            .moveTo(136, 214)
            .lineTo(136, 268)
            .stroke()

            //linea horizontal de abajo estatura
            .moveTo(XLineaVertical1, 267)
            .lineTo(XLineaVertical2, 267)
            .text('6.- ESTATURA', 44.5, 257.5)
            .text(estatura + " CM", 175, 257.5)
            .stroke()

            //linea horizontal de abajo cardiaca
            .moveTo(XLineaVertical1, 280)
            .lineTo(XLineaVertical2, 280)
            .text('7.- FRECUENCIA CARDIACA', 44.5, 271)
            .text(frecuenciaCardiaca, 175, 271)
            .stroke()

            //linea horizontal de abajo respiratoria
            .moveTo(XLineaVertical1, 294)
            .lineTo(XLineaVertical2, 294)
            .text('8.- FRECUENCIA RESPIRATORIA', 44.5, 284)
            .text(frecuenciaRespiratoria, 175, 284)
            .stroke()

            //linea horizontal de abajo sistolica
            .moveTo(88, 307)
            .lineTo(XLineaVertical2, 307)
            .text('Sistólica', 91, 297)
            .text(sistolica, 175, 297)
            .stroke()

            //linea vertical 1 de sistolica/diastolica
            .moveTo(88, 294)
            .lineTo(88, 320)
            .stroke()
            .text('TENSION ARTERIAL', 44.5, 299.5, { width: 40 })
            //linea vertical 2 de sistolica/diastolica
            .moveTo(136, 294)
            .lineTo(136, 320)
            .stroke()

            //linea horizontal de abajo diastolica
            .moveTo(XLineaVertical1, 320)
            .lineTo(XLineaVertical2, 320)
            .text('Diastólica', 91, 310)
            .text(diastolica, 175, 310)
            .stroke()

            //linea horizontal de abajo temperatura
            .moveTo(XLineaVertical1, 333)
            .lineTo(XLineaVertical2, 333)
            .text('9.- TEMPERATURA', 44.5, 323.5)
            .text(temperatura, 175, 323.5)
            .stroke()

            //linea horizontal de abajo pulso
            .moveTo(XLineaVertical1, 346)
            .lineTo(XLineaVertical2, 346)
            .text('10.- PULSO', 44.5, 337)
            .text(pulso, 175, 337)
            .stroke()

            //linea horizontal de abajo enfermera
            .moveTo(XLineaVertical1, 359)
            .lineTo(XLineaVertical2, 359)
            .text('11.- ENFERMERA/TAPS', 44.5, 350)
            .text(enfermeraTaps, 175, 350)
            .stroke()

            //linea horizontal de abajo nombre completo
            .moveTo(XLineaVertical1, 386)
            .lineTo(XLineaVertical2, 386)
            .text('NOMBRE COMPLETO:', 44.5, 365, { width: 45 })
            .text(nombre + " " + apellidoPaterno + " " + apellidoMaterno, 105, 370)
            .stroke()

            //linea vertical de nombre completo
            .moveTo(88.5, 359)
            .lineTo(88.5, 386)
            .stroke()

            //linea horizontal de abajo firma
            .moveTo(XLineaVertical1, 399)
            .lineTo(XLineaVertical2, 399)
            .text('FIRMA:', 44.5, 389.5)

            .text('CÉDULA PROFESIONAL', 44.5, 402.5)
            .text(cedulaProfesional, 135, 402.5)
            .stroke()

        //lineas de texto
        doc
            //linea horizontal 1
            .moveTo(317.5, 214)
            .lineTo(564, 214)
            .text('Resumen Interrogatorio:', 240.5, 207)

        doc
            .text(resumenInterrogatorio, 240.5, 207, {
                lineGap: 5,
                align: 'justify',
                indent: 80,
                width: 320
            })

            //linea horizontal 2
            .moveTo(240.5, 228)
            .lineTo(564, 228)
            //linea horizontal 3
            .moveTo(240.5, 241)
            .lineTo(564, 241)
            //linea horizontal 4
            .moveTo(240.5, 254)
            .lineTo(564, 254)
            //linea horizontal 5
            .moveTo(240.5, 268)
            .lineTo(564, 268)
            //linea horizontal 6
            .moveTo(240.5, 282)
            .lineTo(564, 282)
            //linea horizontal 7
            .moveTo(240.5, 294)
            .lineTo(564, 294)
            //linea horizontal 8
            .moveTo(240.5, 306)
            .lineTo(564, 306)
            //linea horizontal 9
            .moveTo(240.5, 320)
            .lineTo(564, 320)
            //linea horizontal 10
            .moveTo(240.5, 333)
            .lineTo(564, 333)
            //linea horizontal 11
            .moveTo(240.5, 346)
            .lineTo(564, 346)
            //linea horizontal 12
            .moveTo(240.5, 359)
            .lineTo(564, 359)
            //linea horizontal 13
            .moveTo(240.5, 372.5)
            .lineTo(564, 372.5)
            //linea horizontal exploracion fisica
            .moveTo(300, 386)
            .lineTo(564, 386)
            .text('Exploración física:', 240.5, 379)

        const exploracionFisica1 = exploracionFisica.slice(0, 295)
        const exploracionFisica2 = exploracionFisica.slice(295)
        doc
            .text(exploracionFisica1, 240.5, 379, {
                align: 'justify',
                indent: 60,
                lineGap: 5,
                width: 320
            })
            .text(exploracionFisica2, 41, 417, {
                lineGap: 5,
                align: "justify",
                width: 520
            })

            .fillColor('black')
            //linea horizontal 15
            .moveTo(240.5, 399)
            .lineTo(564, 399)
            //linea horizontal 16
            .moveTo(240.5, YLineaHorizontal2)
            .lineTo(564, YLineaHorizontal2)
            //linea horizontal 17
            .moveTo(41, 425)
            .lineTo(564, 425)
            //linea horizontal 18
            .moveTo(41, 439)
            .lineTo(564, 439)
            //linea horizontal 19
            .moveTo(41, 452)
            .lineTo(564, 452)
            //linea horizontal 20
            .moveTo(41, 465)
            .lineTo(564, 465)
            //linea horizontal 21
            .moveTo(41, 478)
            .lineTo(564, 478)
            //linea horizontal 22
            .moveTo(41, 491)
            .lineTo(564, 491)
            //linea horizontal 23
            .moveTo(41, 504)
            .lineTo(564, 504)
            //linea horizontal 24 resultado de servicios de auxiliares de diagnostico
            .moveTo(205.5, 517.5)
            .lineTo(564, 517.5)
            .text('Resultado de Servicios de auxiliares de diagnóstico:', 41, 511)

        doc
            .text(resultadoServiciosAuxiliaresDiagnostico, 41, 511, {
                lineGap: 5,
                align: 'justify',
                indent: 165,
                width: 520
            })

            //linea horizontal 25
            .moveTo(41, 531)
            .lineTo(564, 531)
            //linea horizontal 26
            .moveTo(41, 544)
            .lineTo(564, 544)
            //linea horizontal 27
            .moveTo(41, 557)
            .lineTo(564, 557)
            //linea horizontal 28
            .moveTo(41, 570)
            .lineTo(564, 570)
            //linea horizontal 29 diagnostico
            .moveTo(82.5, 583.5)
            .lineTo(564, 583.5)
            .text('Diagnóstico:', 41, 577)

        doc
            .text(diagnostico, 41, 577, {
                lineGap: 5,
                align: 'justify',
                indent: 42,
                width: 520
            })

            //linea horizontal 30
            .moveTo(41, 597)
            .lineTo(564, 597)
            //linea horizontal 31
            .moveTo(41, 610)
            .lineTo(564, 610)
            //linea horizontal 32 plan de estudio/tratamiento
            .moveTo(141.5, 623)
            .lineTo(564, 623)
            .text('Plan de estudio y/o tratamiento:', 41, 616.5)

        doc
            .text(planEstudioTratamiento, 41, 616.5, {
                lineGap: 5,
                align: 'justify',
                indent: 101,
                width: 520
            })

            //linea horizontal 33
            .moveTo(41, 637)
            .lineTo(564, 637)
            //linea horizontal 34
            .moveTo(41, 650)
            .lineTo(564, 650)
            //linea horizontal 35
            .moveTo(41, 663)
            .lineTo(564, 663)
            //linea horizontal 36
            .moveTo(41, 676)
            .lineTo(564, 676)
            //linea horizontal 37 pronostico
            .moveTo(79, 689)
            .lineTo(564, 689)
            .text('Pronóstico:', 41, 682.5)

        doc
            .text(pronostico, 41, 682.5, {
                lineBreak: false,
                lineGap: 5,
                align: 'justify',
                indent: 38,
                width: 520,
                height: 300
            })

            //linea horizontal 38
            .moveTo(41, 702)
            .lineTo(564, 702)
            //linea horizontal 39
            .moveTo(41, 715.5)
            .lineTo(564, 715.5)
            //linea horizontal 40
            .moveTo(41, 728.5)
            .lineTo(564, 728.5)
            //linea horizontal nombre del medico
            .moveTo(48.5, 765)
            .lineTo(166.5, 765)
            .text('Nombre del Médico', 76.5, 739, {
                lineBreak: false
            })
            .text(nombreMedico, 48.5, 757, {
                lineBreak: false
            })

            //linea horizontal cedula profesional
            .moveTo(244.5, 765)
            .lineTo(362.5, 765)
            .text('Cédula profesional', 274.5, 739, {
                lineBreak: false
            })
            .text(cedulaProfesional, 244.5, 757, {
                lineBreak: false
            })
            //linea horizontal firma
            .moveTo(440.5, 765)
            .lineTo(558.5, 765)
            .text('Firma', 491, 739, {
                lineBreak: false
            })
            .stroke()

        doc.end()

        await writeStream.addListener('finish', async () => {
            next()
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            error: "No se pudo realizar el pdf",
            errorType: error.toString()
        })
        //res.status(500).send({ error: error.toString() })
    }
}

module.exports = generatePdf