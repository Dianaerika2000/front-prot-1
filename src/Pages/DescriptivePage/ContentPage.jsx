import { useState } from "react"
import useContentStore from "../../hook/useContentStore";

const ContentPage = () => {
    const [content, setContent] = useState('');
    const [activity, setActivity] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const contents = useContentStore((state) => state.contents);
    const addContent = useContentStore((state) => state.addContent);
    const [idContent, setIdContent] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate that all fields are completed
        if (!content || !activity || !startDate || !endDate) {
            setError('Todos los campos son obligatorios');
            return;
        }

        // Create a new object for section
        const newId = idContent + 1;
        setIdContent(newId);
        const newContent = { id: newId, content: content, activity: activity, startDate: startDate, endDate: endDate, sectionId: idSection };
        console.log(newContent)
        // Add new section to store
        addContent(newContent);
        setMessage('La sección fue registrada exitosamente');

        setContent('');
        setActivity('');
        setStartDate('');
        setEndDate('');
        setError('');
    };

    return (
        <>
            <div className="bg-white p-4 rounded-md shadow-md">
                <h2 className="text-xl font-bold mb-4">AQUI NOMBRE DE LA SECCIÓN</h2>
                {message && <p className="text-green-500 mb-2">{message}</p>}
                <form onSubmit={handleSubmit}>
                    <label className="block mb-2">
                        Contenido:
                        <input type="text" placeholder="Lección 2.1: Tipos de datos básicos" value={content} onChange={(e) => setContent(e.target.value)} className="w-full p-2 border rounded-md" />
                    </label>
                    <label className="block mb-2">
                        Actividades:
                        <textarea placeholder="Realice lectura comprensiva visualizando los 2 videos y 3 esquemas. Al finalizar la lección deberá de responder 4 preguntas." value={activity} onChange={(e) => setActivity(e.target.value)} className="w-full p-2 border rounded-md" />
                    </label>
                    <label className="block mb-2">
                        Fecha de Inicio:
                        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="w-full p-2 border rounded-md" />
                    </label>
                    <label className="block mb-2">
                        Fecha de Finalización:
                        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="w-full p-2 border rounded-md" />
                    </label>
                    {error && <p className="text-red-500 mb-2">{error}</p>}
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Registrar</button>
                </form>
            </div>

            {/* <div className="bg-white p-4 rounded-md shadow-md mt-6">
                <table className="w-full border">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border px-4 py-2">Título de la Sección</th>
                            <th className="border px-4 py-2">Horas Académicas</th>
                            <th className="border px-4 py-2">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        { sections.map((section, index) => (
                            <tr key={index}>
                            <td className="border px-4 py-2">{section.title}</td>
                            <td className="border px-4 py-2">{section.hours}</td>
                            <td className="border px-4 py-2">
                                <button className="bg-blue-500 text-white p-2 rounded-md" onClick={handleSubmit}>Agregar Contenido</button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div> */}
        </>
    );

}

export default ContentPage;