import { useEffect, useState } from "react"
import useSectionStore from "../../hook/useStore";
import { Link } from "react-router-dom";
import ButtonGenerator from "../../components/Button";
import ButtonCronogramaGenerator from "../../components/ButtonCronograma";
import DatePeriodComponent from "../../components/DateForm";

const DescriptivePage = () => {
    let [titleSection, setTitleSection] = useState('');
    let [academicHours, setAcademicHours] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [editingIndex, setEditingIndex] = useState(null);

    const sections = useSectionStore((state) => state.sections);
    const addSection = useSectionStore((state) => state.addSection);
    const deleteSection = useSectionStore((state) => state.deleteSection);

    useEffect(() => {
        if (editingIndex !== null) {
            const editSection = sections[editingIndex];
            setTitleSection(editSection.title);
            setAcademicHours(editSection.hours);
        }
    }, [editingIndex, sections]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate that all fields are completed
        if (!titleSection || !academicHours) {
            setError('Todos los campos son obligatorios');
            return;
        }

        // Create a new object for section
        const newSection = { title: titleSection, hours: academicHours };

        if (editingIndex !== null) {
            // Update section's data in the store
            useSectionStore.getState().updateSection(editingIndex, newSection);
            setEditingIndex(null);
            setMessage('Se actualizaron los datos exitosamente.');
        } else {
            // Add new section to store
            addSection(newSection);
            setMessage('La sección fue registrada exitosamente');
        }

        setTimeout(() => {
            setMessage(null);
        }, 2000);

        setAcademicHours('');
        setTitleSection('');
        setError('');
    };

    const handleEdit = (index) => {
        setEditingIndex(index);
    }

    const handleCancel = () => {
        setEditingIndex(null);
        setTitleSection('');
        setAcademicHours('');
    }

    const handleDelete = (index) => {
        deleteSection(index);
    }

    return (
        <>
            <div className="flex flex-wrap space-x-10">
                <div className="bg-white p-4 rounded-md shadow-md w-2/3 text-left">
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
                        { editingIndex !== null ?
                            <button type="submit" className="bg-amber-400 text-white p-2 rounded-md">Editar</button>
                            :
                            <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Registrar</button>
                        }
                    </form>
                </div>
                <DatePeriodComponent/>
            </div>

            <div className="bg-white p-4 rounded-md shadow-md mt-6">
                <div className="float-right py-5">
                    <ButtonCronogramaGenerator />
                </div>
                <div className="float-right py-5">
                    <ButtonGenerator />
                </div>
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
                                    <Link className="bg-blue-500 text-white p-2 rounded-lg mr-2"
                                        to={`/contenido/${index}`}
                                    >Contenido</Link>
                                    { editingIndex === null ?
                                        <button className="bg-yellow-500 text-white p-2 rounded-lg mr-2" onClick={() => handleEdit(index)} >Editar</button>
                                        : 
                                        editingIndex === index ?
                                            <button className="bg-red-600 text-white p-2 rounded-lg mr-2" onClick={() => handleCancel()} >Cancelar</button>
                                        :
                                            null
                                    }
                                    <button className="bg-red-600 text-white p-2 rounded-lg mr-2" onClick={() => handleDelete(index)} >Eliminar</button>
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