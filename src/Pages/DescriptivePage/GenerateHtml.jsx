const generateHTML = (data) => {
    let html = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Generador-HTML</title>
    </head>
    <body>
      <table border="1" cellpadding="5" cellspacing="0">`;

    // Obtener todos los títulos de las secciones
    const sectionTitles = data.map((unit) => unit.title);

    // Iterar sobre los títulos y construir las filas de título
    sectionTitles.forEach((title) => {
        html += `
        <tr>
          <th colspan="5">${title}</th>
        </tr>
        <tr>
          <th>HORAS ACADÉMICAS</th>
          <th>CONTENIDO</th>
          <th>ACTIVIDAD</th>
          <th>FECHA INICIO</th>
          <th>FECHA DE FINALIZACIÓN</th>
        </tr>`;

        // Iterar sobre los datos y construir las filas del cuerpo de la tabla
        data.forEach((unit) => {
            if (unit.title === title) {
                unit.contents.forEach((content, index) => {
                    // Añadir fila de contenido
                    html += `
              <tr>
                <td>${unit.hours}</td>
                <td>${content.content}</td>
                <td>${content.activity}</td>
                <td>${content.startDate}</td>
                <td>${content.endDate}</td>
              </tr>`;
                });
            }
        });
    });

    // Cerrar la tabla y el cuerpo del documento HTML
    html += `
      </table>
    </body>
  </html>`;

    return html;
};

export default generateHTML;