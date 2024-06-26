import useSectionStore from "../hook/useStore";

export default function ButtonCronogramaGenerator() {
    const sections = useSectionStore((state) => state.sections);
    const startDatePeriod = useSectionStore((state) => state.startDate);
    const endDatePeriod = useSectionStore((state) => state.endDate);
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


        const startDPeriod = new Date(startDatePeriod);
        const startMPeriod = startDPeriod.getMonth() + 1;
        
        const endDPeriod = new Date(endDatePeriod);
        const endMPeriod = endDPeriod.getMonth() + 1;
        
        const monthDisplay = function (currentMonth) {

            if(currentMonth < startMPeriod){
                return 'display: none; ';
            }

            if(currentMonth >= startMPeriod && currentMonth > endMPeriod){
                return 'display: none; ';
            }
        return '';           
    };                         



        let html = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Cronograma</title> 
        </head>
    <body>
        <h1></h1>
        <table style="${tableStyle}">     
            <tr>
                <td style="${encabezadoStyle} width: 10%;" rowspan="2">ACTIVIDAD</td>
                <td style="${encabezadoStyle} width: 10%;" rowspan="2">FECHA DE INICIO</td>
                <td style="${encabezadoStyle} width: 5%; " rowspan="2">DÍAS</td>
                <td style="${encabezadoStyle} width: 10%;" rowspan="2">FECHA DE FINALIZACIÓN</td>
                <td style="${encabezadoStyle} width: 8%; ${monthDisplay(1)}" colspan="4">ENERO</td>            
                <td style="${encabezadoStyle} width: 8%; ${monthDisplay(2)}" colspan="4">FEBRERO</td>            
                <td style="${encabezadoStyle} width: 8%; ${monthDisplay(3)}" colspan="4">MARZO</td>            
                <td style="${encabezadoStyle} width: 8%; ${monthDisplay(4)}" colspan="4">ABRIL</td>            
                <td style="${encabezadoStyle} width: 8%; ${monthDisplay(5)}" colspan="4">MAYO</td>            
                <td style="${encabezadoStyle} width: 8%; ${monthDisplay(6)}" colspan="4">JUNIO</td> 
                <td style="${encabezadoStyle} width: 8%; ${monthDisplay(7)}" colspan="4">JULIO</td> 
                <td style="${encabezadoStyle} width: 8%; ${monthDisplay(8)}" colspan="4">AGOSTO</td> 
                <td style="${encabezadoStyle} width: 8%; ${monthDisplay(9)}" colspan="4">SEPTIEMBRE</td>
                <td style="${encabezadoStyle} width: 8%; ${monthDisplay(10)}" colspan="4">OCTUBRE</td>
                <td style="${encabezadoStyle} width: 8%; ${monthDisplay(11)}" colspan="4">NOVIEMBRE</td>
                <td style="${encabezadoStyle} width: 8%; ${monthDisplay(12)}" colspan="4">DICIEMBRE</td>
            </tr>
            <tr>`;

    /*** Genera las columnas marcadas de las semanas del cronograma */        
    const monthHtml = function(start_m, start_d, end_m, end_d){
        let htmlMonth = ``; 
        
        for (let month = 1; month <= 12; month++) { 
            htmlMonth += `  <td style="${tdStyle} ${monthDisplay(month)} ${(start_m == month && start_d >= 1  && start_d <= 7  ) || (end_m == month && end_d >=1  && end_d <= 7  )  || ((start_m < month && end_m > month) || start_m <  month && end_m   >=  month   && end_d    > 7   )                                                                                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>
                            <td style="${tdStyle} ${monthDisplay(month)} ${(start_m == month && start_d >= 8  && start_d <= 14 ) || (end_m == month && end_d >=8  && end_d <= 14 )  || ((start_m < month && end_m > month) || start_m == month && end_m   >   month   && start_d  < 14  || start_m == month && start_d <  7 && end_d > 14   || start_m < month && end_m == month && end_d > 14 || start_m == month && start_d <=  8 && end_d > 14 )     ? marcadoStyle : normalStyle}">&nbsp;</td>
                            <td style="${tdStyle} ${monthDisplay(month)} ${(start_m == month && start_d >= 15 && start_d <= 21 ) || (end_m == month && end_d >=15 && end_d <= 21 )  || ((start_m < month && end_m > month) || start_m == month && end_m   >   month   && start_d  < 21  || start_m == month && start_d < 14 && end_d > 21   || start_m < month && end_m == month && end_d > 21 || start_m == month && start_d <= 15 && end_d > 21 )     ? marcadoStyle : normalStyle}">&nbsp;</td>
                            <td style="${tdStyle} ${monthDisplay(month)} ${(start_m == month && start_d >= 22 && start_d <= 31 ) || (end_m == month && end_d >=22 && end_d <= 31 )  || ((start_m < month && end_m > month) || start_m == month && end_m   >   month   && start_d  < 31  )                                                                                                                                                               ? marcadoStyle : normalStyle}">&nbsp;</td>
                            `;
            
        }
      
        return htmlMonth;

    }
        // Agregar columnas de los días
        let mi = 1;
        for (let i = 1; i <= 48; i++) {                 

            html += `<td style="${monthDisplay(mi)} ${numberStyle}">${i}</td>`;

            if(i % 4 == 0){                
                mi++;
            }
        }




        html += `</tr>`;

        // Agregar filas para cada actividad
        sections.forEach((section, index) => {
            if (section && section.contents && section.contents.length > 0) {
                let startD = new Date(section.contents[0].startDate);
                let start_m = startD.getMonth() + 1;
                let start_d = startD.getDate();

                let endD = new Date(section.contents[0].endDate);
                let end_m = endD.getMonth() + 1;
                let end_d = endD.getDate();

                // Obtener los días de la fila de sección
                const differenceTime = endD.getTime() - startD.getTime();
                const daysBetweenDate = Math.round(differenceTime / (1000 * 3600 * 24)) + 1;

                // Agregar la fila de sección
                html += `
                                <tr>
                                    <td style="${sectionStyle}">${section.title}</td>
                                    <td style="${tdStyle} ${contentStyle}">${section.contents[0].startDate}</td>
                                    <td style="${tdStyle} ${contentStyle}">${daysBetweenDate}</td>
                                    <td style="${tdStyle} ${contentStyle}">${section.contents[0].endDate}</td>                                    
                                    ${monthHtml(start_m, start_d, end_m, end_d)}
                                    `;

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
                        const daysBetweenDate = Math.round(differenceTime / (1000 * 3600 * 24)) + 1;
                
                        html += `
                                <tr>
                                    <td style="${tdStyle} ${videoConfStyle}">${content.content}</td>
                                    <td style="${tdStyle} ${contentStyle}">${content.startDate}</td>
                                    <td style="${tdStyle} ${contentStyle}">${daysBetweenDate}</td>
                                    <td style="${tdStyle} ${contentStyle}">${content.endDate}</td>                                    
                                    ${monthHtml(start_m, start_d, end_m, end_d)}
                                    `;
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
                        const daysBetweenDate = Math.round(differenceTime / (1000 * 3600 * 24)) + 1; 

                        html += `
                                <tr>
                                    <td style="${tdStyle} ${retoStyle}">${content.content}</td>
                                    <td style="${tdStyle} ${contentStyle}">${content.startDate}</td>
                                    <td style="${tdStyle} ${contentStyle}">${daysBetweenDate}</td>
                                    <td style="${tdStyle} ${contentStyle}">${content.endDate}</td>
                                    ${monthHtml(start_m, start_d, end_m, end_d)}
                                    `;
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
                        const daysBetweenDate = Math.round(differenceTime / (1000 * 3600 * 24)) + 1;                   

                        html += `
                                <tr>
                                    <td style="${tdStyle} ${foroStyle}">${content.content}</td>
                                    <td style="${tdStyle} ${contentStyle}">${content.startDate}</td>
                                    <td style="${tdStyle} ${contentStyle}">${daysBetweenDate}</td>
                                    <td style="${tdStyle} ${contentStyle}">${content.endDate}</td>
                                    ${monthHtml(start_m, start_d, end_m, end_d)}
                                    `;
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

                        // Obtener los días de la fila de contenidos
                        const differenceTime = endD.getTime() - startD.getTime();
                        const daysBetweenDate = Math.round(differenceTime / (1000 * 3600 * 24)) + 1; 

                        html += `
                                <tr>
                                    <td style="${tdStyle} ${examenStyle}">${content.content}</td>
                                    <td style="${tdStyle} ${contentStyle}">${content.startDate}</td>
                                    <td style="${tdStyle} ${contentStyle}">${daysBetweenDate}</td>
                                    <td style="${tdStyle} ${contentStyle}">${content.endDate}</td>
                                    ${monthHtml(start_m, start_d, end_m, end_d)}
                                    `;
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