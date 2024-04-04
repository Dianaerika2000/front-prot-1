import { useEffect, useState } from "react";
import useSectionStore from "../../hook/useStore";
import { useParams } from "react-router";

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

  const addContentToSection = useSectionStore((state) => state.addContentToSection);
  const sectionFromStore = useSectionStore((state) => state.sections[parseInt(id)]);

  const handleSubmitContent = (e) => {
    e.preventDefault();

    // Validate that all fields are completed
    if (!content || !activity || !startDate || !endDate) {
      setError('Todos los campos son obligatorios');
      return;
    }

    // Add new content to the current section
    addContentToSection(parseInt(id), { content, activity, startDate, endDate, typeContent, linkContent });
    setMessage('El contenido fue registrado exitosamente');
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
  };

  const handleChangeTypeContent = (e) => {
    const selectedTypeContent = e.target.value;
    setTypeContent(selectedTypeContent);
  };

  return (
    <>
      <div className="bg-white p-4 rounded-md shadow-md">
        <h2 className="text-xl font-bold mb-4">Formulario Carta Descriptiva</h2>
        {message && <p className="text-green-500 mb-2">{message}</p>}
        <form onSubmit={handleSubmitContent} className="mt-2">
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
          <div className="flex justify-end mb-4">
            {error && <p className="text-red-500 mb-2">{error}</p>}
            <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Agregar Contenido</button>
          </div>
        </form>
      </div>
      <div className="bg-white p-4 rounded-md shadow-md mt-6">
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Contenido</th>
              <th className="border px-4 py-2">Actividad</th>
              <th className="border px-4 py-2">Fecha de Inicio</th>
              <th className="border px-4 py-2">Fecha de Fin</th>
            </tr>
          </thead>
          <tbody>
            {sectionFromStore.contents.map((content, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{content.content}</td>
                <td className="border px-4 py-2">{content.activity}</td>
                <td className="border px-4 py-2">{content.startDate}</td>
                <td className="border px-4 py-2">{content.endDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
