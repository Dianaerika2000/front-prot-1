import useSectionStore from "../hook/useStore";

export default function ButtonCronogramaGenerator() {
    const sections = useSectionStore((state) => state.sections);
    // Función para generar el HTML de la tabla
    const generateHTML = () => {
        const tableStyle        = 'font-family: Calibri; border: 1px solid #000000; width: 100%; border-spacing: 0px; border-collapse: collapse;';
        const tdStyle           = 'border: 1px solid #000000;';

        const contentStyle      = ' background-color: #ffffff; width: 200px; color: black; text-align: center; margin: auto;';
        const encabezadoStyle   = 'border: 1px solid #000000; background-color: #002060; color: white; text-align: center; margin: auto; font-weight: bold; ';
        const foroStyle         = 'background-color: #F2E500; width: 200px; color: black; text-align: center; margin: auto; font-weight: bold;';
        const examenStyle       = 'background-color: #FF0000; width: 200px; color: black; text-align: center; margin: auto; font-weight: bold;';
        const marcadoStyle      = 'border: 1px solid #000000; background-color: #e8ab51;';
        const normalStyle       = 'border: 1px solid #000000; background-color: white;';
        const numberStyle       = 'border: 1px solid #000000; background-color: #002060; width: 200px; color: white; text-align: center; margin: auto; font-weight: bold;';
        const sectionStyle      = 'border: 1px solid #000000; background-color: #002060; width: 200px; color: white; text-align: center; margin: auto; font-weight: bold;';
        const videoConfStyle    = 'background-color: #ffff00; width: 200px; color: black; text-align: center; margin: auto; font-weight: bold;';
        const retoStyle         = 'background-color: #f8cbad; width: 200px; color: black; text-align: center; margin: auto; font-weight: bold;';

        let html = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
    <body>
        <table style="${tableStyle}">     
            <tr>
                <td style="${encabezadoStyle} width: 10%;" rowspan="2">ACTIVIDAD</td>
                <td style="${encabezadoStyle} width: 10%;" rowspan="2">FECHA DE INICIO</td>
                <td style="${encabezadoStyle} width: 5%; " rowspan="2">DÍAS</td>
                <td style="${encabezadoStyle} width: 10%;" rowspan="2">FECHA DE FINALIZACIÓN</td>
                <td style="${encabezadoStyle} width: 8%; " colspan="4">MARZO</td>            
                <td style="${encabezadoStyle} width: 8%; " colspan="4">ABRIL</td>            
                <td style="${encabezadoStyle} width: 8%; " colspan="4">MAYO</td>            
                <td style="${encabezadoStyle} width: 8%; " colspan="4">JUNIO</td> 
                <td style="${encabezadoStyle} width: 8%; " colspan="4">JULIO</td> 
                <td style="${encabezadoStyle} width: 8%; " colspan="4">AGOSTO</td> 
                <td style="${encabezadoStyle} width: 8%; " colspan="4">SEPTIEMBRE</td>
            </tr>
            <tr>`;
        // Agregar columnas de los días
        for (let i = 1; i <= 28; i++) {
            html += `<td style="${numberStyle}">${i}</td>`;
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
                                    <td style="${sectionStyle}">${section.title}</td>
                                    <td style="${tdStyle} ${contentStyle}">${section.contents[0].startDate}</td>
                                    <td style="${tdStyle} ${contentStyle}">7</td>
                                    <td style="${tdStyle} ${contentStyle}">${section.contents[0].endDate}</td>
                                    
                                    <td style="${tdStyle} ${(start_m == 3 && start_d >= 1  && start_d <= 7  ) || (end_m == 3 && end_d >=1  && end_d <= 7  )  || ((start_m < 3 && end_m > 3) || start_m <  3 && end_m   >=  3   && end_d    > 7 )                                                                                                 ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 3 && start_d >= 8  && start_d <= 14 ) || (end_m == 3 && end_d >=8  && end_d <= 14 )  || ((start_m < 3 && end_m > 3) || start_m == 3 && end_m   >   3   && start_d  < 14  || start_m == 3 && start_d <  7 && end_d > 14   || start_m < 4 && end_m == 3 && end_d > 14 || start_m == 3 && start_d <= 8 && end_d > 14 )     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 3 && start_d >= 15 && start_d <= 21 ) || (end_m == 3 && end_d >=15 && end_d <= 21 )  || ((start_m < 3 && end_m > 3) || start_m == 3 && end_m   >   3   && start_d  < 21  || start_m == 3 && start_d < 14 && end_d > 21   || start_m < 4 && end_m == 3 && end_d > 21)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 3 && start_d >= 22 && start_d <= 31 ) || (end_m == 3 && end_d >=22 && end_d <= 31 )  || ((start_m < 3 && end_m > 3) || start_m == 3 && end_m   >   3   && start_d  < 31  )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 4 && start_d >= 1  && start_d <= 7  ) || (end_m == 4 && end_d >=1  && end_d <= 7  )  || ((start_m < 4 && end_m > 4) || start_m <  4 && end_m   >=  4   && end_d    > 7 )                                                                                                 ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 4 && start_d >= 8  && start_d <= 14 ) || (end_m == 4 && end_d >=8  && end_d <= 14 )  || ((start_m < 4 && end_m > 4) || start_m == 4 && end_m   >   4   && start_d  < 14  || start_m == 4 && start_d <  7 && end_d > 14   || start_m < 4 && end_m == 4 && end_d > 14)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 4 && start_d >= 15 && start_d <= 21 ) || (end_m == 4 && end_d >=15 && end_d <= 21 )  || ((start_m < 4 && end_m > 4) || start_m == 4 && end_m   >   4   && start_d  < 21  || start_m == 4 && start_d < 14 && end_d > 21   || start_m < 4 && end_m == 4 && end_d > 21)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 4 && start_d >= 22 && start_d <= 31 ) || (end_m == 4 && end_d >=22 && end_d <= 31 )  || ((start_m < 4 && end_m > 4) || start_m == 4 && end_m   >   4   && start_d  < 31  )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 5 && start_d >= 1  && start_d <= 7  ) || (end_m == 5 && end_d >=1  && end_d <= 7  )  || ((start_m < 5 && end_m > 5) || start_m <  5 && end_m   >=  5   && end_d    > 7   )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 5 && start_d >= 8  && start_d <= 14 ) || (end_m == 5 && end_d >=8  && end_d <= 14 )  || ((start_m < 5 && end_m > 5) || start_m == 5 && end_m   >   5   && start_d  < 14  || start_m == 5 && start_d <  7 && end_d > 14   || start_m < 5 && end_m == 5 && end_d > 14)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 5 && start_d >= 15 && start_d <= 21 ) || (end_m == 5 && end_d >=15 && end_d <= 21 )  || ((start_m < 5 && end_m > 5) || start_m == 5 && end_m   >   5   && start_d  < 21  || start_m == 5 && start_d < 14 && end_d > 21   || start_m < 5 && end_m == 5 && end_d > 21)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 5 && start_d >= 22 && start_d <= 31 ) || (end_m == 5 && end_d >=22 && end_d <= 31 )  || ((start_m < 5 && end_m > 5) || start_m == 5 && end_m   >   5   && start_d  < 31  )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 6 && start_d >= 1  && start_d <= 7  ) || (end_m == 6 && end_d >=1  && end_d <= 7  )  || ((start_m < 6 && end_m > 6) || start_m <  6 && end_m   >=  6   && end_d    > 7   )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 6 && start_d >= 8  && start_d <= 14 ) || (end_m == 6 && end_d >=8  && end_d <= 14 )  || ((start_m < 6 && end_m > 6) || start_m == 6 && end_m   >   6   && start_d  < 14  || start_m == 6 && start_d <  7 && end_d > 14   || start_m < 6 && end_m == 6 && end_d > 14)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 6 && start_d >= 15 && start_d <= 21 ) || (end_m == 6 && end_d >=15 && end_d <= 21 )  || ((start_m < 6 && end_m > 6) || start_m == 6 && end_m   >   6   && start_d  < 21  || start_m == 6 && start_d < 14 && end_d > 21   || start_m < 6 && end_m == 6 && end_d > 21)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 6 && start_d >= 22 && start_d <= 31 ) || (end_m == 6 && end_d >=22 && end_d <= 31 )  || ((start_m < 6 && end_m > 6) || start_m == 6 && end_m   >   6   && start_d  < 31  )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 7 && start_d >= 1  && start_d <= 7  ) || (end_m == 7 && end_d >=1  && end_d <= 7  )  || ((start_m < 7 && end_m > 7) || start_m <  7 && end_m   >=  7   && end_d    > 7   )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 7 && start_d >= 8  && start_d <= 14 ) || (end_m == 7 && end_d >=8  && end_d <= 14 )  || ((start_m < 7 && end_m > 7) || start_m == 7 && end_m   >   7   && start_d  < 14  || start_m == 7 && start_d <  7 && end_d > 14   || start_m < 7 && end_m == 7 && end_d > 14)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 7 && start_d >= 15 && start_d <= 21 ) || (end_m == 7 && end_d >=15 && end_d <= 21 )  || ((start_m < 7 && end_m > 7) || start_m == 7 && end_m   >   7   && start_d  < 21  || start_m == 7 && start_d < 14 && end_d > 21   || start_m < 7 && end_m == 7 && end_d > 21)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 7 && start_d >= 22 && start_d <= 31 ) || (end_m == 7 && end_d >=22 && end_d <= 31 )  || ((start_m < 7 && end_m > 7) || start_m == 7 && end_m   >   7   && start_d  < 31  )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 8 && start_d >= 1  && start_d <= 7  ) || (end_m == 8 && end_d >=1  && end_d <= 7  )  || ((start_m < 8 && end_m > 8) || start_m <  8 && end_m   >=  8   && end_d    > 7   )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 8 && start_d >= 8  && start_d <= 14 ) || (end_m == 8 && end_d >=8  && end_d <= 14 )  || ((start_m < 8 && end_m > 8) || start_m == 8 && end_m   >   8   && start_d  < 14  || start_m == 8 && start_d <  7 && end_d > 14   || start_m < 8 && end_m == 8 && end_d > 14)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 8 && start_d >= 15 && start_d <= 21 ) || (end_m == 8 && end_d >=15 && end_d <= 21 )  || ((start_m < 8 && end_m > 8) || start_m == 8 && end_m   >   8   && start_d  < 21  || start_m == 8 && start_d < 14 && end_d > 21   || start_m < 8 && end_m == 8 && end_d > 21)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 8 && start_d >= 22 && start_d <= 31 ) || (end_m == 8 && end_d >=22 && end_d <= 31 )  || ((start_m < 8 && end_m > 8) || start_m == 8 && end_m   >   8   && start_d  < 31  )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 9 && start_d >= 1  && start_d <= 7  ) || (end_m == 9 && end_d >=1  && end_d <= 7  )  || ((start_m < 9 && end_m > 9) || start_m <  9 && end_m   >=  9   && end_d    > 7   )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 9 && start_d >= 8  && start_d <= 14 ) || (end_m == 9 && end_d >=8  && end_d <= 14 )  || ((start_m < 9 && end_m > 9) || start_m == 9 && end_m   >   9   && start_d  < 14  || start_m == 9 && start_d <  7 && end_d > 14   || start_m < 9 && end_m == 9 && end_d > 14)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 9 && start_d >= 15 && start_d <= 21 ) || (end_m == 9 && end_d >=15 && end_d <= 21 )  || ((start_m < 9 && end_m > 9) || start_m == 9 && end_m   >   9   && start_d  < 21  || start_m == 9 && start_d < 14 && end_d > 21   || start_m < 9 && end_m == 9 && end_d > 21)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 9 && start_d >= 22 && start_d <= 31 ) || (end_m == 9 && end_d >=22 && end_d <= 31 )  || ((start_m < 9 && end_m > 9) || start_m == 9 && end_m   >   9   && start_d  < 31  )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>`;

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
                                    <td style="${tdStyle} ${videoConfStyle}">${content.content}</td>
                                    <td style="${tdStyle} ${contentStyle}">${content.startDate}</td>
                                    <td style="${tdStyle} ${contentStyle}">7</td>
                                    <td style="${tdStyle} ${contentStyle}">${content.endDate}</td>                                    
                                    <td style="${tdStyle} ${(start_m == 3 && start_d >= 1  && start_d <= 7  ) || (end_m == 3 && end_d >=1  && end_d <= 7  )  || ((start_m < 3 && end_m > 3) || start_m <  3 && end_m   >=  3   && end_d    > 7 )                                                                                                 ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 3 && start_d >= 8  && start_d <= 14 ) || (end_m == 3 && end_d >=8  && end_d <= 14 )  || ((start_m < 3 && end_m > 3) || start_m == 3 && end_m   >   3   && start_d  < 14  || start_m == 3 && start_d <  7 && end_d > 14   || start_m < 4 && end_m == 3 && end_d > 14 || start_m == 3 && start_d <= 8 && end_d > 14 )     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 3 && start_d >= 15 && start_d <= 21 ) || (end_m == 3 && end_d >=15 && end_d <= 21 )  || ((start_m < 3 && end_m > 3) || start_m == 3 && end_m   >   3   && start_d  < 21  || start_m == 3 && start_d < 14 && end_d > 21   || start_m < 4 && end_m == 3 && end_d > 21)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 3 && start_d >= 22 && start_d <= 31 ) || (end_m == 3 && end_d >=22 && end_d <= 31 )  || ((start_m < 3 && end_m > 3) || start_m == 3 && end_m   >   3   && start_d  < 31  )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 4 && start_d >= 1  && start_d <= 7  ) || (end_m == 4 && end_d >=1  && end_d <= 7  )  || ((start_m < 4 && end_m > 4) || start_m <  4 && end_m   >=  4   && end_d    > 7 )                                                                                                 ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 4 && start_d >= 8  && start_d <= 14 ) || (end_m == 4 && end_d >=8  && end_d <= 14 )  || ((start_m < 4 && end_m > 4) || start_m == 4 && end_m   >   4   && start_d  < 14  || start_m == 4 && start_d <  7 && end_d > 14   || start_m < 4 && end_m == 4 && end_d > 14)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 4 && start_d >= 15 && start_d <= 21 ) || (end_m == 4 && end_d >=15 && end_d <= 21 )  || ((start_m < 4 && end_m > 4) || start_m == 4 && end_m   >   4   && start_d  < 21  || start_m == 4 && start_d < 14 && end_d > 21   || start_m < 4 && end_m == 4 && end_d > 21)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 4 && start_d >= 22 && start_d <= 31 ) || (end_m == 4 && end_d >=22 && end_d <= 31 )  || ((start_m < 4 && end_m > 4) || start_m == 4 && end_m   >   4   && start_d  < 31  )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 5 && start_d >= 1  && start_d <= 7  ) || (end_m == 5 && end_d >=1  && end_d <= 7  )  || ((start_m < 5 && end_m > 5) || start_m <  5 && end_m   >=  5   && end_d    > 7   )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 5 && start_d >= 8  && start_d <= 14 ) || (end_m == 5 && end_d >=8  && end_d <= 14 )  || ((start_m < 5 && end_m > 5) || start_m == 5 && end_m   >   5   && start_d  < 14  || start_m == 5 && start_d <  7 && end_d > 14   || start_m < 5 && end_m == 5 && end_d > 14)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 5 && start_d >= 15 && start_d <= 21 ) || (end_m == 5 && end_d >=15 && end_d <= 21 )  || ((start_m < 5 && end_m > 5) || start_m == 5 && end_m   >   5   && start_d  < 21  || start_m == 5 && start_d < 14 && end_d > 21   || start_m < 5 && end_m == 5 && end_d > 21)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 5 && start_d >= 22 && start_d <= 31 ) || (end_m == 5 && end_d >=22 && end_d <= 31 )  || ((start_m < 5 && end_m > 5) || start_m == 5 && end_m   >   5   && start_d  < 31  )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 6 && start_d >= 1  && start_d <= 7  ) || (end_m == 6 && end_d >=1  && end_d <= 7  )  || ((start_m < 6 && end_m > 6) || start_m <  6 && end_m   >=  6   && end_d    > 7   )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 6 && start_d >= 8  && start_d <= 14 ) || (end_m == 6 && end_d >=8  && end_d <= 14 )  || ((start_m < 6 && end_m > 6) || start_m == 6 && end_m   >   6   && start_d  < 14  || start_m == 6 && start_d <  7 && end_d > 14   || start_m < 6 && end_m == 6 && end_d > 14)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 6 && start_d >= 15 && start_d <= 21 ) || (end_m == 6 && end_d >=15 && end_d <= 21 )  || ((start_m < 6 && end_m > 6) || start_m == 6 && end_m   >   6   && start_d  < 21  || start_m == 6 && start_d < 14 && end_d > 21   || start_m < 6 && end_m == 6 && end_d > 21)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 6 && start_d >= 22 && start_d <= 31 ) || (end_m == 6 && end_d >=22 && end_d <= 31 )  || ((start_m < 6 && end_m > 6) || start_m == 6 && end_m   >   6   && start_d  < 31  )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 7 && start_d >= 1  && start_d <= 7  ) || (end_m == 7 && end_d >=1  && end_d <= 7  )  || ((start_m < 7 && end_m > 7) || start_m <  7 && end_m   >=  7   && end_d    > 7   )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 7 && start_d >= 8  && start_d <= 14 ) || (end_m == 7 && end_d >=8  && end_d <= 14 )  || ((start_m < 7 && end_m > 7) || start_m == 7 && end_m   >   7   && start_d  < 14  || start_m == 7 && start_d <  7 && end_d > 14   || start_m < 7 && end_m == 7 && end_d > 14)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 7 && start_d >= 15 && start_d <= 21 ) || (end_m == 7 && end_d >=15 && end_d <= 21 )  || ((start_m < 7 && end_m > 7) || start_m == 7 && end_m   >   7   && start_d  < 21  || start_m == 7 && start_d < 14 && end_d > 21   || start_m < 7 && end_m == 7 && end_d > 21)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 7 && start_d >= 22 && start_d <= 31 ) || (end_m == 7 && end_d >=22 && end_d <= 31 )  || ((start_m < 7 && end_m > 7) || start_m == 7 && end_m   >   7   && start_d  < 31  )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 8 && start_d >= 1  && start_d <= 7  ) || (end_m == 8 && end_d >=1  && end_d <= 7  )  || ((start_m < 8 && end_m > 8) || start_m <  8 && end_m   >=  8   && end_d    > 7   )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 8 && start_d >= 8  && start_d <= 14 ) || (end_m == 8 && end_d >=8  && end_d <= 14 )  || ((start_m < 8 && end_m > 8) || start_m == 8 && end_m   >   8   && start_d  < 14  || start_m == 8 && start_d <  7 && end_d > 14   || start_m < 8 && end_m == 8 && end_d > 14)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 8 && start_d >= 15 && start_d <= 21 ) || (end_m == 8 && end_d >=15 && end_d <= 21 )  || ((start_m < 8 && end_m > 8) || start_m == 8 && end_m   >   8   && start_d  < 21  || start_m == 8 && start_d < 14 && end_d > 21   || start_m < 8 && end_m == 8 && end_d > 21)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 8 && start_d >= 22 && start_d <= 31 ) || (end_m == 8 && end_d >=22 && end_d <= 31 )  || ((start_m < 8 && end_m > 8) || start_m == 8 && end_m   >   8   && start_d  < 31  )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 9 && start_d >= 1  && start_d <= 7  ) || (end_m == 9 && end_d >=1  && end_d <= 7  )  || ((start_m < 9 && end_m > 9) || start_m <  9 && end_m   >=  9   && end_d    > 7   )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 9 && start_d >= 8  && start_d <= 14 ) || (end_m == 9 && end_d >=8  && end_d <= 14 )  || ((start_m < 9 && end_m > 9) || start_m == 9 && end_m   >   9   && start_d  < 14  || start_m == 9 && start_d <  7 && end_d > 14   || start_m < 9 && end_m == 9 && end_d > 14)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 9 && start_d >= 15 && start_d <= 21 ) || (end_m == 9 && end_d >=15 && end_d <= 21 )  || ((start_m < 9 && end_m > 9) || start_m == 9 && end_m   >   9   && start_d  < 21  || start_m == 9 && start_d < 14 && end_d > 21   || start_m < 9 && end_m == 9 && end_d > 21)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 9 && start_d >= 22 && start_d <= 31 ) || (end_m == 9 && end_d >=22 && end_d <= 31 )  || ((start_m < 9 && end_m > 9) || start_m == 9 && end_m   >   9   && start_d  < 31  )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>`;
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
                                    <td style="${tdStyle} ${retoStyle}">${content.content}</td>
                                    <td style="${tdStyle} ${contentStyle}">${content.startDate}</td>
                                    <td style="${tdStyle} ${contentStyle}">7</td>
                                    <td style="${tdStyle} ${contentStyle}">${content.endDate}</td>
                                    <td style="${tdStyle} ${(start_m == 3 && start_d >= 1  && start_d <= 7  ) || (end_m == 3 && end_d >=1  && end_d <= 7  )  || ((start_m < 3 && end_m > 3) || start_m <  3 && end_m   >=  3   && end_d    > 7 )                                                                                                 ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 3 && start_d >= 8  && start_d <= 14 ) || (end_m == 3 && end_d >=8  && end_d <= 14 )  || ((start_m < 3 && end_m > 3) || start_m == 3 && end_m   >   3   && start_d  < 14  || start_m == 3 && start_d <  7 && end_d > 14   || start_m < 4 && end_m == 3 && end_d > 14 || start_m == 3 && start_d <= 8 && end_d > 14 )     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 3 && start_d >= 15 && start_d <= 21 ) || (end_m == 3 && end_d >=15 && end_d <= 21 )  || ((start_m < 3 && end_m > 3) || start_m == 3 && end_m   >   3   && start_d  < 21  || start_m == 3 && start_d < 14 && end_d > 21   || start_m < 4 && end_m == 3 && end_d > 21)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 3 && start_d >= 22 && start_d <= 31 ) || (end_m == 3 && end_d >=22 && end_d <= 31 )  || ((start_m < 3 && end_m > 3) || start_m == 3 && end_m   >   3   && start_d  < 31  )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 4 && start_d >= 1  && start_d <= 7  ) || (end_m == 4 && end_d >=1  && end_d <= 7  )  || ((start_m < 4 && end_m > 4) || start_m <  4 && end_m   >=  4   && end_d    > 7 )                                                                                                 ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 4 && start_d >= 8  && start_d <= 14 ) || (end_m == 4 && end_d >=8  && end_d <= 14 )  || ((start_m < 4 && end_m > 4) || start_m == 4 && end_m   >   4   && start_d  < 14  || start_m == 4 && start_d <  7 && end_d > 14   || start_m < 4 && end_m == 4 && end_d > 14 || start_m == 4 && start_d <= 8 && end_d > 14 )     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 4 && start_d >= 15 && start_d <= 21 ) || (end_m == 4 && end_d >=15 && end_d <= 21 )  || ((start_m < 4 && end_m > 4) || start_m == 4 && end_m   >   4   && start_d  < 21  || start_m == 4 && start_d < 14 && end_d > 21   || start_m < 4 && end_m == 4 && end_d > 21)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 4 && start_d >= 22 && start_d <= 31 ) || (end_m == 4 && end_d >=22 && end_d <= 31 )  || ((start_m < 4 && end_m > 4) || start_m == 4 && end_m   >   4   && start_d  < 31  )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 5 && start_d >= 1  && start_d <= 7  ) || (end_m == 5 && end_d >=1  && end_d <= 7  )  || ((start_m < 5 && end_m > 5) || start_m <  5 && end_m   >=  5   && end_d    > 7   )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 5 && start_d >= 8  && start_d <= 14 ) || (end_m == 5 && end_d >=8  && end_d <= 14 )  || ((start_m < 5 && end_m > 5) || start_m == 5 && end_m   >   5   && start_d  < 14  || start_m == 5 && start_d <  7 && end_d > 14   || start_m < 5 && end_m == 5 && end_d > 14)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 5 && start_d >= 15 && start_d <= 21 ) || (end_m == 5 && end_d >=15 && end_d <= 21 )  || ((start_m < 5 && end_m > 5) || start_m == 5 && end_m   >   5   && start_d  < 21  || start_m == 5 && start_d < 14 && end_d > 21   || start_m < 5 && end_m == 5 && end_d > 21)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 5 && start_d >= 22 && start_d <= 31 ) || (end_m == 5 && end_d >=22 && end_d <= 31 )  || ((start_m < 5 && end_m > 5) || start_m == 5 && end_m   >   5   && start_d  < 31  )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 6 && start_d >= 1  && start_d <= 7  ) || (end_m == 6 && end_d >=1  && end_d <= 7  )  || ((start_m < 6 && end_m > 6) || start_m <  6 && end_m   >=  6   && end_d    > 7   )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 6 && start_d >= 8  && start_d <= 14 ) || (end_m == 6 && end_d >=8  && end_d <= 14 )  || ((start_m < 6 && end_m > 6) || start_m == 6 && end_m   >   6   && start_d  < 14  || start_m == 6 && start_d <  7 && end_d > 14   || start_m < 6 && end_m == 6 && end_d > 14)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 6 && start_d >= 15 && start_d <= 21 ) || (end_m == 6 && end_d >=15 && end_d <= 21 )  || ((start_m < 6 && end_m > 6) || start_m == 6 && end_m   >   6   && start_d  < 21  || start_m == 6 && start_d < 14 && end_d > 21   || start_m < 6 && end_m == 6 && end_d > 21)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 6 && start_d >= 22 && start_d <= 31 ) || (end_m == 6 && end_d >=22 && end_d <= 31 )  || ((start_m < 6 && end_m > 6) || start_m == 6 && end_m   >   6   && start_d  < 31  )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 7 && start_d >= 1  && start_d <= 7  ) || (end_m == 7 && end_d >=1  && end_d <= 7  )  || ((start_m < 7 && end_m > 7) || start_m <  7 && end_m   >=  7   && end_d    > 7   )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 7 && start_d >= 8  && start_d <= 14 ) || (end_m == 7 && end_d >=8  && end_d <= 14 )  || ((start_m < 7 && end_m > 7) || start_m == 7 && end_m   >   7   && start_d  < 14  || start_m == 7 && start_d <  7 && end_d > 14   || start_m < 7 && end_m == 7 && end_d > 14)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 7 && start_d >= 15 && start_d <= 21 ) || (end_m == 7 && end_d >=15 && end_d <= 21 )  || ((start_m < 7 && end_m > 7) || start_m == 7 && end_m   >   7   && start_d  < 21  || start_m == 7 && start_d < 14 && end_d > 21   || start_m < 7 && end_m == 7 && end_d > 21)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 7 && start_d >= 22 && start_d <= 31 ) || (end_m == 7 && end_d >=22 && end_d <= 31 )  || ((start_m < 7 && end_m > 7) || start_m == 7 && end_m   >   7   && start_d  < 31  )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 8 && start_d >= 1  && start_d <= 7  ) || (end_m == 8 && end_d >=1  && end_d <= 7  )  || ((start_m < 8 && end_m > 8) || start_m <  8 && end_m   >=  8   && end_d    > 7   )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 8 && start_d >= 8  && start_d <= 14 ) || (end_m == 8 && end_d >=8  && end_d <= 14 )  || ((start_m < 8 && end_m > 8) || start_m == 8 && end_m   >   8   && start_d  < 14  || start_m == 8 && start_d <  7 && end_d > 14   || start_m < 8 && end_m == 8 && end_d > 14)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 8 && start_d >= 15 && start_d <= 21 ) || (end_m == 8 && end_d >=15 && end_d <= 21 )  || ((start_m < 8 && end_m > 8) || start_m == 8 && end_m   >   8   && start_d  < 21  || start_m == 8 && start_d < 14 && end_d > 21   || start_m < 8 && end_m == 8 && end_d > 21)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 8 && start_d >= 22 && start_d <= 31 ) || (end_m == 8 && end_d >=22 && end_d <= 31 )  || ((start_m < 8 && end_m > 8) || start_m == 8 && end_m   >   8   && start_d  < 31  )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 9 && start_d >= 1  && start_d <= 7  ) || (end_m == 9 && end_d >=1  && end_d <= 7  )  || ((start_m < 9 && end_m > 9) || start_m <  9 && end_m   >=  9   && end_d    > 7   )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 9 && start_d >= 8  && start_d <= 14 ) || (end_m == 9 && end_d >=8  && end_d <= 14 )  || ((start_m < 9 && end_m > 9) || start_m == 9 && end_m   >   9   && start_d  < 14  || start_m == 9 && start_d <  7 && end_d > 14   || start_m < 9 && end_m == 9 && end_d > 14)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 9 && start_d >= 15 && start_d <= 21 ) || (end_m == 9 && end_d >=15 && end_d <= 21 )  || ((start_m < 9 && end_m > 9) || start_m == 9 && end_m   >   9   && start_d  < 21  || start_m == 9 && start_d < 14 && end_d > 21   || start_m < 9 && end_m == 9 && end_d > 21)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 9 && start_d >= 22 && start_d <= 31 ) || (end_m == 9 && end_d >=22 && end_d <= 31 )  || ((start_m < 9 && end_m > 9) || start_m == 9 && end_m   >   9   && start_d  < 31  )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>`;
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
                                    <td style="${tdStyle} ${foroStyle}">${content.content}</td>
                                    <td style="${tdStyle} ${contentStyle}">${content.startDate}</td>
                                    <td style="${tdStyle} ${contentStyle}">7</td>
                                    <td style="${tdStyle} ${contentStyle}">${content.endDate}</td>
                                    <td style="${tdStyle} ${(start_m == 3 && start_d >= 1  && start_d <= 7  ) || (end_m == 3 && end_d >=1  && end_d <= 7  )  || ((start_m < 3 && end_m > 3) || start_m <  3 && end_m   >=  3   && end_d    > 7 )                                                                                                 ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 3 && start_d >= 8  && start_d <= 14 ) || (end_m == 3 && end_d >=8  && end_d <= 14 )  || ((start_m < 3 && end_m > 3) || start_m == 3 && end_m   >   3   && start_d  < 14  || start_m == 3 && start_d <  7 && end_d > 14   || start_m < 4 && end_m == 3 && end_d > 14 || start_m == 3 && start_d <= 8 && end_d > 14 )     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 3 && start_d >= 15 && start_d <= 21 ) || (end_m == 3 && end_d >=15 && end_d <= 21 )  || ((start_m < 3 && end_m > 3) || start_m == 3 && end_m   >   3   && start_d  < 21  || start_m == 3 && start_d < 14 && end_d > 21   || start_m < 4 && end_m == 3 && end_d > 21)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 3 && start_d >= 22 && start_d <= 31 ) || (end_m == 3 && end_d >=22 && end_d <= 31 )  || ((start_m < 3 && end_m > 3) || start_m == 3 && end_m   >   3   && start_d  < 31  )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 4 && start_d >= 1  && start_d <= 7  ) || (end_m == 4 && end_d >=1  && end_d <= 7  )  || ((start_m < 4 && end_m > 4) || start_m <  4 && end_m   >=  4   && end_d    > 7 )                                                                                                 ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 4 && start_d >= 8  && start_d <= 14 ) || (end_m == 4 && end_d >=8  && end_d <= 14 )  || ((start_m < 4 && end_m > 4) || start_m == 4 && end_m   >   4   && start_d  < 14  || start_m == 4 && start_d <  7 && end_d > 14   || start_m < 4 && end_m == 4 && end_d > 14)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 4 && start_d >= 15 && start_d <= 21 ) || (end_m == 4 && end_d >=15 && end_d <= 21 )  || ((start_m < 4 && end_m > 4) || start_m == 4 && end_m   >   4   && start_d  < 21  || start_m == 4 && start_d < 14 && end_d > 21   || start_m < 4 && end_m == 4 && end_d > 21)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 4 && start_d >= 22 && start_d <= 31 ) || (end_m == 4 && end_d >=22 && end_d <= 31 )  || ((start_m < 4 && end_m > 4) || start_m == 4 && end_m   >   4   && start_d  < 31  )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 5 && start_d >= 1  && start_d <= 7  ) || (end_m == 5 && end_d >=1  && end_d <= 7  )  || ((start_m < 5 && end_m > 5) || start_m <  5 && end_m   >=  5   && end_d    > 7   )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 5 && start_d >= 8  && start_d <= 14 ) || (end_m == 5 && end_d >=8  && end_d <= 14 )  || ((start_m < 5 && end_m > 5) || start_m == 5 && end_m   >   5   && start_d  < 14  || start_m == 5 && start_d <  7 && end_d > 14   || start_m < 5 && end_m == 5 && end_d > 14)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 5 && start_d >= 15 && start_d <= 21 ) || (end_m == 5 && end_d >=15 && end_d <= 21 )  || ((start_m < 5 && end_m > 5) || start_m == 5 && end_m   >   5   && start_d  < 21  || start_m == 5 && start_d < 14 && end_d > 21   || start_m < 5 && end_m == 5 && end_d > 21)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 5 && start_d >= 22 && start_d <= 31 ) || (end_m == 5 && end_d >=22 && end_d <= 31 )  || ((start_m < 5 && end_m > 5) || start_m == 5 && end_m   >   5   && start_d  < 31  )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 6 && start_d >= 1  && start_d <= 7  ) || (end_m == 6 && end_d >=1  && end_d <= 7  )  || ((start_m < 6 && end_m > 6) || start_m <  6 && end_m   >=  6   && end_d    > 7   )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 6 && start_d >= 8  && start_d <= 14 ) || (end_m == 6 && end_d >=8  && end_d <= 14 )  || ((start_m < 6 && end_m > 6) || start_m == 6 && end_m   >   6   && start_d  < 14  || start_m == 6 && start_d <  7 && end_d > 14   || start_m < 6 && end_m == 6 && end_d > 14)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 6 && start_d >= 15 && start_d <= 21 ) || (end_m == 6 && end_d >=15 && end_d <= 21 )  || ((start_m < 6 && end_m > 6) || start_m == 6 && end_m   >   6   && start_d  < 21  || start_m == 6 && start_d < 14 && end_d > 21   || start_m < 6 && end_m == 6 && end_d > 21)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 6 && start_d >= 22 && start_d <= 31 ) || (end_m == 6 && end_d >=22 && end_d <= 31 )  || ((start_m < 6 && end_m > 6) || start_m == 6 && end_m   >   6   && start_d  < 31  )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 7 && start_d >= 1  && start_d <= 7  ) || (end_m == 7 && end_d >=1  && end_d <= 7  )  || ((start_m < 7 && end_m > 7) || start_m <  7 && end_m   >=  7   && end_d    > 7   )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 7 && start_d >= 8  && start_d <= 14 ) || (end_m == 7 && end_d >=8  && end_d <= 14 )  || ((start_m < 7 && end_m > 7) || start_m == 7 && end_m   >   7   && start_d  < 14  || start_m == 7 && start_d <  7 && end_d > 14   || start_m < 7 && end_m == 7 && end_d > 14)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 7 && start_d >= 15 && start_d <= 21 ) || (end_m == 7 && end_d >=15 && end_d <= 21 )  || ((start_m < 7 && end_m > 7) || start_m == 7 && end_m   >   7   && start_d  < 21  || start_m == 7 && start_d < 14 && end_d > 21   || start_m < 7 && end_m == 7 && end_d > 21)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 7 && start_d >= 22 && start_d <= 31 ) || (end_m == 7 && end_d >=22 && end_d <= 31 )  || ((start_m < 7 && end_m > 7) || start_m == 7 && end_m   >   7   && start_d  < 31  )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 8 && start_d >= 1  && start_d <= 7  ) || (end_m == 8 && end_d >=1  && end_d <= 7  )  || ((start_m < 8 && end_m > 8) || start_m <  8 && end_m   >=  8   && end_d    > 7   )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 8 && start_d >= 8  && start_d <= 14 ) || (end_m == 8 && end_d >=8  && end_d <= 14 )  || ((start_m < 8 && end_m > 8) || start_m == 8 && end_m   >   8   && start_d  < 14  || start_m == 8 && start_d <  7 && end_d > 14   || start_m < 8 && end_m == 8 && end_d > 14)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 8 && start_d >= 15 && start_d <= 21 ) || (end_m == 8 && end_d >=15 && end_d <= 21 )  || ((start_m < 8 && end_m > 8) || start_m == 8 && end_m   >   8   && start_d  < 21  || start_m == 8 && start_d < 14 && end_d > 21   || start_m < 8 && end_m == 8 && end_d > 21)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 8 && start_d >= 22 && start_d <= 31 ) || (end_m == 8 && end_d >=22 && end_d <= 31 )  || ((start_m < 8 && end_m > 8) || start_m == 8 && end_m   >   8   && start_d  < 31  )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 9 && start_d >= 1  && start_d <= 7  ) || (end_m == 9 && end_d >=1  && end_d <= 7  )  || ((start_m < 9 && end_m > 9) || start_m <  9 && end_m   >=  9   && end_d    > 7   )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 9 && start_d >= 8  && start_d <= 14 ) || (end_m == 9 && end_d >=8  && end_d <= 14 )  || ((start_m < 9 && end_m > 9) || start_m == 9 && end_m   >   9   && start_d  < 14  || start_m == 9 && start_d <  7 && end_d > 14   || start_m < 9 && end_m == 9 && end_d > 14)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 9 && start_d >= 15 && start_d <= 21 ) || (end_m == 9 && end_d >=15 && end_d <= 21 )  || ((start_m < 9 && end_m > 9) || start_m == 9 && end_m   >   9   && start_d  < 21  || start_m == 9 && start_d < 14 && end_d > 21   || start_m < 9 && end_m == 9 && end_d > 21)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 9 && start_d >= 22 && start_d <= 31 ) || (end_m == 9 && end_d >=22 && end_d <= 31 )  || ((start_m < 9 && end_m > 9) || start_m == 9 && end_m   >   9   && start_d  < 31  )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>`;
                        html += `</tr>`;
                    }

                    // Examen
                    if (content.typeContent == 6) {
                        let startD = new Date(content.startDate);
                        let start_m = startD.getMonth() + 1;
                        let start_d = startD.getDate();

                        let endD = new Date(content.endDate);
                        let end_m = endD.getMonth() + 1;
                        let end_d = endD.getDate();
                        html += `
                                <tr>
                                    <td style="${tdStyle} ${examenStyle}">${content.content}</td>
                                    <td style="${tdStyle} ${contentStyle}">${content.startDate}</td>
                                    <td style="${tdStyle} ${contentStyle}">7</td>
                                    <td style="${tdStyle} ${contentStyle}">${content.endDate}</td>
                                    <td style="${tdStyle} ${(start_m == 3 && start_d >= 1  && start_d <= 7  ) || (end_m == 3 && end_d >=1  && end_d <= 7  )  || ((start_m < 3 && end_m > 3) || start_m <  3 && end_m   >=  3   && end_d    > 7 )                                                                                                 ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 3 && start_d >= 8  && start_d <= 14 ) || (end_m == 3 && end_d >=8  && end_d <= 14 )  || ((start_m < 3 && end_m > 3) || start_m == 3 && end_m   >   3   && start_d  < 14  || start_m == 3 && start_d <  7 && end_d > 14   || start_m < 4 && end_m == 3 && end_d > 14 || start_m == 3 && start_d <= 8 && end_d > 14 )     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 3 && start_d >= 15 && start_d <= 21 ) || (end_m == 3 && end_d >=15 && end_d <= 21 )  || ((start_m < 3 && end_m > 3) || start_m == 3 && end_m   >   3   && start_d  < 21  || start_m == 3 && start_d < 14 && end_d > 21   || start_m < 4 && end_m == 3 && end_d > 21)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 3 && start_d >= 22 && start_d <= 31 ) || (end_m == 3 && end_d >=22 && end_d <= 31 )  || ((start_m < 3 && end_m > 3) || start_m == 3 && end_m   >   3   && start_d  < 31  )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 4 && start_d >= 1  && start_d <= 7  ) || (end_m == 4 && end_d >=1  && end_d <= 7  )  || ((start_m < 4 && end_m > 4) || start_m <  4 && end_m   >=  4   && end_d    > 7 )                                                                                                 ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 4 && start_d >= 8  && start_d <= 14 ) || (end_m == 4 && end_d >=8  && end_d <= 14 )  || ((start_m < 4 && end_m > 4) || start_m == 4 && end_m   >   4   && start_d  < 14  || start_m == 4 && start_d <  7 && end_d > 14   || start_m < 4 && end_m == 4 && end_d > 14)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 4 && start_d >= 15 && start_d <= 21 ) || (end_m == 4 && end_d >=15 && end_d <= 21 )  || ((start_m < 4 && end_m > 4) || start_m == 4 && end_m   >   4   && start_d  < 21  || start_m == 4 && start_d < 14 && end_d > 21   || start_m < 4 && end_m == 4 && end_d > 21)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 4 && start_d >= 22 && start_d <= 31 ) || (end_m == 4 && end_d >=22 && end_d <= 31 )  || ((start_m < 4 && end_m > 4) || start_m == 4 && end_m   >   4   && start_d  < 31  )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 5 && start_d >= 1  && start_d <= 7  ) || (end_m == 5 && end_d >=1  && end_d <= 7  )  || ((start_m < 5 && end_m > 5) || start_m <  5 && end_m   >=  5   && end_d    > 7   )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 5 && start_d >= 8  && start_d <= 14 ) || (end_m == 5 && end_d >=8  && end_d <= 14 )  || ((start_m < 5 && end_m > 5) || start_m == 5 && end_m   >   5   && start_d  < 14  || start_m == 5 && start_d <  7 && end_d > 14   || start_m < 5 && end_m == 5 && end_d > 14)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 5 && start_d >= 15 && start_d <= 21 ) || (end_m == 5 && end_d >=15 && end_d <= 21 )  || ((start_m < 5 && end_m > 5) || start_m == 5 && end_m   >   5   && start_d  < 21  || start_m == 5 && start_d < 14 && end_d > 21   || start_m < 5 && end_m == 5 && end_d > 21)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 5 && start_d >= 22 && start_d <= 31 ) || (end_m == 5 && end_d >=22 && end_d <= 31 )  || ((start_m < 5 && end_m > 5) || start_m == 5 && end_m   >   5   && start_d  < 31  )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 6 && start_d >= 1  && start_d <= 7  ) || (end_m == 6 && end_d >=1  && end_d <= 7  )  || ((start_m < 6 && end_m > 6) || start_m <  6 && end_m   >=  6   && end_d    > 7   )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 6 && start_d >= 8  && start_d <= 14 ) || (end_m == 6 && end_d >=8  && end_d <= 14 )  || ((start_m < 6 && end_m > 6) || start_m == 6 && end_m   >   6   && start_d  < 14  || start_m == 6 && start_d <  7 && end_d > 14   || start_m < 6 && end_m == 6 && end_d > 14)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 6 && start_d >= 15 && start_d <= 21 ) || (end_m == 6 && end_d >=15 && end_d <= 21 )  || ((start_m < 6 && end_m > 6) || start_m == 6 && end_m   >   6   && start_d  < 21  || start_m == 6 && start_d < 14 && end_d > 21   || start_m < 6 && end_m == 6 && end_d > 21)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 6 && start_d >= 22 && start_d <= 31 ) || (end_m == 6 && end_d >=22 && end_d <= 31 )  || ((start_m < 6 && end_m > 6) || start_m == 6 && end_m   >   6   && start_d  < 31  )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 7 && start_d >= 1  && start_d <= 7  ) || (end_m == 7 && end_d >=1  && end_d <= 7  )  || ((start_m < 7 && end_m > 7) || start_m <  7 && end_m   >=  7   && end_d    > 7   )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 7 && start_d >= 8  && start_d <= 14 ) || (end_m == 7 && end_d >=8  && end_d <= 14 )  || ((start_m < 7 && end_m > 7) || start_m == 7 && end_m   >   7   && start_d  < 14  || start_m == 7 && start_d <  7 && end_d > 14   || start_m < 7 && end_m == 7 && end_d > 14)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 7 && start_d >= 15 && start_d <= 21 ) || (end_m == 7 && end_d >=15 && end_d <= 21 )  || ((start_m < 7 && end_m > 7) || start_m == 7 && end_m   >   7   && start_d  < 21  || start_m == 7 && start_d < 14 && end_d > 21   || start_m < 7 && end_m == 7 && end_d > 21)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 7 && start_d >= 22 && start_d <= 31 ) || (end_m == 7 && end_d >=22 && end_d <= 31 )  || ((start_m < 7 && end_m > 7) || start_m == 7 && end_m   >   7   && start_d  < 31  )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 8 && start_d >= 1  && start_d <= 7  ) || (end_m == 8 && end_d >=1  && end_d <= 7  )  || ((start_m < 8 && end_m > 8) || start_m <  8 && end_m   >=  8   && end_d    > 7   )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 8 && start_d >= 8  && start_d <= 14 ) || (end_m == 8 && end_d >=8  && end_d <= 14 )  || ((start_m < 8 && end_m > 8) || start_m == 8 && end_m   >   8   && start_d  < 14  || start_m == 8 && start_d <  7 && end_d > 14   || start_m < 8 && end_m == 8 && end_d > 14)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 8 && start_d >= 15 && start_d <= 21 ) || (end_m == 8 && end_d >=15 && end_d <= 21 )  || ((start_m < 8 && end_m > 8) || start_m == 8 && end_m   >   8   && start_d  < 21  || start_m == 8 && start_d < 14 && end_d > 21   || start_m < 8 && end_m == 8 && end_d > 21)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 8 && start_d >= 22 && start_d <= 31 ) || (end_m == 8 && end_d >=22 && end_d <= 31 )  || ((start_m < 8 && end_m > 8) || start_m == 8 && end_m   >   8   && start_d  < 31  )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 9 && start_d >= 1  && start_d <= 7  ) || (end_m == 9 && end_d >=1  && end_d <= 7  )  || ((start_m < 9 && end_m > 9) || start_m <  9 && end_m   >=  9   && end_d    > 7   )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 9 && start_d >= 8  && start_d <= 14 ) || (end_m == 9 && end_d >=8  && end_d <= 14 )  || ((start_m < 9 && end_m > 9) || start_m == 9 && end_m   >   9   && start_d  < 14  || start_m == 9 && start_d <  7 && end_d > 14   || start_m < 9 && end_m == 9 && end_d > 14)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 9 && start_d >= 15 && start_d <= 21 ) || (end_m == 9 && end_d >=15 && end_d <= 21 )  || ((start_m < 9 && end_m > 9) || start_m == 9 && end_m   >   9   && start_d  < 21  || start_m == 9 && start_d < 14 && end_d > 21   || start_m < 9 && end_m == 9 && end_d > 21)     ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${tdStyle} ${(start_m == 9 && start_d >= 22 && start_d <= 31 ) || (end_m == 9 && end_d >=22 && end_d <= 31 )  || ((start_m < 9 && end_m > 9) || start_m == 9 && end_m   >   9   && start_d  < 31  )                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>`;
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