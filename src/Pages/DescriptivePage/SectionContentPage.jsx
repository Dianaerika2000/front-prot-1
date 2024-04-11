import { useState } from "react";
import useSectionStore from "../../hook/useStore";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function SectionContentPage() {
  const { id } = useParams();

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [content, setContent] = useState('');
  const [activity, setActivity] = useState('');
  const [typeContent, setTypeContent] = useState('1');
  const [linkContent, setLinkContent] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [contentToEdit, setContentToEdit] = useState(null);
  const [isPartialContent, setIsPartialContent] = useState(false);
  const [dateTest, setDateTest] = useState('');

  const addContentToSection = useSectionStore((state) => state.addContentToSection);
  const updateContentInSection = useSectionStore((state) => state.updateContentInSection);
  const deleteContentInSection = useSectionStore((state) => state.deleteContentInSection);
  const sectionFromStore = useSectionStore((state) => state.sections[parseInt(id)]);

  const handleSubmitContent = (e) => {
    e.preventDefault();

    if (typeContent !== '6') {
      // Validate that all fields are completed
      if (!content || !activity || !startDate || !endDate) {
        setError('Todos los campos son obligatorios');
        return;
      }

      if (contentToEdit) {
        updateContentInSection(parseInt(id), contentToEdit.index, { content, activity, startDate, endDate, typeContent, linkContent });
        setMessage('El contenido fue actualizado exitosamente');
      } else {
        addContentToSection(parseInt(id), { content, activity, startDate, endDate, typeContent, linkContent });
        setMessage('El contenido fue registrado exitosamente');
      }
    } else {
      // Validate that all fields are completed
      if (!content || !activity || !dateTest) {
        setError('Todos los campos son obligatorios');
        return;
      }

      const datePart = dateTest.split(" - ")[0];
      const [day, month, year] = datePart.split("/");
      const dateObject = new Date(`${year}-${month}-${day}`);
      const startDate = dateObject.toISOString().split("T")[0];
      const endDate = startDate;

      if (contentToEdit) {
        updateContentInSection(parseInt(id), contentToEdit.index, { content, activity, typeContent, dateTest, startDate, endDate });
        setMessage('El contenido fue actualizado exitosamente');
      } else {
        addContentToSection(parseInt(id), { content, activity, typeContent, dateTest, startDate, endDate });
        setMessage('El contenido fue registrado exitosamente');
      }
    }

    setTimeout(() => {
      setMessage(null);
    }, 2000);

    // Clear fields and error message after submission
    setContent('');
    setActivity('');
    setStartDate('');
    setEndDate('');
    setError('');
    setLinkContent('');
    setContentToEdit(null);
    setTypeContent('1');
    setDateTest('');

    if (isPartialContent) {
      setIsPartialContent(false);
    }
  };

  const handleChangeTypeContent = (e) => {
    const selectedTypeContent = e.target.value;
    setTypeContent(selectedTypeContent);
    setIsPartialContent(selectedTypeContent === '6');
  };

  // Función para cargar los datos del contenido a editar en el formulario
  const handleEditContent = (index) => {
    const contentData = sectionFromStore.contents[index];
    console.log('contentData', contentData);
    setContentToEdit({ ...contentData, index });
    setStartDate(contentData.startDate);
    setEndDate(contentData.endDate);
    setContent(contentData.content);
    setActivity(contentData.activity);
    setTypeContent(contentData.typeContent);
    setLinkContent(contentData.linkContent);
    setDateTest(contentData.dateTest);
    setIsPartialContent(contentData.typeContent === '6');
  };

  const handleDeleteContent = (index) => {
    deleteContentInSection(parseInt(id), index);
  };

  const handleCancel = () => {
    setContent('');
    setActivity('');
    setStartDate('');
    setEndDate('');
    setTypeContent('1');
    setLinkContent('');
    setError('');
    setContentToEdit(null);

    if (isPartialContent) {
      setIsPartialContent(false);
    }
  };

  return (
    <>
      <div className="bg-white p-4 rounded-md shadow-md">
        <div className="flex justify-start py-5">
          <Link to="/" className="bg-blue-500 text-white py-2 px-4 rounded-md inline-block mb-4 text-left"><i className="bi bi-arrow-left-square-fill"></i> Listado de Secciones</Link>
        </div>
        <h2 className="text-xl font-bold mb-4">Sección - {sectionFromStore.title}</h2>
        {message && <p className="text-green-500 mb-2">{message}</p>}
        <form onSubmit={handleSubmitContent} className="mt-2">
          {isPartialContent ? (
            <>
              <div className="flex flex-wrap -mx-2">
                {/* Renderiza aquí los campos específicos para el tipo de contenido Parcial */}
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <label className="block mb-2 text-start">
                    Contenido:
                    <input type="text" value={content} onChange={(e) => setContent(e.target.value)} className="w-full p-2 border rounded-md" placeholder="1er Parcial." />
                  </label>
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <label className="block mb-2 text-start">
                    Fecha:
                    <input type="text" value={dateTest} onChange={(e) => setDateTest(e.target.value)} className="w-full p-2 border rounded-md" placeholder="DD/MM/AAAA - HH:MM AM/PM" />
                  </label>
                </div>
                <div className="w-full px-2 mb-4">
                  <label className="block mb-2 text-start">
                    Actividad:
                    <input type="text" placeholder="Una vez terminadas las unidades I y II podrá ingresar al primer parcial, caso contrario el parcial no estará habilitado." value={activity} onChange={(e) => setActivity(e.target.value)} className="w-full p-2 border rounded-md" />
                  </label>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-wrap -mx-2">
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <label className="block mb-2">
                    Fecha de Inicio:
                    <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="w-full p-2 border rounded-md" />
                  </label>
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <label className="block mb-2">
                    Fecha de Fin:
                    <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="w-full p-2 border rounded-md" />
                  </label>
                </div>
              </div>
              <div className="flex flex-wrap -mx-2">
                <div className="w-full px-2 mb-4">
                  <label className="block mb-2">
                    Contenido:
                    <input type="text" placeholder="Lección 1.1: Conceptos de la P.O.O." value={content} onChange={(e) => setContent(e.target.value)} className="w-full p-2 border rounded-md" />
                  </label>
                </div>
                <div className="w-full px-2 mb-4">
                  <label className="block mb-2">
                    Actividad:
                    <input type="text" placeholder="Realice lectura comprensiva visualizando los 2 videos, 4 esquemas, 2 imagen y 1 tabla. Al finalizar la lección deberá de responder 4 preguntas." value={activity} onChange={(e) => setActivity(e.target.value)} className="w-full p-2 border rounded-md" />
                  </label>
                </div>
              </div>
              <div className="flex flex-wrap -mx-2">
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <label className="block mb-2">
                    Link del Contenido:
                    <input type="text" placeholder="https://virtual.uagrm.edu.bo/aula/mod/lesson/view.php?id=XXXX" value={linkContent} onChange={(e) => setLinkContent(e.target.value)} className="w-full p-2 border rounded-md" />
                  </label>
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <label className="block mb-2">
                    Tipo de Contenido:
                    <select value={typeContent} onChange={handleChangeTypeContent} className="w-full p-2 border rounded-md">
                      <option value="1">Lección</option>
                      <option value="2">Autoevaluación</option>
                      <option value="3">Videoconferencia</option>
                      <option value="4">Reto</option>
                      <option value="5">Foro</option>
                      <option value="6">Parcial</option>
                    </select>
                  </label>
                </div>
              </div>
            </>
          )}
          <div className="flex justify-end mb-4">
            {error && <p className="text-red-500 mb-2">{error}</p>}

            {contentToEdit && (
              <button type="button" className="bg-gray-500 text-white p-2 rounded-md mr-2" onClick={() => handleCancel()}>
                Cancelar
              </button>
            )}
            <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
              {contentToEdit ? 'Editar Contenido' : 'Agregar Contenido'}
            </button>
          </div>
        </form>
      </div>
      {sectionFromStore.contents?.filter(content => content.typeContent === '6').length > 0 ?
        (
          <div className="bg-white p-4 rounded-md shadow-md mt-6">
            <h3 className="text-lg font-semibold mb-4">Parciales</h3>
            <table className="w-full border text-start">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border px-4 py-2">Contenido</th>
                  <th className="border px-4 py-2">Actividad</th>
                  <th className="border px-4 py-2">Fecha - Hora</th>
                  <th className="border px-4 py-2">Opciones</th>
                </tr>
              </thead>
              <tbody>
                {sectionFromStore.contents?.filter(content => content.typeContent === '6').map((content, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{content.content}</td>
                    <td className="border px-4 py-2">{content.activity}</td>
                    <td className="border px-4 py-2">{content.dateTest}</td>
                    <td className="border px-4 py-2">
                      <div className="flex items-center justify-center">
                        <button
                          className="bg-yellow-500 text-dark p-2 rounded-lg mr-2 text-white"
                          onClick={() => handleEditContent(index)}
                        >
                          <i className="bi bi-pencil-square"></i>
                        </button>
                        <button
                          className="bg-red-500 text-white p-2 rounded-lg"
                          onClick={() => handleDeleteContent(index)}
                        >
                          <i className="bi bi-trash3-fill"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>)
        :
        (null)
      }
      {/* Tabla para contenidos tipo: lecciones, videoconferencias, foros, retos, Autoevaluación */}
      <div className="bg-white p-4 rounded-md shadow-md mt-6">
        <h3 className="text-lg font-semibold mb-4">Contenidos</h3>
        <table className="w-full border text-start">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Contenido</th>
              <th className="border px-4 py-2">Actividad</th>
              <th className="border px-4 py-2" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '150px' }}>Fecha de Inicio</th>
              <th className="border px-4 py-2" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '150px' }}>Fecha de Fin</th>
              <th className="border px-4 py-2">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {sectionFromStore.contents?.filter(content => content.typeContent !== '6').map((content, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{content.content}</td>
                <td className="border px-4 py-2">{content.activity}</td>
                <td className="border px-4 py-2">{content.startDate}</td>
                <td className="border px-4 py-2">{content.endDate}</td>
                <td className="border px-4 py-2">
                  <div className="flex items-center justify-center">
                    <button
                      className="bg-yellow-500 text-dark p-2 rounded-lg mr-2 text-white"
                      onClick={() => handleEditContent(index)}
                    >
                      <i className="bi bi-pencil-square"></i>
                    </button>
                    <button
                      className="bg-red-500 text-white p-2 rounded-lg"
                      onClick={() => handleDeleteContent(index)}
                    >
                      <i className="bi bi-trash3-fill"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
