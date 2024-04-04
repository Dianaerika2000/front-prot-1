import { useState } from "react"
import useSectionStore from "../../hook/useStore";
import { Link } from "react-router-dom";
import generateHTML from "./GenerateHtml";

const DescriptivePage = () => {
    const [titleSection, setTitleSection] = useState('');
    const [academicHours, setAcademicHours] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const sections = useSectionStore((state) => state.sections);
    const addSection = useSectionStore((state) => state.addSection);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate that all fields are completed
        if (!titleSection || !academicHours) {
            setError('Todos los campos son obligatorios');
            return;
        }

        // Create a new object for section
        const newSection = { title: titleSection, hours: academicHours };
        // Add new section to store
        addSection(newSection);
        console.log(sections)
        setMessage('La sección fue registrada exitosamente');
        setTimeout(() => {
            setMessage(null);
        }, 2000);

        setAcademicHours('');
        setTitleSection('');
        setError('');
    };

    const handleGenerateHTML = () => {
        const html = generateHTML(sections); 

        // Crear un blob con el HTML generado
        const blob = new Blob([html], { type: 'text/html' });

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
            <div className="bg-white p-4 rounded-md shadow-md">
                <h2 className="text-xl font-bold mb-4">Formulario Carta Descriptiva</h2>
                {message && <p className="text-green-500 mb-2">{message}</p>}
                <form onSubmit={handleSubmit}>
                    <label className="block mb-2">
                        Título de la Sección:
                        <input type="text" placeholder="Unidad 1: Conceptos y características de la P.O.O." value={titleSection} onChange={(e) => setTitleSection(e.target.value)} className="w-full p-2 border rounded-md" />
                    </label>
                    <label className="block mb-2">
                        Horas Académicas:
                        <input type="text" placeholder="24 Hrs" value={academicHours} onChange={(e) => setAcademicHours(e.target.value)} className="w-full p-2 border rounded-md" />
                    </label>
                    {error && <p className="text-red-500 mb-2">{error}</p>}
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Registrar</button>
                </form>
            </div>

            <div className="bg-white p-4 rounded-md shadow-md mt-6">
                <button type="submit" onClick={handleGenerateHTML} className="bg-blue-500 text-white p-2 rounded-md">Descargar Carta Descriptiva</button>
                <table className="w-full border mt-6">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border px-4 py-2">Título de la Sección</th>
                            <th className="border px-4 py-2">Horas Académicas</th>
                            <th className="border px-4 py-2">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sections.map((section, index) => (
                            <tr key={index}>
                                <td className="border px-4 py-2">{section.title}</td>
                                <td className="border px-4 py-2">{section.hours}</td>
                                <td className="border px-4 py-2">
                                    <Link className="bg-blue-500 text-white p-2 rounded-md"
                                        to={`/contenido/${index}`}
                                    >Agregar Contenido</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );

}

export default DescriptivePage;