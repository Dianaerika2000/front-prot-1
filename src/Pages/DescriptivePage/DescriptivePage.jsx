import { useState } from "react"
import useSectionStore from "../../hook/useStore";
import { Link } from "react-router-dom";
import ButtonGenerator from "../../components/Button";
import ButtonCronogramaGenerator from "../../components/ButtonCronograma";

const DescriptivePage = () => {
    const [titleSection, setTitleSection] = useState('');
    const [academicHours, setAcademicHours] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [errorDate, setErrorDate] = useState('');
    const [messageDate, setMessageDate] = useState('');

    const sections = useSectionStore((state) => state.sections);
    const addSection = useSectionStore((state) => state.addSection);

    // Fecha de período
    const addPeriodDate = useSectionStore((state) => state.addPeriodDate);

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
        addPeriodDate({ startDate: startDate, endDate: endDate});
        setMessage('La sección fue registrada exitosamente');
        setTimeout(() => {
            setMessage(null);
        }, 2000);
        console.log(sections)

        setAcademicHours('');
        setTitleSection('');
        setError('');
    };

    const handleSubmitPeriod = (e) => {
        e.preventDefault();

        // Validate that all fields are completed
        if (!startDate || !endDate) {
            setError('Todos los campos son obligatorios');
            return;
        }

        // Create a new object for period
        const newPeriod = { startDate: startDate, endDate: endDate };
        addPeriodDate(newPeriod);
        /* setMessage('Se guardaron las fechas correctamente');
        setTimeout(() => {
            setMessage(null);
        }, 2000); */
        console.log(endDate, startDate)

        setStartDate('');
        setEndDate('');
        setError('');
    };

    return (
        <>
            <div className="flex flex-wrap space-x-10">
                <div className="bg-white p-4 rounded-md shadow-md w-2/3">
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
                <div className="bg-white p-4 rounded-md shadow-md w-1/4">
                    <h2 className="text-xl font-bold mb-4">Fechas de Período Académico</h2>
                    {/* {message && <p className="text-green-500 mb-2">{message}</p>} */}
                    <form onSubmit={handleSubmitPeriod}>
                        <label className="block mb-2">
                            Fecha de Inicio:
                            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="w-full p-2 border rounded-md" />
                        </label>
                        <label className="block mb-2">
                            Fecha de Fin:
                            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="w-full p-2 border rounded-md" />
                        </label>
                        {error && <p className="text-red-500 mb-2">{error}</p>}
                        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Registrar</button>
                    </form>
                </div>
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
                                    >Agregar Contenido</Link>
                                    <Link className="bg-amber-400 text-white p-2 rounded-lg"
                                        to={`/contenido/${index}`}
                                    >Editar</Link>
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