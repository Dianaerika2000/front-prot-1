import useSectionStore from "../hook/useStore";
import { getMonthCount, getWeekCount } from "./calculateDates";

export default function ButtonCronogramaGenerator() {
    const sections = useSectionStore((state) => state.sections);

    // * Obtener las fechas del período académico
    const periodStartDate = useSectionStore((state) => state.startDate);
    const periodEndDate = useSectionStore((state) => state.endDate);

    // * Obtener la cantidad de meses y semanas que tiene el período académico
    const amountMonth = getMonthCount(new Date(periodStartDate), new Date(periodEndDate));
    const amountWeek = getWeekCount(new Date(periodStartDate), new Date(periodEndDate));
    const monthPeriodStart = new Date(periodStartDate).getMonth() + 1;
    const monthPeriodEnd = new Date(periodEndDate).getMonth() + 1;
    console.log(amountWeek)

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
                <td style="border: 1px solid #000000; background-color: #002060; width: 10%; color: white; text-align: center; margin: auto; font-weight: bold;" rowspan="2">FECHA DE FINALIZACIÓN</td>`;

        // Agregar filas de meses
        for (let i = 1; i <= amountMonth; i++) {
            html += `<td style="border: 1px solid #000000; background-color: #002060; width: 8%; color: white; text-align: center; margin: auto; font-weight: bold;" colspan="4">MES ${i}</td>`;
        }
        html += `</tr> <tr>`;

        // Agregar columnas de semanas
        for (let i = 1; i <= amountWeek + 2; i++) {
            html += `<td style="border: 1px solid #000000; background-color: #002060; width: 200px; color: white; text-align: center; margin: auto; font-weight: bold;">${i}</td>`;
        }
        html += `</tr>`;

        // Agregar filas para cada actividad
        sections.forEach((section, index) => {
            if (section && section.contents && section.contents.length > 0) {
                let startD = new Date(section.contents[0].startDate);
                let start_m = startD.getMonth() + 1;
                let start_d = startD.getDate() + 1;
                console.log('var startm',start_m, 'var startd', start_d)

                let endD = new Date(section.contents[0].endDate);
                let end_m = endD.getMonth() + 1;
                let end_d = endD.getDate() + 1;
                console.log('var end_m',end_m, 'var end_d', end_d)

                // Obtener los días de la fila de sección
                const differenceTime = endD.getTime() - startD.getTime();
                const daysBetweenDate = Math.round(differenceTime / (1000 * 3600 * 24));

                // Agregar la fila de sección
                html += `
                    <tr>
                        <td style="border: 1px solid #000000; background-color: #002060; width: 200px; color: white; text-align: center; margin: auto; font-weight: bold;">${section.title}</td>
                        <td style="border: 1px solid #000000; background-color: #ffffff; width: 200px; color: black; text-align: center; margin: auto;">${section.contents[0].startDate}</td>
                        <td style="border: 1px solid #000000; background-color: #ffffff; width: 200px; color: black; text-align: center; margin: auto;">${daysBetweenDate}</td>
                        <td style="border: 1px solid #000000; background-color: #ffffff; width: 200px; color: black; text-align: center; margin: auto;">${section.contents[0].endDate}</td>`;

                // * Agregar las columnas de meses con el monthPeriodStart y monthPeriodEnd
                for (let i = monthPeriodStart; i <= monthPeriodEnd; i++) {
                    console.log('ciclo mes', i)
                    console.log('mes inicio', i, 'mes final', monthPeriodEnd)
                    console.log('start-d', start_d, 'start-m', start_m,'endm', end_m,'endd', end_d)
                    // Iterar sobre las semanas, cada mes tiene 4 semanas
                    for (let j = 1; j <= 4; j++) {
                        console.log('ciclo semana', j)
                        switch (j) {
                            case 1:
                                console.log('semana 1')
                                html += `<td style="${(start_m == i && start_d >= 1 && start_d <= 7) || (end_m == i && end_d >= 1 && end_d <= 7) || ((start_m < i && end_m > monthPeriodEnd) || start_m < i && end_m >= monthPeriodEnd && end_d > 7) ? marcadoStyle : normalStyle}">&nbsp;</td>`;
                                break;
                            case 2:
                                console.log('semana 2')
                                html += `<td style="${(start_m == i && start_d >= 8 && start_d <= 14) || (end_m == monthPeriodEnd && end_d >= 1 && end_d <= 7) || ((start_m < i && end_m > monthPeriodEnd) || start_m < i && end_m >= monthPeriodEnd && end_d > 7) ? marcadoStyle : normalStyle}">&nbsp;</td>`;
                                break;
                            case 3:
                                console.log('semana 3')
                                html += `<td style="${(start_m == i && start_d >= 15 && start_d <= 21) || (end_m == monthPeriodEnd && end_d >= 1 && end_d <= 7) || ((start_m < i && end_m > monthPeriodEnd) || start_m < i && end_m >= monthPeriodEnd && end_d > 7) ? marcadoStyle : normalStyle}">&nbsp;</td>`;
                                break;
                            case 4:
                                console.log('semana 4')
                                html += `<td style="${(start_m == i && start_d >= 22 && start_d <= 31) || (end_m == monthPeriodEnd && end_d >= 1 && end_d <= 7) || ((start_m < i && end_m > monthPeriodEnd) || start_m < i && end_m >= monthPeriodEnd && end_d > 7) ? marcadoStyle : normalStyle}">&nbsp;</td>`;
                                break;
                            default:
                                console.log('semana 1 default')
                                html += `<td style="${(start_m == i && start_d >= 1 && start_d <= 7) || (end_m == monthPeriodEnd && end_d >= 1 && end_d <= 7) || ((start_m < i && end_m > monthPeriodEnd) || start_m < i && end_m >= monthPeriodEnd && end_d > 7) ? marcadoStyle : normalStyle}">&nbsp;</td>`;
                        }
                    }
                }

                {/* <td style="${(start_m == 4 && start_d >= 1 && start_d <= 7) || (end_m == 4 && end_d >= 1 && end_d <= 7) || ((start_m < 4 && end_m > 4) || start_m < 4 && end_m >= 4 && end_d > 7) ? marcadoStyle : normalStyle}">&nbsp;</td>
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
                                    <td style="${(start_m == 9 && start_d >= 22 && start_d <= 31) || (end_m == 9 && end_d >= 22 && end_d <= 31) || ((start_m < 9 && end_m > 9) || start_m == 9 && end_m > 9 && start_d < 31) ? marcadoStyle : normalStyle}">&nbsp;</td>`; */}

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

                        // Obtener los días de la fila de contenidos
                        const differenceTime = endD.getTime() - startD.getTime();
                        const daysBetweenDate = Math.round(differenceTime / (1000 * 3600 * 24));

                        html += `
                                <tr>
                                    <td style="border: 1px solid #000000; background-color: #ffff00; width: 200px; color: black; text-align: center; margin: auto; font-weight: bold;">${content.content}</td>
                                    <td style="border: 1px solid #000000; background-color: #ffffff; width: 200px; color: black; text-align: center; margin: auto;">${content.startDate}</td>
                                    <td style="border: 1px solid #000000; background-color: #ffffff; width: 200px; color: black; text-align: center; margin: auto;">${daysBetweenDate}</td>
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

                        // Obtener los días de la fila de contenidos
                        const differenceTime = endD.getTime() - startD.getTime();
                        const daysBetweenDate = Math.round(differenceTime / (1000 * 3600 * 24));

                        html += `
                                <tr>
                                    <td style="border: 1px solid #000000; background-color: #f8cbad; width: 200px; color: black; text-align: center; margin: auto; font-weight: bold;">${content.content}</td>
                                    <td style="border: 1px solid #000000; background-color: #ffffff; width: 200px; color: black; text-align: center; margin: auto;">${content.startDate}</td>
                                    <td style="border: 1px solid #000000; background-color: #ffffff; width: 200px; color: black; text-align: center; margin: auto;">${daysBetweenDate}</td>
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

                        // Obtener los días de la fila de contenidos
                        const differenceTime = endD.getTime() - startD.getTime();
                        const daysBetweenDate = Math.round(differenceTime / (1000 * 3600 * 24));

                        html += `
                                <tr>
                                    <td style="border: 1px solid #000000; background-color: #F2E500; width: 200px; color: black; text-align: center; margin: auto; font-weight: bold;">${content.content}</td>
                                    <td style="border: 1px solid #000000; background-color: #ffffff; width: 200px; color: black; text-align: center; margin: auto;">${content.startDate}</td>
                                    <td style="border: 1px solid #000000; background-color: #ffffff; width: 200px; color: black; text-align: center; margin: auto;">${daysBetweenDate}</td>
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

                        // Obtener los días de la fila de contenidos
                        const differenceTime = endD.getTime() - startD.getTime();
                        const daysBetweenDate = Math.round(differenceTime / (1000 * 3600 * 24));

                        html += `
                                <tr>
                                    <td style="border: 1px solid #000000; background-color: #FF0000; width: 200px; color: black; text-align: center; margin: auto; font-weight: bold;">${content.content}</td>
                                    <td style="border: 1px solid #000000; background-color: #ffffff; width: 200px; color: black; text-align: center; margin: auto;">${content.startDate}</td>
                                    <td style="border: 1px solid #000000; background-color: #ffffff; width: 200px; color: black; text-align: center; margin: auto;">${daysBetweenDate}</td>
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