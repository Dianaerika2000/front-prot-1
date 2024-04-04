import useSectionStore from "../hook/useStore";

export default function ButtonCronogramaGenerator() {
  const sections = useSectionStore((state) => state.sections);
  // Función para generar el HTML de la tabla
  const generateHTML = () => {
    let html = `<!DOCTYPE html> 
      <html lang="en"> 
        <head> 
          <meta charset="UTF-8" /> 
          <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
          <title>Generador-HTML</title> 
        </head> 
        <body> 
          <table border="1" cellpadding="5" cellspacing="0">`

    // Iterar sobre cada sección y contenido para agregarlos a la tabla
    sections.forEach((section, index) => {
      const countTypeContent1 = section.contents.filter(item => item.typeContent === "1").length;

      html += `<tr> 
        <th colspan="5" style="background-color: #1948a0; color: white;">${section.title}</th> 
      </tr> 
      <tr> 
        <th>Horas Académicas</th> 
        <th>Contenido</th> 
        <th>Actividad</th> 
        <th>Fecha Inicio</th> 
        <th>Fecha de Finalización</th> 
      </tr>`

      section.contents.forEach((content, contentIndex) => {
        if (content.typeContent == 1 && contentIndex == 0) {
          html += `<tr>
                      <td rowspan="${section.contents.length}" style="text-align: center;">${section.hours}</td>
                      <td><a href="${content.linkContent}" style="text-decoration: none; color: #1948a0; font-weight: 600;">${content.content}</a></td> 
                      <td>${content.activity}</td> 
                      <td rowspan="${countTypeContent1}" style="text-align: center;">${content.startDate}</td> 
                      <td rowspan="${countTypeContent1}" style="text-align: center;">${content.endDate}</td>
                    </tr>`;
        }

        // tipo leccion
        if (content.typeContent == 1 && contentIndex != 0) {
          html += `
          <tr>
            <td><a href="${content.linkContent}" style="text-decoration: none; color: #1948a0; font-weight: 600;">${content.content}</a></td> 
            <td>${content.activity}</td> 
          </tr>`
        }

        //tipo autoevaluacion
        if (content.typeContent == 2) {
          html += `<tr style="background-color:#e8ecf5">
            <td><a href="${content.linkContent}" style="text-decoration: none; color: #1948a0; font-weight: 600;">${content.content}</a></td> 
            <td>${content.activity}</td>
            <td style="text-align: center;">${content.startDate}</td>
            <td style="text-align: center;">${content.endDate}</td>
          </tr>`
        }

        //tipo video conferencia
        if (content.typeContent == 3) {
          html += `<tr style="background-color:#ffff00">
            <td><a href="${content.linkContent}" style="text-decoration: none; color: #1948a0; font-weight: 600;">${content.content}</a></td> 
            <td>${content.activity}</td>
            <td style="text-align: center;">${content.startDate}</td>
            <td style="text-align: center;">${content.endDate}</td>
          </tr>`
        }

        // tipo Reto
        if (content.typeContent == 4) {
          html += `<tr style="background-color:#f8cbad">
            <td style="color: #1948a0; font-weight: 600;">${content.content}</td>
            <td>${content.activity}</td>
            <td style="text-align: center;">${content.startDate}</td>
            <td style="text-align: center;">${content.endDate}</td>
          </tr>`
        }

        // tipo Foro
        if (content.typeContent == 5) {
          html += `<tr style="background-color:#ffff00">
            <td style="color: #1948a0; font-weight: 600;">${content.content}</td> 
            <td>${content.activity}</td>
            <td style="text-align: center;">${content.startDate}</td>
            <td style="text-align: center;">${content.endDate}</td>
          </tr>`
        }
      });
    });
    // Cerrar la tabla y el documento HTML
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
    a.download = 'carta_descriptiva.html';
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