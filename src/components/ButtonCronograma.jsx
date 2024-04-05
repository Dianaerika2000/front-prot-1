import useSectionStore from "../hook/useStore";

export default function ButtonCronogramaGenerator() {
  const sections = useSectionStore((state) => state.sections);
  // Función para generar el HTML de la tabla
  const generateHTML = () => {
    let html = `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <style>
            body {
                background-color: white;
                font-family: 'Calibri';              
            }
    
            h1 {
                color: #1948a0; 
                margin-left: 40px;
            }

            .tabla-cronograma {
                border: 1px solid #000000;
                width: 70%;
                border-spacing: 0px;
                border-collapse: collapse;
            }

            tr,td {
                border: 1px solid #000000;
            }

            .marcado{
                background-color: #e8ab51;
            }

            .fondo-video{
                background-color: #ffff00; 
                width: 200px; 
                color: black;
                text-align: center;
                margin: auto;
                font-weight: bold;
            }
    
            .fondo-foro{
                background-color: #F2E500; 
                width: 200px; 
                color: black;
                text-align: center;
                margin: auto;
                font-weight: bold;
            }

            .encabezado{
                background-color: #002060; 
                width: 200px; 
                color: white;
                text-align: center;
                margin: auto;
                font-weight: bold;
            }

            .fondo-seccion{
                background-color: #002060; 
                width: 200px; 
                color: white;
                text-align: center;
                margin: auto;
                font-weight: bold;
            }

            .fondo-blanco{
                background-color: #ffffff; 
                width: 200px; 
                color: black;
                text-align: center;
                margin: auto;
            }

            .fondo-examen{
                background-color: #FF0000; 
                width: 200px; 
                color: white;
                text-align: center;
                margin: auto;
                font-weight: bold;
            }

            .fondo-reto{
                background-color: #f8cbad; 
                width: 200px; 
                color: black;
                text-align: center;
                margin: auto;
                font-weight: bold;
            }
        </style>
    </head>
    <body>
        <table class="tabla-cronograma">     
            <tr>
                <td class="encabezado" rowspan="2">ACTIVIDAD</td>
                <td class="encabezado" rowspan="2">FECHA DE INICIO</td>
                <td class="encabezado" rowspan="2">DÍAS</td>
                <td class="encabezado" rowspan="2">FECHA DE FINALIZACIÓN</td>
                <td class="encabezado" colspan="4">MES 1</td>            
                <td class="encabezado" colspan="4">MES 2</td>            
                <td class="encabezado" colspan="4">MES 3</td>            
                <td class="encabezado" colspan="4">MES 4</td> 
                <td class="encabezado" colspan="4">MES 5</td> 
                <td class="encabezado" colspan="4">MES 6</td> 
            </tr>
            <tr>`;
            // Agregar columnas de los días
            for (let i = 1; i <= 24; i++) {
                html += `<td class="encabezado">${i}</td>`;
            }
            html += `</tr>`;

            // Agregar filas para cada actividad
            sections.forEach((section, index) => {
                if (section && section.contents && section.contents.length > 0) {
                    console.log('SECTIONS', section)

                    let startD = new Date(section.contents[0].startDate);
                    let start_m = startD.getMonth() + 1;
                    let start_d = startD.getDate();

                    let endD = new Date(section.contents[0].endDate);
                    let end_m = endD.getMonth() + 1;
                    let end_d = endD.getDate();
                    
                    // Agregar la fila de sección
                    html += `
                                <tr>
                                    <td class="fondo-seccion">${section.title}</td>
                                    <td class="fondo-blanco">${section.contents[0].startDate}</td>
                                    <td class="fondo-blanco">7</td>
                                    <td class="fondo-blanco">${section.contents[0].endDate}</td>
                                    
                                    <td class="${(start_m == 4 && start_d >= 1  && start_d <= 7  ) || (end_m == 4 && end_d >=1  && end_d <= 7  )  || ((start_m < 4 && end_m > 4) || start_m <  4 && end_m   >=  4   && end_d    > 7 )                                                                                                 ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 4 && start_d >= 8  && start_d <= 14 ) || (end_m == 4 && end_d >=8  && end_d <= 14 )  || ((start_m < 4 && end_m > 4) || start_m == 4 && end_m   >   4   && start_d  < 14  || start_m == 4 && start_d <  7 && end_d > 14   || start_m < 4 && end_m == 4 && end_d > 14)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 4 && start_d >= 15 && start_d <= 21 ) || (end_m == 4 && end_d >=15 && end_d <= 21 )  || ((start_m < 4 && end_m > 4) || start_m == 4 && end_m   >   4   && start_d  < 21  || start_m == 4 && start_d < 14 && end_d > 21   || start_m < 4 && end_m == 4 && end_d > 21)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 4 && start_d >= 22 && start_d <= 31 ) || (end_m == 4 && end_d >=22 && end_d <= 31 )  || ((start_m < 4 && end_m > 4) || start_m == 4 && end_m   >   4   && start_d  < 31  )                                                                                               ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 5 && start_d >= 1  && start_d <= 7  ) || (end_m == 5 && end_d >=1  && end_d <= 7  )  || ((start_m < 5 && end_m > 5) || start_m <  5 && end_m   >=  5   && end_d    > 7   )                                                                                               ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 5 && start_d >= 8  && start_d <= 14 ) || (end_m == 5 && end_d >=8  && end_d <= 14 )  || ((start_m < 5 && end_m > 5) || start_m == 5 && end_m   >   5   && start_d  < 14  || start_m == 5 && start_d <  7 && end_d > 14   || start_m < 5 && end_m == 5 && end_d > 14)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 5 && start_d >= 15 && start_d <= 21 ) || (end_m == 5 && end_d >=15 && end_d <= 21 )  || ((start_m < 5 && end_m > 5) || start_m == 5 && end_m   >   5   && start_d  < 21  || start_m == 5 && start_d < 14 && end_d > 21   || start_m < 5 && end_m == 5 && end_d > 21)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 5 && start_d >= 22 && start_d <= 31 ) || (end_m == 5 && end_d >=22 && end_d <= 31 )  || ((start_m < 5 && end_m > 5) || start_m == 5 && end_m   >   5   && start_d  < 31  )                                                                                               ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 6 && start_d >= 1  && start_d <= 7  ) || (end_m == 6 && end_d >=1  && end_d <= 7  )  || ((start_m < 6 && end_m > 6) || start_m <  6 && end_m   >=  6   && end_d    > 7   )                                                                                               ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 6 && start_d >= 8  && start_d <= 14 ) || (end_m == 6 && end_d >=8  && end_d <= 14 )  || ((start_m < 6 && end_m > 6) || start_m == 6 && end_m   >   6   && start_d  < 14  || start_m == 6 && start_d <  7 && end_d > 14   || start_m < 6 && end_m == 6 && end_d > 14)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 6 && start_d >= 15 && start_d <= 21 ) || (end_m == 6 && end_d >=15 && end_d <= 21 )  || ((start_m < 6 && end_m > 6) || start_m == 6 && end_m   >   6   && start_d  < 21  || start_m == 6 && start_d < 14 && end_d > 21   || start_m < 6 && end_m == 6 && end_d > 21)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 6 && start_d >= 22 && start_d <= 31 ) || (end_m == 6 && end_d >=22 && end_d <= 31 )  || ((start_m < 6 && end_m > 6) || start_m == 6 && end_m   >   6   && start_d  < 31  )                                                                                               ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 7 && start_d >= 1  && start_d <= 7  ) || (end_m == 7 && end_d >=1  && end_d <= 7  )  || ((start_m < 7 && end_m > 7) || start_m <  7 && end_m   >=  7   && end_d    > 7   )                                                                                               ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 7 && start_d >= 8  && start_d <= 14 ) || (end_m == 7 && end_d >=8  && end_d <= 14 )  || ((start_m < 7 && end_m > 7) || start_m == 7 && end_m   >   7   && start_d  < 14  || start_m == 7 && start_d <  7 && end_d > 14   || start_m < 7 && end_m == 7 && end_d > 14)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 7 && start_d >= 15 && start_d <= 21 ) || (end_m == 7 && end_d >=15 && end_d <= 21 )  || ((start_m < 7 && end_m > 7) || start_m == 7 && end_m   >   7   && start_d  < 21  || start_m == 7 && start_d < 14 && end_d > 21   || start_m < 7 && end_m == 7 && end_d > 21)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 7 && start_d >= 22 && start_d <= 31 ) || (end_m == 7 && end_d >=22 && end_d <= 31 )  || ((start_m < 7 && end_m > 7) || start_m == 7 && end_m   >   7   && start_d  < 31  )                                                                                               ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 8 && start_d >= 1  && start_d <= 7  ) || (end_m == 8 && end_d >=1  && end_d <= 7  )  || ((start_m < 8 && end_m > 8) || start_m <  8 && end_m   >=  8   && end_d    > 7   )                                                                                               ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 8 && start_d >= 8  && start_d <= 14 ) || (end_m == 8 && end_d >=8  && end_d <= 14 )  || ((start_m < 8 && end_m > 8) || start_m == 8 && end_m   >   8   && start_d  < 14  || start_m == 8 && start_d <  7 && end_d > 14   || start_m < 8 && end_m == 8 && end_d > 14)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 8 && start_d >= 15 && start_d <= 21 ) || (end_m == 8 && end_d >=15 && end_d <= 21 )  || ((start_m < 8 && end_m > 8) || start_m == 8 && end_m   >   8   && start_d  < 21  || start_m == 8 && start_d < 14 && end_d > 21   || start_m < 8 && end_m == 8 && end_d > 21)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 8 && start_d >= 22 && start_d <= 31 ) || (end_m == 8 && end_d >=22 && end_d <= 31 )  || ((start_m < 8 && end_m > 8) || start_m == 8 && end_m   >   8   && start_d  < 31  )                                                                                               ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 9 && start_d >= 1  && start_d <= 7  ) || (end_m == 9 && end_d >=1  && end_d <= 7  )  || ((start_m < 9 && end_m > 9) || start_m <  9 && end_m   >=  9   && end_d    > 7   )                                                                                               ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 9 && start_d >= 8  && start_d <= 14 ) || (end_m == 9 && end_d >=8  && end_d <= 14 )  || ((start_m < 9 && end_m > 9) || start_m == 9 && end_m   >   9   && start_d  < 14  || start_m == 9 && start_d <  7 && end_d > 14   || start_m < 9 && end_m == 9 && end_d > 14)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 9 && start_d >= 15 && start_d <= 21 ) || (end_m == 9 && end_d >=15 && end_d <= 21 )  || ((start_m < 9 && end_m > 9) || start_m == 9 && end_m   >   9   && start_d  < 21  || start_m == 9 && start_d < 14 && end_d > 21   || start_m < 9 && end_m == 9 && end_d > 21)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 9 && start_d >= 22 && start_d <= 31 ) || (end_m == 9 && end_d >=22 && end_d <= 31 )  || ((start_m < 9 && end_m > 9) || start_m == 9 && end_m   >   9   && start_d  < 31  )                                                                                               ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>`;
   
                    html += `</tr>`;

                    //Recorrer el contenido y sacar solo Videoconferencia, Reto, Foro, Parcial
                    section.contents.forEach((content, contentIndex) => {
                        // Videoconferencia
                        if (content.typeContent == 3) {
                          let startD = new Date(content.startDate);
                          let start_m = startD.getMonth() + 1;
                          let start_d = startD.getDate();

                          let endD = new Date(content.endDate);
                          let end_m = endD.getMonth() + 1;
                          let end_d = endD.getDate();
                            html += `
                                <tr>
                                    <td class="fondo-video">${content.content}</td>
                                    <td class="fondo-blanco">${content.startDate}</td>
                                    <td class="fondo-blanco">7</td>
                                    <td class="fondo-blanco">${content.endDate}</td>                                    
                                    <td class="${(start_m == 4 && start_d >= 1  && start_d <= 7  ) || (end_m == 4 && end_d >=1  && end_d <= 7  )  || ((start_m < 4 && end_m > 4) || start_m <  4 && end_m   >=  4   && end_d    > 7 )                                                                                                 ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 4 && start_d >= 8  && start_d <= 14 ) || (end_m == 4 && end_d >=8  && end_d <= 14 )  || ((start_m < 4 && end_m > 4) || start_m == 4 && end_m   >   4   && start_d  < 14  || start_m == 4 && start_d <  7 && end_d > 14   || start_m < 4 && end_m == 4 && end_d > 14)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 4 && start_d >= 15 && start_d <= 21 ) || (end_m == 4 && end_d >=15 && end_d <= 21 )  || ((start_m < 4 && end_m > 4) || start_m == 4 && end_m   >   4   && start_d  < 21  || start_m == 4 && start_d < 14 && end_d > 21   || start_m < 4 && end_m == 4 && end_d > 21)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 4 && start_d >= 22 && start_d <= 31 ) || (end_m == 4 && end_d >=22 && end_d <= 31 )  || ((start_m < 4 && end_m > 4) || start_m == 4 && end_m   >   4   && start_d  < 31  )                                                                                               ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 5 && start_d >= 1  && start_d <= 7  ) || (end_m == 5 && end_d >=1  && end_d <= 7  )  || ((start_m < 5 && end_m > 5) || start_m <  5 && end_m   >=  5   && end_d    > 7   )                                                                                               ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 5 && start_d >= 8  && start_d <= 14 ) || (end_m == 5 && end_d >=8  && end_d <= 14 )  || ((start_m < 5 && end_m > 5) || start_m == 5 && end_m   >   5   && start_d  < 14  || start_m == 5 && start_d <  7 && end_d > 14   || start_m < 5 && end_m == 5 && end_d > 14)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 5 && start_d >= 15 && start_d <= 21 ) || (end_m == 5 && end_d >=15 && end_d <= 21 )  || ((start_m < 5 && end_m > 5) || start_m == 5 && end_m   >   5   && start_d  < 21  || start_m == 5 && start_d < 14 && end_d > 21   || start_m < 5 && end_m == 5 && end_d > 21)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 5 && start_d >= 22 && start_d <= 31 ) || (end_m == 5 && end_d >=22 && end_d <= 31 )  || ((start_m < 5 && end_m > 5) || start_m == 5 && end_m   >   5   && start_d  < 31  )                                                                                               ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 6 && start_d >= 1  && start_d <= 7  ) || (end_m == 6 && end_d >=1  && end_d <= 7  )  || ((start_m < 6 && end_m > 6) || start_m <  6 && end_m   >=  6   && end_d    > 7   )                                                                                               ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 6 && start_d >= 8  && start_d <= 14 ) || (end_m == 6 && end_d >=8  && end_d <= 14 )  || ((start_m < 6 && end_m > 6) || start_m == 6 && end_m   >   6   && start_d  < 14  || start_m == 6 && start_d <  7 && end_d > 14   || start_m < 6 && end_m == 6 && end_d > 14)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 6 && start_d >= 15 && start_d <= 21 ) || (end_m == 6 && end_d >=15 && end_d <= 21 )  || ((start_m < 6 && end_m > 6) || start_m == 6 && end_m   >   6   && start_d  < 21  || start_m == 6 && start_d < 14 && end_d > 21   || start_m < 6 && end_m == 6 && end_d > 21)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 6 && start_d >= 22 && start_d <= 31 ) || (end_m == 6 && end_d >=22 && end_d <= 31 )  || ((start_m < 6 && end_m > 6) || start_m == 6 && end_m   >   6   && start_d  < 31  )                                                                                               ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 7 && start_d >= 1  && start_d <= 7  ) || (end_m == 7 && end_d >=1  && end_d <= 7  )  || ((start_m < 7 && end_m > 7) || start_m <  7 && end_m   >=  7   && end_d    > 7   )                                                                                               ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 7 && start_d >= 8  && start_d <= 14 ) || (end_m == 7 && end_d >=8  && end_d <= 14 )  || ((start_m < 7 && end_m > 7) || start_m == 7 && end_m   >   7   && start_d  < 14  || start_m == 7 && start_d <  7 && end_d > 14   || start_m < 7 && end_m == 7 && end_d > 14)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 7 && start_d >= 15 && start_d <= 21 ) || (end_m == 7 && end_d >=15 && end_d <= 21 )  || ((start_m < 7 && end_m > 7) || start_m == 7 && end_m   >   7   && start_d  < 21  || start_m == 7 && start_d < 14 && end_d > 21   || start_m < 7 && end_m == 7 && end_d > 21)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 7 && start_d >= 22 && start_d <= 31 ) || (end_m == 7 && end_d >=22 && end_d <= 31 )  || ((start_m < 7 && end_m > 7) || start_m == 7 && end_m   >   7   && start_d  < 31  )                                                                                               ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 8 && start_d >= 1  && start_d <= 7  ) || (end_m == 8 && end_d >=1  && end_d <= 7  )  || ((start_m < 8 && end_m > 8) || start_m <  8 && end_m   >=  8   && end_d    > 7   )                                                                                               ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 8 && start_d >= 8  && start_d <= 14 ) || (end_m == 8 && end_d >=8  && end_d <= 14 )  || ((start_m < 8 && end_m > 8) || start_m == 8 && end_m   >   8   && start_d  < 14  || start_m == 8 && start_d <  7 && end_d > 14   || start_m < 8 && end_m == 8 && end_d > 14)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 8 && start_d >= 15 && start_d <= 21 ) || (end_m == 8 && end_d >=15 && end_d <= 21 )  || ((start_m < 8 && end_m > 8) || start_m == 8 && end_m   >   8   && start_d  < 21  || start_m == 8 && start_d < 14 && end_d > 21   || start_m < 8 && end_m == 8 && end_d > 21)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 8 && start_d >= 22 && start_d <= 31 ) || (end_m == 8 && end_d >=22 && end_d <= 31 )  || ((start_m < 8 && end_m > 8) || start_m == 8 && end_m   >   8   && start_d  < 31  )                                                                                               ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 9 && start_d >= 1  && start_d <= 7  ) || (end_m == 9 && end_d >=1  && end_d <= 7  )  || ((start_m < 9 && end_m > 9) || start_m <  9 && end_m   >=  9   && end_d    > 7   )                                                                                               ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 9 && start_d >= 8  && start_d <= 14 ) || (end_m == 9 && end_d >=8  && end_d <= 14 )  || ((start_m < 9 && end_m > 9) || start_m == 9 && end_m   >   9   && start_d  < 14  || start_m == 9 && start_d <  7 && end_d > 14   || start_m < 9 && end_m == 9 && end_d > 14)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 9 && start_d >= 15 && start_d <= 21 ) || (end_m == 9 && end_d >=15 && end_d <= 21 )  || ((start_m < 9 && end_m > 9) || start_m == 9 && end_m   >   9   && start_d  < 21  || start_m == 9 && start_d < 14 && end_d > 21   || start_m < 9 && end_m == 9 && end_d > 21)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 9 && start_d >= 22 && start_d <= 31 ) || (end_m == 9 && end_d >=22 && end_d <= 31 )  || ((start_m < 9 && end_m > 9) || start_m == 9 && end_m   >   9   && start_d  < 31  )                                                                                               ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>`;
                            html += `</tr>`;
                        }

                        // Reto
                        if (content.typeContent == 4) {
                            
                            let startD = new Date(content.startDate);
                            let start_m = startD.getMonth() + 1;
                            let start_d = startD.getDate();

                            let endD = new Date(content.endDate);
                            let end_m = endD.getMonth() + 1;
                            let end_d = endD.getDate();
                            html += `
                                <tr>
                                    <td class="fondo-reto">${content.content}</td>
                                    <td class="fondo-blanco">${content.startDate}</td>
                                    <td class="fondo-blanco">7</td>
                                    <td class="fondo-blanco">${content.endDate}</td>
                                    <td class="${(start_m == 4 && start_d >= 1  && start_d <= 7  ) || (end_m == 4 && end_d >=1  && end_d <= 7  )  || ((start_m < 4 && end_m > 4) || start_m <  4 && end_m   >=  4   && end_d    > 7 )                                                                                                 ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 4 && start_d >= 8  && start_d <= 14 ) || (end_m == 4 && end_d >=8  && end_d <= 14 )  || ((start_m < 4 && end_m > 4) || start_m == 4 && end_m   >   4   && start_d  < 14  || start_m == 4 && start_d <  7 && end_d > 14   || start_m < 4 && end_m == 4 && end_d > 14)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 4 && start_d >= 15 && start_d <= 21 ) || (end_m == 4 && end_d >=15 && end_d <= 21 )  || ((start_m < 4 && end_m > 4) || start_m == 4 && end_m   >   4   && start_d  < 21  || start_m == 4 && start_d < 14 && end_d > 21   || start_m < 4 && end_m == 4 && end_d > 21)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 4 && start_d >= 22 && start_d <= 31 ) || (end_m == 4 && end_d >=22 && end_d <= 31 )  || ((start_m < 4 && end_m > 4) || start_m == 4 && end_m   >   4   && start_d  < 31  )                                                                                               ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 5 && start_d >= 1  && start_d <= 7  ) || (end_m == 5 && end_d >=1  && end_d <= 7  )  || ((start_m < 5 && end_m > 5) || start_m <  5 && end_m   >=  5   && end_d    > 7   )                                                                                               ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 5 && start_d >= 8  && start_d <= 14 ) || (end_m == 5 && end_d >=8  && end_d <= 14 )  || ((start_m < 5 && end_m > 5) || start_m == 5 && end_m   >   5   && start_d  < 14  || start_m == 5 && start_d <  7 && end_d > 14   || start_m < 5 && end_m == 5 && end_d > 14)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 5 && start_d >= 15 && start_d <= 21 ) || (end_m == 5 && end_d >=15 && end_d <= 21 )  || ((start_m < 5 && end_m > 5) || start_m == 5 && end_m   >   5   && start_d  < 21  || start_m == 5 && start_d < 14 && end_d > 21   || start_m < 5 && end_m == 5 && end_d > 21)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 5 && start_d >= 22 && start_d <= 31 ) || (end_m == 5 && end_d >=22 && end_d <= 31 )  || ((start_m < 5 && end_m > 5) || start_m == 5 && end_m   >   5   && start_d  < 31  )                                                                                               ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 6 && start_d >= 1  && start_d <= 7  ) || (end_m == 6 && end_d >=1  && end_d <= 7  )  || ((start_m < 6 && end_m > 6) || start_m <  6 && end_m   >=  6   && end_d    > 7   )                                                                                               ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 6 && start_d >= 8  && start_d <= 14 ) || (end_m == 6 && end_d >=8  && end_d <= 14 )  || ((start_m < 6 && end_m > 6) || start_m == 6 && end_m   >   6   && start_d  < 14  || start_m == 6 && start_d <  7 && end_d > 14   || start_m < 6 && end_m == 6 && end_d > 14)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 6 && start_d >= 15 && start_d <= 21 ) || (end_m == 6 && end_d >=15 && end_d <= 21 )  || ((start_m < 6 && end_m > 6) || start_m == 6 && end_m   >   6   && start_d  < 21  || start_m == 6 && start_d < 14 && end_d > 21   || start_m < 6 && end_m == 6 && end_d > 21)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 6 && start_d >= 22 && start_d <= 31 ) || (end_m == 6 && end_d >=22 && end_d <= 31 )  || ((start_m < 6 && end_m > 6) || start_m == 6 && end_m   >   6   && start_d  < 31  )                                                                                               ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 7 && start_d >= 1  && start_d <= 7  ) || (end_m == 7 && end_d >=1  && end_d <= 7  )  || ((start_m < 7 && end_m > 7) || start_m <  7 && end_m   >=  7   && end_d    > 7   )                                                                                               ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 7 && start_d >= 8  && start_d <= 14 ) || (end_m == 7 && end_d >=8  && end_d <= 14 )  || ((start_m < 7 && end_m > 7) || start_m == 7 && end_m   >   7   && start_d  < 14  || start_m == 7 && start_d <  7 && end_d > 14   || start_m < 7 && end_m == 7 && end_d > 14)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 7 && start_d >= 15 && start_d <= 21 ) || (end_m == 7 && end_d >=15 && end_d <= 21 )  || ((start_m < 7 && end_m > 7) || start_m == 7 && end_m   >   7   && start_d  < 21  || start_m == 7 && start_d < 14 && end_d > 21   || start_m < 7 && end_m == 7 && end_d > 21)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 7 && start_d >= 22 && start_d <= 31 ) || (end_m == 7 && end_d >=22 && end_d <= 31 )  || ((start_m < 7 && end_m > 7) || start_m == 7 && end_m   >   7   && start_d  < 31  )                                                                                               ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 8 && start_d >= 1  && start_d <= 7  ) || (end_m == 8 && end_d >=1  && end_d <= 7  )  || ((start_m < 8 && end_m > 8) || start_m <  8 && end_m   >=  8   && end_d    > 7   )                                                                                               ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 8 && start_d >= 8  && start_d <= 14 ) || (end_m == 8 && end_d >=8  && end_d <= 14 )  || ((start_m < 8 && end_m > 8) || start_m == 8 && end_m   >   8   && start_d  < 14  || start_m == 8 && start_d <  7 && end_d > 14   || start_m < 8 && end_m == 8 && end_d > 14)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 8 && start_d >= 15 && start_d <= 21 ) || (end_m == 8 && end_d >=15 && end_d <= 21 )  || ((start_m < 8 && end_m > 8) || start_m == 8 && end_m   >   8   && start_d  < 21  || start_m == 8 && start_d < 14 && end_d > 21   || start_m < 8 && end_m == 8 && end_d > 21)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 8 && start_d >= 22 && start_d <= 31 ) || (end_m == 8 && end_d >=22 && end_d <= 31 )  || ((start_m < 8 && end_m > 8) || start_m == 8 && end_m   >   8   && start_d  < 31  )                                                                                               ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 9 && start_d >= 1  && start_d <= 7  ) || (end_m == 9 && end_d >=1  && end_d <= 7  )  || ((start_m < 9 && end_m > 9) || start_m <  9 && end_m   >=  9   && end_d    > 7   )                                                                                               ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 9 && start_d >= 8  && start_d <= 14 ) || (end_m == 9 && end_d >=8  && end_d <= 14 )  || ((start_m < 9 && end_m > 9) || start_m == 9 && end_m   >   9   && start_d  < 14  || start_m == 9 && start_d <  7 && end_d > 14   || start_m < 9 && end_m == 9 && end_d > 14)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 9 && start_d >= 15 && start_d <= 21 ) || (end_m == 9 && end_d >=15 && end_d <= 21 )  || ((start_m < 9 && end_m > 9) || start_m == 9 && end_m   >   9   && start_d  < 21  || start_m == 9 && start_d < 14 && end_d > 21   || start_m < 9 && end_m == 9 && end_d > 21)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 9 && start_d >= 22 && start_d <= 31 ) || (end_m == 9 && end_d >=22 && end_d <= 31 )  || ((start_m < 9 && end_m > 9) || start_m == 9 && end_m   >   9   && start_d  < 31  )                                                                                               ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>`;
                            html += `</tr>`;
                        }

                        // Foro
                        if (content.typeContent == 5) {
                          let startD = new Date(content.startDate);
                          let start_m = startD.getMonth() + 1;
                          let start_d = startD.getDate();

                          let endD = new Date(content.endDate);
                          let end_m = endD.getMonth() + 1;
                          let end_d = endD.getDate();

                            html += `
                                <tr>
                                    <td class="fondo-foro">${content.content}</td>
                                    <td class="fondo-blanco">${content.startDate}</td>
                                    <td class="fondo-blanco">7</td>
                                    <td class="fondo-blanco">${content.endDate}</td>
                                    <td class="${(start_m == 4 && start_d >= 1  && start_d <= 7  ) || (end_m == 4 && end_d >=1  && end_d <= 7  )  || ((start_m < 4 && end_m > 4) || start_m <  4 && end_m   >=  4   && end_d    > 7 )                                                                                                 ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 4 && start_d >= 8  && start_d <= 14 ) || (end_m == 4 && end_d >=8  && end_d <= 14 )  || ((start_m < 4 && end_m > 4) || start_m == 4 && end_m   >   4   && start_d  < 14  || start_m == 4 && start_d <  7 && end_d > 14   || start_m < 4 && end_m == 4 && end_d > 14)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 4 && start_d >= 15 && start_d <= 21 ) || (end_m == 4 && end_d >=15 && end_d <= 21 )  || ((start_m < 4 && end_m > 4) || start_m == 4 && end_m   >   4   && start_d  < 21  || start_m == 4 && start_d < 14 && end_d > 21   || start_m < 4 && end_m == 4 && end_d > 21)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 4 && start_d >= 22 && start_d <= 31 ) || (end_m == 4 && end_d >=22 && end_d <= 31 )  || ((start_m < 4 && end_m > 4) || start_m == 4 && end_m   >   4   && start_d  < 31  )                                                                                               ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 5 && start_d >= 1  && start_d <= 7  ) || (end_m == 5 && end_d >=1  && end_d <= 7  )  || ((start_m < 5 && end_m > 5) || start_m <  5 && end_m   >=  5   && end_d    > 7   )                                                                                               ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 5 && start_d >= 8  && start_d <= 14 ) || (end_m == 5 && end_d >=8  && end_d <= 14 )  || ((start_m < 5 && end_m > 5) || start_m == 5 && end_m   >   5   && start_d  < 14  || start_m == 5 && start_d <  7 && end_d > 14   || start_m < 5 && end_m == 5 && end_d > 14)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 5 && start_d >= 15 && start_d <= 21 ) || (end_m == 5 && end_d >=15 && end_d <= 21 )  || ((start_m < 5 && end_m > 5) || start_m == 5 && end_m   >   5   && start_d  < 21  || start_m == 5 && start_d < 14 && end_d > 21   || start_m < 5 && end_m == 5 && end_d > 21)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 5 && start_d >= 22 && start_d <= 31 ) || (end_m == 5 && end_d >=22 && end_d <= 31 )  || ((start_m < 5 && end_m > 5) || start_m == 5 && end_m   >   5   && start_d  < 31  )                                                                                               ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 6 && start_d >= 1  && start_d <= 7  ) || (end_m == 6 && end_d >=1  && end_d <= 7  )  || ((start_m < 6 && end_m > 6) || start_m <  6 && end_m   >=  6   && end_d    > 7   )                                                                                               ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 6 && start_d >= 8  && start_d <= 14 ) || (end_m == 6 && end_d >=8  && end_d <= 14 )  || ((start_m < 6 && end_m > 6) || start_m == 6 && end_m   >   6   && start_d  < 14  || start_m == 6 && start_d <  7 && end_d > 14   || start_m < 6 && end_m == 6 && end_d > 14)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 6 && start_d >= 15 && start_d <= 21 ) || (end_m == 6 && end_d >=15 && end_d <= 21 )  || ((start_m < 6 && end_m > 6) || start_m == 6 && end_m   >   6   && start_d  < 21  || start_m == 6 && start_d < 14 && end_d > 21   || start_m < 6 && end_m == 6 && end_d > 21)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 6 && start_d >= 22 && start_d <= 31 ) || (end_m == 6 && end_d >=22 && end_d <= 31 )  || ((start_m < 6 && end_m > 6) || start_m == 6 && end_m   >   6   && start_d  < 31  )                                                                                               ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 7 && start_d >= 1  && start_d <= 7  ) || (end_m == 7 && end_d >=1  && end_d <= 7  )  || ((start_m < 7 && end_m > 7) || start_m <  7 && end_m   >=  7   && end_d    > 7   )                                                                                               ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 7 && start_d >= 8  && start_d <= 14 ) || (end_m == 7 && end_d >=8  && end_d <= 14 )  || ((start_m < 7 && end_m > 7) || start_m == 7 && end_m   >   7   && start_d  < 14  || start_m == 7 && start_d <  7 && end_d > 14   || start_m < 7 && end_m == 7 && end_d > 14)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 7 && start_d >= 15 && start_d <= 21 ) || (end_m == 7 && end_d >=15 && end_d <= 21 )  || ((start_m < 7 && end_m > 7) || start_m == 7 && end_m   >   7   && start_d  < 21  || start_m == 7 && start_d < 14 && end_d > 21   || start_m < 7 && end_m == 7 && end_d > 21)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 7 && start_d >= 22 && start_d <= 31 ) || (end_m == 7 && end_d >=22 && end_d <= 31 )  || ((start_m < 7 && end_m > 7) || start_m == 7 && end_m   >   7   && start_d  < 31  )                                                                                               ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 8 && start_d >= 1  && start_d <= 7  ) || (end_m == 8 && end_d >=1  && end_d <= 7  )  || ((start_m < 8 && end_m > 8) || start_m <  8 && end_m   >=  8   && end_d    > 7   )                                                                                               ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 8 && start_d >= 8  && start_d <= 14 ) || (end_m == 8 && end_d >=8  && end_d <= 14 )  || ((start_m < 8 && end_m > 8) || start_m == 8 && end_m   >   8   && start_d  < 14  || start_m == 8 && start_d <  7 && end_d > 14   || start_m < 8 && end_m == 8 && end_d > 14)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 8 && start_d >= 15 && start_d <= 21 ) || (end_m == 8 && end_d >=15 && end_d <= 21 )  || ((start_m < 8 && end_m > 8) || start_m == 8 && end_m   >   8   && start_d  < 21  || start_m == 8 && start_d < 14 && end_d > 21   || start_m < 8 && end_m == 8 && end_d > 21)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 8 && start_d >= 22 && start_d <= 31 ) || (end_m == 8 && end_d >=22 && end_d <= 31 )  || ((start_m < 8 && end_m > 8) || start_m == 8 && end_m   >   8   && start_d  < 31  )                                                                                               ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 9 && start_d >= 1  && start_d <= 7  ) || (end_m == 9 && end_d >=1  && end_d <= 7  )  || ((start_m < 9 && end_m > 9) || start_m <  9 && end_m   >=  9   && end_d    > 7   )                                                                                               ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 9 && start_d >= 8  && start_d <= 14 ) || (end_m == 9 && end_d >=8  && end_d <= 14 )  || ((start_m < 9 && end_m > 9) || start_m == 9 && end_m   >   9   && start_d  < 14  || start_m == 9 && start_d <  7 && end_d > 14   || start_m < 9 && end_m == 9 && end_d > 14)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 9 && start_d >= 15 && start_d <= 21 ) || (end_m == 9 && end_d >=15 && end_d <= 21 )  || ((start_m < 9 && end_m > 9) || start_m == 9 && end_m   >   9   && start_d  < 21  || start_m == 9 && start_d < 14 && end_d > 21   || start_m < 9 && end_m == 9 && end_d > 21)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 9 && start_d >= 22 && start_d <= 31 ) || (end_m == 9 && end_d >=22 && end_d <= 31 )  || ((start_m < 9 && end_m > 9) || start_m == 9 && end_m   >   9   && start_d  < 31  )                                                                                               ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>`;
                            html += `</tr>`;
                        }

                        // Parcial
                        if (content.typeContent == 6) {
                          let startD = new Date(content.startDate);
                          let start_m = startD.getMonth() + 1;
                          let start_d = startD.getDate();

                          let endD = new Date(content.endDate);
                          let end_m = endD.getMonth() + 1;
                          let end_d = endD.getDate();
                            html += `
                                <tr>
                                    <td class="fondo-foro">${content.content}</td>
                                    <td class="fondo-blanco">${content.startDate}</td>
                                    <td class="fondo-blanco">7</td>
                                    <td class="fondo-blanco">${content.endDate}</td>
                                    <td class="${(start_m == 4 && start_d >= 1  && start_d <= 7  ) || (end_m == 4 && end_d >=1  && end_d <= 7  )  || ((start_m < 4 && end_m > 4) || start_m <  4 && end_m   >=  4   && end_d    > 7 )                                                                                                 ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 4 && start_d >= 8  && start_d <= 14 ) || (end_m == 4 && end_d >=8  && end_d <= 14 )  || ((start_m < 4 && end_m > 4) || start_m == 4 && end_m   >   4   && start_d  < 14  || start_m == 4 && start_d <  7 && end_d > 14   || start_m < 4 && end_m == 4 && end_d > 14)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 4 && start_d >= 15 && start_d <= 21 ) || (end_m == 4 && end_d >=15 && end_d <= 21 )  || ((start_m < 4 && end_m > 4) || start_m == 4 && end_m   >   4   && start_d  < 21  || start_m == 4 && start_d < 14 && end_d > 21   || start_m < 4 && end_m == 4 && end_d > 21)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 4 && start_d >= 22 && start_d <= 31 ) || (end_m == 4 && end_d >=22 && end_d <= 31 )  || ((start_m < 4 && end_m > 4) || start_m == 4 && end_m   >   4   && start_d  < 31  )                                                                                               ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 5 && start_d >= 1  && start_d <= 7  ) || (end_m == 5 && end_d >=1  && end_d <= 7  )  || ((start_m < 5 && end_m > 5) || start_m <  5 && end_m   >=  5   && end_d    > 7   )                                                                                               ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 5 && start_d >= 8  && start_d <= 14 ) || (end_m == 5 && end_d >=8  && end_d <= 14 )  || ((start_m < 5 && end_m > 5) || start_m == 5 && end_m   >   5   && start_d  < 14  || start_m == 5 && start_d <  7 && end_d > 14   || start_m < 5 && end_m == 5 && end_d > 14)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 5 && start_d >= 15 && start_d <= 21 ) || (end_m == 5 && end_d >=15 && end_d <= 21 )  || ((start_m < 5 && end_m > 5) || start_m == 5 && end_m   >   5   && start_d  < 21  || start_m == 5 && start_d < 14 && end_d > 21   || start_m < 5 && end_m == 5 && end_d > 21)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 5 && start_d >= 22 && start_d <= 31 ) || (end_m == 5 && end_d >=22 && end_d <= 31 )  || ((start_m < 5 && end_m > 5) || start_m == 5 && end_m   >   5   && start_d  < 31  )                                                                                               ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 6 && start_d >= 1  && start_d <= 7  ) || (end_m == 6 && end_d >=1  && end_d <= 7  )  || ((start_m < 6 && end_m > 6) || start_m <  6 && end_m   >=  6   && end_d    > 7   )                                                                                               ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 6 && start_d >= 8  && start_d <= 14 ) || (end_m == 6 && end_d >=8  && end_d <= 14 )  || ((start_m < 6 && end_m > 6) || start_m == 6 && end_m   >   6   && start_d  < 14  || start_m == 6 && start_d <  7 && end_d > 14   || start_m < 6 && end_m == 6 && end_d > 14)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 6 && start_d >= 15 && start_d <= 21 ) || (end_m == 6 && end_d >=15 && end_d <= 21 )  || ((start_m < 6 && end_m > 6) || start_m == 6 && end_m   >   6   && start_d  < 21  || start_m == 6 && start_d < 14 && end_d > 21   || start_m < 6 && end_m == 6 && end_d > 21)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 6 && start_d >= 22 && start_d <= 31 ) || (end_m == 6 && end_d >=22 && end_d <= 31 )  || ((start_m < 6 && end_m > 6) || start_m == 6 && end_m   >   6   && start_d  < 31  )                                                                                               ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 7 && start_d >= 1  && start_d <= 7  ) || (end_m == 7 && end_d >=1  && end_d <= 7  )  || ((start_m < 7 && end_m > 7) || start_m <  7 && end_m   >=  7   && end_d    > 7   )                                                                                               ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 7 && start_d >= 8  && start_d <= 14 ) || (end_m == 7 && end_d >=8  && end_d <= 14 )  || ((start_m < 7 && end_m > 7) || start_m == 7 && end_m   >   7   && start_d  < 14  || start_m == 7 && start_d <  7 && end_d > 14   || start_m < 7 && end_m == 7 && end_d > 14)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 7 && start_d >= 15 && start_d <= 21 ) || (end_m == 7 && end_d >=15 && end_d <= 21 )  || ((start_m < 7 && end_m > 7) || start_m == 7 && end_m   >   7   && start_d  < 21  || start_m == 7 && start_d < 14 && end_d > 21   || start_m < 7 && end_m == 7 && end_d > 21)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 7 && start_d >= 22 && start_d <= 31 ) || (end_m == 7 && end_d >=22 && end_d <= 31 )  || ((start_m < 7 && end_m > 7) || start_m == 7 && end_m   >   7   && start_d  < 31  )                                                                                               ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 8 && start_d >= 1  && start_d <= 7  ) || (end_m == 8 && end_d >=1  && end_d <= 7  )  || ((start_m < 8 && end_m > 8) || start_m <  8 && end_m   >=  8   && end_d    > 7   )                                                                                               ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 8 && start_d >= 8  && start_d <= 14 ) || (end_m == 8 && end_d >=8  && end_d <= 14 )  || ((start_m < 8 && end_m > 8) || start_m == 8 && end_m   >   8   && start_d  < 14  || start_m == 8 && start_d <  7 && end_d > 14   || start_m < 8 && end_m == 8 && end_d > 14)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 8 && start_d >= 15 && start_d <= 21 ) || (end_m == 8 && end_d >=15 && end_d <= 21 )  || ((start_m < 8 && end_m > 8) || start_m == 8 && end_m   >   8   && start_d  < 21  || start_m == 8 && start_d < 14 && end_d > 21   || start_m < 8 && end_m == 8 && end_d > 21)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 8 && start_d >= 22 && start_d <= 31 ) || (end_m == 8 && end_d >=22 && end_d <= 31 )  || ((start_m < 8 && end_m > 8) || start_m == 8 && end_m   >   8   && start_d  < 31  )                                                                                               ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 9 && start_d >= 1  && start_d <= 7  ) || (end_m == 9 && end_d >=1  && end_d <= 7  )  || ((start_m < 9 && end_m > 9) || start_m <  9 && end_m   >=  9   && end_d    > 7   )                                                                                               ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 9 && start_d >= 8  && start_d <= 14 ) || (end_m == 9 && end_d >=8  && end_d <= 14 )  || ((start_m < 9 && end_m > 9) || start_m == 9 && end_m   >   9   && start_d  < 14  || start_m == 9 && start_d <  7 && end_d > 14   || start_m < 9 && end_m == 9 && end_d > 14)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 9 && start_d >= 15 && start_d <= 21 ) || (end_m == 9 && end_d >=15 && end_d <= 21 )  || ((start_m < 9 && end_m > 9) || start_m == 9 && end_m   >   9   && start_d  < 21  || start_m == 9 && start_d < 14 && end_d > 21   || start_m < 9 && end_m == 9 && end_d > 21)     ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>
                                    <td class="${(start_m == 9 && start_d >= 22 && start_d <= 31 ) || (end_m == 9 && end_d >=22 && end_d <= 31 )  || ((start_m < 9 && end_m > 9) || start_m == 9 && end_m   >   9   && start_d  < 31  )                                                                                               ? 'marcado' : 'fondo-blanco'}">&nbsp;</td>`;
                            html += `</tr>`;
                        }
                    });
                }
            });
        html += `
        </table>    
    </body>
</html>`;
    return html;
  };

  const handleExportHTML = () => {
    const htmlContent = generateHTML();
    console.log(htmlContent);

    // Crear un blob con el HTML generado
    const blob = new Blob([htmlContent], { type: 'text/html' });

    // Crear una URL de objeto para el blob
    const url = URL.createObjectURL(blob);

    // Crear un enlace para la descarga
    const a = document.createElement('a');
    a.href = url;
    a.download = 'cronograma.html';
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <>
      <button
        onClick={handleExportHTML}
        className="bg-slate-500 text-white p-2 ml-4 rounded-md"
      >
        Cronograma
        <i className="bi bi-file-earmark-code-fill"></i>
      </button>
    </>
  );
}