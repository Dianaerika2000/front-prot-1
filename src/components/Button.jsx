import useSectionStore from "../hook/useStore";

export default function ButtonGenerator() {
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
      const rowspan = section.contents.length;
      html += `<tr> 
        <th colspan="5">${section.title}</th> 
      </tr> 
      <tr> 
        <th>HORAS ACADÉMICAS</th> 
        <th>CONTENIDO</th> 
        <th>ACTIVIDAD</th> 
        <th>FECHA INICIO</th> 
        <th>FECHA DE FINALIZACIÓN</th> 
      </tr>
      <tr>
        <td rowspan="${section.contents.length}">${section.hours}</td>
      `;

      section.contents.forEach((content, contentIndex) => {
        // Agregar las filas de contenido
        html += `
        <td>${content.content}</td> 
        <td>${content.activity}</td> 
        <td rowspan="${section.contents.length}>${content.startDate}</td> 
        <td rowspan="${section.contents.length}>${content.endDate}</td> 
      </tr>
        `
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
    // const blob = new Blob([htmlContent], { type: "text/html;charset=utf-8" });
    // saveAs(blob, "carta_descriptiva.html");
  };

  return (
    <>
      <div className="bg-white p-4 rounded-md shadow-md">
        <h2 className="text-xl font-bold mb-4">Formulario Carta Descriptiva</h2>
        <button
          onClick={handleExportHTML}
          className="bg-blue-500 text-white p-2 rounded-md"
        >
          Exportar a HTML
        </button>
      </div>
    </>
  );
}