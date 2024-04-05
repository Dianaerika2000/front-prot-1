import useSectionStore from "../hook/useStore";

export default function ButtonCronogramaGenerator() {
    const sections = useSectionStore((state) => state.sections);
    // Función para generar el HTML de la tabla
    const generateHTML = () => {
        const marcadoStyle = 'border: 1px solid #000000; background-color: #e8ab51;';
        const normalStyle = 'border: 1px solid #000000; background-color: white;';

        let html = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
    <body>
        <table style="font-family: Calibri; border: 1px solid #000000; width: 100%; border-spacing: 0px; border-collapse: collapse;">     
            <tr>
                <td style="border: 1px solid #000000; background-color: #002060; width: 10%; color: white; text-align: center; margin: auto; font-weight: bold;" rowspan="2">ACTIVIDAD</td>
                <td style="border: 1px solid #000000; background-color: #002060; width: 10%; color: white; text-align: center; margin: auto; font-weight: bold;" rowspan="2">FECHA DE INICIO</td>
                <td style="border: 1px solid #000000; background-color: #002060; width: 5%; color: white; text-align: center; margin: auto; font-weight: bold;" rowspan="2">DÍAS</td>
                <td style="border: 1px solid #000000; background-color: #002060; width: 10%; color: white; text-align: center; margin: auto; font-weight: bold;" rowspan="2">FECHA DE FINALIZACIÓN</td>
                <td style="border: 1px solid #000000; background-color: #002060; width: 8%; color: white; text-align: center; margin: auto; font-weight: bold;" colspan="4">MES 1</td>            
                <td style="border: 1px solid #000000; background-color: #002060; width: 8%; color: white; text-align: center; margin: auto; font-weight: bold;" colspan="4">MES 2</td>            
                <td style="border: 1px solid #000000; background-color: #002060; width: 8%; color: white; text-align: center; margin: auto; font-weight: bold;" colspan="4">MES 3</td>            
                <td style="border: 1px solid #000000; background-color: #002060; width: 8%; color: white; text-align: center; margin: auto; font-weight: bold;" colspan="4">MES 4</td> 
                <td style="border: 1px solid #000000; background-color: #002060; width: 8%; color: white; text-align: center; margin: auto; font-weight: bold;" colspan="4">MES 5</td> 
                <td style="border: 1px solid #000000; background-color: #002060; width: 8%; color: white; text-align: center; margin: auto; font-weight: bold;" colspan="4">MES 6</td> 
            </tr>
            <tr>`;
        // Agregar columnas de los días
        for (let i = 1; i <= 24; i++) {
            html += `<td style="border: 1px solid #000000; background-color: #002060; width: 200px; color: white; text-align: center; margin: auto; font-weight: bold;">${i}</td>`;
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
                                    <td style="border: 1px solid #000000; background-color: #002060; width: 200px; color: white; text-align: center; margin: auto; font-weight: bold;">${section.title}</td>
                                    <td style="border: 1px solid #000000; background-color: #ffffff; width: 200px; color: black; text-align: center; margin: auto;">${section.contents[0].startDate}</td>
                                    <td style="border: 1px solid #000000; background-color: #ffffff; width: 200px; color: black; text-align: center; margin: auto;">7</td>
                                    <td style="border: 1px solid #000000; background-color: #ffffff; width: 200px; color: black; text-align: center; margin: auto;">${section.contents[0].endDate}</td>
                                    
                                    <td style="${(start_m == 4 && start_d >= 1 && start_d <= 7) || (end_m == 4 && end_d >= 1 && end_d <= 7) || ((start_m < 4 && end_m > 4) || start_m < 4 && end_m >= 4 && end_d > 7) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 4 && start_d >= 8 && start_d <= 14) || (end_m == 4 && end_d >= 8 && end_d <= 14) || ((start_m < 4 && end_m > 4) || start_m == 4 && end_m > 4 && start_d < 14 || start_m == 4 && start_d < 7 && end_d > 14 || start_m < 4 && end_m == 4 && end_d > 14) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 4 && start_d >= 15 && start_d <= 21) || (end_m == 4 && end_d >= 15 && end_d <= 21) || ((start_m < 4 && end_m > 4) || start_m == 4 && end_m > 4 && start_d < 21 || start_m == 4 && start_d < 14 && end_d > 21 || start_m < 4 && end_m == 4 && end_d > 21) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 4 && start_d >= 22 && start_d <= 31) || (end_m == 4 && end_d >= 22 && end_d <= 31) || ((start_m < 4 && end_m > 4) || start_m == 4 && end_m > 4 && start_d < 31) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 5 && start_d >= 1 && start_d <= 7) || (end_m == 5 && end_d >= 1 && end_d <= 7) || ((start_m < 5 && end_m > 5) || start_m < 5 && end_m >= 5 && end_d > 7) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 5 && start_d >= 8 && start_d <= 14) || (end_m == 5 && end_d >= 8 && end_d <= 14) || ((start_m < 5 && end_m > 5) || start_m == 5 && end_m > 5 && start_d < 14 || start_m == 5 && start_d < 7 && end_d > 14 || start_m < 5 && end_m == 5 && end_d > 14) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 5 && start_d >= 15 && start_d <= 21) || (end_m == 5 && end_d >= 15 && end_d <= 21) || ((start_m < 5 && end_m > 5) || start_m == 5 && end_m > 5 && start_d < 21 || start_m == 5 && start_d < 14 && end_d > 21 || start_m < 5 && end_m == 5 && end_d > 21) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 5 && start_d >= 22 && start_d <= 31) || (end_m == 5 && end_d >= 22 && end_d <= 31) || ((start_m < 5 && end_m > 5) || start_m == 5 && end_m > 5 && start_d < 31) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 6 && start_d >= 1 && start_d <= 7) || (end_m == 6 && end_d >= 1 && end_d <= 7) || ((start_m < 6 && end_m > 6) || start_m < 6 && end_m >= 6 && end_d > 7) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 6 && start_d >= 8 && start_d <= 14) || (end_m == 6 && end_d >= 8 && end_d <= 14) || ((start_m < 6 && end_m > 6) || start_m == 6 && end_m > 6 && start_d < 14 || start_m == 6 && start_d < 7 && end_d > 14 || start_m < 6 && end_m == 6 && end_d > 14) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 6 && start_d >= 15 && start_d <= 21) || (end_m == 6 && end_d >= 15 && end_d <= 21) || ((start_m < 6 && end_m > 6) || start_m == 6 && end_m > 6 && start_d < 21 || start_m == 6 && start_d < 14 && end_d > 21 || start_m < 6 && end_m == 6 && end_d > 21) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 6 && start_d >= 22 && start_d <= 31) || (end_m == 6 && end_d >= 22 && end_d <= 31) || ((start_m < 6 && end_m > 6) || start_m == 6 && end_m > 6 && start_d < 31) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 7 && start_d >= 1 && start_d <= 7) || (end_m == 7 && end_d >= 1 && end_d <= 7) || ((start_m < 7 && end_m > 7) || start_m < 7 && end_m >= 7 && end_d > 7) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 7 && start_d >= 8 && start_d <= 14) || (end_m == 7 && end_d >= 8 && end_d <= 14) || ((start_m < 7 && end_m > 7) || start_m == 7 && end_m > 7 && start_d < 14 || start_m == 7 && start_d < 7 && end_d > 14 || start_m < 7 && end_m == 7 && end_d > 14) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 7 && start_d >= 15 && start_d <= 21) || (end_m == 7 && end_d >= 15 && end_d <= 21) || ((start_m < 7 && end_m > 7) || start_m == 7 && end_m > 7 && start_d < 21 || start_m == 7 && start_d < 14 && end_d > 21 || start_m < 7 && end_m == 7 && end_d > 21) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 7 && start_d >= 22 && start_d <= 31) || (end_m == 7 && end_d >= 22 && end_d <= 31) || ((start_m < 7 && end_m > 7) || start_m == 7 && end_m > 7 && start_d < 31) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 8 && start_d >= 1 && start_d <= 7) || (end_m == 8 && end_d >= 1 && end_d <= 7) || ((start_m < 8 && end_m > 8) || start_m < 8 && end_m >= 8 && end_d > 7) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 8 && start_d >= 8 && start_d <= 14) || (end_m == 8 && end_d >= 8 && end_d <= 14) || ((start_m < 8 && end_m > 8) || start_m == 8 && end_m > 8 && start_d < 14 || start_m == 8 && start_d < 7 && end_d > 14 || start_m < 8 && end_m == 8 && end_d > 14) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 8 && start_d >= 15 && start_d <= 21) || (end_m == 8 && end_d >= 15 && end_d <= 21) || ((start_m < 8 && end_m > 8) || start_m == 8 && end_m > 8 && start_d < 21 || start_m == 8 && start_d < 14 && end_d > 21 || start_m < 8 && end_m == 8 && end_d > 21) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 8 && start_d >= 22 && start_d <= 31) || (end_m == 8 && end_d >= 22 && end_d <= 31) || ((start_m < 8 && end_m > 8) || start_m == 8 && end_m > 8 && start_d < 31) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 9 && start_d >= 1 && start_d <= 7) || (end_m == 9 && end_d >= 1 && end_d <= 7) || ((start_m < 9 && end_m > 9) || start_m < 9 && end_m >= 9 && end_d > 7) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 9 && start_d >= 8 && start_d <= 14) || (end_m == 9 && end_d >= 8 && end_d <= 14) || ((start_m < 9 && end_m > 9) || start_m == 9 && end_m > 9 && start_d < 14 || start_m == 9 && start_d < 7 && end_d > 14 || start_m < 9 && end_m == 9 && end_d > 14) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 9 && start_d >= 15 && start_d <= 21) || (end_m == 9 && end_d >= 15 && end_d <= 21) || ((start_m < 9 && end_m > 9) || start_m == 9 && end_m > 9 && start_d < 21 || start_m == 9 && start_d < 14 && end_d > 21 || start_m < 9 && end_m == 9 && end_d > 21) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 9 && start_d >= 22 && start_d <= 31) || (end_m == 9 && end_d >= 22 && end_d <= 31) || ((start_m < 9 && end_m > 9) || start_m == 9 && end_m > 9 && start_d < 31) ? marcadoStyle : normalStyle}">&nbsp;</td>`;

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
                                    <td style="border: 1px solid #000000; background-color: #ffff00; width: 200px; color: black; text-align: center; margin: auto; font-weight: bold;">${content.content}</td>
                                    <td style="border: 1px solid #000000; background-color: #ffffff; width: 200px; color: black; text-align: center; margin: auto;">${content.startDate}</td>
                                    <td style="border: 1px solid #000000; background-color: #ffffff; width: 200px; color: black; text-align: center; margin: auto;">7</td>
                                    <td style="border: 1px solid #000000; background-color: #ffffff; width: 200px; color: black; text-align: center; margin: auto;">${content.endDate}</td>                                    
                                    <td style="${(start_m == 4 && start_d >= 1 && start_d <= 7) || (end_m == 4 && end_d >= 1 && end_d <= 7) || ((start_m < 4 && end_m > 4) || start_m < 4 && end_m >= 4 && end_d > 7) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 4 && start_d >= 8 && start_d <= 14) || (end_m == 4 && end_d >= 8 && end_d <= 14) || ((start_m < 4 && end_m > 4) || start_m == 4 && end_m > 4 && start_d < 14 || start_m == 4 && start_d < 7 && end_d > 14 || start_m < 4 && end_m == 4 && end_d > 14) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 4 && start_d >= 15 && start_d <= 21) || (end_m == 4 && end_d >= 15 && end_d <= 21) || ((start_m < 4 && end_m > 4) || start_m == 4 && end_m > 4 && start_d < 21 || start_m == 4 && start_d < 14 && end_d > 21 || start_m < 4 && end_m == 4 && end_d > 21) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 4 && start_d >= 22 && start_d <= 31) || (end_m == 4 && end_d >= 22 && end_d <= 31) || ((start_m < 4 && end_m > 4) || start_m == 4 && end_m > 4 && start_d < 31) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 5 && start_d >= 1 && start_d <= 7) || (end_m == 5 && end_d >= 1 && end_d <= 7) || ((start_m < 5 && end_m > 5) || start_m < 5 && end_m >= 5 && end_d > 7) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 5 && start_d >= 8 && start_d <= 14) || (end_m == 5 && end_d >= 8 && end_d <= 14) || ((start_m < 5 && end_m > 5) || start_m == 5 && end_m > 5 && start_d < 14 || start_m == 5 && start_d < 7 && end_d > 14 || start_m < 5 && end_m == 5 && end_d > 14) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 5 && start_d >= 15 && start_d <= 21) || (end_m == 5 && end_d >= 15 && end_d <= 21) || ((start_m < 5 && end_m > 5) || start_m == 5 && end_m > 5 && start_d < 21 || start_m == 5 && start_d < 14 && end_d > 21 || start_m < 5 && end_m == 5 && end_d > 21) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 5 && start_d >= 22 && start_d <= 31) || (end_m == 5 && end_d >= 22 && end_d <= 31) || ((start_m < 5 && end_m > 5) || start_m == 5 && end_m > 5 && start_d < 31) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 6 && start_d >= 1 && start_d <= 7) || (end_m == 6 && end_d >= 1 && end_d <= 7) || ((start_m < 6 && end_m > 6) || start_m < 6 && end_m >= 6 && end_d > 7) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 6 && start_d >= 8 && start_d <= 14) || (end_m == 6 && end_d >= 8 && end_d <= 14) || ((start_m < 6 && end_m > 6) || start_m == 6 && end_m > 6 && start_d < 14 || start_m == 6 && start_d < 7 && end_d > 14 || start_m < 6 && end_m == 6 && end_d > 14) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 6 && start_d >= 15 && start_d <= 21) || (end_m == 6 && end_d >= 15 && end_d <= 21) || ((start_m < 6 && end_m > 6) || start_m == 6 && end_m > 6 && start_d < 21 || start_m == 6 && start_d < 14 && end_d > 21 || start_m < 6 && end_m == 6 && end_d > 21) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 6 && start_d >= 22 && start_d <= 31) || (end_m == 6 && end_d >= 22 && end_d <= 31) || ((start_m < 6 && end_m > 6) || start_m == 6 && end_m > 6 && start_d < 31) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 7 && start_d >= 1 && start_d <= 7) || (end_m == 7 && end_d >= 1 && end_d <= 7) || ((start_m < 7 && end_m > 7) || start_m < 7 && end_m >= 7 && end_d > 7) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 7 && start_d >= 8 && start_d <= 14) || (end_m == 7 && end_d >= 8 && end_d <= 14) || ((start_m < 7 && end_m > 7) || start_m == 7 && end_m > 7 && start_d < 14 || start_m == 7 && start_d < 7 && end_d > 14 || start_m < 7 && end_m == 7 && end_d > 14) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 7 && start_d >= 15 && start_d <= 21) || (end_m == 7 && end_d >= 15 && end_d <= 21) || ((start_m < 7 && end_m > 7) || start_m == 7 && end_m > 7 && start_d < 21 || start_m == 7 && start_d < 14 && end_d > 21 || start_m < 7 && end_m == 7 && end_d > 21) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 7 && start_d >= 22 && start_d <= 31) || (end_m == 7 && end_d >= 22 && end_d <= 31) || ((start_m < 7 && end_m > 7) || start_m == 7 && end_m > 7 && start_d < 31) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 8 && start_d >= 1 && start_d <= 7) || (end_m == 8 && end_d >= 1 && end_d <= 7) || ((start_m < 8 && end_m > 8) || start_m < 8 && end_m >= 8 && end_d > 7) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 8 && start_d >= 8 && start_d <= 14) || (end_m == 8 && end_d >= 8 && end_d <= 14) || ((start_m < 8 && end_m > 8) || start_m == 8 && end_m > 8 && start_d < 14 || start_m == 8 && start_d < 7 && end_d > 14 || start_m < 8 && end_m == 8 && end_d > 14) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 8 && start_d >= 15 && start_d <= 21) || (end_m == 8 && end_d >= 15 && end_d <= 21) || ((start_m < 8 && end_m > 8) || start_m == 8 && end_m > 8 && start_d < 21 || start_m == 8 && start_d < 14 && end_d > 21 || start_m < 8 && end_m == 8 && end_d > 21) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 8 && start_d >= 22 && start_d <= 31) || (end_m == 8 && end_d >= 22 && end_d <= 31) || ((start_m < 8 && end_m > 8) || start_m == 8 && end_m > 8 && start_d < 31) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 9 && start_d >= 1 && start_d <= 7) || (end_m == 9 && end_d >= 1 && end_d <= 7) || ((start_m < 9 && end_m > 9) || start_m < 9 && end_m >= 9 && end_d > 7) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 9 && start_d >= 8 && start_d <= 14) || (end_m == 9 && end_d >= 8 && end_d <= 14) || ((start_m < 9 && end_m > 9) || start_m == 9 && end_m > 9 && start_d < 14 || start_m == 9 && start_d < 7 && end_d > 14 || start_m < 9 && end_m == 9 && end_d > 14) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 9 && start_d >= 15 && start_d <= 21) || (end_m == 9 && end_d >= 15 && end_d <= 21) || ((start_m < 9 && end_m > 9) || start_m == 9 && end_m > 9 && start_d < 21 || start_m == 9 && start_d < 14 && end_d > 21 || start_m < 9 && end_m == 9 && end_d > 21) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 9 && start_d >= 22 && start_d <= 31) || (end_m == 9 && end_d >= 22 && end_d <= 31) || ((start_m < 9 && end_m > 9) || start_m == 9 && end_m > 9 && start_d < 31) ? marcadoStyle : normalStyle}">&nbsp;</td>`;
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
                                    <td style="border: 1px solid #000000; background-color: #f8cbad; width: 200px; color: black; text-align: center; margin: auto; font-weight: bold;">${content.content}</td>
                                    <td style="border: 1px solid #000000; background-color: #ffffff; width: 200px; color: black; text-align: center; margin: auto;">${content.startDate}</td>
                                    <td style="border: 1px solid #000000; background-color: #ffffff; width: 200px; color: black; text-align: center; margin: auto;">7</td>
                                    <td style="border: 1px solid #000000; background-color: #ffffff; width: 200px; color: black; text-align: center; margin: auto;">${content.endDate}</td>
                                    <td style="${(start_m == 4 && start_d >= 1 && start_d <= 7) || (end_m == 4 && end_d >= 1 && end_d <= 7) || ((start_m < 4 && end_m > 4) || start_m < 4 && end_m >= 4 && end_d > 7) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 4 && start_d >= 8 && start_d <= 14) || (end_m == 4 && end_d >= 8 && end_d <= 14) || ((start_m < 4 && end_m > 4) || start_m == 4 && end_m > 4 && start_d < 14 || start_m == 4 && start_d < 7 && end_d > 14 || start_m < 4 && end_m == 4 && end_d > 14) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 4 && start_d >= 15 && start_d <= 21) || (end_m == 4 && end_d >= 15 && end_d <= 21) || ((start_m < 4 && end_m > 4) || start_m == 4 && end_m > 4 && start_d < 21 || start_m == 4 && start_d < 14 && end_d > 21 || start_m < 4 && end_m == 4 && end_d > 21) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 4 && start_d >= 22 && start_d <= 31) || (end_m == 4 && end_d >= 22 && end_d <= 31) || ((start_m < 4 && end_m > 4) || start_m == 4 && end_m > 4 && start_d < 31) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 5 && start_d >= 1 && start_d <= 7) || (end_m == 5 && end_d >= 1 && end_d <= 7) || ((start_m < 5 && end_m > 5) || start_m < 5 && end_m >= 5 && end_d > 7) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 5 && start_d >= 8 && start_d <= 14) || (end_m == 5 && end_d >= 8 && end_d <= 14) || ((start_m < 5 && end_m > 5) || start_m == 5 && end_m > 5 && start_d < 14 || start_m == 5 && start_d < 7 && end_d > 14 || start_m < 5 && end_m == 5 && end_d > 14) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 5 && start_d >= 15 && start_d <= 21) || (end_m == 5 && end_d >= 15 && end_d <= 21) || ((start_m < 5 && end_m > 5) || start_m == 5 && end_m > 5 && start_d < 21 || start_m == 5 && start_d < 14 && end_d > 21 || start_m < 5 && end_m == 5 && end_d > 21) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 5 && start_d >= 22 && start_d <= 31) || (end_m == 5 && end_d >= 22 && end_d <= 31) || ((start_m < 5 && end_m > 5) || start_m == 5 && end_m > 5 && start_d < 31) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 6 && start_d >= 1 && start_d <= 7) || (end_m == 6 && end_d >= 1 && end_d <= 7) || ((start_m < 6 && end_m > 6) || start_m < 6 && end_m >= 6 && end_d > 7) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 6 && start_d >= 8 && start_d <= 14) || (end_m == 6 && end_d >= 8 && end_d <= 14) || ((start_m < 6 && end_m > 6) || start_m == 6 && end_m > 6 && start_d < 14 || start_m == 6 && start_d < 7 && end_d > 14 || start_m < 6 && end_m == 6 && end_d > 14) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 6 && start_d >= 15 && start_d <= 21) || (end_m == 6 && end_d >= 15 && end_d <= 21) || ((start_m < 6 && end_m > 6) || start_m == 6 && end_m > 6 && start_d < 21 || start_m == 6 && start_d < 14 && end_d > 21 || start_m < 6 && end_m == 6 && end_d > 21) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 6 && start_d >= 22 && start_d <= 31) || (end_m == 6 && end_d >= 22 && end_d <= 31) || ((start_m < 6 && end_m > 6) || start_m == 6 && end_m > 6 && start_d < 31) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 7 && start_d >= 1 && start_d <= 7) || (end_m == 7 && end_d >= 1 && end_d <= 7) || ((start_m < 7 && end_m > 7) || start_m < 7 && end_m >= 7 && end_d > 7) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 7 && start_d >= 8 && start_d <= 14) || (end_m == 7 && end_d >= 8 && end_d <= 14) || ((start_m < 7 && end_m > 7) || start_m == 7 && end_m > 7 && start_d < 14 || start_m == 7 && start_d < 7 && end_d > 14 || start_m < 7 && end_m == 7 && end_d > 14) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 7 && start_d >= 15 && start_d <= 21) || (end_m == 7 && end_d >= 15 && end_d <= 21) || ((start_m < 7 && end_m > 7) || start_m == 7 && end_m > 7 && start_d < 21 || start_m == 7 && start_d < 14 && end_d > 21 || start_m < 7 && end_m == 7 && end_d > 21) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 7 && start_d >= 22 && start_d <= 31) || (end_m == 7 && end_d >= 22 && end_d <= 31) || ((start_m < 7 && end_m > 7) || start_m == 7 && end_m > 7 && start_d < 31) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 8 && start_d >= 1 && start_d <= 7) || (end_m == 8 && end_d >= 1 && end_d <= 7) || ((start_m < 8 && end_m > 8) || start_m < 8 && end_m >= 8 && end_d > 7) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 8 && start_d >= 8 && start_d <= 14) || (end_m == 8 && end_d >= 8 && end_d <= 14) || ((start_m < 8 && end_m > 8) || start_m == 8 && end_m > 8 && start_d < 14 || start_m == 8 && start_d < 7 && end_d > 14 || start_m < 8 && end_m == 8 && end_d > 14) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 8 && start_d >= 15 && start_d <= 21) || (end_m == 8 && end_d >= 15 && end_d <= 21) || ((start_m < 8 && end_m > 8) || start_m == 8 && end_m > 8 && start_d < 21 || start_m == 8 && start_d < 14 && end_d > 21 || start_m < 8 && end_m == 8 && end_d > 21) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 8 && start_d >= 22 && start_d <= 31) || (end_m == 8 && end_d >= 22 && end_d <= 31) || ((start_m < 8 && end_m > 8) || start_m == 8 && end_m > 8 && start_d < 31) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 9 && start_d >= 1 && start_d <= 7) || (end_m == 9 && end_d >= 1 && end_d <= 7) || ((start_m < 9 && end_m > 9) || start_m < 9 && end_m >= 9 && end_d > 7) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 9 && start_d >= 8 && start_d <= 14) || (end_m == 9 && end_d >= 8 && end_d <= 14) || ((start_m < 9 && end_m > 9) || start_m == 9 && end_m > 9 && start_d < 14 || start_m == 9 && start_d < 7 && end_d > 14 || start_m < 9 && end_m == 9 && end_d > 14) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 9 && start_d >= 15 && start_d <= 21) || (end_m == 9 && end_d >= 15 && end_d <= 21) || ((start_m < 9 && end_m > 9) || start_m == 9 && end_m > 9 && start_d < 21 || start_m == 9 && start_d < 14 && end_d > 21 || start_m < 9 && end_m == 9 && end_d > 21) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 9 && start_d >= 22 && start_d <= 31) || (end_m == 9 && end_d >= 22 && end_d <= 31) || ((start_m < 9 && end_m > 9) || start_m == 9 && end_m > 9 && start_d < 31) ? marcadoStyle : normalStyle}">&nbsp;</td>`;
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
                                    <td style="border: 1px solid #000000; background-color: #F2E500; width: 200px; color: black; text-align: center; margin: auto; font-weight: bold;">${content.content}</td>
                                    <td style="border: 1px solid #000000; background-color: #ffffff; width: 200px; color: black; text-align: center; margin: auto;">${content.startDate}</td>
                                    <td style="border: 1px solid #000000; background-color: #ffffff; width: 200px; color: black; text-align: center; margin: auto;">7</td>
                                    <td style="border: 1px solid #000000; background-color: #ffffff; width: 200px; color: black; text-align: center; margin: auto;">${content.endDate}</td>
                                    <td style="${(start_m == 4 && start_d >= 1 && start_d <= 7) || (end_m == 4 && end_d >= 1 && end_d <= 7) || ((start_m < 4 && end_m > 4) || start_m < 4 && end_m >= 4 && end_d > 7) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 4 && start_d >= 8 && start_d <= 14) || (end_m == 4 && end_d >= 8 && end_d <= 14) || ((start_m < 4 && end_m > 4) || start_m == 4 && end_m > 4 && start_d < 14 || start_m == 4 && start_d < 7 && end_d > 14 || start_m < 4 && end_m == 4 && end_d > 14) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 4 && start_d >= 15 && start_d <= 21) || (end_m == 4 && end_d >= 15 && end_d <= 21) || ((start_m < 4 && end_m > 4) || start_m == 4 && end_m > 4 && start_d < 21 || start_m == 4 && start_d < 14 && end_d > 21 || start_m < 4 && end_m == 4 && end_d > 21) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 4 && start_d >= 22 && start_d <= 31) || (end_m == 4 && end_d >= 22 && end_d <= 31) || ((start_m < 4 && end_m > 4) || start_m == 4 && end_m > 4 && start_d < 31) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 5 && start_d >= 1 && start_d <= 7) || (end_m == 5 && end_d >= 1 && end_d <= 7) || ((start_m < 5 && end_m > 5) || start_m < 5 && end_m >= 5 && end_d > 7) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 5 && start_d >= 8 && start_d <= 14) || (end_m == 5 && end_d >= 8 && end_d <= 14) || ((start_m < 5 && end_m > 5) || start_m == 5 && end_m > 5 && start_d < 14 || start_m == 5 && start_d < 7 && end_d > 14 || start_m < 5 && end_m == 5 && end_d > 14) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 5 && start_d >= 15 && start_d <= 21) || (end_m == 5 && end_d >= 15 && end_d <= 21) || ((start_m < 5 && end_m > 5) || start_m == 5 && end_m > 5 && start_d < 21 || start_m == 5 && start_d < 14 && end_d > 21 || start_m < 5 && end_m == 5 && end_d > 21) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 5 && start_d >= 22 && start_d <= 31) || (end_m == 5 && end_d >= 22 && end_d <= 31) || ((start_m < 5 && end_m > 5) || start_m == 5 && end_m > 5 && start_d < 31) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 6 && start_d >= 1 && start_d <= 7) || (end_m == 6 && end_d >= 1 && end_d <= 7) || ((start_m < 6 && end_m > 6) || start_m < 6 && end_m >= 6 && end_d > 7) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 6 && start_d >= 8 && start_d <= 14) || (end_m == 6 && end_d >= 8 && end_d <= 14) || ((start_m < 6 && end_m > 6) || start_m == 6 && end_m > 6 && start_d < 14 || start_m == 6 && start_d < 7 && end_d > 14 || start_m < 6 && end_m == 6 && end_d > 14) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 6 && start_d >= 15 && start_d <= 21) || (end_m == 6 && end_d >= 15 && end_d <= 21) || ((start_m < 6 && end_m > 6) || start_m == 6 && end_m > 6 && start_d < 21 || start_m == 6 && start_d < 14 && end_d > 21 || start_m < 6 && end_m == 6 && end_d > 21) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 6 && start_d >= 22 && start_d <= 31) || (end_m == 6 && end_d >= 22 && end_d <= 31) || ((start_m < 6 && end_m > 6) || start_m == 6 && end_m > 6 && start_d < 31) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 7 && start_d >= 1 && start_d <= 7) || (end_m == 7 && end_d >= 1 && end_d <= 7) || ((start_m < 7 && end_m > 7) || start_m < 7 && end_m >= 7 && end_d > 7) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 7 && start_d >= 8 && start_d <= 14) || (end_m == 7 && end_d >= 8 && end_d <= 14) || ((start_m < 7 && end_m > 7) || start_m == 7 && end_m > 7 && start_d < 14 || start_m == 7 && start_d < 7 && end_d > 14 || start_m < 7 && end_m == 7 && end_d > 14) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 7 && start_d >= 15 && start_d <= 21) || (end_m == 7 && end_d >= 15 && end_d <= 21) || ((start_m < 7 && end_m > 7) || start_m == 7 && end_m > 7 && start_d < 21 || start_m == 7 && start_d < 14 && end_d > 21 || start_m < 7 && end_m == 7 && end_d > 21) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 7 && start_d >= 22 && start_d <= 31) || (end_m == 7 && end_d >= 22 && end_d <= 31) || ((start_m < 7 && end_m > 7) || start_m == 7 && end_m > 7 && start_d < 31) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 8 && start_d >= 1 && start_d <= 7) || (end_m == 8 && end_d >= 1 && end_d <= 7) || ((start_m < 8 && end_m > 8) || start_m < 8 && end_m >= 8 && end_d > 7) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 8 && start_d >= 8 && start_d <= 14) || (end_m == 8 && end_d >= 8 && end_d <= 14) || ((start_m < 8 && end_m > 8) || start_m == 8 && end_m > 8 && start_d < 14 || start_m == 8 && start_d < 7 && end_d > 14 || start_m < 8 && end_m == 8 && end_d > 14) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 8 && start_d >= 15 && start_d <= 21) || (end_m == 8 && end_d >= 15 && end_d <= 21) || ((start_m < 8 && end_m > 8) || start_m == 8 && end_m > 8 && start_d < 21 || start_m == 8 && start_d < 14 && end_d > 21 || start_m < 8 && end_m == 8 && end_d > 21) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 8 && start_d >= 22 && start_d <= 31) || (end_m == 8 && end_d >= 22 && end_d <= 31) || ((start_m < 8 && end_m > 8) || start_m == 8 && end_m > 8 && start_d < 31) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 9 && start_d >= 1 && start_d <= 7) || (end_m == 9 && end_d >= 1 && end_d <= 7) || ((start_m < 9 && end_m > 9) || start_m < 9 && end_m >= 9 && end_d > 7) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 9 && start_d >= 8 && start_d <= 14) || (end_m == 9 && end_d >= 8 && end_d <= 14) || ((start_m < 9 && end_m > 9) || start_m == 9 && end_m > 9 && start_d < 14 || start_m == 9 && start_d < 7 && end_d > 14 || start_m < 9 && end_m == 9 && end_d > 14) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 9 && start_d >= 15 && start_d <= 21) || (end_m == 9 && end_d >= 15 && end_d <= 21) || ((start_m < 9 && end_m > 9) || start_m == 9 && end_m > 9 && start_d < 21 || start_m == 9 && start_d < 14 && end_d > 21 || start_m < 9 && end_m == 9 && end_d > 21) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 9 && start_d >= 22 && start_d <= 31) || (end_m == 9 && end_d >= 22 && end_d <= 31) || ((start_m < 9 && end_m > 9) || start_m == 9 && end_m > 9 && start_d < 31) ? marcadoStyle : normalStyle}">&nbsp;</td>`;
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
                                    <td style="border: 1px solid #000000; background-color: #FF0000; width: 200px; color: black; text-align: center; margin: auto; font-weight: bold;">${content.content}</td>
                                    <td style="border: 1px solid #000000; background-color: #ffffff; width: 200px; color: black; text-align: center; margin: auto;">${content.startDate}</td>
                                    <td style="border: 1px solid #000000; background-color: #ffffff; width: 200px; color: black; text-align: center; margin: auto;">7</td>
                                    <td style="border: 1px solid #000000; background-color: #ffffff; width: 200px; color: black; text-align: center; margin: auto;">${content.endDate}</td>
                                    <td style="${(start_m == 4 && start_d >= 1 && start_d <= 7) || (end_m == 4 && end_d >= 1 && end_d <= 7) || ((start_m < 4 && end_m > 4) || start_m < 4 && end_m >= 4 && end_d > 7) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 4 && start_d >= 8 && start_d <= 14) || (end_m == 4 && end_d >= 8 && end_d <= 14) || ((start_m < 4 && end_m > 4) || start_m == 4 && end_m > 4 && start_d < 14 || start_m == 4 && start_d < 7 && end_d > 14 || start_m < 4 && end_m == 4 && end_d > 14) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 4 && start_d >= 15 && start_d <= 21) || (end_m == 4 && end_d >= 15 && end_d <= 21) || ((start_m < 4 && end_m > 4) || start_m == 4 && end_m > 4 && start_d < 21 || start_m == 4 && start_d < 14 && end_d > 21 || start_m < 4 && end_m == 4 && end_d > 21) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 4 && start_d >= 22 && start_d <= 31) || (end_m == 4 && end_d >= 22 && end_d <= 31) || ((start_m < 4 && end_m > 4) || start_m == 4 && end_m > 4 && start_d < 31) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 5 && start_d >= 1 && start_d <= 7) || (end_m == 5 && end_d >= 1 && end_d <= 7) || ((start_m < 5 && end_m > 5) || start_m < 5 && end_m >= 5 && end_d > 7) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 5 && start_d >= 8 && start_d <= 14) || (end_m == 5 && end_d >= 8 && end_d <= 14) || ((start_m < 5 && end_m > 5) || start_m == 5 && end_m > 5 && start_d < 14 || start_m == 5 && start_d < 7 && end_d > 14 || start_m < 5 && end_m == 5 && end_d > 14) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 5 && start_d >= 15 && start_d <= 21) || (end_m == 5 && end_d >= 15 && end_d <= 21) || ((start_m < 5 && end_m > 5) || start_m == 5 && end_m > 5 && start_d < 21 || start_m == 5 && start_d < 14 && end_d > 21 || start_m < 5 && end_m == 5 && end_d > 21) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 5 && start_d >= 22 && start_d <= 31) || (end_m == 5 && end_d >= 22 && end_d <= 31) || ((start_m < 5 && end_m > 5) || start_m == 5 && end_m > 5 && start_d < 31) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 6 && start_d >= 1 && start_d <= 7) || (end_m == 6 && end_d >= 1 && end_d <= 7) || ((start_m < 6 && end_m > 6) || start_m < 6 && end_m >= 6 && end_d > 7) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 6 && start_d >= 8 && start_d <= 14) || (end_m == 6 && end_d >= 8 && end_d <= 14) || ((start_m < 6 && end_m > 6) || start_m == 6 && end_m > 6 && start_d < 14 || start_m == 6 && start_d < 7 && end_d > 14 || start_m < 6 && end_m == 6 && end_d > 14) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 6 && start_d >= 15 && start_d <= 21) || (end_m == 6 && end_d >= 15 && end_d <= 21) || ((start_m < 6 && end_m > 6) || start_m == 6 && end_m > 6 && start_d < 21 || start_m == 6 && start_d < 14 && end_d > 21 || start_m < 6 && end_m == 6 && end_d > 21) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 6 && start_d >= 22 && start_d <= 31) || (end_m == 6 && end_d >= 22 && end_d <= 31) || ((start_m < 6 && end_m > 6) || start_m == 6 && end_m > 6 && start_d < 31) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 7 && start_d >= 1 && start_d <= 7) || (end_m == 7 && end_d >= 1 && end_d <= 7) || ((start_m < 7 && end_m > 7) || start_m < 7 && end_m >= 7 && end_d > 7) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 7 && start_d >= 8 && start_d <= 14) || (end_m == 7 && end_d >= 8 && end_d <= 14) || ((start_m < 7 && end_m > 7) || start_m == 7 && end_m > 7 && start_d < 14 || start_m == 7 && start_d < 7 && end_d > 14 || start_m < 7 && end_m == 7 && end_d > 14) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 7 && start_d >= 15 && start_d <= 21) || (end_m == 7 && end_d >= 15 && end_d <= 21) || ((start_m < 7 && end_m > 7) || start_m == 7 && end_m > 7 && start_d < 21 || start_m == 7 && start_d < 14 && end_d > 21 || start_m < 7 && end_m == 7 && end_d > 21) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 7 && start_d >= 22 && start_d <= 31) || (end_m == 7 && end_d >= 22 && end_d <= 31) || ((start_m < 7 && end_m > 7) || start_m == 7 && end_m > 7 && start_d < 31) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 8 && start_d >= 1 && start_d <= 7) || (end_m == 8 && end_d >= 1 && end_d <= 7) || ((start_m < 8 && end_m > 8) || start_m < 8 && end_m >= 8 && end_d > 7) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 8 && start_d >= 8 && start_d <= 14) || (end_m == 8 && end_d >= 8 && end_d <= 14) || ((start_m < 8 && end_m > 8) || start_m == 8 && end_m > 8 && start_d < 14 || start_m == 8 && start_d < 7 && end_d > 14 || start_m < 8 && end_m == 8 && end_d > 14) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 8 && start_d >= 15 && start_d <= 21) || (end_m == 8 && end_d >= 15 && end_d <= 21) || ((start_m < 8 && end_m > 8) || start_m == 8 && end_m > 8 && start_d < 21 || start_m == 8 && start_d < 14 && end_d > 21 || start_m < 8 && end_m == 8 && end_d > 21) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 8 && start_d >= 22 && start_d <= 31) || (end_m == 8 && end_d >= 22 && end_d <= 31) || ((start_m < 8 && end_m > 8) || start_m == 8 && end_m > 8 && start_d < 31) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 9 && start_d >= 1 && start_d <= 7) || (end_m == 9 && end_d >= 1 && end_d <= 7) || ((start_m < 9 && end_m > 9) || start_m < 9 && end_m >= 9 && end_d > 7) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 9 && start_d >= 8 && start_d <= 14) || (end_m == 9 && end_d >= 8 && end_d <= 14) || ((start_m < 9 && end_m > 9) || start_m == 9 && end_m > 9 && start_d < 14 || start_m == 9 && start_d < 7 && end_d > 14 || start_m < 9 && end_m == 9 && end_d > 14) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 9 && start_d >= 15 && start_d <= 21) || (end_m == 9 && end_d >= 15 && end_d <= 21) || ((start_m < 9 && end_m > 9) || start_m == 9 && end_m > 9 && start_d < 21 || start_m == 9 && start_d < 14 && end_d > 21 || start_m < 9 && end_m == 9 && end_d > 21) ? marcadoStyle : normalStyle}">&nbsp;</td>
                                    <td style="${(start_m == 9 && start_d >= 22 && start_d <= 31) || (end_m == 9 && end_d >= 22 && end_d <= 31) || ((start_m < 9 && end_m > 9) || start_m == 9 && end_m > 9 && start_d < 31) ? marcadoStyle : normalStyle}">&nbsp;</td>`;
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